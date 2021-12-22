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

    .loading {
        margin-top:200px;
        width:50px;
        height:50px;
    }

    img {
        position:fixed;
        width:100px;
        height:100px;
    }
`;