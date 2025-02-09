export type ArticleType = {
  id: number;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  country: string;
  googleMapsLink: string;
  dates: string;
  text: string;
};

export function Article(props: ArticleType) {
  return (
    <div>
      <img src={props.img.src} alt={props.img.alt} />
      <div>
        <div>
          <span role="img" aria-label="location" aria-labelledby="author">
            📍
          </span>
          <span>{props.country}</span>
          <a className="link" href={props.googleMapsLink}>
            View on google maps
          </a>
        </div>
        <h2>{props.title}</h2>
        <h4>{props.dates}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
