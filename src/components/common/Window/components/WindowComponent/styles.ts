import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    color:#000;
    height: calc(75vh - 35px);

    .comingSoon {
        font-size:50px;
        font-weight:bold;
    }

    .githubProfile {
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        width:100%;
        height:100%;
        line-height:40px;

        img {
            width:200px;
            height:200px;
            border-radius:50%;
        }

        .profileAbout {
            font-size:30px;
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
                font-size:40px;
                color:#000;
            }

            .profileDescItem {
                margin-top:60px;
                color:#000;
                font-size:20px;
                text-align:center;
            }

            .profileDescFooter {
                margin-top:40px;
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

    @media(max-width: 1440px) {
        .githubProfile {
            /* background-color:#FF0000; */
            line-height:30px;

            img {
                width:120px;
                height:120px;
                border-radius:50%;
            }

            .profileAbout {
                font-size:23px;
                border-bottom:1px solid rgba(0, 0, 0, 0.2);
                padding-bottom:5px;
            }

            .profileDesc{
                .profileDescTitle {
                    font-weight:bold;
                    font-size:40px;
                    color:#000;
                }

                .profileDescItem {
                    color:#000;
                    font-size:21.5px;
                    text-align:center;
                }

                .profileDescFooter {
                    margin-top:25px;
                }
            }
        }
    }
`;