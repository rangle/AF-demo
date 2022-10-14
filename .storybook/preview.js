import "../styles/global.scss";
// import "../styles/brands/abercrombie.scss";
import "../styles/brands/hollister.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
