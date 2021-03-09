import React, { useRef, useEffect } from 'react';

let allTicket;

function TopBarTest() {
  const searchBar = useRef();
  const searchResoult = useRef();
  const searchText = useRef();

  useEffect(() => {
    fetch(
      `https://cloud.iexapis.com/stable/ref-data/symbols?token=${process.env.REACT_APP_API_KEY_2}`
    )
      .then((res) => res.json())
      .then((resoult) => (allTicket = resoult))
      .catch((error) => console.log(error.message));
  }, []);

  const handleSearchStock = (event) => {
    let userInput = searchText.current.value;
    if (userInput.length === 0) {
      searchResoult.current.style.display = 'none';
      searchResoult.current.innerHTML = '';
    }
    searchResoult.current.innerHTML = '';
    const filtered = [];
    let round = 0;
    for (var i = 0; i < allTicket.length; i++) {
      let currentTicket = allTicket[i].symbol;
      let filter = searchText.current.value.toUpperCase();
      if (round === 10) {
        break;
      }
      if (currentTicket.indexOf(filter) > -1) {
        if (filtered.length > 10) {
          filtered = [];
        }
        filtered.push([currentTicket, allTicket[i].name]);
        round++;
      }
    }
    if (filtered.length > 0 && userInput.length > 0) {
      searchResoult.current.style.display = 'flex';
      for (var j = 0; j < filtered.length; j++) {
        let newChild = document.createElement('li');
        newChild.innerHTML = `<a href=''><h4>${filtered[j][0]}</h4><h6>${filtered[j][1]}</h6></a>`;
        searchResoult.current.appendChild(newChild);
      }
    }
  };

  return (
    <nav style={{ display: 'flex', alignItems: 'center' }}>
      <div className="topbar">
        <div
          className="topbar__searchbar"
          ref={searchBar}
          id="topbar__searchbar"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyItems: 'center',
              width: '100%',
            }}
          >
            <svg
              className="first"
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
              ref={searchText}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              type="text"
              id="searchBar"
              placeholder="Search by symbol"
              onKeyUp={(event) => handleSearchStock(event)}
              onFocus={() => {
                searchBar.current.style.boxShadow =
                  '0px 0px 30px 0px rgba(0,0,0,0.10)';
              }}
              onBlur={() => {
                searchBar.current.style.boxShadow = 'none';
                searchResoult.current.style.display = 'none';
              }}
              autoComplete="off"
            />
          </div>
          <ul className="topbar__results" id="results" ref={searchResoult} />
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
      </div>
    </nav>
  );
}

export default TopBarTest;
