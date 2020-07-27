import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ApiItem from './components/ApiItem';
import { Link} from 'react-router-dom'


const api = {
  baseUrl: "https://pokeapi.co/api/v2/",
}



const App =() => {
  const [ pokeData, setPokeData] = useState([])
  const [infosPoke, setInfosPoke] = useState(null)


  useEffect(() => { 
    axios.get(api.baseUrl+"pokemon/?offset=0&limit=20")

    .then((res)=>{
      console.log("infos da API", res.data)
      setPokeData(res.data.results)
    })
  }, [])
 

  const buscaPokemon = (url) => {
    axios.get(url).then((res)=>{
      console.log("infos da API", res.data)
      setInfosPoke(res.data)
     
    })
  }
    

    return (
    
    <div className="container App">
        {infosPoke && <div className="teste"> 
        <Link to={{ pathname:'/Tela2', state:{infosPoke:infosPoke}}} >
        <div className="pokemonName">{infosPoke.name}</div>
        <img className="imagem" src={infosPoke.sprites.front_default}/> 
        </Link>
        </div>}
      

     

      <div className="list-group">
      <button type="button" className="list-group-item list-group-item-action active">
        CLIQUE NO NOME DO POKEMON
      </button>
     
        { pokeData.map((pokemon) =>(
          <button type="button" 
          className="list-group-item list-group-item-action" 
          key={pokemon.name} onClick={() => buscaPokemon(pokemon.url)}>
            <ApiItem item= {pokemon.name} />
          </button>
       
        ) 
      )}
     
      </div>
      </div>
      
    );
  }
 


export default App;
