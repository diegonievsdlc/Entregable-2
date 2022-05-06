import './App.css';
import { useState } from 'react';
import Info from './components/Info';
import Loader from './components/Loader';
import useApi from './hooks/useApi';

function App() {
  //Degrees Cº/Fº
  const [celsiusDegrees, setCelsiusDegrees] = useState(true)
  const changeGrade = () => setCelsiusDegrees(!celsiusDegrees)
  //Api
  const {dataApi, degrees} = useApi()
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
