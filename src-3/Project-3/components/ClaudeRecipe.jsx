import { marked } from "marked";

export default function ClaudeRecipe({ markdown }) {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article
        className="suggested-recipe-container"
        aria-live="polite"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />


    </section>
  )
}