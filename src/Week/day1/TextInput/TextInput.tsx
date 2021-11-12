import {Label} from '../Label';
import {styled} from '@stitchesConfig';
import {Flex} from '@components/Flex';

type TextinputProps = Omit<React.ComponentProps<typeof Input>, 'type'> & {
  type: 'number' | 'date';
  label: React.ReactNode;
};

export const Textinput = (props: TextinputProps) => {
  const {type, label, placeholder, css} = props;

  return (
    <Flex flow="col" css={css}>
      <Label htmlFor={type} css={{mb: '$1'}}>
        {label}
      </Label>
      <Input type={type} id={type} placeholder={placeholder} />
    </Flex>
  );
};

const Input = styled('input', {
  all: 'unset',
  appearance: 'none',
  width: 'min(200, 80%)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  height: 40,
  fontSize: '1rem',
  lineHeight: 1,
  color: 'rgba(63,62,104,0.8)',
  boxShadow: '0 0 0 1px rgba(63,62,104,0.5)',

  '&:focus': {
    boxShadow: '0 0 0 2px rgba(63,62,104,0.5)',
  },
});
