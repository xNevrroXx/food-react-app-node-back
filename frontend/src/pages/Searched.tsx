import {Card, Gradient, Wrapper, Grid, SLink} from "../components/styled-components";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import FoodAPI from "../service/service";

const {getByName} = new FoodAPI();

const Searched = () => {
  const param = useParams();
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    getByName({query: param.search!.toString(), number: 9})
      .then(setRecipes)
      .catch(error => console.log(error));
  }, [param.search])

  return (
    <Wrapper>
      <Grid>
        {recipes.map(({id, title, image}: any) => {
          return (
            <Card key={id}>
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

export default Searched;