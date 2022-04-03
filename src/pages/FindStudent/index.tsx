import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../../components/Table";
import {
    Container,
    SearchField,
    SearchButton,
    SearchContainer
} from "./styles";


export default function FindStudent() {

    interface Student {
        nome: string,
        RA: string,
        idade: number,
        sexo: string,
        media: number,
        resultado: string,
        id: number
    };

    const [students, setStudents] = useState([] as Student[]);
    const [searchedStudent, setSearchedStudent] = useState([] as Student[])
    const [notFind, setNotFind] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3002/students')
            .then(data => setStudents(data.data))
    }, []);

    function selectionSort(vetor: Student[], fnComp: (elem1: Student, elem2: Student) => boolean) {
        for (let posSel = 0; posSel < vetor.length - 1; posSel++) {
            let posMenor = posSel + 1
            for (let i = posMenor + 1; i < vetor.length; i++) {
                if (fnComp(vetor[posMenor], vetor[i])) {
                    posMenor = i
                }
            }
            if (fnComp(vetor[posSel], vetor[posMenor])) {
                [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
            }
        }
    };

    selectionSort(students, (elem1: Student, elem2: Student) => {
        if (elem1.nome === elem2.nome) {
            return elem1.nome > elem2.nome
        } else {
            return elem1.nome > elem2.nome
        }
    });

    function buscaBinaria(vetor: Student[], busca: string, fnComp: (valorMeio: Student, valorBusca: string) => 0 | 1 | -1) {
        let ini = 0
        let fim = vetor.length - 1

        while (fim >= ini) {
            let meio = Math.floor((ini + fim) / 2)
            switch (fnComp(vetor[meio], busca)) {
                case 0:
                    return meio

                case 1:
                    ini = meio + 1
                    break

                default:
                    fim = meio - 1
            }
        }
        return -1
    };


    function comparar(valorMeio: Student, valorBusca: string) {
        if (valorBusca.toLocaleLowerCase() === valorMeio.nome.toLocaleLowerCase()) return 0
        else if (valorBusca.toLocaleLowerCase() > valorMeio.nome.toLocaleLowerCase()) return 1
        else return -1
    };


    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    };

    function handleSubmit() {
        const stu = buscaBinaria(students, search, comparar);
        const stuu = students[stu]
        setSearchedStudent([stuu])

        if (!stuu) {
            setNotFind(true)
        }
        else setNotFind(false)
    };

    return (

        <Container>
            <SearchContainer>
                <SearchField
                    onChange={(event) => handleSearch(event)}
                    placeholder="Pesquisar por nome"
                />
                <SearchButton
                    onClick={() => handleSubmit()}
                >
                    Pesquisar
                </SearchButton>
            </SearchContainer>
            {
                notFind &&
                <h5>Aluno não encontrado, tente novamente</h5>
            }
            {
                !notFind &&
                <Table students={searchedStudent} />
            }
        </Container>
    )
}