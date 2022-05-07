import axios from "axios";
import { useEffect, useState } from "react";

const useApi = () => {
    const [dataApi, setDataApi] = useState({})
    const [degrees, setDegrees] = useState(0)
    let [color, setColor] = useState('')

    const setBackground = (lol) => {
      console.log(lol)
      if(lol === 'clear sky') {
        setColor('https://c.tenor.com/kgxDTe0aCQ0AAAAd/clouds.gif')
      }
      else if(lol === 'broken clouds'){
        setColor('https://i.giphy.com/media/xT9GEDhzERbjDD15O8/giphy.gif')
      }
      else{
        setColor('https://c.tenor.com/PagXtQ_2mw0AAAAC/clouds-stormy.gif')
      }
    }
    
    useEffect(() => {
      function success(pos) {
        var crd = pos.coords;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=bd2602d2f91985f5a8f19f1df94f4cac`)
        .then(res => {
          setDataApi(res.data)
          setDegrees(res.data.main.temp)
          setBackground(res.data.weather[0].description)
        })      
        document.getElementById('loader').classList.toggle('loader2')
      };

      navigator.geolocation.getCurrentPosition(success);
    }, [])

    document.body.style = `background-image: url(${color})`

    return {dataApi, degrees}
}

export default useApi