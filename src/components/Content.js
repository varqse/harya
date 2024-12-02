import React, { useEffect, useRef } from 'react';
import { Accordion, Row, Col, Image } from 'react-bootstrap';
// import article1 from '../assets/images/article1.jpg'
// import photo1 from '../assets/images/photo1.jpg';
// import photo2 from '../assets/images/photo2.jpg';
// import photo3 from '../assets/images/photo3.jpg';
// import photo4 from '../assets/images/photo4.jpg';
// import photo5 from '../assets/images/photo5.jpg';
// import photo6 from '../assets/images/photo6.jpg';
// import photo7 from '../assets/images/photo7.jpg';
import galleryimg1 from '../assets/images/galleryimg1.jpg'
import galleryimg2 from '../assets/images/galleryimg2.jpg'
import galleryimg3 from '../assets/images/galleryimg3.jpg'


const Content = React.forwardRef((props, ref) => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const articleRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    scrollToSection(id) {
      if (id === 'about') aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      if (id === 'experience') experienceRef.current.scrollIntoView({ behavior: 'smooth' });
      if (id === 'article') articleRef.current.scrollIntoView({ behavior: 'smooth' });
    },
  }));

  useEffect(() => {
    const cards = document.querySelectorAll('.fade-in-card');
    cards.forEach((card, index) => {
      card.style.opacity = 0; // Set initial opacity
      card.style.transition = 'opacity 0.5s ease-in-out';
      setTimeout(() => {
        card.style.opacity = 1; // Fade in effect
      }, index * 500); // Delay for each card
    });
  }, []);

  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element, index) => {
      element.style.opacity = 0; // Set initial opacity
      element.style.visibility = 'hidden'; // Hide the element
      element.style.transition = 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out';
      setTimeout(() => {
        element.style.opacity = 1; // Fade in effect
        element.style.visibility = 'visible'; // Make the element visible
      }, index * 350); // Delay for each element
    });
  }, []);

  return (
    <div className="contentContents">
      <section className="fade-in" id="about" ref={aboutRef}>
      <h1 className='p-3 fw-bold'>UC could mean Unconscious Competent, Uncertified, Under Construction or Ultracivilzed (technology)</h1>
      <p className='p-4 pt-0 pb-0'>
        What my experiences tell me so far is that in the first years of my career I started with deviate path. Started as engineering management trainee in dairy company and ended up as packaging development, then process development and ultimately responsible for handling pilot plant, lab operations and also development projects

        Entering the second decade with learning this new cocoa technology and try to as much as possible built environment into cocoa production teams. This greenfield organization started off with most young talents from graduate and vocation schools. 
        We shape off good structure, made some mistakes, learned all from it, and just after 3 years of operation we can meet factory’s nominal capacity and exceeding it by 10% a year after. Familiar with previous challenge to plant organization, I had assigned full operation responsibility to handled production and technical department.
        Last year, full scale factory responsibility handed over to me and also another partnering to regional business leader for our business unit. Report lines directly to Global OPS Director in AMS and dotted line report to APAC Managing Director in SIN.
        As our strong intention nowadays in inclusion and diversity initiatives. This is been our dream, and we’re working on it!
      </p>
      <p className='p-4 pt-0 pb-0'>Coming into decade, opportunity seize me over into more operation roles. After long improvement project for in-container sterilization process using batch retort, management offered me operation role in our traditional factory in East Java, having considered to expand our operation from West Java to East Java. We started with negative bottom-line facility and start to be stars leading performance within 3 years time.
        In this period I am started to understand how culture, with the right touch can improve group performances. Interpersonal connections, understanding cultures and personalities seems paid off to turnaround the bad become better situations. I was like a king-makers, with several talents developed in production and engineering fields then growth to its potential, ready to uplift the business performances. 
        For sure this competency builds lead to confident in setting up new organization and growth. So it was answered when another challenge came by offering greenfield opportunity in appealing cocoa industries. A challenging job, first landscape in the region and it was different world from dairy.</p>
      <p className='p-4 pt-0'>Entering the second decade with learning this new cocoa technology and try to as much as possible built environment into cocoa production teams. This greenfield organization started off with most young talents from graduate and vocation schools. 
        We shape off good structure, made some mistakes, learned all from it, and just after 3 years of operation we can meet factory’s nominal capacity and exceeding it by 10% a year after. Familiar with previous challenge to plant organization, I had assigned full operation responsibility to handled production and technical department.
        Last year, full scale factory responsibility handed over to me and also another partnering to regional business leader for our business unit. Report lines directly to Global OPS Director in AMS and dotted line report to APAC Managing Director in SIN.
        As our strong intention nowadays in inclusion and diversity initiatives. This is been our dream, and we’re working on it!</p>
        </section>

      <section id="experience" ref={experienceRef} className="fade-in">
        <Accordion defaultActiveKey={['0']} alwaysOpen className="mt-5 p-3">
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header>
              <div className="me-3 fs-2 pb-3 fw-bold">Cargill</div>
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <h5>Plant Manager</h5>
                <span className="text-muted">Sep 2019 - Present</span>
              </div>
              <div className="mt-3">
                <h5>Operations Manager</h5>
                <span className="text-muted">Nov 2017 - Sep 2019</span>
              </div>
              <div className="mt-3">
                <h5>Productions Manager</h5>
                <span className="text-muted">Jun 2013 - Oct 2017</span>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>
              <div className="me-3 fs-2 pb-3 fw-bold">PT Indolakto (Indomilk)</div>
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <h5>Production and Engineering Manager</h5>
                <span className="text-muted">May 2011 - Jun 2013</span>
              </div>
              <div className="mt-3">
                <h5>Production Manager</h5>
                <span className="text-muted">Jun 2009 - May 2011</span>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>
              <div className="me-3 fs-2 pb-3 fw-bold">PT Australia Indonesia Milk Industries (Indomilk)</div>
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <h5>R&D Project Support Manager</h5>
                <span className="text-muted">Jun 2007 - Jun 2009</span>
              </div>
              <div className="mt-3">
                <h5>Process Development Manager(Corporate)</h5>
                <span className="text-muted">May 2005 - Jun 2009</span>
                <p>
                
              </p>
              </div>
              <div className="mt-3">
                <h5>Packaging Development Manager(Corporate)</h5>
                <span className="text-muted">May 2005 - Jun 2009</span>
                <p>
                  
                </p>
              </div>
              <div className="mt-3">
                <h5>Packaging Development Supervisor(Corporate)</h5>
                <span className="text-muted">May 2005 - Jun 2009</span>
                <p>
                  
                </p>
              </div>
              <div className="mt-3">
                <h5>Management Trainee</h5>
                <span className="text-muted">May 2005 - Jun 2009</span>
                <p>
                  
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>

      <section id="article" ref={articleRef} className="pt-5">
        <div className="row">
          <div class="card" onClick={() => (window.location.href = "/articles/EverybodyLeaveBossesNotCompaniesWhy")}>
            <div class="content">
              <p class="heading">Everybody (including the bosses - unconsciously) said people leave bosses, not companies. And why would you want to do that?</p>
              <p class="para para-sm">by Harya Pranatreshna - 3 min read</p>
            </div>
          </div>
        </div>
        <div className="pt-4 text-end">
          <button class="cta" onClick={() => (window.location.href = "/articles")}>
            <span class="hover-underline-animation"> See more </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
      </section>

      <section id="gallery" className="pt-5">
      <div>
        <Row>
          {/* Card Gallery 1 */}
          <Col xs={6} md={4} className="pt-4">
            <a href="/gallery/Makroholic" className="cardgallery">
              <div
                className="cardgallery__image"
                style={{ backgroundImage: `url(${galleryimg1})` }}
              ></div>
              <div className="cardgallery__content">
                <p className="cardgallery__title">Makroholic</p>
                <p className="cardgallery__description">Explore the world up close</p>
              </div>
            </a>
          </Col>

          {/* Card Gallery 2 */}
          <Col xs={6} md={4} className="pt-4">
            <a href="/gallery/MotionAndEmotion" className="cardgallery">
              <div
                className="cardgallery__image"
                style={{ backgroundImage: `url(${galleryimg2})` }}
              ></div>
              <div className="cardgallery__content">
                <p className="cardgallery__title">Motion And Emotion</p>
                <p className="cardgallery__description">Dynamic art in motion</p>
              </div>
            </a>
          </Col>

          {/* Card Gallery 3 */}
          <Col xs={6} md={4} className="pt-4">
            <a href="/gallery/UltimateDrivingMachine" className="cardgallery">
              <div
                className="cardgallery__image"
                style={{ backgroundImage: `url(${galleryimg3})` }}
              ></div>
              <div className="cardgallery__content">
                <p className="cardgallery__title">Ultimate Driving Machine</p>
                <p className="cardgallery__description">
                  Experience automotive excellence
                </p>
              </div>
            </a>
          </Col>
        </Row>
        <div className="pt-4 text-end">
          <button className="cta" onClick={() => (window.location.href = '/gallery')}>
            <span className="hover-underline-animation"> See more </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>


    </div>
  );
});

export default Content;
