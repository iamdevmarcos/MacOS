import styled from "styled-components";

export const Container = styled.div`
    background-color:#FEF5EC;
    width:700px;
    height:75vh;
    position:relative;
    bottom:20px;
    border-radius:10px;
`;

export const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding:10px 10px;
    background-color:#E9DEE0;
    border-radius: 10px 10px 0px 0px;

    div {
        display:flex;
        align-items:center;
        justify-content: center;
        padding:5px;
        margin-left:3px;
        margin-right:3px;
        width:10px;
        height:10px;
        border-radius:50%;
        cursor:pointer;

        img {
            width:10px;
            height:10px;
            opacity:0.5;
            position:fixed;
        }
    }
`;