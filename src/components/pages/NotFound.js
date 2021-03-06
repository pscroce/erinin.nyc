import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Subtitle from '../layout/elements/Subtitle';
import WebsiteTitle from '../layout/elements/WebsiteTitle';

import styleVars from '../../styles/styleVars.js';

function NotFound() {
  return (
    <div style={styles.outerWrapper}>
      <div style={styles.innerWrapper}>
      <Section>
        <SectionLeft>
          <WebsiteTitle>
            Here we go again.
          </WebsiteTitle>

          <Subtitle>
            Another 404 page trying to be cheeky.
          </Subtitle>

          <div style={styles.buttonWrapper}>
            <Link to='/' style={styles.button}>
              Go Away
            </Link>
          </div>

        </SectionLeft>
      </Section>
      </div>
      <Footer></Footer>
    </div>
  )
}

const styles = {
  outerWrapper: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    '@media (max-width: 448px)': {
      minHeight: 0,
    },
  },
  innerWrapper: {
    flex: 1,
  },
  button: {
    display: 'block',
    backgroundColor: 'transparent',
    color: styleVars.textColor,
    border: `3px solid ${styleVars.textColor}`,
    textAlign: 'center',
    margin: '2rem 0',
    fontSize: '1.5em',
    padding: '0.5rem 0.75rem',
    width: 300,
    '@media (max-width: 992px)': {
      marginLeft: 0,
      padding: '.5rem .57rem',
    },
    '@media (max-width: 448px)': {
      width: '100%',
    },
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}

export default Radium(NotFound);
