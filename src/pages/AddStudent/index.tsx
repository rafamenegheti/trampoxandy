import { useForm } from "react-hook-form";
import { Student, useStudents } from "../../contexts/StudentsContext";
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

export default function AddStudent() {

    const { addStudent, students } = useStudents()

    const {
        register,
        setError,
        clearErrors,
        handleSubmit,
        getFieldState,
        formState: { errors }
    } = useForm<Student>();

    function onSubmit(form: Student) {
        addStudent(form);
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
                                // onClick={}
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