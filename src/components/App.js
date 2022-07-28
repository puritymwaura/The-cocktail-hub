import '../App.css';
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import DisplayContainer from './DisplayContainer';

function App() {
  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(()=>{
    fetch('https://phase2-cocktail-api.herokuapp.com/drinks')
    .then((resp) => {
      // console.log({resp});
      return resp.json();
    })
    .then(data=>{
     setCocktails(data)
      console.log(data)
    })
  }, [])

  useEffect() = {
    //const search =async () =>{
     // const {data} =
    }
    // do the filtering here
  } [search];
  
  
  const dataDisp = cocktails.map((cocktail, index)=>{
    return (
      <div key={index}>
        <DisplayContainer cocktail={cocktail}/>
      </div>
    )
  })


  return (
    <div>
      <NavBar onSearch={(text) => setSearch(text)}/>
      <div id='data-container'>
        {dataDisp}
      </div>
    </div>
  )


export default App;
