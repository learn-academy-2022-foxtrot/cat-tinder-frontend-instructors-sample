
import React, { useEffect } from 'react'
import { useState } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Routes, Route } from 'react-router-dom'
import "./App.css"

const App = () => {

  const [cats, setCats] = useState([])
  console.log(cats)

  useEffect(() => {
    readCat() 
  }, [])

  const readCat = () => {
  fetch("http://localhost:3000/cats")  // is the request
    .then((response) => response.json())
    .then((payload) => {
      setCats(payload)
    })
    .catch((errors) => console.log("Cat read errors: ", errors))
  }

  const createCat = ( newCat ) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(()=> readCat())
    .catch((errors) => console.log("Cat create errors: ", errors))
  }

  const updateCat = () => {
    // console.log('updated cat: ', updatedCat)
  }

  const deleteCat = () => {
    // console.log(deletedCat)
  }


  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/catedit" element={<CatEdit/>} />
        <Route path="/catindex" element={<CatIndex cats={ cats }/>} />
        <Route path="/catnew" element={<CatNew createCat={ createCat }/>} />
        <Route path="/catshow/:id" element={<CatShow cats={ cats }/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App