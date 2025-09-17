import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.highlight}>Kasmita koirala</span>
          </h1>
          <h2 className={styles.heroSubtitle}>Full Stack Developer</h2>
          <p className={styles.heroDescription}>
          I develop beautiful, responsive web applications using modern technologies.
           Committed to writing clean, maintainable code, delivering exceptional user experiences,
            and continuously expanding my technical expertise.
          </p>
          <div className={styles.heroButtons}>
            <button 
              className={styles.primaryButton}
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <img 
                src="/profile-photo.png" 
                alt="Profile Photo"
                className={styles.profilePhoto}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className={styles.placeholderImage} style={{display: 'none'}}>👨‍💻</div>
            </div>
            <div className={styles.profileInfo}>
              <h3>Available for Work</h3>
              <p>Open to new opportunities</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutLayout}>
            <div className={styles.aboutContent}>
              <div className={styles.rolesContainer}>
                <div className={styles.roleCard}>
                  <div className={styles.roleIcon}>
                    <div className={styles.cursorIcon}>🖱️</div>
                  </div>
                  <div className={styles.roleContent}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a front-end developer with experience in building responsive and optimized sites</p>
                  </div>
                </div>
                
                <div className={styles.roleCard}>
                  <div className={styles.roleIcon}>
                    <div className={styles.serverIcon}>🖥️</div>
                  </div>
                  <div className={styles.roleContent}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimised back-end systems and APIs</p>
                  </div>
                </div>
                
                <div className={styles.roleCard}>
                  <div className={styles.roleIcon}>
                    <div className={styles.designIcon}>🎨</div>
                  </div>
                  <div className={styles.roleContent}>
                    <h3>UI Designer</h3>
                    <p>I have designed multiple landing pages and have created design systems as well</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className={styles.experience}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.experienceContent}>
            <div className={styles.skillsContainer}>
              <div className={styles.skillsTop}>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <div className={styles.htmlIcon}>
                      <div className={styles.htmlShield}>
                        <span className={styles.htmlNumber}>5</span>
                      </div>
                    </div>
                  </div>
                  <span className={styles.skillName}>HTML5</span>
                </div>
                
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <div className={styles.cssIcon}>
                      <div className={styles.cssShield}>
                        <span className={styles.cssNumber}>3</span>
                      </div>
                    </div>
                  </div>
                  <span className={styles.skillName}>CSS3</span>
                </div>
                
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <div className={styles.nodeIcon}>
                      <div className={styles.jsHexagon}>
                        <span className={styles.jsText}>JS</span>
                      </div>
                    </div>
                  </div>
                  <span className={styles.skillName}>JavaScript</span>
                </div>
              </div>
              
              <div className={styles.skillsBottom}>
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <div className={styles.reactIcon}>⚛</div>
                  </div>
                  <span className={styles.skillName}>React</span>
                </div>
                
                <div className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    <div className={styles.figmaIcon}>F</div>
                  </div>
                  <span className={styles.skillName}>Figma</span>
                </div>
              </div>
            </div>

            <div className={styles.experienceTimeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.companyHeader}>
                    <div className={`${styles.companyLogo} ${styles.sunwayLogo}`}>S</div>
                    <div>
                      <h3>Graphic Designer</h3>
                      <h4>Sunway College • 2023 - Present</h4>
                    </div>
                  </div>
                  <p>
                    Creating compelling visual designs and marketing materials for Sunway College's 
                    digital and print campaigns. 
                  </p>
                  <ul>
                    <li>Designed promotional materials for college events and programs</li>
                    <li>Created social media graphics and digital marketing assets</li>
                    <li>Developed brand guidelines and visual identity systems</li>
                  
                  </ul>
                  <div className={styles.experienceTech}>
                    <span className={styles.techTag}>Adobe </span>
                    <span className={styles.techTag}>Figma</span>
                    <span className={styles.techTag}>Photoshop</span>
                   
                  </div>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.companyHeader}>
                    <div className={`${styles.companyLogo} ${styles.hackathonLogo}`}>A</div>
                    <div>
                      <h3>Participant</h3>
                      <h4>Ambition Hackathon • 2023</h4>
                    </div>
                  </div>
                  <p>
                    Participated in the prestigious Ambition Hackathon, collaborating with a 
                    team to develop innovative solutions. Gained hands-on experience in rapid 
                    prototyping and problem-solving within a competitive environment.
                  </p>
                  <ul>
                    <li>Developed a web application addressing real-world challenges</li>
                    <li>Presented solution to judges and industry professionals</li>
                    <li>Gained experience in agile development and team collaboration</li>
                  </ul>
                  <div className={styles.experienceTech}>
                    <span className={styles.techTag}>React</span>
                    <span className={styles.techTag}>MongoDB</span>
                    <span className={styles.techTag}>API Development</span>
                    <span className={styles.techTag}>UI/UX Design</span>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectPlaceholder}></div>
              </div>
              <div className={styles.projectContent}>
                <h3>
                IoT-Based Air Quality Monitoring System</h3>
                <p>
                An IoT system tracks air pollutants in real time and 
                connects with smart devices to improve air quality,
                 health, and efficiency.


                </p>
                <div className={styles.projectTech}>
                  <span>IoT Development</span>
                  <span>Data Visualization</span>
                  <span>Automation</span>
                  <span>Data Analysis</span>
                </div>
               
              </div>
            </div>
            
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectPlaceholder}></div>
              </div>
              <div className={styles.projectContent}>
                <h3>MoNa Museum</h3>
                <p>
                Developed a digital showcase for MoNA aimed at promoting Nepal’s rich 
                artistic heritage  engage visitors, and support cultural preservation.

               

                </p>
                <div className={styles.projectTech}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>User Interface Design</span>
                </div>
               
              </div>
            </div>
            
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectPlaceholder}></div>
              </div>
              <div className={styles.projectContent}>
                <h3>Matchpoint App</h3>
                <p>
                futsal app that connects players by location and skill, 
                allowing easy team formation, game scheduling, and in-app chat for quick and fun matches.

                </p>
                <div className={styles.projectTech}>
                  <span>React</span>
                  <span>Javascript</span>
                  <span>Node.js</span>
                  <span>MangoDB</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span>kassmita.koirala@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📱</span>
                  <span>98888888888</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Bhaktapur, Nepal</span>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/kassmita-koirala/" className={styles.socialLink}>LinkedIn</a>
                <a href="https://github.com/kassmi0" className={styles.socialLink}>GitHub</a>
            
                <a href="https://www.instagram.com/kass_mita/" className={styles.socialLink}>Instagram</a>
              </div>
            </div>
            
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <textarea 
                  placeholder="Your Message" 
                  className={styles.formTextarea}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
