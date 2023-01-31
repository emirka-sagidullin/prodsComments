import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import Prod from './components/Prod/Prod'
import Home from './components/Home/Home'
import {useState} from 'react'

function App() {
  const initProds = [
  {
    'id': 1,
    'name': 'prod1',
    'cost': 100,
    'catg': 'catg1',
    'comments': []
  },
  {
    'id': 2,
    'name': 'prod2',
    'cost': 100,
    'catg': 'catg2',
    'comments': []
  },
  {
    'id': 3,
    'name': 'prod3',
    'cost': 100,
    'catg': 'catg2',
    'comments': []
  },
  {
    'id': 4,
    'name': 'prod4',
    'cost': 100,
    'catg': 'catg1',
    'comments': []
  },
  {
    'id': 5,
    'name': 'prod5',
    'cost': 100,
    'catg': 'catg1',
    'comments': []
  },
]
  const [prods, setProds] = useState(initProds)

  const [id, setId] = useState('')
  const setIds = (id) => {
    setId(id)
    console.log(id)
  }

  return (
    <Router >
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Товары</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/prod/:id' element={<Prod prods={prods} id={id}/>}/>

        <Route path='/' element={<Home prods={prods} setId={setIds}/>} />


      </Routes>
    </div>
  </Router>
  );
}

export default App;