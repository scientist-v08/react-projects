import { ContactsPropsType } from './app';

export default function Article(props: ContactsPropsType) {
  return (
    <article className="contact-card">
      <img src={props.image} alt={props.imageAlt} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="/src/assets/phone-icon.png" alt="phone icon" />
        <p>{props.phoneNumber}</p>
      </div>
      <div className="info-group">
        <img src="/src/assets/mail-icon.png" alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
}
