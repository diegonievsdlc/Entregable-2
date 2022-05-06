import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Info from './components/Info';
import Loader from './components/Loader';

function App() {
  //Degrees Cº/Fº
  const [degrees, setDegrees] = useState(0)
  const [celsiusDegrees, setCelsiusDegrees] = useState(true)
  const changeGrade = () => setCelsiusDegrees(!celsiusDegrees)
  //Api
  const [dataApi, setDataApi] = useState({})
  function success(pos) {
    var crd = pos.coords;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=bd2602d2f91985f5a8f19f1df94f4cac`)
      .then(res => {
        setDataApi(res.data)
        setDegrees(res.data.main.temp)
      })
    document.getElementById('loader').classList.toggle('loader2')
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  return (
    <>
      <Loader />
      <div className="box">
        <h1>Wheather App</h1>
        <h2>{dataApi.sys?.country + " " + dataApi.name}</h2>
        <div className="box-content">
          <div>
            <img src={`http://openweathermap.org/img/wn/${dataApi.weather?.[0].icon}@2x.png`} alt="Img" />
            <h1>{celsiusDegrees ? `${(degrees - 273.15).toFixed(2)} Cº`: `${((degrees - 273.15) * 1.8 +32).toFixed(2)} Fº`}</h1>
          </div>
          <Info text1={dataApi.weather?.[0].description} text2={dataApi.wind?.speed} text3={dataApi.clouds?.all} text4={dataApi.wind?.gust}/>
        </div>
        <button onClick={changeGrade}>Degrees ºF/ºC</button>
      </div>
    </>
  );
}

export default App;
