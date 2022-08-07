// styled components
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

const Wrapper = styled(motion.div)`
  margin: 4rem 0;
`;

const Card = styled(NavLink)`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  display: block;
  
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    z-index: 10;
    position: absolute;
    width: 100%;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

const ListCategory = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transform: scale(0.8);
  width: 6rem;
  height: 6rem;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 50%;

  h4 {
    color: white;
    text-decoration: none;
  }

  svg {
    fill: white;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
`;

const Form = styled.form`
  margin: 0 auto  ;
  width: 80%;
  position: relative;
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    fill: white;
  }
`;

const Recipe = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: start;
  gap: 4rem;
  img {
    border-radius: 2rem;
    object-fit: cover;
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  .wrapper-buttons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    button {
      cursor: pointer;
      display: block;
      width: 8rem;
      height: 2.5rem;
      color: black;
      background: transparent;
      border: black .13rem solid;
      &.active {
        border: transparent 0.13rem solid;
        border-image: linear-gradient( #f27121, #e94057) 1;
        background: linear-gradient(#f27121, #e94057);
        color: white;
      }
    }
  }
`;

const Logo = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export {Wrapper, Card, Gradient, ListCategory, SLink, Grid, Form, Recipe, Logo, Nav};