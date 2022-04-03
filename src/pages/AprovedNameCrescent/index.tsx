import { useEffect, useState } from "react";
import axios from 'axios'
import {
    Container,
    Title,
} from "./styles";
import Table from "../../components/Table";


export default function AprovedNameCrescent() { 

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

    function merge(left: Student[], right: Student[]): Student[] {
        let arr = []

        while (left.length && right.length) {

            if (compare(left[0], right[0])) {
                arr.push(left.shift())  
            } else {
                arr.push(right.shift()) 
            }
        }
        
        return [ ...arr, ...left, ...right ] as Student[]
    }

    function compare(elem1: Student, elem2: Student) {
        if (elem1.nome === elem2.nome) {
            return elem1.nome > elem2.nome
        }
        else return elem1.nome < elem2.nome
    };

    function mergeSort(array: Student[]): Student[] {
        const half = array.length / 2
        
        if(array.length < 2){
          return array 
        }
        
        const left = array.splice(0, half)
        return merge(mergeSort(left),mergeSort(array))
      };

      const filteredStudents = students.filter((students) => students.resultado === 'aprovado')

      const mergedStudents = mergeSort(filteredStudents);

    return (
        <Container>
            <Title>Alunos em ordem crescente de nome(somente aprovados)</Title>

            <Table students={mergedStudents}/>
        </Container >
    )
};