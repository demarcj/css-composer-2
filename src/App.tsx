// import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { 
  Home 
} from "src/components/layout";
import './App.css'

const App: React.FC = () => (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </div>
  )


export default App
