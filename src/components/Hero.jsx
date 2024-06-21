import React from 'react';
import heroImage from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>ContentFul CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            eligendi quas qui vitae dicta dolorem itaque temporibus! At laborum
            sit corrupti blanditiis quam sequi quos totam suscipit repellat quo
            odio, ab ad.
          </p>
        </div>
      </div>
      <div className='img-container'>
        <img className='img' src={heroImage} alt='hero image' />
      </div>
    </section>
  );
};

export default Hero;
