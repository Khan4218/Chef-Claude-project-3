import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../data/ai";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([])

  const [recipeShown, setRecipeShown] = React.useState(false)
  const [recipeMarkdown, setRecipeMarkdown] = React.useState("")

  async function getRecipe() {
    const markdown = await getRecipeFromMistral(ingredients)
    if (!markdown) {
      setRecipeMarkdown("Sorry, no recipe available right now.");
    } else {
      setRecipeMarkdown(markdown);
    }
    setRecipeShown(true);



  }


  function handleOnSubmit(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient]
    })
  }
  function renderRecipeSection() {
    if (ingredients.length > 3) {
      return (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
        </div>)
    }
  }
  return (
    <main>
      <form action={handleOnSubmit} className="add-ingredient-form">
        <input
          className="input"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient" />
        <button className="button" >+ Add ingredient </button>
      </form>

      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} />}
      {renderRecipeSection()}
      {recipeShown && <ClaudeRecipe markdown={recipeMarkdown} />}
    </main>
  )

}