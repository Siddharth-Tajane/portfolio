import React from 'react'
// App.jsx
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/');

import Portfolio from "./components/Portfolio.jsx";



function App() {
  return (
    <div>
       <Portfolio />
      
    </div>
    
  )
}

export default App