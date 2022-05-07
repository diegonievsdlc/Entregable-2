import './App.css';
import { useState } from 'react';
import Information from './components/Information';
import Loader from './components/Loader';
import useBringApi from './hooks/useBringApi';

function App() {
  //Degrees Cº/Fº
  const [celsiusDegrees, setCelsiusDegrees] = useState(true)
  const changeGrade = () => setCelsiusDegrees(!celsiusDegrees)
  //Api
  const {dataApi, degrees} = useBringApi()
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
          <Information description={dataApi.weather?.[0].description} speed={dataApi.wind?.speed} all={dataApi.clouds?.all} gust={dataApi.wind?.gust}/>
        </div>
        <button onClick={changeGrade}>Degrees ºF/ºC</button>
      </div>
    </>
  );
}

export default App;
