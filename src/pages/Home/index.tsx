import './style.scss';
import moonImg from '../../assets/moon.png';
import sunImg from '../../assets/sun.png';
import moonImgBtn from '../../assets/moon-btn.png';
import sunImgBtn from '../../assets/sun-btn.png';
import { useState } from 'react';

export function Home() {
  const [night, setNight] = useState(true);

  return (
    <div className='container'>
      <header className="header">
        <img src={night ? moonImg : sunImg}/>
        <h2>{night ? 'Anoiteceu' : 'Amanheceu'}</h2>
      </header>

      <div 
        className="main"
        style={{backgroundImage: `url(/src/assets/background-${night ? 1 : 2}.png)`}}
      >
        <button 
          className='changeTime'
          onClick={() => setNight(!night)}
        >
          <img src={night ? sunImgBtn : moonImgBtn}/>
          {night ?   'Amanhecer' : 'Anoitecer'}
        </button>
      </div>
    </div>
  )
}

