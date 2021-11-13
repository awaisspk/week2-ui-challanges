import {Container} from '@components/Container';
import type {NextPage} from 'next';
import {Day1} from 'Week/day1';
import {Day2} from 'Week/day2';

const Home: NextPage = () => {
  return (
    <Container flow="col" main="center" cross="center" css={{minWidth: '100%'}}>
      <Day1 />
      <Day2 />
    </Container>
  );
};

export default Home;
