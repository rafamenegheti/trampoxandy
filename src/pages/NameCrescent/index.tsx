import { useEffect, useState } from "react";
import axios from 'axios'
import {
    Container,
    Title,
} from "./styles";
import Table from "../../components/Table";


export default function NameCrescent() {

    interface Student {
        nome: string,
        RA: string,
        idade: number,
        sexo: string,
        media: number,
        resultado: string,
        id: number
    }

    const [students, setStudents] = useState([] as Student[]);

    useEffect(() => {
        axios.get('http://localhost:3002/students')
            .then(data => setStudents(data.data))
    }, [])

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

            <Table students={students}/>
        </Container >
    )
}