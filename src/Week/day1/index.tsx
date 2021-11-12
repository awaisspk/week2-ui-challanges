import {Button} from './Button';
import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {Text} from '@components/Text';
import {Checkbox} from './CheckBox';
import {Textinput} from './TextInput';

export const Day1 = () => {
  return (
    <Container center>
      <Flex
        css={{
          width: 'min(400px, 100% - 20px)',
          background: 'white',
          borderRadius: '10px',
          py: '$14',
        }}
      >
        <Flex flow="col" css={{marginX: 'auto'}}>
          <Text
            css={{
              color: '#3F3E68',
              fontSize: '$6',
              fontWeight: '$900',
              mb: '$6',
            }}
          >
            Sign in
          </Text>
          <Textinput
            type="number"
            label="Phone number"
            placeholder="8 digits"
            css={{mb: '$6'}}
          />
          <Textinput
            type="date"
            label="Date of birth"
            placeholder="dd/mm/yy"
            css={{mb: '$6'}}
          />
          <Checkbox css={{alignSelf: 'start'}}>
            Remember me on this device
          </Checkbox>
          <Button css={{mt: '$6'}}>Sign in</Button>
          <Button variant="link" as="a" href="#" css={{mt: '$6'}}>
            Log in by email
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};
