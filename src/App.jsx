import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './routes/login/Login'
import MainScreen from './routes/mainScreem/MainScreen'
import NewDeposit from './routes/newDeposit/NewDeposit'
import NewExit from './routes/newExit/NewExit'
import SignUp from './routes/signUp/SignUp'
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<SignUp/>}/>
                <Route path='/main-sreen' element={<MainScreen/>}/>
                <Route path='/new-deposit' element={<NewDeposit/>}/>
                <Route path='/new-exit' element={<NewExit/>}/>
            </Routes>
        </BrowserRouter>
    )
}