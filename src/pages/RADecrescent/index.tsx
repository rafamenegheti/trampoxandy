import { useEffect, useState } from "react";
import axios from 'axios'
import {
    Container,
    Title,
} from "./styles";
import Table from "../../components/Table";


export default function RADecrescent() {

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

    function quicksort(array: Student[]): Student[] {
        if (array.length <= 1) {
          return array;
        }
      
        var pivot = array[0];
        
        var left = []; 
        var right = [];
      
        for (var i = 1; i < array.length; i++) {
          Number(array[i].RA) > Number(pivot.RA) ? left.push(array[i]) : right.push(array[i]);
        }
      
        return quicksort(left).concat(pivot, quicksort(right));
      };


    const sortedStudents = quicksort(students)

    return (
        <Container>
            <Title>Alunos em ordem decrescente de RA</Title>

            <Table students={sortedStudents}/>
        </Container >
    )
}