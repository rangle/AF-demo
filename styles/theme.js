import facepaint from "facepaint";
import tokens from "./tokens.json";

export const mq = facepaint(
  Object.values(tokens.global.mediaQuery).map(
    (mq) => `@media(min-width: ${mq.value})`
  )
);
