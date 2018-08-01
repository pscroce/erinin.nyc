import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';

function Footer() {
  return (
    <Section>
      <div style={styles.footer} className="footer">
        {/* <div style={styles.footerText}> */}
          {/* <span style={styles.footerItem}> </span> */}
          <span style={styles.footerItem} role="img" aria-label="Statue of Liberty Emoji">
              🗽
          </span>
          {/* <span style={styles.footerItem}> </span> */}
        {/* </div> */}

      </div>
    </Section>
  )
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: 50,
    '@media (max-width: 480px)': { // mobile
    },
  },
  footerText: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    // width: '90%',
    margin: 0,
    fontSize: '5rem',
    '@media (max-width: 992px)': { // tablet
      width: '100%',
      // flexDirection: 'column',
      // alignItems: 'center',
      // justifyContent: 'space-around',
      // height: '100%',
      // textAlign: 'center',
    },
  },
  footerItem: {
    width: 250,
    textAlign: 'center',
    fontSize: 80,
    marginBottom: -10,
    '@media (max-width: 992px)': { // tablet
      width: 'none',
    },
  },
  footerItemMiddle: {
    padding: '0 10px',
  }
}

export default Radium(Footer);
