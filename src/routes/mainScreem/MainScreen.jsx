import { Header, Main, Title } from "../../comonents/StyledComponents";
import {AiOutlineExport} from 'react-icons/ai'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'


export default function MainScreen(){
    const navigate = useNavigate()

    return(
        <Main>
            <Header>
                <Title>Olá, Fulano</Title>
                <AiOutlineExport size={35} color={'#FFFFFF'}/>
            </Header>
            <Balance/>
            <Footer>
                <Operation onClick={()=> navigate('/new-deposit')}>
                    <AiOutlinePlusCircle size={25}/>
                    <Label>Nova</Label>
                    entrada
                </Operation>
                <Operation onClick={()=> navigate('/new-exit')}>
                    <AiOutlineMinusCircle size={25}/>
                    <Label>Nova</Label>
                    saida
                </Operation>
            </Footer>
        </Main>
    )
}

const Balance = styled.div`
    width: 100%;
    height:420px;
    background: #FFFFFF;
    margin-top: 22px;
    margin-bottom:40px;
    border-radius: 5px;
    position: relative;
`
const Footer = styled.footer`
    display: flex;
    width: 92%;
    position: fixed;
    bottom: 0;
    padding-bottom: 10px;
`
const Operation = styled.div`
    display: flex;
    aling-items: center;
    flex-direction: column;
    width: 50%;
    height: 100px;
    background: #A328D6;
    margin: 10px;
    border-radius: 5px;
    padding: 11px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
`
const Label = styled.label`
    background: #A328D6;
    margin-top: 35px;
`