import { useParams } from 'react-router-dom';

function Food() {
  const { name } = useParams();
  if (!name) {
    return <p>No food name provided in URL</p>;
  }
  const url = `https://source.unsplash.com/1600x900/?${name}`;
  return (
    <>
      <p>I love to eat {name}</p>
      <img
        src={url}
        alt={name}
        onError={(e) => {
          e.currentTarget.src = 'https://source.unsplash.com/1600x900/?food';
        }}
      />
    </>
  );
}

export default Food;
