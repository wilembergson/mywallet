import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { Button, Form, Input, Label, Logo, MainLoginRegister } from "../../comonents/StyledComponents"
import UserContext from "../../contexts/UserContext"
import axios from "axios"
import { API_URL } from "../../CommonVariables"

export default function Login(){
    const navigate = useNavigate()
    const {setUserName, setToken} = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signIn(e){
        e.preventDefault()
        const promise = axios.post(`${API_URL}/signin`, {
            email: email,
            password: password
        })
        promise.then(response=>{
            setUserName(response.data.userName)
            setToken(response.data.token)
            navigate('/main-screen')
        })
        promise.catch(e => alert(e.response.data))
    }

    return(
        <MainLoginRegister>
            <Logo>MyWallet</Logo>
            <Form onSubmit={signIn}>
                <Input  type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required/>

                <Input  type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required/>

                <Button type="submit">Entrar</Button>
            </Form>
            <Label onClick={() => navigate('/sign-up')}>Primeira vez? Cadastre-se!</Label>
        </MainLoginRegister>
    )
}

