import './App.css';
import './btn.css';
import './contact.css';
import background from './static/background.jpeg';
import twitter_logo from './static/twitter.svg';
import logo from './static/logo.png';
import React from 'react';

const cn_content = {
     name: "CobWeb3",
     slogon: "Accelerating next decacorns",
     contact: "联系方式",
     language: "英文",
     title1: "加速再加速",
     title2: "令人激动的 Web3 新世界",
     content: "CobWeb3 是全球第一个去中心化 Web3 孵化网络，聚集行业中最优秀的大脑和资源，支持最优秀的 Web3 创业者和早期团队。",
     button: "首批孵化即将开启申请",
     switch: "EN"
}


const eng_content = {
  name: "CobWeb3",
  slogon: "Accelerating next decacorns",
  contact: "Contact",
  language: "CN",
  title1: "Pushing The Boundary ",
  title2: "of Web3 Paradigm Shift",
  content: "CobWeb3 is world's first truly decentralized and DAO-organized Web3 Incubatation Network, accelerating the best web3 founders and startups in an unprecedented way.",
  button: "Preseason Application Open Soon",
  switch: "CN"
}

function App() {
  const [ flag, setFlag ] = React.useState(1)
  const [ content, setContent ] = React.useState(eng_content)

  function change_lang() {
    if (flag == 0) {
      setFlag(1);
      setContent(eng_content);
    }else {
      setFlag(0);
      setContent(cn_content);
    };
  }

  return (
    <div className="App">
      <div className='logo_content'>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h2>{content.name}</h2>
        <p>{content.slogon}</p>
      </div>
      </div>
      <div className='header'>
          <ul>
            <li className='li_not_last'>
              <a  href='#Contact' > {content.contact}</a>
              {/* <div class="dropdown">
              <a class="dropbtn"> 联系方式</a>
              <div class="dropdown-content">
                  <div href="#" target="_block">Telegram: @immorriv </div>
                  <div href="#" target="_block">Twitter: @immorriv</div>
              </div>
              </div> */}
            </li>
            <li className='li_not_last' onClick={change_lang}>
              <a  > {content.language}</a>
            </li>
            <li className='li_not_last'>
              <a href='https://twitter.com/CobWeb3_' target="_blank"> 
              <img src={twitter_logo} alt='icon' />
              </a>
            </li>
            <li className='li_last'>
            <div className="btn_ani">
              <form>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {content.button}
              </a>
              </form>
              </div>
            </li>
          </ul>
      </div>
      <div className='Section' >
      <div className='display_content'>
        <p className='text'>
        <br/>
        {content.title1}<br/>
        {content.title2}</p>
        <p style={{'width':'26vw', 'fontSize':'1.1em','marginTop': '-5vh'}}>
        {content.content}
        </p>
        <p>
        <div className="btn_ani"><br/>
          <form>
          <a  className='b_style' href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {content.button}
          </a>
          </form>
        </div>
        </p>
      </div>
      </div>
      <div className='Section_last'>
        {/* <div className='Section_last__content Contact' id='Contact'> */}
        <div className='Section_last__content' id='Contact'>
          <div className='Contact-center'>
            <div className='Contact-title'>Contact</div>
            <div className='Contact-info1'>Twitter：
              <a href={"https://twitter.com/immorriv"} target={"_blank"}>@immorriv</a></div>
            <div className='Contact-info1'>Telegram: 
              <a target={"_blank"}> @immorriv </a></div>
          </div>
        </div>
        <footer>
          © Copyright 2021 '|' CobWeb3 | All Rights Reserved
        </footer>
      </div>
    </div>
  );
}
export default App;
