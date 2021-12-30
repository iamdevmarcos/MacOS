import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    .githubProfile {
        height: calc(75vh - 45px);
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;

        img {
            width:150px;
            height:150px;
            border-radius:50%;
        }

        .profileAbout {
            font-size:23px;
            border-bottom:1px solid rgba(0, 0, 0, 0.2);
            padding-bottom:5px;
        }

        .profileDesc{
            display:flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            margin-bottom:10px;

            .profileDescTitle {
                font-weight:bold;
                font-size:30px;
                color:#000;
            }

            .profileDescItem {
                margin-top:15px;
                color:#000;
                font-size:20px;
            }

            .profileDescFooter {
                margin-top:15px;
                color:#400EA8;
                font-weight:bold;
                font-size:20px;

                a {
                    text-decoration:none;
                    border-bottom:1px solid #e1e1e1;
                }
            }
        }
    }
    
    .componentImage {
        width:150px;
        height:150px;
    }
`;