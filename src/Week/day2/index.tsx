import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {Text} from '@components/Text';
import {styled} from '@stitchesConfig';
import {Checkbox} from './Project1/CheckBox';

export const Day2 = () => {
  return (
    <Container center>
      <Flex
        center
        css={{
          backgroundColor: 'white',
          py: '$16',
          width: 'min(880px, 100% - 20px)',
          boxShadow: '0px 35px 65px -25px rgba(74,113,170,0.14)',
          borderRadius: '20px',
        }}
      >
        <Flex
          flow="col"
          as="section"
          cross="start"
          css={{width: '80%', marginX: 'auto'}}
        >
          <Heading>Filter content just for you</Heading>
          <CheckboxContainer flow="col">
            <Title>RESOURCES</Title>
            <Grid>
              <Checkbox id="1">Higher Education</Checkbox>
              <Checkbox id="2">Enginnering</Checkbox>
              <Checkbox id="3">Financial Services</Checkbox>
              <Checkbox id="4">HR</Checkbox>
              <Checkbox id="5">Internal Commans</Checkbox>
              <Checkbox id="6">IT</Checkbox>
              <Checkbox id="7">Marketing</Checkbox>
              <Checkbox id="8">Sales</Checkbox>
              <Checkbox id="9">Security</Checkbox>
              <Checkbox id="10">Supports</Checkbox>
            </Grid>
          </CheckboxContainer>

          <CheckboxContainer flow="col">
            <Title>TAILORED TO</Title>
            <Grid>
              <Checkbox id="11">Admin</Checkbox>
              <Checkbox id="12">Developers</Checkbox>
              <Checkbox id="13">General use</Checkbox>
            </Grid>
          </CheckboxContainer>

          <ButtonContainer flow="row" wrap="wrapReverse" main="spaceAround">
            <Button css={{backgroundColor: 'transparent', color: '#1f223d'}}>
              clear
            </Button>
            <Button>apply filter</Button>
          </ButtonContainer>
        </Flex>
      </Flex>
    </Container>
  );
};

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',

  '@bp1': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@bp2': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

const Heading = styled('h1', {
  color: '#1f223d',
  fontWeight: '$900',
  fontSize: '2rem',
  lineHeight: '2',
});

const Title = styled('h2', {
  color: 'rgba(31,34,61,0.7)',
  fontWeight: '$600',
  fontSize: '1rem',
  textTransform: 'uppercase',
  lineHeight: '1.5',
  mb: '$3',
});

const CheckboxContainer = styled(Flex, {
  marginY: '$6',
  width: '100%',

  [`${Grid}`]: {
    justifySelf: 'start',
    rowGap: '$3',
  },

  [`${Grid} *`]: {
    justifySelf: 'start',
  },
});

const ButtonContainer = styled(Flex, {
  width: '100%',
  textTransform: 'uppercase',
  mt: '$8',
  gap: '$5',

  button: {
    flexBasis: '100%',
  },

  '@bp1': {
    button: {
      flexBasis: '35%',
    },
  },
});

const Button = styled('button', {
  all: 'unset',
  padding: '$3 $6',
  textAlign: 'center',
  userSelect: 'none',
  fontWeight: '$600',
  backgroundColor: '#e0d6ff',
  color: '#1f223d',
  '&:hover': {
    backgroundColor: 'rgba(224,214,255,0.8)',
  },
  '&:active': {
    backgroundColor: 'rgba(224,214,255,0.9)',
  },
});
