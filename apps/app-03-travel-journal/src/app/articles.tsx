import { Article } from './article';
import { data } from './data';

export default function Entry() {
  return (
    <>
      {data.map((item) => (
        <article className="article" key={item.id}>
          <Article
            id={item.id}
            img={item.img}
            title={item.title}
            country={item.country}
            googleMapsLink={item.googleMapsLink}
            dates={item.dates}
            text={item.text}
          />
        </article>
      ))}
    </>
  );
}
