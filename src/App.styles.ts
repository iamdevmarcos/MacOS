import styled from "styled-components";

export const Container = styled.div`
    margin:0;
    padding:0;
    box-sizing:border-box;
    min-height:100vh;
    background-image: url('/assets/images/wallpaper.jpg');
    background-position:center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const MenuTop = styled.div`
    position:fixed;
    width:100vw;
    top:0;
    height:30px;
    background-color:rgb(235, 115, 141, 0.5);
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const MenuTopLeft = styled.div`
    margin:0;
    padding:0;
`;
export const MenuTopRight = styled.div`
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
       text-shadow: 1px 1px 4px #333;
       padding:10px;
       font-size:14px;
       transition: all ease 0.2s;

       &:hover {
           cursor:pointer;
           background-color:#333;
       }
    }
`;

export const MenuBottom = styled.div`
    background-image: linear-gradient(to right, rgba(138, 87, 190, 0.1), rgba(135, 92, 198, 0.4));
    position:fixed;
    max-width:980px;
    height:70px;
    bottom:10px;
    border-radius:10px;
    display:flex;
`;