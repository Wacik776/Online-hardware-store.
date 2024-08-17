import { useSelector } from "react-redux";
import styles from "../../styles/sideBar/sideBar.module.scss";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const { list } = useSelector(({ categories }) => categories);
  let listFive = list.filter((_,i)=>i<=5)
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {listFive ? (
            listFive.map(({ id, name }) => (
              <li key={id}>
                <NavLink
                  to={`/categories/${id}`}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ""}`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))
          )
           : (
            <div>Loading...</div>
          )}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & conditions
        </a>
      </div>
    </section>
  );
};
