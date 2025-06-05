export default function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>
  })
  return (<section >
    <h2>Ingredients on hand:</h2>
    <ul className="ingredients-list" aria-live="polite">
      {ingredientsListItems}
    </ul>
  </section>)
}