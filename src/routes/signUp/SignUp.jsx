import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import { Button, Form, Input, Label, Logo, MainLoginRegister } from "../../comonents/StyledComponents";
import { API_URL } from "../../CommonVariables.js";

export default function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const navigate = useNavigate()

    function signUp(e){
        e.preventDefault()

        const promise = axios.post(`${API_URL}/signup`, {
            name: name,
            email: email,
            password: password,
            repeatPassword: repeatPassword
        })
        promise.then(response => {
            alert(response.data)
            navigate('/')
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
            <Label  onClick={()=> navigate('/')}>Já tem uma conta? Entre agora!</Label>
        </MainLoginRegister>
    )
}