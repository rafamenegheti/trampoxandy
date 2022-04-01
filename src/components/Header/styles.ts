import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #4895ef;
`;


export const Logo = styled.p`

`; 
export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem

`; 
export const LinkButton = styled.button`
    background-color: #ade8f4;
    padding: 0.4rem;
    border-radius: 2px;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    };

`; 

export const DropDown = styled.div`
  position: relative;
  display: inline-block;

  &:hover .content {
    display: block;
  }
`;

export const DropDownButton = styled.button`
background-color: #ade8f4;
    padding: 0.4rem;
    border-radius: 2px;
    border: none;
    cursor: pointer;
`;

export const DropDownLink = styled.a`
color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  
  &:hover {
    background-color: #f1f1f1
  }
`;

export const DropDownContent = styled.div`
    display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;



`;