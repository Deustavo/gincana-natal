import Image from 'next/image';
import { useEasybase } from 'easybase-react';
import { useEffect } from 'react/cjs/react.development';

export default function Families({ setLoading }) {
  const { db, useReturn } = useEasybase();
  const { frame } = useReturn(() => db('GINCANANATAL'));

  const handleScore = async (action, family) => {
    const index = frame.findIndex(n => n.name === family.name);
    const newScore = frame[index].score;

    if(action === 'add')
      newScore = newScore + 1;
    else
      newScore = newScore - 1;

    setLoading(true);
    await db('GINCANANATAL').where({ "name": family.name }).set({ score: newScore }).all();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (frame.length === 0)
      setLoading(true);
    else
      setLoading(false);
  }, [frame])
  
  return<>
    <div className='container-families'>
      {frame.map((family, index) =>
        <div key={index} className='family'>
          <Image className='family-image' src={family.image} alt={family.name} width={160} height={160}/>
          <div className='family-text'>
            <p className='family-text-name'>{family.name}</p>
            <div className='family-handle-value'>
              <p className='button' onClick={() => handleScore('remove', family)}>-</p>
              <p>{family.score}</p>
              <p className='button' onClick={() => handleScore('add',family)}>+</p>
            </div>
          </div>
        </div>  
      )}
    </div>
  </>
}