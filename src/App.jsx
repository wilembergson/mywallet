import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './routes/login/Login'
import Register from './routes/register/Register'
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/1' element={<Login/>}/>
                <Route path='/' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}