import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;


export const SearchContainer = styled.div`
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem
`

export const SearchField = styled.input`
    border-radius: 5px;
    width: 20rem;
    height: 2rem;

`;

export const SearchButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.shape};
    
    font-weight: bold;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
    transform: translate(-1px, -1px);
    }
`;