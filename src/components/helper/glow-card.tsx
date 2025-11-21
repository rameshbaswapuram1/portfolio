import { useEffect, type ReactNode } from "react";
import { Card } from "@mui/material";

interface GlowCardProps {
  children: ReactNode;
  identifier: string | number;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector<HTMLElement>(
      `.glow-container-${identifier}`
    );
    const CARDS = document.querySelectorAll<HTMLElement>(
      `.glow-card-${identifier}`
    );

    if (!CONTAINER || CARDS.length === 0) return;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: PointerEvent) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty("--active", "1");
        } else {
          CARD.style.setProperty("--active", CONFIG.opacity.toString());
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event.y - CARD_CENTER[1], event.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty("--start", `${ANGLE + 90}`);
      }
    };

    const RESTYLE = () => {
      CONTAINER.style.setProperty("--gap", CONFIG.gap.toString());
      CONTAINER.style.setProperty("--blur", CONFIG.blur.toString());
      CONTAINER.style.setProperty("--spread", CONFIG.spread.toString());
      CONTAINER.style.setProperty(
        "--direction",
        CONFIG.vertical ? "column" : "row"
      );
    };

    document.body.addEventListener("pointermove", UPDATE);
    RESTYLE();

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <Card className={`glow-card glow-card-${identifier}`} sx={cardStyles}>
        <div className="glows" />
        {children}
      </Card>
    </div>
  );
};

export default GlowCard;
const cardStyles = {
  position: "relative",
  borderRadius: "12px",
  backgroundColor: "#101123",
  border: "1px solid #2a2e5a",
  color: "gray.200",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": { borderColor: "transparent" },
};
