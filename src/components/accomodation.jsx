import React from 'react';

const Accomodation = () => {
  return (
    <div className='accom-container'>
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
          />
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
          />
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
          />
        </li>
      </ul>
    </div>
  );
};

export default Accomodation;
