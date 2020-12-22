import { createGlobalStyle } from "styled-components";
import { styleReset } from "./reset";
import { Colors, Fonts } from "./variables";

export const GlobalStyle = createGlobalStyle`
${styleReset}

body {
  font-family: ${Fonts.primary}
}

a {
  color: ${Colors.primary};
}

hr {
  border: none;
  border-top: 1px solid ${Colors.border};
  margin: 32px 0;
}

h1, h2, h3, h4 {
  font-weight: 500;
  color: ${Colors.grayDark}
}
`;
