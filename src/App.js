
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'

const App = () => {
  let [entries, setEntries] = useState([])
  let [User, setUser] = useState([])


  const getEntries = () => {
    axios.get('http://localhost:8000/api/entry')
    .then((res)=>{
      console.log(res.data)
      setEntries(res.data)
    })
  } 
  const getUser = () => {
    axios.get('http://localhost:8000/api/entry')
    .then((res)=>{
      console.log(res.data)
      setUser(res.data)
    })
  } 
  
  // const handleCreate = (addMovie) => {
  //   axios
  //     .post('http://localhost:8000/api/', addMovie)
  //     .then((response) => {
  //       console.log(response)
  //       getMovies()
  //     })
  // }
  

  // const handleDelete = (event) => {
  //   axios
  //     .delete('http://localhost:8000/api/movies/' + event.target.value)
  //     .then((response) => {
  //       getMovies()
  //     })
  // }
  
  // const handleUpdate = (editMovie) => {
  //   console.log(editMovie)
  //   axios
  //     .put('http://localhost:8000/api/movies/' + editMovie.id, editMovie)
  //     .then((response) => {
  //       getMovies()
  //     })
  // }
  


  useEffect(() => {
    getEntries()
    getUser()
  }, [])

  return (

    <div className='container-fluid '>
      {/* <Add handleCreate={handleCreate} /> */}
      <div className="Movies">
 {User.map((User) => {
   return (
    <div className="movie">
    <h4>Name: {User.Username}</h4>
   
    {/* <button><Edit handleUpdate={handleUpdate} id={movie.id} movie={movie} /></button>
    <button onClick={handleDelete} value={movie.id}>
      X
    </button> */}
  </div>
  
   )
 })}
</div>

    </div>
  )
}

export default App