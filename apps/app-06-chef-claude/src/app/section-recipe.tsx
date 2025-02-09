import { SectionFormPropsType } from '../section-form-props.type';

export default function SectionRecipe(props: SectionFormPropsType) {
  return (
    <section className="section__recipe__margin">
      <h2>
        <span style={{ cursor: 'pointer' }} onMouseDown={props.goToRecipes}>
          &#8592;
        </span>{' '}
        Chef Claude Recommends:
      </h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <p>
          Based on the ingredients you have available, I would recommend making
          a simple a delicious <strong>Vegetable Pulao</strong>. Here is the
          recipe:
        </p>
        <h3>Vegetable Pulao</h3>
        <strong>Ingredients:</strong>
        <ul>
          <li>2 cups basmati rice</li>
          <li>1 cup green peas</li>
          <li>2 medium carrots, diced</li>
          <li>
            Spices (2 bay leaves, 4 cardamom pods, 1 cinnamon stick, 1 teaspoon
            cumin seeds)
          </li>
          <li>Salt to taste</li>
          <li>4 cups water</li>
          <li>2 tablespoons oil or ghee</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
          <li>
            Rinse the basmati rice thoroughly until the water runs clear. Soak
            it in water for 15-20 minutes, then drain.
          </li>
          <li>
            Heat oil or ghee in a deep pot over medium heat. Add the whole
            spices (bay leaves, cardamom, cinnamon, cumin seeds) and let them
            sizzle for 30 seconds.
          </li>
          <li>
            Add the diced carrots and green peas. Sauté for 2-3 minutes until
            the vegetables start to soften.
          </li>
          <li>
            Add the drained rice and stir gently to coat with oil and spices.
            Sauté for 1-2 minutes.
          </li>
          <li>
            Add water and salt. Bring to a boil, then reduce heat to low, cover
            with a tight-fitting lid, and cook for 15-18 minutes until the rice
            is tender and water is absorbed.
          </li>
          <li>
            Let it rest for 5 minutes, then fluff with a fork before serving.
          </li>
        </ol>
      </article>
    </section>
  );
}
