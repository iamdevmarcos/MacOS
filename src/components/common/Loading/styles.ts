import styled from "styled-components";

export const Container = styled.div`
    background-color:#000;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;

    .loadingArea {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }

    img {
        width:100px;
        height:100px;
    }

    p {
        margin-top:50px;
        color:#FFF;
    }
`;