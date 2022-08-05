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
      <div>
        <Grid>
          {cuisine.map(({title, image, id}: any) => {
            return (
              <Card>
                <p>{title}</p>
                <img src={image} alt={title}/>
                <Gradient/>
              </Card>
            )
          })}
        </Grid>
      </div>
    );
};

export default Cuisine;