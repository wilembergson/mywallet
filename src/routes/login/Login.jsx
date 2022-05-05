import { Button, Form, Input, Label, Logo, MainLoginRegister } from "../../comonents/StyledComponents"

export default function Login(){
    return(
        <MainLoginRegister>
            <Logo>MyWallet</Logo>
            <Form>
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button>Entrar</Button>
            </Form>
            <Label>Primeira vez? Cadastre-se!</Label>
        </MainLoginRegister>
    )
}

