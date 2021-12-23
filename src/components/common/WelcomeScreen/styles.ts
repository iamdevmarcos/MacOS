import styled from "styled-components";

export const Container = styled.div`
    min-height:100vh;
    background-image: url('/assets/images/bg.jpg');
    bacgrkound-position:center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;

    .content {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100vw;
        height:100vh;
        background-color:transparent;
        backdrop-filter:blur(20px);

        span {
            color:#FFF;
            font-size:200px;
            font-weight:bold;
        }
    }
`;