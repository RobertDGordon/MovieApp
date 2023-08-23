import { useState, useEffect} from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import CreateForm from './Components/CreateForm'
import ResponsiveAppBar from './Components/NavBar'
import { MovieDataContext } from './MovieDataContext'
import CardList from './Components/CardList'
import LoginForm from './Components/Login';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/movies/')
      .then(response => response.json())
      .then(json => {
        console.log("Response: ", json.data)
        setData(json.data)
      })
  
    // return () => {
    //   second
    // }
  }, [])
  

  return (
    <>
    <MovieDataContext.Provider value={data}>
      <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/post" element={<CreateForm />} />
          <Route path="/card" element={<CardList />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
    </MovieDataContext.Provider>
    </>
  )
}

export default App
