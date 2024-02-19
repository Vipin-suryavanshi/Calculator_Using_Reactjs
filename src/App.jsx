
import { useState, useEffect } from 'react'
import './App.css'
import Button from '../Button';
import Display from './Display';
import Head from './Head';

function App() {
   const [intiVal,setintiVal] = useState("");
   function fetchVal(btn){
    console.log(btn)
   if(btn === 'AC'){
    setintiVal("")
   }
   else if(btn === '='){
    const result = eval(intiVal)
    setintiVal(result)
   }else{
    const display = intiVal + btn
    setintiVal(display)
   }
   }

  return (
    <>
    <Head></Head>
    <div className="calculator">
    
    <div className="container">
      
     <Display intiVal={intiVal}/>
      <Button fetchVal={fetchVal} ></Button>
     </div>
    </div>
     
    </>
  )
}

export default App
