import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom'
import Prod from '../Prod/Prod'

const Home = ({prods, setId}) => {

    const result = prods.map(function(prod){
        return <div key={prod.id}>
            <div >name: {prod.name}</div>
            <Link to={`/prod/${prod.id}`} onClick={() => setId(prod.id)}>Информация</Link>
            <hr />
        </div>
    })

  return (
    <div>
      {result}
      
    </div>
  )
}

export default Home
