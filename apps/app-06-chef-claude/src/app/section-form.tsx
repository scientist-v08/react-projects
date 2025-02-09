import { useState } from 'react';
import { SectionFormPropsType } from '../section-form-props.type';

export default function SectionForm(props: SectionFormPropsType) {
  const [ingredients, setIngredients] = useState<string[]>([
    'Basmati rice',
    'Green peas',
    'Carrot',
    'Spices',
    'Salt',
  ]);

  function onSubmitClick(event: React.FormEvent): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const newIngredient = new FormData(form).get('ingredient') as string;
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    form.reset();
  }

  return (
    <main>
      <form onSubmit={onSubmitClick} className="add-ingredient-form">
        <input type="text" placeholder="e.g. oregano" name="ingredient" />
        <button type="submit">Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onMouseDown={props.goToRecipes}>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
