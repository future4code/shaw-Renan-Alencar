import React from 'react'
import Body from '../../Components/Body/Body';
import Header from '../../Components/Header/Header';
import { DataContainer } from './styled'

const Home = () => {
  return (
    <div>
      <Header />
      <DataContainer>
        <Body />
      </DataContainer>
    </div>
  );
}

export default Home