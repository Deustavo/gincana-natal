import { useEffect } from 'react';
import Image from 'next/image';
import { useEasybase } from 'easybase-react';

export default function Families() {
  const { Frame, sync, configureFrame, db } = useEasybase();

  useEffect(() => {
    configureFrame({ tableName: "GINCANANATAL", limit: 10 });
    sync();
  }, []);

  const handleScore = async (action, family) => {
    const index = Frame().findIndex(n => n.name === family.name);
    const newScore = Frame()[index].score;

    if(action === 'add')
      newScore = newScore + 1;
    else
      newScore = newScore - 1;

    console.log('salame');
    await db('GINCANANATAL').where({ "name": family.name }).set({ score: newScore }).all();
    console.log('alface');
  };
  
  return<>
    <div className='container-families'>
      {Frame().map((family, index) =>
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