import Link from 'next/link'
import { useRouter } from 'next/router'
import { Student } from '../../contexts/StudentsContext';
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


interface Test {
    idade: number
}


export function Header() {


    function objBubbleSort(arr: Test[], param: string) {
        let trocou = false;
        do {
            for (let i = 0; i < arr.length - 1; i++) {
                    if (arr[i][param] > arr[i + 1][param]) {
                        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                        trocou = true;
                    };
            };
        } while (trocou)

        console.log(arr)
    }

    const param = 'idade'
    const sla = [{ idade: 4 }, { idade: 7 }, { idade: 1 }]

    objBubbleSort(sla, 'idade')


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
                        <DropDownLink>crescente por nome</DropDownLink>
                        <DropDownLink>crescente por nome(aprovados)</DropDownLink>
                        <DropDownLink>decrescente por RA</DropDownLink>
                    </DropDownContent>
                </DropDown>
            </Links>
        </Container>
    )
}