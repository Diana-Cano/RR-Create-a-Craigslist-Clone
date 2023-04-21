// Import data

// Import components
import './App.css';
import React from 'react'
import Gallery from './Components/Gallery'
import Searchbar from './Components/Searchbar'
import Sidebar from './Components/Sidebar'

function App(){
  return (
    <div>
      <div className="App">
        <div style = {{width:'25vw', backgrund: 'lightgreen' }}></div>
        <Sidebar/>
        </div>
       
        <div>
          <Searchbar/>
        <Gallery/>
        {/* Your content will go here! */}
      </div>

    </div>
  );
}

export default App;
