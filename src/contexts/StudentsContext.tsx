import { createContext, ReactNode, useContext, useState } from "react";

type StudentsContextValues = {
    addStudent: (student: Student) => void;
    students: Student[]
};

export interface Student {
    nome: string;
    RA: number;
    idade: string;
    sexo: 'm' | 'f';
    media: number;
    resultado: 'aprovado' | 'reprovado'
}

interface StudentsContextProps {
    children: ReactNode;
  };

export const StudentsContext = createContext({} as StudentsContextValues);

export function StudentsContextProvider({
    children
}: StudentsContextProps) {
    
    const [students, setStudents] = useState([] as Student[]);

    function addStudent(student: Student): void {
        setStudents(prevValue => [...prevValue, student]);
    }

    const values: StudentsContextValues = {
        addStudent,
        students
    };

    return(
        <StudentsContext.Provider value={values}>
            {children}
        </StudentsContext.Provider>
    )
};

export const useStudents = () => useContext(StudentsContext);