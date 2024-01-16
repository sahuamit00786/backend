import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

useEffect(()=>{

  axios.get('/api/jokes')
  .then((response)=>{
    setjokes(response.data)
  }).catch((err)=>{
    console.log(err)
  })

},[])

  const[jokes,setjokes] = useState([])

  return (
    <>
      <h1 style={{fontSize:30}}>where are my jokes ☹️</h1>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
