import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SalWrapper } from '../.';
import './index.css';

const App = () => {
  return (
    <div>
      <SalWrapper>
        <section className="content">
          <div className="row">
            <div className="column">
              <svg
                className="shape yellow sal-animate"
                data-sal="slide-up"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape pink sal-animate"
                data-sal="fade-in"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape pink sal-animate"
                data-sal="fade-in"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape violet sal-animate"
                data-sal="zoom-in"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
              <svg
                className="shape violet sal-animate"
                data-sal="zoom-in"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape violet sal-animate"
                data-sal="zoom-in"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
              <svg
                className="shape violet sal-animate"
                data-sal="zoom-in"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape yellow sal-animate"
                data-sal="fade-in"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape green"
                data-sal="slide-up"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape green"
                data-sal="slide-up"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape violet"
                data-sal="zoom-in"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="67.65"
                height="60.62"
                viewBox="0 0 67.65 60.62"
              >
                <path d="M53.33,3.46a7.69,7.69,0,0,0-6-3.46h-27a7.69,7.69,0,0,0-6,3.46L.83,26.85a7.69,7.69,0,0,0,0,6.93l13.5,23.38a7.69,7.69,0,0,0,6,3.46h27a7.69,7.69,0,0,0,6-3.46l13.5-23.38a7.69,7.69,0,0,0,0-6.93Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape violet"
                data-sal="zoom-in"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="67.65"
                height="60.62"
                viewBox="0 0 67.65 60.62"
              >
                <path d="M53.33,3.46a7.69,7.69,0,0,0-6-3.46h-27a7.69,7.69,0,0,0-6,3.46L.83,26.85a7.69,7.69,0,0,0,0,6.93l13.5,23.38a7.69,7.69,0,0,0,6,3.46h27a7.69,7.69,0,0,0,6-3.46l13.5-23.38a7.69,7.69,0,0,0,0-6.93Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape yellow"
                data-sal="slide-up"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="72.74"
                height="64.06"
                viewBox="0 0 72.74 64.06"
              >
                <path d="M32.91,2a4,4,0,0,1,6.93,0L54,26.56l4,6.93L72.2,58.06a4,4,0,0,1-3.46,6H4a4,4,0,0,1-3.46-6L14.72,33.49l4-6.93Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape yellow"
                data-sal="slide-up"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="72.74"
                height="64.06"
                viewBox="0 0 72.74 64.06"
              >
                <path d="M32.91,2a4,4,0,0,1,6.93,0L54,26.56l4,6.93L72.2,58.06a4,4,0,0,1-3.46,6H4a4,4,0,0,1-3.46-6L14.72,33.49l4-6.93Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape green"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape green"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
              <svg
                className="shape pink"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
              <svg
                className="shape pink"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape violet"
                data-sal="slide-up"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape violet"
                data-sal="slide-up"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="250"
                xmlns="http://www.w3.org/2000/svg"
                width="69.11"
                height="69.11"
                viewBox="0 0 69.11 69.11"
              >
                <rect
                  x="8.94"
                  y="8.94"
                  width="51.22"
                  height="51.22"
                  rx="4"
                  ry="4"
                  transform="translate(-14.31 34.55) rotate(-45)"
                ></rect>
              </svg>
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="250"
                xmlns="http://www.w3.org/2000/svg"
                width="69.11"
                height="69.11"
                viewBox="0 0 69.11 69.11"
              >
                <rect
                  x="8.94"
                  y="8.94"
                  width="51.22"
                  height="51.22"
                  rx="4"
                  ry="4"
                  transform="translate(-14.31 34.55) rotate(-45)"
                ></rect>
              </svg>
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape green"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
              <svg
                className="shape green"
                data-sal="zoom-in"
                data-sal-delay="0"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape green"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
              <svg
                className="shape green"
                data-sal="zoom-in"
                data-sal-delay="0"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape blue"
                data-sal="fade-in"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape blue"
                data-sal="fade-in"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape blue"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
              <svg
                className="shape violet"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape blue"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
              <svg
                className="shape violet"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape pink"
                data-sal="fade-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path>
              </svg>
              <svg
                className="shape violet"
                data-sal="fade-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape pink"
                data-sal="fade-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path>
              </svg>
              <svg
                className="shape violet"
                data-sal="fade-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape green"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="72.74"
                height="64.06"
                viewBox="0 0 72.74 64.06"
              >
                <path d="M32.91,2a4,4,0,0,1,6.93,0L54,26.56l4,6.93L72.2,58.06a4,4,0,0,1-3.46,6H4a4,4,0,0,1-3.46-6L14.72,33.49l4-6.93Z"></path>
              </svg>
              <svg
                className="shape blue"
                data-sal="zoom-in"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="67.65"
                height="60.62"
                viewBox="0 0 67.65 60.62"
              >
                <path d="M53.33,3.46a7.69,7.69,0,0,0-6-3.46h-27a7.69,7.69,0,0,0-6,3.46L.83,26.85a7.69,7.69,0,0,0,0,6.93l13.5,23.38a7.69,7.69,0,0,0,6,3.46h27a7.69,7.69,0,0,0,6-3.46l13.5-23.38a7.69,7.69,0,0,0,0-6.93Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape green"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="72.74"
                height="64.06"
                viewBox="0 0 72.74 64.06"
              >
                <path d="M32.91,2a4,4,0,0,1,6.93,0L54,26.56l4,6.93L72.2,58.06a4,4,0,0,1-3.46,6H4a4,4,0,0,1-3.46-6L14.72,33.49l4-6.93Z"></path>
              </svg>
              <svg
                className="shape blue"
                data-sal="zoom-in"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="67.65"
                height="60.62"
                viewBox="0 0 67.65 60.62"
              >
                <path d="M53.33,3.46a7.69,7.69,0,0,0-6-3.46h-27a7.69,7.69,0,0,0-6,3.46L.83,26.85a7.69,7.69,0,0,0,0,6.93l13.5,23.38a7.69,7.69,0,0,0,6,3.46h27a7.69,7.69,0,0,0,6-3.46l13.5-23.38a7.69,7.69,0,0,0,0-6.93Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape blue"
                data-sal="fade-in"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape blue"
                data-sal="fade-in"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape pink"
                data-sal="slide-up"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape pink"
                data-sal="slide-up"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape violet"
                data-sal="slide-up"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="67.65"
                height="60.62"
                viewBox="0 0 67.65 60.62"
              >
                <path d="M53.33,3.46a7.69,7.69,0,0,0-6-3.46h-27a7.69,7.69,0,0,0-6,3.46L.83,26.85a7.69,7.69,0,0,0,0,6.93l13.5,23.38a7.69,7.69,0,0,0,6,3.46h27a7.69,7.69,0,0,0,6-3.46l13.5-23.38a7.69,7.69,0,0,0,0-6.93Z"></path>
              </svg>
              <svg
                className="shape green"
                data-sal="slide-up"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape violet"
                data-sal="slide-up"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="67.65"
                height="60.62"
                viewBox="0 0 67.65 60.62"
              >
                <path d="M53.33,3.46a7.69,7.69,0,0,0-6-3.46h-27a7.69,7.69,0,0,0-6,3.46L.83,26.85a7.69,7.69,0,0,0,0,6.93l13.5,23.38a7.69,7.69,0,0,0,6,3.46h27a7.69,7.69,0,0,0,6-3.46l13.5-23.38a7.69,7.69,0,0,0,0-6.93Z"></path>
              </svg>
              <svg
                className="shape green"
                data-sal="slide-up"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape green"
                data-sal="zoom-in"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape green"
                data-sal="zoom-in"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape pink"
                data-sal="fade-in"
                data-sal-delay="250"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="0"
                xmlns="http://www.w3.org/2000/svg"
                width="72.74"
                height="64.06"
                viewBox="0 0 72.74 64.06"
              >
                <path d="M32.91,2a4,4,0,0,1,6.93,0L54,26.56l4,6.93L72.2,58.06a4,4,0,0,1-3.46,6H4a4,4,0,0,1-3.46-6L14.72,33.49l4-6.93Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape pink"
                data-sal="fade-in"
                data-sal-delay="250"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="0"
                xmlns="http://www.w3.org/2000/svg"
                width="72.74"
                height="64.06"
                viewBox="0 0 72.74 64.06"
              >
                <path d="M32.91,2a4,4,0,0,1,6.93,0L54,26.56l4,6.93L72.2,58.06a4,4,0,0,1-3.46,6H4a4,4,0,0,1-3.46-6L14.72,33.49l4-6.93Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape pink"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="69.11"
                height="69.11"
                viewBox="0 0 69.11 69.11"
              >
                <rect
                  x="8.94"
                  y="8.94"
                  width="51.22"
                  height="51.22"
                  rx="4"
                  ry="4"
                  transform="translate(-14.31 34.55) rotate(-45)"
                ></rect>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape pink"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="69.11"
                height="69.11"
                viewBox="0 0 69.11 69.11"
              >
                <rect
                  x="8.94"
                  y="8.94"
                  width="51.22"
                  height="51.22"
                  rx="4"
                  ry="4"
                  transform="translate(-14.31 34.55) rotate(-45)"
                ></rect>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape pink"
                data-sal="slide-up"
                data-sal-delay="250"
                xmlns="http://www.w3.org/2000/svg"
                width="69.11"
                height="69.11"
                viewBox="0 0 69.11 69.11"
              >
                <rect
                  x="8.94"
                  y="8.94"
                  width="51.22"
                  height="51.22"
                  rx="4"
                  ry="4"
                  transform="translate(-14.31 34.55) rotate(-45)"
                ></rect>
              </svg>
              <svg
                className="shape blue"
                data-sal="zoom-in"
                data-sal-delay="0"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape pink"
                data-sal="slide-up"
                data-sal-delay="250"
                xmlns="http://www.w3.org/2000/svg"
                width="69.11"
                height="69.11"
                viewBox="0 0 69.11 69.11"
              >
                <rect
                  x="8.94"
                  y="8.94"
                  width="51.22"
                  height="51.22"
                  rx="4"
                  ry="4"
                  transform="translate(-14.31 34.55) rotate(-45)"
                ></rect>
              </svg>
              <svg
                className="shape blue"
                data-sal="zoom-in"
                data-sal-delay="0"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape blue"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="72.74"
                height="64.06"
                viewBox="0 0 72.74 64.06"
              >
                <path d="M32.91,2a4,4,0,0,1,6.93,0L54,26.56l4,6.93L72.2,58.06a4,4,0,0,1-3.46,6H4a4,4,0,0,1-3.46-6L14.72,33.49l4-6.93Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape blue"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="72.74"
                height="64.06"
                viewBox="0 0 72.74 64.06"
              >
                <path d="M32.91,2a4,4,0,0,1,6.93,0L54,26.56l4,6.93L72.2,58.06a4,4,0,0,1-3.46,6H4a4,4,0,0,1-3.46-6L14.72,33.49l4-6.93Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
              <svg
                className="shape yellow"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape yellow"
                data-sal="fade-in"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
              <svg
                className="shape yellow"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape green"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape green"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape yellow"
                data-sal="slide-up"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
              <svg
                className="shape green"
                data-sal="zoom-in"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape yellow"
                data-sal="slide-up"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="68.57"
                height="65.75"
                viewBox="0 0 68.57 65.75"
              >
                <path d="M37.52,1A5.88,5.88,0,0,0,31,1L2.23,21.91a5.88,5.88,0,0,0-2,6.16l11,33.88a5.88,5.88,0,0,0,5.24,3.8H52.1a5.88,5.88,0,0,0,5.24-3.8l11-33.88a5.88,5.88,0,0,0-2-6.16Z"></path>
              </svg>
              <svg
                className="shape green"
                data-sal="zoom-in"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape blue"
                data-sal="fade-in"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape blue"
                data-sal="fade-in"
                data-sal-delay="50"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape pink"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
              <svg
                className="shape pink"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape pink"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
              <svg
                className="shape pink"
                data-sal="zoom-in"
                data-sal-delay="150"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="67.18"
                viewBox="0 0 70 67.18"
              >
                <path d="M40.55,3.45l6,12.21A6.18,6.18,0,0,0,51.23,19L64.7,21a6.18,6.18,0,0,1,3.43,10.55L58.38,41a6.18,6.18,0,0,0-1.78,5.47l2.3,13.42a6.18,6.18,0,0,1-9,6.52L37.88,60.12a6.18,6.18,0,0,0-5.76,0L20.07,66.46a6.18,6.18,0,0,1-9-6.52l2.3-13.42A6.18,6.18,0,0,0,11.62,41l-9.75-9.5A6.18,6.18,0,0,1,5.3,21l13.47-2a6.18,6.18,0,0,0,4.66-3.38l6-12.21A6.18,6.18,0,0,1,40.55,3.45Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape violet"
                data-sal="zoom-in"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
              <svg
                className="shape blue"
                data-sal="fade-in"
                data-sal-delay="0"
                xmlns="http://www.w3.org/2000/svg"
                width="67.65"
                height="60.62"
                viewBox="0 0 67.65 60.62"
              >
                <path d="M53.33,3.46a7.69,7.69,0,0,0-6-3.46h-27a7.69,7.69,0,0,0-6,3.46L.83,26.85a7.69,7.69,0,0,0,0,6.93l13.5,23.38a7.69,7.69,0,0,0,6,3.46h27a7.69,7.69,0,0,0,6-3.46l13.5-23.38a7.69,7.69,0,0,0,0-6.93Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape violet"
                data-sal="zoom-in"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
              <svg
                className="shape blue"
                data-sal="fade-in"
                data-sal-delay="0"
                xmlns="http://www.w3.org/2000/svg"
                width="67.65"
                height="60.62"
                viewBox="0 0 67.65 60.62"
              >
                <path d="M53.33,3.46a7.69,7.69,0,0,0-6-3.46h-27a7.69,7.69,0,0,0-6,3.46L.83,26.85a7.69,7.69,0,0,0,0,6.93l13.5,23.38a7.69,7.69,0,0,0,6,3.46h27a7.69,7.69,0,0,0,6-3.46l13.5-23.38a7.69,7.69,0,0,0,0-6.93Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" rx="4" ry="4"></rect>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape violet"
                data-sal="fade-in"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path>
              </svg>
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="67.65"
                height="60.62"
                viewBox="0 0 67.65 60.62"
              >
                <path d="M53.33,3.46a7.69,7.69,0,0,0-6-3.46h-27a7.69,7.69,0,0,0-6,3.46L.83,26.85a7.69,7.69,0,0,0,0,6.93l13.5,23.38a7.69,7.69,0,0,0,6,3.46h27a7.69,7.69,0,0,0,6-3.46l13.5-23.38a7.69,7.69,0,0,0,0-6.93Z"></path>
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <svg
                className="shape violet"
                data-sal="fade-in"
                data-sal-delay="300"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M38.94,2.34l9.52,17.41a4.49,4.49,0,0,0,1.79,1.79l17.41,9.52a4.49,4.49,0,0,1,0,7.89L50.25,48.47a4.49,4.49,0,0,0-1.79,1.79L38.94,67.66a4.49,4.49,0,0,1-7.89,0L21.53,50.25a4.49,4.49,0,0,0-1.79-1.79L2.34,38.94a4.49,4.49,0,0,1,0-7.89l17.41-9.52a4.49,4.49,0,0,0,1.79-1.79L31.06,2.34A4.49,4.49,0,0,1,38.94,2.34Z"></path>
              </svg>
              <svg
                className="shape blue"
                data-sal="slide-up"
                data-sal-delay="100"
                xmlns="http://www.w3.org/2000/svg"
                width="67.65"
                height="60.62"
                viewBox="0 0 67.65 60.62"
              >
                <path d="M53.33,3.46a7.69,7.69,0,0,0-6-3.46h-27a7.69,7.69,0,0,0-6,3.46L.83,26.85a7.69,7.69,0,0,0,0,6.93l13.5,23.38a7.69,7.69,0,0,0,6,3.46h27a7.69,7.69,0,0,0,6-3.46l13.5-23.38a7.69,7.69,0,0,0,0-6.93Z"></path>
              </svg>
            </div>
            <div className="column">
              <svg
                className="shape green"
                data-sal="zoom-in"
                data-sal-delay="250"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <circle cx="30" cy="30" r="30"></circle>
              </svg>
              <svg
                className="shape blue"
                data-sal="zoom-in"
                data-sal-delay="200"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <rect x="28" width="14" height="70" rx="7" ry="7"></rect>
                <rect
                  x="28"
                  width="14"
                  height="70"
                  rx="7"
                  ry="7"
                  transform="translate(0 70) rotate(-90)"
                ></rect>
              </svg>
            </div>
          </div>
        </section>
      </SalWrapper>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
