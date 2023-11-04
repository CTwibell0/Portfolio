import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #223744;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  
  // padding: 1%
  // padding: 0.2rem calc((100vw - 1000px) / 2);
  // z-index: 12;
`;

export const Title = styled(Link)`
  color: #808000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  background-color: aliceblue;
  padding-left: 15px;
  padding-right: 15px;
`
  
export const NavLink = styled(Link)`
  color: #808080;
  // background-color: #000000;
  
  display: flex;    
  align-items: center;
  // padding-right: 130px;
  text-decoration: none;
  padding: 0 1rem;
  // height: 100%;
  cursor: pointer;
  &:hover{
    color: #ff00f7;
  }
  &.active {
    color: #00ffec;   //this is for current button color
  }
  
`;
  

  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -24px;
  /* Second Nav */
  margin-right: 24px; 
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
  display: none;
  }
`;
  
// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #808080;
//   padding: 10px 22px;
//   color: #000000;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #808080;
//   }
// `;