import { useState, useEffect } from "react";
import useEffectOnce from "../hooks/useEffectOnce";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import FoodAPI from "../service/service";

//styles
import '@splidejs/splide/dist/css/splide.min.css';
import {Wrapper, Card, Gradient} from './styled-components';

const foodAPI = new FoodAPI();

// main component
const Popular = () => {
  const [popular, setPopular] = useState<any>([]);
  
  useEffectOnce(() => {
      foodAPI.getPopular({number: 9})
          .then(data => setPopular(data))
          .catch(error => console.log(error))
  })

  useEffect(() => {
    console.log(popular)
  }, [popular])

  return (
    <Wrapper>
      <h3>Trending</h3>

      <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: "free",
        gap: "5rem"
      }}>
        {popular.map(({id, title, image}: any) => {
          return(
              <SplideSlide key={id}>
                <Card to={`/recipes/${id}`}>
                  <p>{title}</p>
                  <img src={image} alt={title}/>
                  <Gradient/>
                </Card>
              </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
  )
}

export default Popular;