import { createContext, ReactNode, useContext, useEffect, useState } from "react";

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

    useEffect(() => {
        const localStudents = localStorage.getItem("trampoxandy:students");
        const parsed = JSON.parse(localStudents!)
        setStudents(parsed || [])
    }, [])

    function addStudent(student: Student): void {
        setStudents(prevValue => [...prevValue, student]);
        localStorage.setItem("trampoxandy:students", JSON.stringify(students))
    };

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