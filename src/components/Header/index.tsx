import Link from 'next/link'
import { useRouter } from 'next/router'
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

    const router = useRouter()

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
                <LinkButton
                    onClick={() => router.push('/FindStudent')}
                >
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
                        <DropDownLink
                            href={'/AprovedNameCrescent'}
                        >crescente por nome(aprovados)</DropDownLink>
                        <DropDownLink
                            href={'/RADecrescent'}
                        >decrescente por RA</DropDownLink>
                    </DropDownContent>
                </DropDown>
            </Links>
        </Container>
    )
}