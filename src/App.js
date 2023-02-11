import "./App.scss";
import "./styles/header.scss";

import Header from './components/header/Header'
import { useAxiosGet } from './services/service'


import { useState} from 'react';



const App = ()=> {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState("");
  const [status, setStatus] = useState(false);

  const getLocaion = () =>{
    if(!navigator.geolocation){
      setStatus('Geo now supported by your browser')
    }else{
      setStatus('Loading...')
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition((position)=>{
          setLon(position.coords.longitude)
          setLat(position.coords.latitude)
          setStatus('')
        },()=>{
          setStatus('Unable to retrieve your location')
        })
      }, 500);
     
    }
  }
 // const { data, error, loaded } = useAxiosGet(URL('-24.448087','19.648841'))

  // const { data, error, loaded } = useAxiosPost(
  //   "https://httpbin.org/post",
  //   {
  //     message: "Hello World",
  //   }
  // );
 
  // console.log(data);
  // if (loaded) {
  //   return error ? (
  //     <span>Error: {error}</span>
  //   ) : (
  //     <p>{stringifiedData}</p>
  //   );
  // }
  return(
    <div>    
      <Header></Header>
      <button onClick={getLocaion}>Get location</button>
      <p>{status}</p>
      {lat && <p>  Lattitude  -    {lat}   </p>}
      {lon &&   <p>  Longitude -     {lon}    </p>}
    </div>
  )
};

export default App;
