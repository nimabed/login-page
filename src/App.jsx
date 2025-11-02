import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { SignUp } from './SignUp';
import { LoginPage } from './SignIn';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
