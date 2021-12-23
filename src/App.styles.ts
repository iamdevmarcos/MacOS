import styled from "styled-components";

export const Container = styled.div`
    margin:0;
    padding:0;
    box-sizing:border-box;
    min-height:100vh;
    background-image: url('/assets/images/bg.jpg');
    background-position:center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;

    // -webkit-filter: blur(20px);
    // -moz-filter: blur(20px);
    // -o-filter: blur(20px);
    // -ms-filter: blur(20px);
    // filter:blur(20px);
`;

export const MenuTop = styled.div`
    position:fixed;
    width:100vw;
    top:0;
    height:40px;
    background-color:rgb(67, 14, 166, 0.8);
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const MenuTopLeft = styled.div`
    ul {
        padding:0px 10px;
    }
`;
export const MenuTopRight = styled.div`
    ul {
        padding:0px 20px;
    }
`;

export const MenuTopList = styled.ul`
    margin:0;
    display:flex;
    align-items:center;
    justify-content:center;
    list-style:none;
    color:#FFF;
    height:30px;

    li {
    //    text-shadow: 1px 1px 4px #333;
       padding:10px;
       font-size:14px;
       transition: all ease 0.1s;

       img {
           width:16px;
           height:16px;
           display:flex;
           align-items:center;
           justify-content:center;
       }

       &:hover {
           cursor:pointer;
           background-color:#25CE3A;
           border-radius:5px;
       }
    }
`;

export const MenuBottom = styled.div`
    background-color:rgb(67, 14, 166, 0.3);
    position:fixed;
    max-width:980px;
    height:70px;
    bottom:10px;
    border-radius:10px;
    display:flex;
`;