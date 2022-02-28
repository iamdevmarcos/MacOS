import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-image: url("/assets/images/bg.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuTop = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  height: 40px;
  background-color: rgb(67, 14, 166, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
`;

export const MenuTopLeft = styled.div`
  ul {
    padding: 0px 10px;
  }
`;
export const MenuTopRight = styled.div`
  ul {
    padding: 0px 20px;
  }
`;

export const MenuTopList = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: #fff;
  height: 30px;

  li {
    padding: 10px;
    font-size: 14px;
    transition: all ease 0.1s;

    img {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      cursor: pointer;
      background-color: #25ce3a;
      border-radius: 5px;
    }
  }
`;

export const MenuBottom = styled.div`
  background-color: rgb(67, 14, 166, 0.3);
  position: fixed;
  max-width: 980px;
  height: 70px;
  bottom: 10px;
  border-radius: 10px;
  display: flex;
`;

export const Border = styled.div`
  border: 0.2px solid #25ce3a;
  border-radius: 10px;
  background-color: #25ce3a;
  margin: 10px 0px;
  opacity: 0.4;
`;
