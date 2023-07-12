import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }
  /* *:focus {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
*:active {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
} */


  .paint-row-enter {
  opacity: 0;
  transform: scale(0.9) translateX(300px);
}
.paint-row-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms, transform 300ms;
}

.paint-row-exit-active {
  opacity: 0;
  transform: scale(0.9) translateX(300px);
  transition: opacity 300ms, transform 300ms;
}
`;
