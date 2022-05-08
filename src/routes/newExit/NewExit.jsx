import { Button, Header, Input, Main, Title } from "../../comonents/StyledComponents";
import styled from "styled-components"
import {useNavigate} from 'react-router-dom'
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { API_URL } from "../../CommonVariables";
import axios from "axios";

export default function NewExit(){
    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const operationType = 'debt'

    function toDebt(e){
        e.preventDefault()

        const promise = axios.post(`${API_URL}/operation`, {
            description: description,
            value: value,
            type: operationType
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        promise.then(response => {
            alert(response.data)
            navigate('/main-screen')
        })
        promise.catch(e => alert(e.response.data.message))
    }
    return(
        <Main>
            <Header>
                <Title>Nova saída</Title>
            </Header>  
                <Form onSubmit={toDebt}>
                    <Input  type="number"
                            placeholder="Valor"
                            value={value}
                            onChange={e=> setValue(e.target.value)}
                            required/>

                    <Input  type="text"
                            placeholder="Descrição"
                            value={description}
                            onChange={e=> setDescription(e.target.value)}
                            required/>
                    <Button type="submit">Salvar saída</Button>
                </Form>
        </Main>
    )
}

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
`