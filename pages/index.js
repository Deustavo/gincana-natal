import { useState } from 'react';
import Families from '../components/families';
import Loading from '../components/loading';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return <>
    <section className='background-page'>
      {loading && <Loading />}
      <h1>Gincana dos Andrade</h1>
      <Families setLoading={setLoading}/>
    </section>
  </>
}
