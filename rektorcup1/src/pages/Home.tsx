import React from 'react';
import '../styles/Home.css';
import HomeParallax from "../components/HomeParallax";
import HomeTitle from "../components/HomeTitle";
import mainBuildings1 from '../assets/mainbuildings1.svg';
import mainBuildings2 from '../assets/mainbuildings2.svg';
import mainPartRektor from '../assets/mainpartrektor.svg';
import clouds1 from '../assets/clouds1.svg';
import { useParallax } from 'react-scroll-parallax';
import RektorLogo from '../assets/RektorLogo.png';
import leftC from '../assets/leftCurtainwLight.svg';
import leftCM from '../assets/leftCurtainsM.svg';
import rightC from '../assets/rightCurtainwLight.svg';
import rightCM from '../assets/rightCurtainsM.svg';
import topC from '../assets/topCurtain_3.png';
import topCM from '../assets/topCurtainMCut.png';
import acqLogo from '../assets/acqLogo.svg';
import BEEGTENT from '../assets/BEEGTENT.svg';
import smolTent from '../assets/carnivalPhoneLong.png';
import BANNER from '../assets/tent banner-01.svg';
import ACQUIREWITHBG from '../assets/homeSign.png';
import ticket from '../assets/tickets dekstop 4.png';
import ticketM from '../assets/tickets with mascot phone.png';
import cannonL from '../assets/cannonL.svg';
import cannonR from '../assets/cannonR.svg';
import lights from '../assets/lights.svg';

const Home: React.FC = () => {
  // const { ref: parallaxRef1 } = useParallax<HTMLImageElement>({
  //   translateX: [35, -50],
  //   speed: 5,
  //   easing: 'easeOut', // Replace "linear" with "easeOut"
  // });

  // const { ref: parallaxRef2 } = useParallax<HTMLImageElement>({
  //   translateX: [-25, 35],
  //   speed: 5,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef5 } = useParallax<HTMLImageElement>({
  //   speed: 20,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef8 } = useParallax<HTMLImageElement>({
  //   speed: 15,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef9 } = useParallax<HTMLImageElement>({
  //   speed: 20,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef10 } = useParallax<HTMLImageElement>({
  //   translateX: [50, -25],
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef11 } = useParallax<HTMLImageElement>({
  //   translateX: [-30, 10],
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef12 } = useParallax<HTMLImageElement>({
  //   speed: 10,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef13 } = useParallax<HTMLImageElement>({
  //   translateX: [45, -50],
  //   speed: 5,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef14 } = useParallax<HTMLImageElement>({
  //   translateX: [-25, 25],
  //   speed: 5,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef15 } = useParallax<HTMLImageElement>({
  //   speed: 2,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef16 } = useParallax<HTMLImageElement>({
  //   speed: 20,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef17 } = useParallax<HTMLImageElement>({
  //   speed: 15,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef18 } = useParallax<HTMLImageElement>({
  //   speed: 20,
  //   easing: 'easeOut',
  // });

  return (
    <div className='home'>
      <HomeTitle className='home-title' />
      {/* Spinny Thingy */}
      <HomeParallax className='H_Parallax' />
      <div className="main-buildings-container relative">
        <img src={mainBuildings1} alt="Main Buildings 1" className="main-buildings1" />
        <img src={mainBuildings2} alt="Main Buildings 2" className="main-buildings2" />
        <img src={mainPartRektor} alt="Main Part Rektor" className="main-part-rektor" />
        <img src={clouds1} alt="Clouds 1" className="clouds1" />
        <div className='floor'></div>
        <HomeTitle className='home-title' />
      </div>

      <div className='abtbackground'>
      <HomeTitle className='home-title' />
        <p>test</p>
      </div>

    </div>
  );
};

export default Home;
