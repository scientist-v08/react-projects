import Article from './article';

export type ContactsPropsType = {
  image: string;
  imageAlt: string;
  name: string;
  phoneNumber: string;
  email: string;
};

function App() {
  return (
    <div className="contacts">
      <Article
        image="/src/assets/mr-whiskerson.png"
        imageAlt="Mr. Whiskerson"
        name="Mr. Whiskerson"
        phoneNumber="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />

      <Article
        image="/src/assets/fluffykins.png"
        imageAlt="Fluffykins"
        name="Fluffykins"
        phoneNumber="(212) 555-2345"
        email="fluff@me.com"
      />

      <Article
        image="/src/assets/felix.png"
        imageAlt="Felix"
        name="Felix"
        phoneNumber="(212) 555-4567"
        email="thecat@hotmail.com"
      />

      <Article
        image="/src/assets/pumpkin.png"
        imageAlt="Pumpkin"
        name="Pumpkin"
        phoneNumber="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
