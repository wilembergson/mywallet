import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import { Button, Form, Input, Label, Logo, MainLoginRegister } from "../../comonents/StyledComponents";

export default function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const navigate = useNavigate()
    const URL = process.env.BASE_URL

    function signUp(e){
        e.preventDefault()

        const promise = axios.post(`http://localhost:5000/signup`, {
            name: name,
            email: email,
            password: password,
            repeatPassword: repeatPassword
        })
        promise.then(response => {
            alert(response.data)
            navigate('/login')
        })
        promise.catch(e => alert(e.response.data.message))
    }

    return(
        <MainLoginRegister>
            <Logo>MyWallet</Logo>
            <Form onSubmit={signUp}>
                <Input  type="text" 
                        placeholder="Nome" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required/>

                <Input  type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required/>

                <Input  type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required/>

                <Input  type="password"
                        placeholder="Confirme a senha"
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}
                        required/>

                <Button type="submit">Cadastrar-se</Button>
            </Form>
            <Label  onClick={()=> navigate('/login')}>Já tem uma conta? Entre agora!</Label>
        </MainLoginRegister>
    )
}