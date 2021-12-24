import styled from "styled-components";

type ContainerProps = {
    fadeOut: boolean;
}

export const Container = styled.div(({ fadeOut }: ContainerProps) => (`
    min-height:100vh;
    background-image: url('/assets/images/bg.jpg');
    bacgrkound-position:center;
    background-size:cover;
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

    .content {
        display:flex;
        align-items:center;
        justify-content:center;

        span {
            color:#FFF;
            font-size:200px;
            font-weight:bold;
        }
    }
`));