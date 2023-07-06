import React from "react"
import Nav from "./Nav"
import Single from "./Single"
import Home from "./Home"
import Footer from "./Footer"
import Multi from "./Multi"
import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
    <Box
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    width={"100vw"}
    >
      <Nav />
      <Routes>
     <Route exact path="/" element= {<Home />} />
     <Route path="/single" element={<Single />} />
     <Route path="/multi" element={<Multi />} />

      </Routes>
      <Footer />
      </Box>
      </BrowserRouter>
  )
}

export default App
