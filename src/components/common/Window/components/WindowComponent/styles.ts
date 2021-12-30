import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    .githubProfile {
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;

        img {
            width:150px;
            height:150px;
            border-radius:50%;
        }

        p {
            font-size:30px;
        }

        hr {
            width:300px;
            height:0.2px;
            background-color: #400EAD;
        }
    }
    
    .componentImage {
        width:150px;
        height:150px;
    }
`;