import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './css/weather.css'

const DATA = [
  {
    key2: ['Sun']
  },
  {
    key2: ['Rain']
  },
  {
    key2: ['Cloudy']
  }
];


    const getRandomObject = (array) => {
        const randomObject = array[Math.floor(Math.random() * array.length)];
        return randomObject;
      };
      
      const Weather = () => {
        const [randomData, setRandomData] = useState(() => getRandomObject(DATA));

        
        const [num, setNum] = useState(0);
        const randomNumberInRange = (min, max) => {
            return Math.floor(Math.random()
                * (max - min + 1)) + min;
        };
    
        const randInt = () => {
            setNum(randomNumberInRange(5, 23));
        };
      
        return (
            <>
                <Popup className='popup' onOpen={randInt} trigger={
                    <button >Weather</button>}>
                    {randomData.key2.map((item) => (
                        <div className='content'>
                            <p>{item}</p>
                            <p>{num}°C</p>
                        </div> 
                    ))}
                </Popup>
                
              

            </>
          );
}
 
export default Weather;