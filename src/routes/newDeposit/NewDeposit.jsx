import { Button, Header, Input, Main, Title } from "../../comonents/StyledComponents";
import styled from "styled-components"
import {useNavigate} from 'react-router-dom'

export default function NewDeposit(){
    const navigate = useNavigate()
    return(
        <Main>
            <Header>
                <Title>Nova entrada</Title>
            </Header>
            <Form>
                <Input type="text" placeholder="Valor"/>
                <Input type="text" placeholder="Descrição"/>
                <Button onClick={()=> navigate('/main-screen')}>Salvar entrada</Button>
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