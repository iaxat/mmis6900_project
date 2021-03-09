import React, { Fragment, useRef, useState, useEffect } from 'react';

let allTicket;

function TopBar(props) {
  const [searchText, setSearchText] = useState('');
  const searchResoult = useRef();
  const searchBar = useRef();

  useEffect(() => {
    fetch(
      `https://cloud.iexapis.com/stable/ref-data/symbols?token=sk_f0eda7565d4d423da54ac6f61bc90620`
    )
      .then((res) => res.json())
      .then((resoult) => {
        allTicket = resoult;
      })
      .catch((error) => console.log(error.message));
  }, []);

  const handleOnSearch = (event) => {
    const input = event.target.value;
    setSearchText(input);
  };

  const handleOnfouce = () => {
    searchBar.current.style.boxShadow = '0px 0px 30px 0px rgba(0,0,0,0.10)';
  };

  const handleInputOnBlur = () => {
    searchBar.current.style.boxShadow = 'none';
  };

  return (
    <Fragment>
      <div className="topbar">
        <nav>
          <div className="topbar__search" ref={searchBar}>
            <div
              style={{
                display: 'flex',
                justifyItems: 'center',
                alignItems: 'center',
              }}
            >
              <svg
                enableBackground="new 0 0 250.313 250.313"
                version="1.1"
                viewBox="0 0 250.313 250.313"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m244.19 214.6l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76 10.7-16.231 16.945-35.66 16.945-56.554 0-56.837-46.075-102.91-102.91-102.91s-102.91 46.075-102.91 102.91c0 56.835 46.074 102.91 102.91 102.91 20.895 0 40.323-6.245 56.554-16.945 0.269 0.301 0.47 0.64 0.759 0.929l54.38 54.38c8.169 8.168 21.413 8.168 29.583 0 8.168-8.169 8.168-21.413 0-29.582zm-141.28-44.458c-37.134 0-67.236-30.102-67.236-67.235 0-37.134 30.103-67.236 67.236-67.236 37.132 0 67.235 30.103 67.235 67.236s-30.103 67.235-67.235 67.235z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
              <input
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                type="text"
                id="searchBar"
                placeholder="Search by symbol"
                onFocus={() => handleOnfouce()}
                onBlur={() => handleInputOnBlur()}
                onChange={(event) => handleOnSearch(event)}
              />
            </div>
          </div>
          <div className="topbar__status">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18 7h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h15v4zM4 9v10h16V9H4zm0-4v2h12V5H4zm11 8h3v2h-3v-2z" />
              </g>
            </svg>
            <h3>{'$300,01012'}</h3>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default TopBar;
