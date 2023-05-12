import styled from "styled-components";

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.background};
    color: ${(props) => props.textcolor};
`