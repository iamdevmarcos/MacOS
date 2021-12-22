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
    height:25px;
    background-color:#CCC;
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