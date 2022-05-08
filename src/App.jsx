import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import UserContext from './contexts/UserContext'
import Login from './routes/login/SignIn'
import MainScreen from './routes/mainScreen/MainScreen'
import NewDeposit from './routes/newDeposit/NewDeposit'
import NewExit from './routes/newExit/NewExit'
import SignUp from './routes/signUp/SignUp'
export default function App(){
    const [userName, setUserName] = useState('')
    const [token, setToken] = useState('')
    const contextValues = {
        userName,
        setUserName,
        token,
        setToken
    }

    return(
        <UserContext.Provider value={contextValues}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/main-screen' element={<MainScreen/>}/>
                    <Route path='/new-deposit' element={<NewDeposit/>}/>
                    <Route path='/new-exit' element={<NewExit/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}