import {createStitches} from '@stitches/react';
import type * as Stitches from '@stitches/react';

const StitchesConfig = createStitches({
  theme: {
    colors: {},
    fonts: {
      primary: 'Inter',
    },

    fontSizes: {
      0: '0.75rem',
      1: '0.875rem',
      2: '1rem',
      3: '1.125rem',
      4: '1.25rem',
      5: '1.5rem',
      6: '1.875rem',
      7: '2.25rem',
      8: '3rem',
      9: '3.75rem',
      10: '4.5rem',
      11: '6rem',
      12: '8rem',
    },
    fontWeights: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    radii: {
      none: '0',
      sm: '.125rem',
      md: '.25rem',
      lg: '.5rem',
      full: '9999px',
    },
    space: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      0: 1.25,
      1: 1.375,
      3: 1.5,
      4: 1.625,
      5: '2',
      6: '.75rem',
      7: '1rem',
      8: '1.25rem',
      9: '1.5rem',
      10: '1.75rem',
      11: '2rem',
      12: '2.25rem',
      13: '2.5rem',
    },
    sizes: {
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      0: '14rem',
      1: '16rem',
      2: '20rem',
      3: '24rem',
      4: '28rem',
      5: '32rem',
      6: '36rem',
      7: '42rem',
      8: '48rem',
      9: '56rem',
      10: '64rem',
      11: '72rem',
      12: '80rem',
      13: '90rem',
    },
    shadows: {
      shadow1: '0 0px 10px -6px rgba(0, 24, 40, 0.3)',
      shadow2: '0 0px 15px -6px rgba(0, 24, 40, 0.4)',
      shadow3: '0 0px 20px -6px rgba(0, 24, 40, 0.5)',
    },
    borderStyles: {},
    borderWidths: {},
    transitions: {},
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
    hover: '(any-hover : hover)',
    bp1: '(min-width: 30em)',
    bp2: '(min-width: 40em)',
    bp3: '(min-width: 48em)',
    bp4: '(min-width: 62em)',
    bp5: '(min-width: 80em)',
    bp6: '(min-width: 90em)',
  },
  utils: {
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    minW: (value: Stitches.PropertyValue<'minWidth'>) => ({
      minWidth: value,
    }),
    maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
      maxWidth: value,
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),

    linearGradient: ([startColor, endColor]: [string, string]) => ({
      backgroundImage: `linear-gradient(${startColor},${endColor})`,
    }),
    minH: (value: Stitches.PropertyValue<'minHeight'>) => ({
      minHeight: value,
    }),
    maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
      maxHeight: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      appearance: value,
      MozAppearance: value,
      WebkitAppearance: value,
    }),
    box: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    fuildFontSize: ([minVw, maxVw, minFs, maxFs]: [
      number,
      number,
      number,
      number
    ]) => ({
      fontSize: `${minFs}rem`,
      '@bp1': {
        fontSize: `calc(${minFs}rem + (((100vw - ${minVw}rem) / (${maxVw} - ${minVw}))) * (${maxFs} - ${minFs}))`,
      },
      '@bp4': {
        fontSize: `${maxFs}rem`,
      },
    }),
  },
});

export const DarkTheme = StitchesConfig.createTheme({
  colors: {},
});

export const {css, styled, globalCss, keyframes, getCssText, config} =
  StitchesConfig;
