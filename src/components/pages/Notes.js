import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';

import Paragraph from '../layout/elements/Paragraph';
import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import SectionRight from '../layout/elements/SectionRight';
import WebsiteTitle from '../layout/elements/WebsiteTitle';


import NoteTaker from '../layout/elements/NoteTaker';
import NoteReader from '../layout/elements/NoteReader';

import styleVars from '../../styles/styleVars.js';

function Notes() {
  return (
    <div style={styles.outerWrapper}>
      <div style={styles.innerWrapper}>
      <Section>
        <SectionLeft>

          <WebsiteTitle>Note Taker</WebsiteTitle>
          <Paragraph>Notes save in your <a href="https://airtable.com/tblTsQto3kNbjBtne/viwhQ28WeObIFLtXi" target="_blank" rel="noopener noreferrer">NYC base</a>.</Paragraph>
          <br/>
          <NoteTaker></NoteTaker>

        </SectionLeft>
        <SectionRight>
          <NoteReader></NoteReader>
        </SectionRight>
      </Section>
      </div>
      <br/>
      <br/>
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
    marginBottom: '1rem',
    fontSize: '1.5em',
    padding: '0.5rem 0.75rem',
    width: 200,
    '@media (max-width: 992px)': {
      padding: '.5rem .57rem',
    },
    '@media (max-width: 448px)': {
      width: '100%',
    },
  },
  buttonWrapper: {
    margin: '2rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 448px)': {
      width: '100%',
      flexDirection: 'column',
      marginTop: '1.5rem',
    },
  }
}

export default Radium(Notes);
