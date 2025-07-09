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

  const renderRightPanelContent = () => {
    if (activeIndex === 0) {
      return (
        <>
          <div className={styles.portfolio_picture_container}>
            <img
              className={styles.portfolio_picture}
              src='src/images/ec4380ab-552f-480c-88e3-a82bb91e45ea.JPG'
              alt='me'
            />
            <div
              className={`${styles.portfolio_picture_picture_support} ${styles.portfolio_picture_picture_support_one}`}
            ></div>
            <div
              className={`${styles.portfolio_picture_picture_support} ${styles.portfolio_picture_picture_support_two}`}
            ></div>
            <div
              className={`${styles.portfolio_picture_picture_support} ${styles.portfolio_picture_picture_support_three}`}
            ></div>
            <div
              className={`${styles.portfolio_picture_picture_support} ${styles.portfolio_picture_picture_support_four}`}
            ></div>
          </div>
          <div className={styles.portfolio_picture_text}>
            I'm a frontend developer with a background in video game design and
            development. I was born in Valencia in 2001 and studied the
            Bachelor's Degree in Video Game Design and Development at Florida
            Universitària, affiliated with the Polytechnic University of
            Valencia. Later, I completed a master's degree at ESAT focused on
            web development with a UX/UI approach. During my game development
            studies, I realized I was particularly interested in elements like
            user interfaces, menus, and overall user experience. That led me to
            shift my focus toward frontend development, where I aim to combine
            functionality with clean and coherent visual design. I'm fluent in
            Spanish and English, and I enjoy working collaboratively. Bridging
            the gap between technical implementation and visual execution to
            create complete, user-centered web experiences.
          </div>
        </>
      );
    }

    if (activeIndex === 1) {
      return (
        <div>
          <h2>Proyectos</h2>
          <p>Lista de proyectos con links e imágenes.</p>
        </div>
      );
    }

    if (activeIndex === 2) {
      return (
        <div>
          <h2>Herramientas</h2>
          <p>Stack tecnológico, herramientas favoritas, etc.</p>
        </div>
      );
    }

    if (activeIndex === 3) {
      return (
        <div>
          <h2>Contacto</h2>
          <p>Formulario de contacto o redes sociales.</p>
        </div>
      );
    }

    return null; // nada seleccionado
  };

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
              {activeIndex !== null && renderRightPanelContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
