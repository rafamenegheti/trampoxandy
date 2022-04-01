import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'IBM Plex Sans Arabic', sans-serif;
        background-color: #caf0f8;
    }
    @media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

@media (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
}
`