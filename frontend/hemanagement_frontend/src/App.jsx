import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Services from './pages/services'
import Home from './home'
import About from './pages/about'
import Contact from './pages/contact'
import { Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/adminlogin'
import AdminHome from './pages/adminhome'
import Register from './pages/register'
import Login from './pages/login'
import EmpHome from './pages/EmpHome'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/emphome' element={<EmpHome></EmpHome>}> </Route>
        
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/adminhome' element={<AdminHome></AdminHome>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App