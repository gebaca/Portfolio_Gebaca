import { useState } from 'react';
import styles from './App.module.css';

const navItems: string[] = ['Me', 'Projects', 'Tools', 'Contact'];

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleNavClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else setActiveIndex(index);
  };
  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
  };

  const rightPanelClasses = [
    styles.rightPanel_me,
    styles.rightPanel_projects,
    styles.rightPanel_tools,
    styles.rightPanel_contact,
  ];

  const projects = [
    {
      name: 'Hyrulepedia',
      description:
        'Hyrulepedia is an interactive digital card collector created by a team of four. I was responsible for programming key parts of the web application, including database integration, user profile management, visual effects, and contributing to the design and overall concept of the site.',
      image: 'src/images/LOGIN PAGE.png',
      youtubeLink: null,
      link: 'https://hyrulepedia.web.app/',
    },
    {
      name: 'Never Late',
      description:
        'Never Late is a serious game developed with a team of 10 members. My contributions included programming the character controller, implementing various visual effects, and designing several of the minigames.',
      image: null,
      youtubeLink:
        'https://www.youtube.com/embed/WEezmGnj32s?si=1dUPJN5J5T0l4RGi',
      link: 'https://potasiogames.itch.io/never-late',
    },
    {
      name: 'BloodForged',
      description:
        'BloodForged is a hack-and-slash game developed with a team of 10. I programmed the enemy AI, added visual effects, and designed the user interface (UI) to ensure an engaging player experience.',
      image: null,
      youtubeLink:
        'https://www.youtube.com/embed/EYUvRKCsTxk?si=nMOTQBbcp37TAMcU',
      link: 'https://potasiogames.itch.io/blood-forged',
    },
    {
      name: 'Aventura por Valencia',
      description:
        'Aventura por Valencia is an educational game created with two teammates, where I was responsible for programming the minigames and designing the user experience (UX) and user interface (UI).',
      image: 'src/images/AventuraPorVLC.png',
      youtubeLink: null,
      link: 'https://ficiv.org/minijuego/',
    },
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
            I'm a <b>frontend developer </b> with a background in video game
            design and development. I was born in Valencia in 2001 and studied
            the Bachelor's Degree in <b>Video Game Design </b> and
            <b> Development </b> at Florida Universitària, affiliated with the
            Polytechnic University of Valencia. Later, I completed a master's
            degree at ESAT focused on <b>web development </b> with a
            <b> UX/UI </b>
            approach. <br />
            <br /> During my game development studies, I realized I was
            particularly interested in elements like
            <b>user interfaces, menus,</b> and overall <b>user experience </b>.
            That led me to shift my focus toward frontend development, where I
            aim to combine <b>functionality </b> with <b>clean </b> and coherent
            <b> visual design </b>.<br />
            <br /> I'm <b>fluent </b> in Spanish and
            <b> English </b>, and I enjoy working <b>collaboratively </b>.
            Bridging the gap between <b>technical </b> implementation and visual
            execution to create complete, <b>user-centered </b> web experiences.
          </div>
        </>
      );
    }

    if (activeIndex === 1) {
      // Si no hay proyecto seleccionado, mostramos la lista
      if (selectedProject === null) {
        return (
          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={styles.projectItem}
                onClick={() => handleProjectClick(index)}
              >
                <h3>{project.name}</h3>
                <p>{project.description.slice(0, 100)}...</p>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className={styles.projectThumbnail}
                  />
                )}
                {project.youtubeLink && (
                  <div className={styles.projectThumbnail}>
                    <iframe
                      width='100%'
                      height='200'
                      src={project.youtubeLink}
                      title={project.name}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      }

      // Si hay proyecto seleccionado, mostramos su detalle
      const project = projects[selectedProject];
      return (
        <div className={styles.projectDetail}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>

          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className={styles.projectImage}
            />
          )}

          {project.youtubeLink && (
            <div className={styles.projectVideo}>
              <iframe
                width='100%'
                height='400'
                src={project.youtubeLink}
                title={project.name}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          )}

          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.projectLink}
          >
            View Project
          </a>

          <button
            className={styles.backButton}
            onClick={() => setSelectedProject(null)}
          >
            Back to Projects
          </button>
        </div>
      );
    }

    if (activeIndex === 2) {
      return (
        <div className={styles.tools_grid}>
          <div className={styles.tool_item}>
            <div
              className={`${styles.mask_tools_icons} ${styles.mask_tools_icons__3DMAX}`}
            ></div>
            <span className={styles.tool_name}>3ds Max</span>
          </div>
          <div className={styles.tool_item}>
            <div
              className={`${styles.mask_tools_icons} ${styles.mask_tools_icons__CSHARP}`}
            ></div>
            <span className={styles.tool_name}>C#</span>
          </div>
          <div className={styles.tool_item}>
            <div
              className={`${styles.mask_tools_icons} ${styles.mask_tools_icons__javscript}`}
            ></div>
            <span className={styles.tool_name}>JavaScript</span>
          </div>
          <div className={styles.tool_item}>
            <div
              className={`${styles.mask_tools_icons} ${styles.mask_tools_icons__maya}`}
            ></div>
            <span className={styles.tool_name}>Maya</span>
          </div>
          <div className={styles.tool_item}>
            <div
              className={`${styles.mask_tools_icons} ${styles.mask_tools_icons__react}`}
            ></div>
            <span className={styles.tool_name}>React</span>
          </div>
          <div className={styles.tool_item}>
            <div
              className={`${styles.mask_tools_icons} ${styles.mask_tools_icons__typescript}`}
            ></div>
            <span className={styles.tool_name}>typescript</span>
          </div>
          <div className={styles.tool_item}>
            <div
              className={`${styles.mask_tools_icons} ${styles.mask_tools_icons__unity}`}
            ></div>
            <span className={styles.tool_name}>Unity</span>
          </div>
          <div className={styles.tool_item}>
            <div
              className={`${styles.mask_tools_icons} ${styles.mask_tools_icons__unreal}`}
            ></div>
            <span className={styles.tool_name}>unreal</span>
          </div>
          <div className={styles.tool_item}>
            <div
              className={`${styles.mask_tools_icons} ${styles.mask_tools_icons__figma}`}
            ></div>
            <span className={styles.tool_name}>figma</span>
          </div>
        </div>
      );
    }

    if (activeIndex === 3) {
      return (
        <div className={styles.contactContainer}>
          <h2>Contact</h2>
          <p>You can reach me through the following channels:</p>
          <ul className={styles.contactList}>
            {/*<li>
              <a
                href='https://www.linkedin.com/in/gerard-bataller-canet/'
                className={styles.contactLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </li>*/}
            <li>
              <a
                href='https://github.com/gebaca/Portfolio_Gebaca.git'
                className={styles.contactLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </li>
            <li>
              <a className={styles.contactLink_no_hover}>gebaca01@gmail.com</a>
            </li>
            <li>
              <a className={styles.contactLink_no_hover}>+34 615 180 314</a>
            </li>
          </ul>
        </div>
      );
    }

    return null; // nada seleccionado
  };

  return (
    <>
      <link
        href='https://fonts.googleapis.com/css?family=Inter'
        rel='stylesheet'
      ></link>
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
