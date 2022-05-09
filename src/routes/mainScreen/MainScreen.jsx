import { Header, Main, Title } from "../../comonents/StyledComponents";
import {AiOutlineExport} from 'react-icons/ai'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import { useContext, useEffect, useState } from "react"
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { API_URL } from "../../CommonVariables";
import BalanceItem from "../../comonents/balanceItem/BalanceItem";

export default function MainScreen(){
    const navigate = useNavigate()
    const {token, userName, setUserName, setToken} = useContext(UserContext)
    const [balanceList, setBalanceList] = useState([])

    useEffect(()=>{
        const promise = axios.get(`${API_URL}/operations`,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        promise.then(response => setBalanceList(response.data))
        promise.catch(error => console.log(error.response))
    },[])

    function logOut(){
        setUserName('')
        setToken('')
        navigate('/')
    }

    return(
        <Main>
            <Header>
                <Title>Olá, {userName}</Title>
                <div onClick={()=> logOut()}>
                    <AiOutlineExport size={35} color={'#FFFFFF'}/>
                </div>
            </Header>
            <Balance>
                {
                    balanceList.map(item => <BalanceItem item={item}/>)
                }
                <LabelTotal>SALDO</LabelTotal>
                <Total>1547,21</Total>
            </Balance>
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
const LabelTotal = styled.label`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    background: #FFFFFF;
    position: absolute;
    bottom: 15px;
    left: 15px;
`
const Total = styled.label`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: #FFFFFF;
`