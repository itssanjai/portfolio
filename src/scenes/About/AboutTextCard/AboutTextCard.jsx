import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Sanjai Kuamr </span>
        from <span className={s.purple}> Coimbatore,India</span>
        <br />
        Software engineer with expertise in cross-platform development{' '}
        <br />
        using React Native.
        <br />
        <br />
        I have a Bachelor's degree in Electronics And Communication Engineering 
        
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Doing leet codes
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Web Developement
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Data Science
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
