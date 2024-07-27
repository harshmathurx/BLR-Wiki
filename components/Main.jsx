import styles from "./Main.module.css";

const Main = ({ categories }) => {
  const d = Date.now();
  return (
    <>
      {categories.map((category, i) => (
        <div key={i + d} className={styles.bodyBox}>
          <div className={styles.bodyBoxHeader}>
            <h1>
              {category.emoji} {category.name}
            </h1>
          </div>
          <div className={styles.bodyBoxBody}>
            <ol className={styles.bodyBoxList}>
              {category.places.map((place, placeIndex) => (
                <li key={placeIndex} className={styles.bodyBoxListItem}>
                  <a
                    href={place.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {">"} {place.name} <span className={styles.arrowIcon}></span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </>
  );
};

export default Main;
