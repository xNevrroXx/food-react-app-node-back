// styled components
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img {
    border-radius: 2rem;
    position: absolute;
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

export {Wrapper, Card, Gradient, ListCategory, SLink, Grid, Form};