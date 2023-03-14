import './App.css'
import MyComponent  from './components/MyComponent'
// import CardComponent from './components/CardComponent'
// import CardContainer from './components/CardContainer'
import Counter from './components/Counter'
import LoginPage from './components/LoginPage'
 import SignUp from './components/SignUp'
 import EffectComponent from './components/EffectComponent'
 import Parent from './components/Parent'
import { Routes,BrowserRouter,Route } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={< EffectComponent/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="counter" element={<Counter />} />
        <Route path="parent" element={<Parent><p>This is Child</p><p>This is child 2</p></Parent>} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
