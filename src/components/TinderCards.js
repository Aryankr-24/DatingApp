import React from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {
  const [Girls, setGirls] = React.useState([
    {
      name: 'Alisa',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DhmavVH2Iq0qtnHhdy0_Jh0z4t2xS_U5qlj_1s5IDpB7m7zgk8wbM8yHPzltnS0E_b8&usqp=CAU'
    },
    {
      name: 'Taylor',
      url: "https://www.mrdustbin.com/en/wp-content/uploads/2021/02/olga-kurylenko-852x1024.jpg"
    },
    {
      name: 'Kylle',
      url: 'https://www.mrdustbin.com/en/wp-content/uploads/2020/11/emily-blunt-768x935.jpg'
    },
    {
      name: 'Angelina',
      url: 'https://www.mrdustbin.com/en/wp-content/uploads/2020/11/angelina-jolie-1-768x900.jpg'
    }
  ]);
  return (
    <div className='card-container'>
      {
        Girls.map( girl => (
          <TinderCard
              className='swipe'
              key={girl.name}
              preventSwipe={['up','down']}
          >
              <div style={{ backgroundImage:`url(${girl.url})`}} className='card'>
                <h3>{girl.name}</h3>
              </div>
          </TinderCard>
        ))
      }
    </div>
  )
}

export default TinderCards
