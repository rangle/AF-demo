import facepaint from "facepaint";

export const theme = {
  colors: {
    brand: {
      primary: "#292a33",
    },
    white: {
      medium: "#fcfcfa",
    },
  },
  mediaQuery: {
    tablet: "768px",
    desktop: "1280px",
    xlDesktop: "2560px",
  },
  fontSize: {
    small: ["12px", "14px", "18px"],
    medium: ["14px", "16px", "20px"],
    large: ["25px", "30px", "35px"],
  },
  fontFamily: {
    primary: "sans-serif",
    secondary: "monospace",
  },
};

export const mq = facepaint(
  Object.values(theme.mediaQuery).map((mq) => `@media(min-width: ${mq})`)
);
