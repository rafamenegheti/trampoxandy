import { useForm } from "react-hook-form";
import axios from 'axios'
import {
    Container,
    Wrapper,
    Label,
    Input,
    Select,
    ButtonWrapper,
    ButtonStyled,
    Error
} from "./styles";
import { useRouter } from "next/router";

export default function AddStudent() {

    const router = useRouter()

    interface Student {
        nome: string,
        RA: string,
        idade: number,
        sexo: string,
        media: number,
        resultado: string
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<Student>();

    function onSubmit(form: Student) {
        axios.post('http://localhost:3002/students', {...form, id: Math.random()})
        reset()
    };

    return(
        
        <Container>
             <form onSubmit={handleSubmit(onSubmit)}>
                    <Wrapper>
                        <h2>Novo aluno</h2>
                        <Label>Nome</Label>
                        <Input {...register("nome", { required: true })} aria-label="Campo de nome" />

                        <Label>RA</Label>
                        <Input {...register("RA", { required: true })} aria-label="Campo de RA" />

                        <Label>Idade</Label>
                        <Input {...register("idade", { required: true })} aria-label="Campo de Idade" />


                        <Label>Sexo</Label>
                        <Select {...register("sexo", { required: true })}>
                        <option value="m">Masculino</option>
                        <option value="f">Feminino</option>
                        </Select>

                        <Label>Média</Label>
                        <Input {...register("media", { required: true })} aria-label="Campo de média" />

                        <Label>Resultado</Label>
                        <Select {...register("resultado", { required: true })}>
                        <option value="aprovado">Aprovado</option>
                        <option value="reprovado">Reprovado</option>
                        </Select>

                        <ButtonWrapper>
                            <ButtonStyled
                                typeProp={"cancel"}
                                onClick={() => router.push('/')}
                            >
                                Cancelar
                            </ButtonStyled>

                            <ButtonStyled
                                type="submit"
                                typeProp={"create"}
                            >
                                Criar
                            </ButtonStyled>
                        </ButtonWrapper>
                    </Wrapper>
                </form>
        </Container>
    );
}