import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './routes/login/Login'
import MainScreen from './routes/mainScreem/MainScreen'
import Register from './routes/register/Register'
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/1' element={<Login/>}/>
                <Route path='/2' element={<Register/>}/>
                <Route path='/' element={<MainScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}