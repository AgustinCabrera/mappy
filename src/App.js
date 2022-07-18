import './App.css';
import MAP from './Map'
import Sidebar from './components/sidebar'
import {useState,useEffect} from 'react'

function App() {
  const [ location , setLocation] = useState('1;1') 
  useEffect(()=>{ 
    console.log(location)
  },[location])

function onChangeCallBack(e){
 setLocation(e.target.value); 
}
  return (
      <div className='container'>
        <MAP location={location}></MAP>
        <Sidebar onLocationChange={onChangeCallBack}></Sidebar>
      </div>
  );
}

export default App;
