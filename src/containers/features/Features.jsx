import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';


const featuresData = [
  {
    title: 'Unleash Trust and Rapid Progress',
    text: 'Experience the power of instant trust and rapid progress as we eliminate barriers and foster immediate improvements. Witness the remarkable transformation that unfolds as distrust dissipates and collaboration flourishes. Join us on this journey of growth and success as we pave the way for unity and remarkable achievements.',
  },
  {
    title: 'Activate Your Potential',
    text: 'Unlock your true potential by becoming an active participant in your own success. Experience the uncommonly occasional assistance that enables you to thrive and accomplish more. Embrace the power of enabling actions and discover the path to fulfillment and achievement.',
  },
  {
    title: 'Transformative Messages',
    text: 'Elegantly communicate your thoughts and ideas through powerful messages that captivate and resonate. Engage in meaningful debates and conversations that leave a lasting impact. Let your words shine with eloquence and depth, creating connections and opening new possibilities.',
  },
  {
    title: 'Redefining Boundaries',
    text: 'Step into a realm where laws are redefined, and possibilities abound. Explore new horizons and break free from limitations. Unleash your potential and witness the rapid blush of progress as you build a future that knows no boundaries.',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.
        </h1>
        <p>
          Request Early Access to Get Started
        </p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map( (item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features