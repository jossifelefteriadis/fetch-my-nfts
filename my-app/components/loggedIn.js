import styles from "../styles/LoggedIn.module.css";

export default function LoggedIn() {
  return (
    <section className={styles.loggedInMain}>
      <section className={styles.loggedInInfo}>
        <section className={styles.loggedInAccount}>
          <h2>NFT #1</h2>
          <section>
            <p>NFT HERE</p>
          </section>
        </section>
        <section className={styles.loggedInAccount}>
          <h2>NFT #2</h2>
          <section>
            <p>NFT HERE</p>
          </section>
        </section>
      </section>
    </section>
  );
}