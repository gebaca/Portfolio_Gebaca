import { useState } from 'react';
import styles from './App.module.css';

const navItems: string[] = ['Me', 'Projects', 'Tools', 'Contact'];

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNavClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else setActiveIndex(index);
  };

  const rightPanelClasses = [
    styles.rightPanel_me,
    styles.rightPanel_projects,
    styles.rightPanel_tools,
    styles.rightPanel_contact,
  ];

  return (
    <>
      <div className={styles.main_container_for_web_structure}>
        <div className={styles.frame_container_for_web_elements}>
          <div className={styles.frame_container_for_web_elements__layout}>
            <div
              className={`${styles.lateralMenu_nav_leftSide} ${styles.lateral_menu_structure}`}
            >
              <div className={styles.logo__component}>
                <div
                  className={`${styles.name_logo__turcoise} ${styles.logo__size}`}
                >
                  Gerard
                </div>
                <div
                  className={`${styles.name_logo__white} ${styles.logo__size}`}
                >
                  Bataller
                </div>
                <div
                  className={`${styles.name_logo__white} ${styles.logo__size}`}
                >
                  Canet
                </div>
                <div className={styles.name_positionSpeciality}>
                  designer & developer
                </div>
              </div>
              <ul className={styles.nav_links}>
                {navItems.map((item: string, index: number) => (
                  <li
                    key={index}
                    className={`${styles.nav_item} ${
                      activeIndex === index ? styles.active : ''
                    }`}
                    onClick={() => handleNavClick(index)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={styles.separationSpace_between_leftSide_rightSide}
            ></div>
            <div
              className={`${styles.lateralMenu_info_rightSide} ${
                styles.lateral_menu_structure
              } ${activeIndex !== null ? rightPanelClasses[activeIndex] : ''}`}
            >
              {activeIndex !== null && (
                <div className={styles.rightPanel_content}>
                  <h2>{navItems[activeIndex]}</h2>
                  <p>Contenido dinámico para {navItems[activeIndex]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
