import { Student, useStudents } from "../../contexts/StudentsContext";
import {
    Container,
    Title
} from "./styles";


export default function NameCrescent() {

    const { students } = useStudents();

    console.log(students)

    function bubbleSortNameCrescent(vetor: Student[], fnComp: (a: Student, b: Student) => boolean) {
        let trocou
        do {
            trocou = false
            for (let i = 0; i < vetor.length - 1; i++) {
                if (fnComp(vetor[i], vetor[i + 1])) {
                    [[vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]]
                    trocou = true
                }
            }
        } while (trocou)
    };


    bubbleSortNameCrescent(students, (elem1: Student, elem2: Student) => {
        if (elem1.nome === elem2.nome) {
            return elem1.nome > elem2.nome
        }
        else return elem1.nome > elem2.nome
    })

    return (
        <Container>
            <Title>Alunos em ordem crescente de nome</Title>

            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>RA</td>
                        <td>Idade</td>
                        <td>Sexo</td>
                        <td>Média</td>
                        <td>Resultado</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => {
                        return (
                            <tr>
                                <td>{student.nome}</td>
                                <td>{student.RA}</td>
                                <td>{student.idade}</td>
                                <td>{student.sexo}</td>
                                <td>{student.media}</td>
                                <td>{student.resultado}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container >
    )
}