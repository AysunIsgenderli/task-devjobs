import React, { useState, useEffect } from "react";
import datas from "./data.json";
import "./App.css";
import Switch from "./Switch";

function App() {
  // function toggleTheme() {
  //   const { theme } = document.documentElement.dataset;
  //   console.log(theme);
  //   if (!theme) {
  //     document.documentElement.dataset.theme = "dark";
  //     console.log(theme);
  //   } else {
  //     document.documentElement.dataset.theme = "";
  //   }
  // }
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <header>
        <div className="bg-img">
          <img src="../src/assets/images/nav.png" alt="" />
        </div>
        <div className="heading container">
          <h1>
            <img src="../src/assets/images/devjobs (1).png" alt="" />
          </h1>
          <div className="modeController">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 3.3646C9.67033 3.3646 9.38775 3.07003 9.38775 2.72636V0.83618C9.38775 0.492511 9.67033 0.197937 10 0.197937C10.3297 0.197937 10.6122 0.492511 10.6122 0.83618V2.72636C10.6122 3.07003 10.3297 3.3646 10 3.3646ZM6.40172 5.9521C7.31472 5.1021 8.60365 4.5521 10 4.5521C11.3963 4.5521 12.6853 5.0771 13.5983 5.9521C14.5113 6.8021 15.102 8.0021 15.102 9.3021C15.102 10.6021 14.5113 11.8021 13.5983 12.6521C12.6853 13.5021 11.3963 14.0521 10 14.0521C8.60365 14.0521 7.31472 13.5271 6.40172 12.6521C5.48872 11.8021 4.89796 10.6021 4.89796 9.3021C4.89796 8.0021 5.46187 6.8021 6.40172 5.9521ZM3.0593 3.71002L4.54178 5.14772C4.83827 5.40912 5.26954 5.40912 5.51213 5.14772C5.78167 4.88632 5.78167 4.46808 5.51213 4.20668L4.02965 2.76899C3.76011 2.50759 3.32884 2.50759 3.0593 2.76899C2.78976 3.03039 2.78976 3.44862 3.0593 3.71002ZM0.658124 8.90627H2.60718C2.96156 8.90627 3.26531 9.18031 3.26531 9.50002C3.26531 9.81973 2.96156 10.0938 2.60718 10.0938H0.658124C0.303749 10.0938 0 9.81973 0 9.50002C0 9.18031 0.303749 8.90627 0.658124 8.90627ZM5.51213 13.8523C5.24259 13.5909 4.81132 13.5909 4.54178 13.8523L3.0593 15.29C2.78976 15.5514 2.78976 15.9697 3.0593 16.2311C3.32884 16.4925 3.76011 16.4925 4.02965 16.2311L5.51213 14.7934C5.78167 14.532 5.78167 14.1137 5.51213 13.8523ZM10 15.6354C10.3297 15.6354 10.6122 15.93 10.6122 16.2737V18.1639C10.6122 18.5075 10.3297 18.8021 10 18.8021C9.67033 18.8021 9.38775 18.5075 9.38775 18.1639V16.2737C9.38775 15.93 9.67033 15.6354 10 15.6354ZM16.9407 15.29L15.4582 13.8523C15.1617 13.5909 14.7305 13.5909 14.4879 13.8523C14.2183 14.1137 14.2183 14.532 14.4879 14.7934L15.9704 16.2311C16.2399 16.4925 16.6712 16.4925 16.9407 16.2311C17.2102 15.9697 17.2102 15.5514 16.9407 15.29ZM16.7347 9.50002C16.7347 9.18031 17.0384 8.90627 17.3928 8.90627H19.3419C19.6963 8.90627 20 9.18031 20 9.50002C20 9.81973 19.6963 10.0938 19.3419 10.0938H17.3928C17.0384 10.0938 16.7347 9.81973 16.7347 9.50002ZM14.4879 5.14772C14.7574 5.40912 15.1887 5.40912 15.4582 5.14772L16.9407 3.71002C17.2102 3.44862 17.2102 3.03039 16.9407 2.76899C16.6712 2.50759 16.2399 2.50759 15.9704 2.76899L14.4879 4.20668C14.2183 4.46808 14.2183 4.88632 14.4879 5.14772Z"
                fill="white"
              />
            </svg>
            {/* <button className="toggleButton">
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
              </label>
            </button> */}
            <Switch
              rounded={true}
              isToggled={isToggled}
              onToggle={() => {
                setIsToggled(!isToggled);
              }}
            />

            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0C4.35789 0 2.84211 0.694737 1.76842 1.76842C0.663158 2.84211 0 4.35789 0 6C0 7.64211 0.694737 9.15789 1.76842 10.2316C2.84211 11.3368 4.35789 12 6 12C7.64211 12 9.1579 11.3053 10.2316 10.2316C11.3053 9.15789 12 7.64211 12 6C12 5.8147 11.9912 5.63101 11.9739 5.44938C11.8669 6.36895 11.4377 7.20438 10.8211 7.82105C10.1053 8.53684 9.09474 9 8 9C6.90526 9 5.89474 8.55789 5.17895 7.82105C4.46316 7.10526 4 6.09474 4 5C4 3.90526 4.44211 2.89474 5.17895 2.17895C5.89474 1.46316 6.90526 1 8 1C8.7164 1 9.39674 1.18933 9.98201 1.52669C8.92922 0.567176 7.51863 0 6 0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="filters container">
          <form>
            <label className="filterTitle filter">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z"
                  fill="#5964E0"
                />
              </svg>
              <input
                type="text"
                placeholder="Filter by title, companies, expertise…"
              />
            </label>
            <label className="filterLocation filter">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.4477 0C10.6804 0 12.7796 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.4477 23.894L1.75057 14.2119C-0.747997 10.8781 -0.384894 5.37556 2.53693 2.45105C4.11575 0.870546 6.21459 0 8.4477 0ZM5.47357 8.29091C5.47357 9.97484 6.84272 11.3455 8.52485 11.3455C10.207 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.207 5.23636 8.52485 5.23636C6.84272 5.23636 5.47357 6.60698 5.47357 8.29091Z"
                  fill="#5964E0"
                />
              </svg>
              <input type="text" placeholder="Filter by location…" />
            </label>
            <label className="searchArea filter">
              <label className="label">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <p>Full Time Only</p>
              <button>Search</button>
            </label>
          </form>
        </div>
      </header>
      <div className="container">
        <div className="cards">
          {datas &&
            datas.map((data) => {
              return (
                <div className="card" key={data.id}>
                  <div className="logo">
                    <img src={data.img} />
                  </div>
                  <div className="date">
                    {" "}
                    <span className="activeTime">{data.activeTime}</span>.{" "}
                    {data.workTime}{" "}
                  </div>
                  <p className="position">{data.position}</p>
                  <span className="company">{data.company}</span>
                  <div className="country">{data.country}</div>
                </div>
              );
            })}
        </div>
        <div className="loadButton">
          {" "}
          <button>Load more</button>
        </div>
      </div>
    </>
  );
}

export default App;
