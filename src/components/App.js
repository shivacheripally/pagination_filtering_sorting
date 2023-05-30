import React,{useState} from 'react';
import PagiNation from './PagiNation';
import Filtering from './Filtering';
import './App.css';

export default function App() {
  const [showPagiNation,setShowPagiNation] = useState(true);

  const controlPagiNation = (set)=>{
    setShowPagiNation(set);
  }
  return (
    <center>
      <div>
        <Filtering showPagiNation={showPagiNation} controlPagiNation={controlPagiNation}/>
        <br />
        {showPagiNation && <PagiNation />}
      </div>
    </center>
  );
}
