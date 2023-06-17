import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Experience the game-changing potential of GPT-3 by OpenAI. With GPT-3, you can tap into a world of unlimited possibilities. From generating engaging conversations to crafting captivating content, GPT-3 empowers you to unlock creativity like never before. Seamlessly integrate GPT-3 into your projects, explore its vast knowledge, and redefine what's achievable in human-machine collaboration. Join the community of innovators and let GPT-3 amplify your imagination.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Type your Email Address" />
          <button type="button">Get Started</button>
        </div>
        
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header