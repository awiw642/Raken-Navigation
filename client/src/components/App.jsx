import React from 'react'
import NavBar from './NavBar.jsx';

const App = ({ message = 'Hello React!' }) => (
  <div>
    <NavBar />
  </div>
)

export default App