import React from "react";
import Buttons from "../../shared/buttons/Button";
import "../../images/available.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <em>
          Hello <span className="line"> ------------</span>
        </em>
        <p>
          My Name is Michael , <br /> I'm a <span>DEVELOPER </span>&& <br /> A{" "}
          <span> PROJECT MANAGER</span>
          from <span>Nigeria...</span>
        </p>
        <Buttons name={"Download CV"} icon={"download"} />
      </div>
      <div className="available">
        <svg
          width="202"
          height="480"
          viewBox="0 0 202 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 12">
            <g id="sling">
              <g id="BOARD">
                <rect
                  id="Rectangle 2"
                  x="4.76404"
                  y="376.735"
                  width="136"
                  height="136"
                  rx="20"
                  transform="rotate(-44.0515 4.76404 376.735)"
                  fill="#C4C4C4"
                  stroke="black"
                  stroke-width="4"
                />
                <rect
                  id="Rectangle 1"
                  x="9.0061"
                  y="376.806"
                  width="130"
                  height="130"
                  rx="16"
                  transform="rotate(-44.0515 9.0061 376.806)"
                  fill="#E3C214"
                />
                <g id="AVAILABLE">
                  <path
                    d="M46.7199 377.442L43.8914 370.497C43.8076 370.291 43.7191 370.052 43.6261 369.782C43.533 369.504 43.4436 369.209 43.3578 368.899C43.2018 369.55 43.0398 370.093 42.8718 370.528L40.301 377.561L46.7199 377.442ZM51.6847 383.736L49.8851 383.769C49.6771 383.773 49.5082 383.724 49.3783 383.622C49.2484 383.521 49.15 383.39 49.083 383.232L47.3987 379.11L39.6841 379.252L38.1529 383.433C38.1075 383.578 38.0179 383.708 37.884 383.822C37.7501 383.937 37.5831 383.996 37.3832 383.999L35.5835 384.033L42.1413 366.713L44.4929 366.669L51.6847 383.736ZM66.3183 366.267L59.6285 383.589L57.5409 383.628L50.2171 366.564L52.0767 366.53C52.2847 366.526 52.4536 366.575 52.5835 366.676C52.7134 366.778 52.8119 366.908 52.8788 367.067L57.9496 379.108C58.0586 379.378 58.1641 379.672 58.2659 379.99C58.3758 380.308 58.474 380.642 58.5605 380.993C58.634 380.639 58.7118 380.302 58.7938 379.98C58.8759 379.659 58.9665 379.361 59.0654 379.087L63.677 366.868C63.7224 366.731 63.8121 366.605 63.946 366.491C64.0878 366.368 64.2587 366.305 64.4586 366.301L66.3183 366.267ZM76.6211 376.891L73.7925 369.946C73.7087 369.739 73.6203 369.501 73.5273 369.231C73.4342 368.952 73.3447 368.658 73.259 368.347C73.103 368.998 72.9409 369.542 72.7729 369.977L70.2021 377.009L76.6211 376.891ZM81.5859 383.184L79.7862 383.218C79.5783 383.222 79.4093 383.173 79.2794 383.071C79.1495 382.969 79.0511 382.839 78.9842 382.68L77.2999 378.559L69.5852 378.701L68.054 382.882C68.0087 383.027 67.9191 383.156 67.7852 383.271C67.6513 383.385 67.4843 383.444 67.2843 383.448L65.4847 383.481L72.0425 366.162L74.3941 366.118L81.5859 383.184ZM86.1753 383.1L83.8477 383.143L83.5307 365.95L85.8583 365.907L86.1753 383.1ZM100.291 380.883L100.327 382.839L90.5731 383.019L90.2561 365.826L92.5717 365.783L92.8527 381.02L100.291 380.883ZM111.912 376.24L109.083 369.295C109 369.089 108.911 368.85 108.818 368.58C108.725 368.302 108.636 368.007 108.55 367.697C108.394 368.348 108.232 368.891 108.064 369.326L105.493 376.359L111.912 376.24ZM116.877 382.534L115.077 382.567C114.869 382.571 114.7 382.522 114.57 382.42C114.44 382.319 114.342 382.188 114.275 382.03L112.591 377.908L104.876 378.05L103.345 382.231C103.3 382.376 103.21 382.506 103.076 382.62C102.942 382.735 102.775 382.794 102.575 382.797L100.776 382.831L107.333 365.511L109.685 365.467L116.877 382.534ZM125.14 380.533C125.803 380.521 126.374 380.434 126.851 380.274C127.328 380.113 127.716 379.894 128.015 379.616C128.322 379.33 128.544 378.998 128.681 378.62C128.818 378.233 128.882 377.812 128.874 377.356C128.857 376.468 128.528 375.774 127.887 375.274C127.246 374.765 126.293 374.523 125.029 374.546L121.31 374.615L121.42 380.602L125.14 380.533ZM121.171 367.092L121.279 372.959L124.351 372.902C125.007 372.89 125.573 372.808 126.05 372.655C126.536 372.502 126.932 372.295 127.239 372.033C127.554 371.771 127.785 371.459 127.93 371.096C128.075 370.725 128.144 370.324 128.136 369.892C128.117 368.876 127.8 368.142 127.183 367.689C126.566 367.229 125.618 367.01 124.339 367.034L121.171 367.092ZM124.305 365.198C125.36 365.178 126.27 365.266 127.034 365.46C127.806 365.653 128.439 365.938 128.934 366.313C129.437 366.688 129.81 367.153 130.052 367.708C130.294 368.256 130.422 368.878 130.434 369.574C130.442 369.998 130.382 370.407 130.253 370.801C130.132 371.188 129.943 371.551 129.685 371.892C129.427 372.233 129.097 372.543 128.694 372.822C128.299 373.094 127.831 373.318 127.29 373.496C128.558 373.713 129.515 374.147 130.159 374.8C130.811 375.444 131.147 376.302 131.166 377.374C131.18 378.101 131.056 378.768 130.795 379.373C130.542 379.977 130.16 380.501 129.648 380.942C129.144 381.383 128.518 381.731 127.771 381.985C127.023 382.231 126.169 382.362 125.21 382.38L119.139 382.492L118.822 365.299L124.305 365.198ZM144.37 380.071L144.406 382.026L134.652 382.206L134.335 365.013L136.65 364.97L136.931 380.208L144.37 380.071ZM157.549 379.888L157.572 381.783L146.978 381.979L146.661 364.786L157.255 364.59L157.29 366.486L149.023 366.638L149.128 372.35L155.823 372.226L155.857 374.05L149.162 374.173L149.27 380.04L157.549 379.888Z"
                    fill="black"
                  />
                </g>
              </g>
              <line
                id="line"
                x1="102.417"
                y1="35.0541"
                x2="102.417"
                y2="286.416"
                stroke="black"
                stroke-width="3"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Home;
