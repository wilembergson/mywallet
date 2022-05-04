import { Button, Form, Input, Label, Logo } from "../../comonents/StyledLoginAndRegister";

export default function Register(){
    return(
        <main>
            <Logo>MyWallet</Logo>
            <Form>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Input type="password" placeholder="Confirme a senha" />
                <Button>Cadastrar-se</Button>
            </Form>
            <Label>Já tem uma conta? Entre agora!</Label>
        </main>
    )
}