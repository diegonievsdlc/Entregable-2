import axios from "axios";
import { useEffect, useState } from "react";

const useBringApi = () => {
    const [dataApi, setDataApi] = useState({})
    const [degrees, setDegrees] = useState(0)
    let [image, setImage] = useState('')

    const obtainBackground = (nameDescription) => {
      if(nameDescription === 'clear sky' || nameDescription === 'few clouds') {
        setImage('https://c.tenor.com/kgxDTe0aCQ0AAAAd/clouds.gif')
      }
      else if(nameDescription === 'broken clouds' || nameDescription === 'scattered clouds'){
        setImage('https://i.giphy.com/media/xT9GEDhzERbjDD15O8/giphy.gif')
      }
      else if(nameDescription === 'shower rain' || nameDescription === 'rain'){
        setImage('https://i.pinimg.com/originals/7f/83/ae/7f83aed841c8308c9962043078bbc563.gif')
      }
      else{
        setImage('https://c.tenor.com/PagXtQ_2mw0AAAAC/clouds-stormy.gif')
      }
    }
    
    useEffect(() => {
      function success(pos) {
        var crd = pos.coords;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=bd2602d2f91985f5a8f19f1df94f4cac`)
        .then(res => {
          setDataApi(res.data)
          setDegrees(res.data.main.temp)
          obtainBackground(res.data.weather[0].description)
        })      
        document.getElementById('loader').classList.toggle('container-loader2')
      };

      navigator.geolocation.getCurrentPosition(success);
    }, [])

    document.body.style = `background-image: url(${image})`

    return {dataApi, degrees}
}

export default useBringApi