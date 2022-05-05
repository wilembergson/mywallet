import { Button, Form, Input, Label, Logo, MainLoginRegister } from "../../comonents/StyledComponents";

export default function Register(){
    return(
        <MainLoginRegister>
            <Logo>MyWallet</Logo>
            <Form>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Input type="password" placeholder="Confirme a senha" />
                <Button>Cadastrar-se</Button>
            </Form>
            <Label>Já tem uma conta? Entre agora!</Label>
        </MainLoginRegister>
    )
}