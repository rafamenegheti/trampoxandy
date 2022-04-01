import Link from 'next/link'
import { useRouter } from 'next/router'
import { Student, useStudents } from '../../contexts/StudentsContext';
import {
    Container,
    Logo,
    Links,
    LinkButton,
    DropDown,
    DropDownButton,
    DropDownLink,
    DropDownContent
} from './styles'


export function Header() {

    const { students } = useStudents();

    console.log(students)

 

    return (
        <Container>
            <Logo>
                TrampoDoXandy
            </Logo>
            <Links>
                <Link href={'/AddStudent'}>
                    <LinkButton>
                        Adcionar aluno
                    </LinkButton>
                </Link>
                <LinkButton>
                    Pesquisar aluno
                </LinkButton>
                <DropDown className="drop">
                    <DropDownButton>
                        Relatórios
                    </DropDownButton>
                    <DropDownContent className="content">
                        <DropDownLink
                            href={'/NameCrescent'}
                        >crescente por nome</DropDownLink>
                        <DropDownLink>crescente por nome(aprovados)</DropDownLink>
                        <DropDownLink>decrescente por RA</DropDownLink>
                    </DropDownContent>
                </DropDown>
            </Links>
        </Container>
    )
}