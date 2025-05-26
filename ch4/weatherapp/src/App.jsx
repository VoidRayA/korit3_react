import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ weather, setWeather ] = useState({
    temp: '',
    desc: '',
    icon: ''
  });

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&units=Metric&APIkey=1704d9c659400b5078cf97d085f660bc')
    .then(response => response.json())
    .then(result => {           // 금요일에는 data라고 주로 썼음
      setWeather({
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: result.weather[0].icon
      })
    })
    .catch(err => console.log(err));
  }, []);                       // 최초 렌더링 시에만 api를 가져와서 조회한다는 의미

  if(weather.icon){
    return (
      <>
        <p>온도 : {weather.temp}</p>
        <p>설명 : {weather.desc}</p>
        <p>아이콘 : {weather.icon}</p>
        <img src= {`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨아이콘입니다"/>
      </>
    )
  } else {
    return <>로딩 중 ...</>
  }
}

export default App
