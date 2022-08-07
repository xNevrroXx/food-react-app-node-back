import {Recipe as RecipeStyle} from "../components/styled-components";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import FoodAPI from "../service/service";

const {getById} = new FoodAPI();

const Recipe = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState<any>();
  const [activeTab, setActiveTab] = useState<"instructions"|"ingredients">("ingredients")

  useEffect(() => {
    getById(params.id!)
      .then(setRecipe)
      .catch(error => console.log(error));
  }, [params.id])

  return (
    <RecipeStyle
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      {recipe ?
        <>
          <div>
            <h4>{recipe.title}</h4>
            <img src={recipe.image} alt={recipe.title}/>
          </div>
          <div className={"description"}>
            <div className={"wrapper-buttons"}>
              <button onClick={() => setActiveTab("instructions")} className={activeTab === "instructions" ? "active" : undefined}>Instructions</button>
              <button onClick={() => setActiveTab("ingredients")} className={activeTab === "ingredients" ? "active" : undefined}>Ingredients</button>
            </div>
            {activeTab === "instructions" ? (
              <div className={"instructions"}>
                <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
                <p dangerouslySetInnerHTML={{__html: recipe.instructions}}></p>
                {/*<ol>*/}
                {/*  {recipe.analyzedInstructions[0]['steps'].map((step: any) => {*/}
                {/*    return (*/}
                {/*      <li key={step.number}>{step.step}</li>*/}
                {/*    )*/}
                {/*  })}*/}
                {/*</ol>*/}
              </div>
            )
            : (
                <div className={"ingredients"}>
                  <ul>
                    {recipe["extendedIngredients"].map((ingredient: any) => {
                      return <li key={ingredient.id}>{ingredient.name}</li>
                    })}
                  </ul>
                </div>
              )}
          </div>
        </>
        : <></>}
    </RecipeStyle>
  )
}

export default Recipe;