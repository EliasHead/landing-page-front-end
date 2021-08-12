import React from 'react';
import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Container>
        <Heading>Menu</Heading>
      </Styled.Container>
    </div>
  );
}

export default Home;
