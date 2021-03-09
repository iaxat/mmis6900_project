import React, { Fragment, useEffect } from 'react';
import LeftBar from '../Parts/LeftBar';
import TopBar from '../Parts/TopBarTest';

const apiKeys = [
  'OYMIDLPTGY6CAMP0',
  'TVARN7J9F191IFLB',
  'NOBPQ2OPX7E1XRT3',
  '7V0Q0N46CBIPHA2K',
];

//Charts
let chartData1 = [];
let chartData2 = [];

// CHARTS INFO

let stockSymbols = [],
  stockPrices = [],
  stockChanges = [],
  changesColors = [];

// SYMBOLS LIST

let stockList = [],
  stockListPrices = [],
  stockListTickers = [],
  stockListChange = [],
  stockListChangeColors = [];

//Temp Symbols for Duplicates in Lists
let tempStocksSymbols = [];
let tempStockName = [];
let tempStockPrice = [];

function Alert() {
  /*
    if (
    sessionStorage.getItem("alert") === "true" ||
    sessionStorage.getItem("alert") === null
  ) {
    return (
      <div className="alertMessage" id="alertMessage">
        <h2>HELLO !</h2>
        <p>
          This application is in pre-alpha. It means you might have problem with
          responsiveness, buyng/selling stocks and due to my api provider, there
          is a limit in loading charts.
        </p>
        <button
          onClick={() => {
            document.getElementById("alertMessage").outerHTML = "";
            sessionStorage.setItem("alert", "false");
          }}
          className="alertMessage__button">
          OK
        </button>
      </div>
    );
  } else {
    return <div />;
  }
*/
  return <div />;
}

function Dash(props) {
  const getChart = (dataChart, symbol, callback) => {
    let b = 0;
    const stockApi = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKeys[0]}`;
    fetch(stockApi)
      .then((res) => res.json())
      .then((result) => {
        if (
          typeof result['Note'] === 'undefined' &&
          Object.keys(result['Time Series (1min)']).length > 1
        ) {
          for (
            let i = Object.keys(result['Time Series (1min)']).length - 1;
            i > 0 || callback();
            i--
          ) {
            dataChart.push(
              parseFloat(
                result['Time Series (1min)'][
                  Object.keys(result['Time Series (1min)'])[parseInt(i)]
                ]['4. close']
              ).toFixed(2)
            );
          }
        } else {
          if (typeof result['Note'] === 'undefined') {
            b++;
            const stockApi = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${
              apiKeys[parseInt(b)]
            }`;
            fetch(stockApi)
              .then((res) => res.json())
              .then((result) => {
                if (
                  typeof result['Note'] === 'undefined' &&
                  result.length > 1
                ) {
                  for (
                    let i =
                      Object.keys(result['Time Series (1min)']).length - 1;
                    i > 0 || callback();
                    i--
                  ) {
                    dataChart.push(
                      parseFloat(
                        result['Time Series (1min)'][
                          Object.keys(result['Time Series (1min)'])[parseInt(i)]
                        ]['4. close']
                      ).toFixed(2)
                    );
                  }
                }
              });
          } else {
            if (typeof result['Note'] === 'undefined' && result.length > 1) {
              b++;
              const stockApi = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${
                apiKeys[parseInt(b)]
              }`;
              fetch(stockApi)
                .then((res) => res.json())
                .then((result) => {
                  for (
                    let i =
                      Object.keys(result['Time Series (1min)']).length - 1;
                    i > 0 || callback();
                    i--
                  ) {
                    dataChart.push(
                      parseFloat(
                        result['Time Series (1min)'][
                          Object.keys(result['Time Series (1min)'])[parseInt(i)]
                        ]['4. close']
                      ).toFixed(2)
                    );
                  }
                });
            }
          }
        }
      });
  };

  const getStocksList = () => {
    //Most active
    const stocksURI = `https://cloud.iexapis.com/stable/stock/market/list/mostactive?token=${process.env.REACT_APP_API_KEY_2}`;
    fetch(stocksURI)
      .then((res) => res.json())
      .then((response) => {
        const gainers = `https://cloud.iexapis.com/stable/stock/market/list/gainers?token=${process.env.REACT_APP_API_KEY_2}`;
        let counter = 0;
        fetch(gainers)
          .then((res) => res.json())
          .then((response) => {
            for (var i = 0; i < response.length; i++) {
              if (response[i].latestPrice) {
                tempStocksSymbols.push(response[i].symbol);
                tempStockName.push(response[i].companyName);
                tempStockPrice.push(`$${response[i].latestPrice.toFixed(2)}`);
              }
            }
          });
      })
      .catch((error) => console.log(error.message));
  };

  const test = () => {
    console.log(
      'function is getting called!' + tempStockPrice + tempStocksSymbols
    );
  };
  getStocksList();

  setTimeout(() => {
    console.log('Time out' + '++++' + tempStockName + tempStockPrice);
  }, 1000);

  return (
    <section className="Dashboard" id="dashboard">
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <LeftBar />
          <div className="panel">
            <TopBar />
            <div className="panel__container">
              <div className="panel__top">
                <div className="panel__title"></div>
                <div className="panel__topCharts"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dash;
