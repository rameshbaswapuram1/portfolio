import bootstrap from "../assets/svg/skills/bootstrap.svg";
import canva from "../assets/svg/skills/canva.svg";
import css from "../assets/svg/skills/css.svg";
import figma from "../assets/svg/skills/figma.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import git from "../assets/svg/skills/git.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import html from "../assets/svg/skills/html.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import markdown from "../assets/svg/skills/markdown.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import microsoftoffice from "../assets/svg/skills/microsoftoffice.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import react from "../assets/svg/skills/react.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  const skillIconMap: Record<string, string> = {
    html,
    css,
    javascript,
    "next js": nextJS,
    react,
    typescript,
    bootstrap,
    tailwind,
    vitejs,
    firebase,
    git,
    graphql,
    materialui,
    figma,
    markdown,
    "microsoft office": microsoftoffice,
    canva,
  };
  return skillIconMap[skillID] || undefined;
};
