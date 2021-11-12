import {styled} from '@stitchesConfig';
import {Label} from '../Label';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {HiCheck} from 'react-icons/hi';
import {Flex} from '@components/Flex';

type InputProps = Omit<React.ComponentProps<typeof StyledCheckBox>, 'type'>;

export const Checkbox = (props: InputProps) => {
  const {children, checked, id, disabled, css, ...rest} = props;
  return (
    <Flex gap="3" center css={css}>
      <StyledCheckBox id="c1" {...rest}>
        <StyledIndicator>
          <HiCheck />
        </StyledIndicator>
      </StyledCheckBox>
      <Label
        htmlFor="c1"
        css={{
          display: 'flex',
          placeContent: 'center',
          placeItems: 'center',
        }}
      >
        {children}
      </Label>
    </Flex>
  );
};

const StyledCheckBox = styled(CheckboxPrimitive.Checkbox, {
  all: 'unset',
  box: '1.3em',
  backgroundColor: 'white',
  border: '2px solid #A7A6C4',
  borderRadius: '0.3125em',
  color: 'CurrentColor',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
  outline: 'none',

  '&:focus-visible': {
    outlineOffset: '2px',
    outline: '2px solid #121212',
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  display: 'flex',
});
