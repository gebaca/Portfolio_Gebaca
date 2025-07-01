import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.main_container_for_web_structure}>
        <div className={styles.frame_container_for_web_elements}>
          <div className={styles.frame_container_for_web_elements__layout}>
            <div className={styles.lateralMenu_nav_leftSide}></div>
            <div
              className={styles.separationSpace_between_leftSide_rightSide}
            ></div>
            <div className={styles.lateralMenu_info_rightSide}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
