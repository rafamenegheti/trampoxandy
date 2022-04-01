import styled from "styled-components";


type ButtonProps = {
    typeProp: 'create' | 'cancel'
}


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 5rem;

    max-width: 500px;
`


export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`


export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text_dark};
    margin-top: 1rem;
`


export const Input = styled.input`
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0.5rem;
    margin-top: 0.2rem;
`
export const Select = styled.select`
    width: 100%;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0.5rem;
    margin-top: 0.2rem;
`

export const ButtonStyled = styled.button<ButtonProps>`
    background-color: ${({ theme, typeProp }) => typeProp === 'create' ? theme.colors.success_light : theme.colors.attention_light};
    color: ${({ theme }) => theme.colors.shape};
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    font-weight: bold;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
    transform: translate(-1px, -1px);
}
`


export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 2rem;
`


export const Error = styled.small`
    color: ${({ theme }) => theme.colors.attention};
    font-size: 0.7rem;
    
    margin-top: 0.2rem;
`