// styled components
import styled from "styled-components";

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
  a {
    text-decoration: none;
    svg {
      display: block;
      margin: 0 auto;
    } 
  }
`;

export {Wrapper, Card, Gradient, ListCategory};