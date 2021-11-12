import {styled} from '@stitchesConfig';

export const Button = styled('button', {
  all: 'unset',

  variants: {
    variant: {
      button: {
        backgroundColor: '#3F3E68',
        borderRadius: '0.3125em',
        padding: '$3 $6',
        color: 'white',
        fontSize: '$2',
        fontWeight: '$600',
        textAlign: 'center',
        userSelect: 'none',

        '&:hover': {
          backgroundColor: 'rgba(63,62,104, 0.9)',
        },
        '&:focus-visible': {
          boxShadow: '0 0 0 3px rgba(63,62,104, 0.6)',
        },
      },
      link: {
        textDecoration: 'underline',
        cursor: 'pointer',
        textAlign: 'center',

        '&:focus-visible': {
          color: 'rgba(63,62,104, 0.9)',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'button',
  },
});
