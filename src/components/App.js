import '../App.css';
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import DisplayContainer from './DisplayContainer';

function App() {
  const [img, setImg] = useState([{
    drinkThumb: '',
    drink: '',
    glass: ''
  }])
  useEffect(()=>{
    fetch('http://localhost:2000/drinks')
    .then(resp=>resp.json())
    .then(data=>{
      setImg(data)
    })
  }, [])
  
  const dataDisp = img.map((image, ind)=>{
    return (
      <div key={ind}>
        <DisplayContainer image={image}/>
      </div>
    )
  })

  return (
    <div>
      <NavBar/>
      {dataDisp}
    </div>
  )
}

export default App;
