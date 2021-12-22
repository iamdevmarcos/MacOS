import styled from "styled-components";

export const Container = styled.div`
    width:50px;
    height:50px;
    background-color:#CCC;
    margin:10px;
    cursor:pointer;
    transition: all ease 0.2s;
    border-radius:10px;

    &&:hover {
        width:100px;
        height:100px;
        margin-top:-30px; 
    }
`;