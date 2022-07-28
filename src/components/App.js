import '../App.css';
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import DisplayContainer from './DisplayContainer';

function App() {
  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(()=>{
    fetch('https://phase2-cocktail-api.herokuapp.com/drinks')
    .then((resp) => {
      // console.log({resp});
      return resp.json()
    })
    .then(data=>{
     setCocktails(data)
      console.log(data)
    })
  }, [])

  useEffect(() => {
    if (search?.length) {
      const results = cocktails.filter((item) => {
        return !!((item?.drink || '').search(new RegExp(`/${search}/`)));

      });
  
      setResults(results);
    } else {
      setResults([]);
    }

  }, [search]);
  
  
  const dataDisp = (results?.length ? results : cocktails).map((cocktail, index)=>{
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
  }

export default App;
