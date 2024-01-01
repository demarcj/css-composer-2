// import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { 
  Home 
} from "src/components/layout";
import './App.css'

const App: React.FC = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  )


export default App
