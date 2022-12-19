import { ThemeProps } from "styled-components";

export const theme = {
  colors: {
    white: "#ffff",
    dark: "pink",
    dark2: "#333",
    dark3: "#bac4da",
    blue: "#3174ee",
    opacity1: "#f0f2f480",
    blackOpacity: "#333333cc",
    blueOpacity: '#3174ee',
  },
  size: {
    s18: 18,
    s14: 14,
    s13: 13,
  },
};

export type ThemeType = typeof theme;
export type CThemeProps = ThemeProps<ThemeType>;
