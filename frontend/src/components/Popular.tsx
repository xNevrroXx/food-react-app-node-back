import { memo, useState } from "react";
import useEffectOnce from "../hooks/useEffectOnce";
import FoodAPI from "../service/service";

const foodAPI = new FoodAPI();

const Popular = memo(() => {
  const [popular, setPopular] = useState([]);
  
  useEffectOnce(() => {
    foodAPI.getPopular({number: 9})
      // .then(data => setPopular(data.recipes))
      .catch(error => console.log(error))
  })

  return (
    <div>
      {popular.map((recipe: any) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        )
      })}
    </div>
  )
})

export default Popular;