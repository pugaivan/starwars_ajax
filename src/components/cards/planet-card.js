import style from './card.module.css'

const PlanetCard = ({ planet }) => {
  const onError = ({ currentTarget }) => {
    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

  return (
    <div className={style.card}>
      <img className={style.cardImg} src={planet.img} onError={onError} alt=""></img>
      <h3 className={style.headerText}>{planet.name}</h3>
      <ul>
        <li>Diameter: {planet.diameter}</li>
        <li>Terrain: {planet.terrain}</li>
        <li>Population: {planet.population}</li>
      </ul>
    </div>
  );
};

export default PlanetCard;
