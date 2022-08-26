import React, { useState } from 'react'
import Body from '../../Components/Body/Body';
import Header from '../../Components/Header/Header';
import { DataContainer } from './styled'

const Home = () => {

  const [update, setUpdate] = useState(false)

  return (
    <div>
      <Header setUpdate={setUpdate} update={update}/>
      <DataContainer>
        <Body setUpdate={setUpdate} update={update}/>
      </DataContainer>
    </div>
  );
}

export default Home