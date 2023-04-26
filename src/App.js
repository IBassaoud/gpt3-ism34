import './App.css';
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Header, Footer, Blog, Possibility, Features, WhatGPT3  } from './containers';

function App() {
  return (
    <div className="App">
      <h1 className="center">GPT3 - Ism34</h1>
      <div className="gradient__bg">
      <Navbar />
      <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
