import React from 'react'
// App.jsx
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/');

import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
       <Navbar />
      
    </div>
    
  )
}

export default App