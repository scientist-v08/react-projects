export default function App() {
  /*function onSubmit(event: React.FormEvent): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    console.log(firstName, lastName, 'Submitted');
  }*/

  function onSubmitSignupForm(event: React.FormEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    /*const email = formData.get('email');
    const password = formData.get('password');
    const status = formData.get('status');
    const diet = formData.getAll('diet');
    const favColor = formData.get('favColor');
    console.log(email, password, status, diet);
    console.log(favColor);*/
    console.log(Object.fromEntries(formData));
    form.reset();
  }

  return (
    <>
      {/*<section>
        <form id="my-form" onSubmit={onSubmit}>
          <label>First Name: </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            className="input"
          />
          <br />
          <label>Last Name: </label>
          <input type="text" id="last-name" name="lastName" className="input" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>*/}

      <section>
        <h1>Signup form</h1>
        <form onSubmit={onSubmitSignupForm}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="joe@schmoe.com"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
          />
          <br />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Description"
            name="description"
          ></textarea>
          <br />
          <fieldset>
            <legend>Employement Status</legend>
            <label>
              <input
                className="radio"
                type="radio"
                name="status"
                value="unemployed"
              />
              <span>Unemployed</span>
            </label>
            <label>
              <input
                className="radio"
                type="radio"
                name="status"
                value="part-time"
              />
              <span>Part time</span>
            </label>
            <label>
              <input
                className="radio"
                type="radio"
                name="status"
                value="full-time"
              />
              <span>Full time</span>
            </label>
          </fieldset>
          <fieldset>
            <legend>Dietary Restrictions</legend>
            <label>
              <input
                className="radio"
                type="checkbox"
                name="diet"
                value="vegan"
              />
              <span>Vegan</span>
            </label>
            <label>
              <input
                className="radio"
                type="checkbox"
                name="diet"
                value="kosher"
              />
              <span>Kosher</span>
            </label>
            <label>
              <input
                className="radio"
                type="checkbox"
                name="diet"
                value="lactose"
              />
              <span>Lactose intolerant</span>
            </label>
          </fieldset>
          <label htmlFor="fav">Favorite Color</label>
          <select name="favColor" id="fav">
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Indigo">Indigo</option>
            <option value="Violet">Violet</option>
          </select>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}
