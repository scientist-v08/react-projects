import { useState } from 'react';
import SectionRecipe from './section-recipe';
import SectionForm from './section-form';

export default function Main() {
  const [screenInForm, setScreenInForm] = useState<boolean>(true);

  function goToTheRecipes(): void {
    setScreenInForm((prev) => !prev);
  }

  return (
    <div>
      {screenInForm ? (
        <SectionForm goToRecipes={goToTheRecipes} />
      ) : (
        <SectionRecipe goToRecipes={goToTheRecipes} />
      )}
    </div>
  );
}
