import { Button, Form, Input, Label, Logo } from "../../comonents/StyledLoginAndRegister"

export default function Login(){
    return(
        <main>
            <Logo>MyWallet</Logo>
            <Form>
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button>Entrar</Button>
            </Form>
            <Label>Primeira vez? Cadastre-se!</Label>
        </main>
    )
}

