import React, { useState } from 'react';
import Families from '../components/families';
import Loading from '../components/loading';
import Snow from '../components/snow';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return <>
    <section className='background-page'>
      {loading && <Loading />}
      <Snow />
      <h1>Gincana dos Andrade</h1>
      <Families setLoading={setLoading}/>
    </section>
  </>
}
