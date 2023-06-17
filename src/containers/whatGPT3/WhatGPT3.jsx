import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Discover the revolutionary power of GPT-3, the next leap in AI technology. Delve into a world where opinions come to life, messages delight, and communication knows no bounds. Witness the transformative capabilities of GPT-3 as it breaks through limitations and redefines the way we connect. From its intelligent insights to its boisterous engagement, GPT-3 invites you to experience a new era of AI-driven interactions."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Conversational Superpowers"
          text="Unlock the extraordinary capabilities of GPT-3 chatbots. From engaging customer interactions to providing intelligent assistance, our chatbots redefine the way you connect and communicate. Experience seamless conversations that leave a lasting impression and drive exceptional user experiences."
        />
        <Feature
          title="Knowledge at Your Fingertips"
          text="Tap into the vast knowledgebase of GPT-3 and discover a world of information and insights. Whether you need quick answers or in-depth analysis, GPT-3's knowledgebase empowers you to access relevant and reliable information instantly. Expand your horizons and make informed decisions with the power of GPT-3's knowledge at your fingertips."
        />
        <Feature
          title="Transforming Education"
          text="Revolutionize the way we learn and teach with GPT-3's educational capabilities. Experience personalized learning journeys, interactive lessons, and intelligent tutoring systems. GPT-3 empowers educators and learners alike, creating engaging and dynamic educational experiences that inspire growth and knowledge acquisition."
        />
      </div>
    </div>
  )
}

export default WhatGPT3;