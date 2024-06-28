import { Container, Text, colorsTuple, createTheme, rem } from "@mantine/core";
import { Rubik, Chakra_Petch } from "next/font/google";
import localFont from "next/font/local";

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const archivoBlack = Chakra_Petch({
  weight: ["400"],
  subsets: ["latin"],
});

const arrayFont = localFont({
  src: [
    {
      path: "../fonts/Array-Wide.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Array-SemiboldWide.otf",
      weight: "500",
      style: "bolder",
    },
    {
      path: "../fonts/Array-BoldWide.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const theme = createTheme({
  components: {
    Container: Container.extend({
      defaultProps: {
        size: "lg",
      },
    }),
    Text: Text.extend({
      defaultProps: {
        size: "sm",
      },
    }),
  },
  fontFamily: rubik.style.fontFamily,
  fontFamilyMonospace: archivoBlack.style.fontFamily,
  headings: {
    fontFamily: rubik.style.fontFamily,
    sizes: {
      h1: {
        fontSize: rem(60),
      },
      h2: {
        fontSize: rem(56),
      },
      h3: {
        fontSize: rem(40),
      },
      h4: {
        fontSize: rem(32),
      },
      h5: {
        fontSize: rem(24),
      },
      h6: {
        fontSize: rem(16),
      },
    },
  },
  fontSizes: {
    xl: rem(32),
    lg: rem(24),
    md: rem(20),
    sm: rem(16),
    xs: rem(14),
    xxs: rem(12),
  },
  lineHeights: {
    xl: rem(48),
    lg: rem(32),
    md: rem(28),
    sm: rem(24),
    xs: rem(20),
    xxs: rem(16),
  },
  spacing: {
    xs: rem(8),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
    xxl: rem(40),
  },
  colors: {
    ["brand-1"]: colorsTuple("#00A8E1"), // Amazon Prime Blue
    ["brand-2"]: colorsTuple("#FF9900"), // Amazon Orange
    ["brand-3"]: colorsTuple("#232F3E"), // Amazon Dark Blue
    ["brand-4"]: colorsTuple("#F3D6A8"), // Light Amazon Orange
    ["brand-5"]: colorsTuple("#E3F2FD"), // Light Amazon Prime Blue
    ["brand-6"]: colorsTuple("#FDE7D7"), // Very Light Amazon Orange
    ["brand-7"]: colorsTuple("#E1ECF4"), // Light Blue-Grey
    ["brand-8"]: colorsTuple("#C9DAE8")  // Lighter Amazon Blue
},
});
