import style from './card.module.css'

const PersonCard = ({ person }) => {
  const onError = ({ currentTarget }) => {
    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

  return (
    <div className={style.card}>
      <img className={style.cardImg} src={person.img} onError={onError} alt=""></img>
      <h3 className={style.headerText}>{person.name}</h3>
      <ul>
        <li>Gender: {person.gender}</li>
        <li>Birth Year: {person.birthYear}</li>
        <li>Eye Color: {person.eyeColor}</li>
      </ul>
    </div>
  );
};

export default PersonCard;
