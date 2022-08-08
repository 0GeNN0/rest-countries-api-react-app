import { Link } from "react-router-dom";

export default function Country({ name, population, region, capital, flag, id, isDark }) {

  const styles = {
    color: isDark ? '#FFF' : '#111517',
    backgroundColor: isDark ? '#2b3945' : '#FFF',
    boxShadow: isDark ? '0 0 10px #11151752' : '0 0 20px rgba(0, 0, 0, .1)'
  };

  return (
    <section className="country" style={styles}>
      <Link to={`/country/${id}`}>
        <div className="img-parent">
          <img src={flag} alt="country" className="img" />
        </div>
      </Link>
      <article className="text">
        <h2 className="name">{name}</h2>
        <p>Population: {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </article>
    </section>
  );
}
