export default function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>
  })
  return (<section >
    <span>Add mininum four ingredients to get recipe </span>
    <h2>Ingredients on hand:</h2>
    <ul className="ingredients-list" aria-live="polite">
      <div ref={props.ref}>
        {ingredientsListItems}
      </div>
    </ul>
  </section>)
}
