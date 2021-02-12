import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Route } from 'react-router-dom'
import Json from './Json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Helmet>
        <title>Main page</title>
      </Helmet>
      <h1>Main page</h1>
      <Link to="/json/1">Json 1</Link>
      <Link to="/json/2">Json 2</Link>
      <Link to="/json/3">Json 3</Link>
      <Route path="/json/:id" component={Json} />
    </div>
  )
}

export default App
