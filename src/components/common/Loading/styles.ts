import styled from "styled-components";

type ContainerProps = {
    fadeOut: boolean;
}

export const Container = styled.div(({ fadeOut }: ContainerProps) => (`
    background-image: url('/assets/images/bg.jpg');
    bacgrkound-position:center;
    background-size:cover;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    
    .bg {
        width:100vw;
        height:100vh;
        background-color:transparent;
        backdrop-filter:blur(20px);
        opacity: ${(fadeOut ? 0 : 1)};
        transition: opacity 1s linear;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    
    .loadingArea {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    
    .logo {
        position:fixed;
        width:100px;
        height:100px;
    }

    .loading {
        margin-top:300px;
        width:50px;
        height:50px;
    }

    
`));