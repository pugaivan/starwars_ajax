import style from './card.module.css'

const StarshipCard = ({ starship }) => {
  const onError = ({ currentTarget }) => {
    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

  return (
    <div className={style.card}>
      <img className={style.cardImg} src={starship.img} onError={onError} alt=""></img>
      <h3 className={style.headerText}>{starship.name}</h3>
      <ul>
        <li>Manufacturer: {starship.manufacturer}</li>
        <li>Maximum Speed: {starship.maxSpeed}</li>
        <li>Cargo Capacity: {starship.cargoCap}</li>
      </ul>
    </div>
  );
};

export default StarshipCard;
