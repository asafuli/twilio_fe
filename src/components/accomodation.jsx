import React from 'react';
import styled from 'styled-components';

const Accomodation = ({ className }) => {
  return (
    <div className={className}>
      <ul className='Links-list'>
        Recommended links
        <li className='info-link-item'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.booking.com/hotel/de/ferienhaus-frei-titisee-titisee.he.html'
            className='info-link'
          >
            פרטים על הבית בבוקינג
          </a>
        </li>
        <li className='info-link-item'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.lametayel.co.il/%D7%A4%D7%A8%D7%99%D7%A0%D7%94%D7%90%D7%95%D7%A1+%D7%A4%D7%A8%D7%99%D7%99+2+%D7%98%D7%99%D7%98%D7%99%D7%96%D7%99'
            className='info-link'
          >
            פרטים על הבית בלמטייל
          </a>
        </li>
        <li className='info-link-item'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.google.com/maps/place/Ferienhaus+Frei+2+Titisee/@47.9047175,8.1444294,16z/data=!4m5!3m4!1s0x4790f0f36ce3876b:0x9994afc381ef5587!8m2!3d47.9050627!4d8.1391508'
            className='info-link'
          >
            המיקום של הבית בגוגל מפות
          </a>
        </li>
      </ul>
    </div>
  );
};

const styledAccomodation = styled(Accomodation)`
  .Links-list {
    color: grey;
    font-weight: bold;
    list-style-type: none;
    width: 30%;
  }

  .info-link-item {
    background: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid grey;
    border-radius: 3px;
  }
`;

export default styledAccomodation;
