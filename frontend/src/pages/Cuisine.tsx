import {useEffect, useState} from "react";
import {useParams, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import useEffectOnce from "../hooks/useEffectOnce";
import FoodAPI from "../service/service";
import {Card, Gradient, Wrapper, Grid} from "../components/styled-components";

const {getCuisine} = new FoodAPI();

const Cuisine = () => {
  const [cuisine, setCuisine] = useState<any>([]);
  const params = useParams();

  useEffect(() => {
    getCuisine({cuisine: params.type!, number: 9})
      .then(setCuisine)
      .catch(error => console.log(error))
  }, [params.type])

    return (
      <Wrapper
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
      >
        <Grid>
          {cuisine.map(({title, image, id}: any) => {
            return (
              <Card to={`/recipes/${id}`} key={id}>
                <p>{title}</p>
                <img src={image} alt={title}/>
                <Gradient/>
              </Card>
            )
          })}
        </Grid>
      </Wrapper>
    );
};

export default Cuisine;