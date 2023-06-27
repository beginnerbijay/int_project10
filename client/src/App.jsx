import 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import New from './Pages/New'
import Edit from './Pages/Edit'
import Home from './Pages/Home'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </>
  )
}

export default App
