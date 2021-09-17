import React from 'react';
import Navbar from './Navbar';
import photo from '../images/photo.jpg';
import gmail from '../images/gmail.svg';
import { link } from 'fs';

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap"><u>' + this.txt + '</u></span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

const Main = () => {
  return (
    <div class="wallpaper">
      <Navbar />
      <div class="container">
        <div style={{ textAlign: 'center' }} class="mt-5">
          {/* <img
            src={photo}
            height="300vh"
            width="300vh"
            class="logo rounded-circle"
          /> */}
          <h3
            class="name"
            style={{ fontSize: '30px', fontFamily: 'Anonymous Pro' }}
          >
            HI I'M RAKHEE
          </h3>
          <h3 style={{ paddingTop: '300px' }}>
            <a
              class="typewrite"
              data-period="1000"
              data-type='["A Software Developer", "An AI Enthusiast", "Love Travelling" ]'
              style={{ color: 'orange' }}
            >
              <span class="wrap"></span>
            </a>
          </h3>
          <div class="mt-5" style={{ paddingTop: '300px' }}>
            <a href="https://github.com/rvk007">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/github/github-original.svg"
                width="30px"
                class="rounded icon"
                style={{ backgroundColor: 'whitesmoke' }}
              />
            </a>
            <a href="https://www.linkedin.com/in/rvk007/">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/linkedin/linkedin-original.svg"
                width="30px"
                class="ml-4 icon"
              />
            </a>
            <a href="mailto:rakhee@nyu.edu">
              <img src={gmail} width="40px" height="40px" class="ml-4 icon" />
            </a>
            <a href="https://twitter.com/vsharma_rakhee">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/twitter/twitter-original.svg"
                width="30px"
                class="ml-4 icon"
              />
            </a>
            <a href="https://www.instagram.com/rakhee_1.0/">
              <img
                src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
                width="30px"
                class="ml-4 icon"
              />
            </a>
            <a href="https://www.facebook.com/rakhee.vishwakarma.3">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/facebook/facebook-original.svg"
                width="30px"
                class="ml-4 icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
