import {
    Tablee,
    Thead,
    TrHead,
    ThHead,
    Tbody,
    TrBody,
    TdBody
} from "./styles";

interface Student {
    nome: string,
    RA: string,
    idade: number,
    sexo: string,
    media: number,
    resultado: string,
    id: number
};

interface TablesProps {
    students: Student[]
};

export default function Table({ students }: TablesProps) {

    return(

        <Tablee>
                <Thead>
                    <TrHead>
                        <ThHead>Nome</ThHead>
                        <ThHead>RA</ThHead>
                        <ThHead>Idade</ThHead>
                        <ThHead>Sexo</ThHead>
                        <ThHead>Média</ThHead>
                        <ThHead>Resultado</ThHead>
                    </TrHead>
                </Thead>
                <Tbody>
                    {students.map(student => {
                        return (
                            <TrBody key={student.id}>
                                <TdBody>{student.nome}</TdBody>
                                <TdBody>{student.RA}</TdBody>
                                <TdBody>{student.idade}</TdBody>
                                <TdBody>{student.sexo}</TdBody>
                                <TdBody>{student.media}</TdBody>
                                <TdBody>{student.resultado}</TdBody>
                            </TrBody>
                        )
                    })}
                </Tbody>
            </Tablee>
    )
} 