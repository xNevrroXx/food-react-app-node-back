import { useState, useEffect } from "react";
import useEffectOnce from "../hooks/useEffectOnce";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import FoodAPI from "../service/service";

//styles
import '@splidejs/splide/dist/css/splide.min.css';
import {Wrapper, Card, Gradient} from './styled-components';

const {getVeggie} = new FoodAPI();

// main component
const Veggie = () => {
  const [veggie, setVeggie] = useState<any>([]);

  useEffectOnce(() => {
    getVeggie({number: 9})
        .then(data => setVeggie(data))
        .catch(error => console.log(error))
  })

  useEffect(() => {
    console.log(veggie)
  }, [veggie])

  return (
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>

        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem"
        }}>
          {veggie.map(({id, title, image}: any) => {
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
export default Veggie;