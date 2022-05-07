import { useNavigate } from "react-router-dom"
import { Button, Form, Input, Label, Logo, MainLoginRegister } from "../../comonents/StyledComponents"

export default function Login(){
    const navigate = useNavigate()
    return(
        <MainLoginRegister>
            <Logo>MyWallet</Logo>
            <Form>
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button>Entrar</Button>
            </Form>
            <Label onClick={() => navigate('/')}>Primeira vez? Cadastre-se!</Label>
        </MainLoginRegister>
    )
}

