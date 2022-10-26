
import React from 'react'
import mockCats from "./mockData"
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


const App = () => {

  const [cats, setCats] = useState(mockCats)
  console.log(cats)

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/catedit" element={<CatEdit/>} />
        <Route path="/catindex" element={<CatIndex/>} />
        <Route path="/catnew" element={<CatNew/>} />
        <Route path="/catshow" element={<CatShow/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App