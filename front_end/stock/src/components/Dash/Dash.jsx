import React, { useEffect, useState } from 'react';
import LeftBar from '../parts/LeftBar';
import TopBar from '../parts/TopBar';
import Chart from '../parts/chart';


const fakeStockData1 = [];

const fakeStockData2 = [];

function ReportDash(props) {
  const [stockInfo, setStockInfo] = useState([]);
  const [num_total, setNumTotal] = useState(0);
  const [notify_1, setNotify_1] = useState([
    { not_message: 'NA' },
    { not_message: 'NA' },
    { not_message: 'NA' },
  ]);
  const [notify_2, setNotify_2] = useState([]);
  const [notify_3, setNotify_3] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/allInfo')
      .then((res) => res.json())
      .then((response) => {
        setStockInfo(response.info);
        setNumTotal(response.totalNum);
      })
      .catch((error) => console.log(error.message));
    fetch('http://localhost:3000/api/getNotification')
      .then((res) => res.json())
      .then((response) => {
        const section_1 = response.info.splice(0, 3);
        const section_2 = response.info.splice(0, 3);
        const section_3 = response.info;
        setNotify_1(section_1);
        setNotify_2(section_2);
        setNotify_3(section_3);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const getTotalNum = (arr) => {
    let resoult = 0;
    for (var i = 0; i < arr.length; i++) {
      resoult += arr[i];
    }
    return resoult;
  };

  return (
    <section className="Dashboard" id="dashboard">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', height: '100%', overflowY: 'scroll' }}>
          <LeftBar />
          <div className="panel">
            <TopBar />
            <div className="panel__reportcontainer">
              <div className="panel__top">
                <div className="panel__title">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <svg
                      className="panel__popular"
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5eb5f8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: '10px' }}
                    >
                      <path d="M3 3v18h18" />
                      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                    </svg>
                    <h3 style={{ color: 'black' }}>Report</h3>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '33%',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="panel__popular"
                      viewBox="0 0 24 24"
                      fill="#5eb5f8"
                      width="6.2%"
                      style={{ marginRight: '10px' }}
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.706.028c-.007-.006-3.8-4.115-11.383-12.329a.5.5 0 0 1-.037-.633l3.823-5.256A1 1 0 0 1 4.873 3zm.51 2l-2.8 3.85L12 19.05 21.417 8.85 18.617 5H5.383z" />
                      </g>
                    </svg>
                    <h3 style={{ color: 'black' }}>Matrix</h3>
                  </div>
                </div>
                <div className="panel__topCharts">
                  <a href="www.goe.com" className="chartLink" id="chartFirst">
                    <div className="emChart">
                      <div className="emChart__chart">
                        <Chart dataArray={fakeStockData2} />
                      </div>
                      <div className="emChart__info">
                        <h3 className="emChart__name">CHART1</h3>
                        <h3>{getTotalNum(fakeStockData2)}</h3>
                      </div>
                    </div>
                  </a>
                  <a href="www.gog" className="chartLink" id="chartFirst">
                    <div className="emChart">
                      <div className="emChart__chart">
                        <Chart dataArray={fakeStockData1} />
                      </div>
                      <div className="emChart__info">
                        <h3 className="emChart__name">CHART2</h3>
                        <h3>{getTotalNum(fakeStockData1)}</h3>
                      </div>
                    </div>
                  </a>
                  <div className="panel__protfolio-section">
                    <div
                      className="panel__protfolio"
                      id="protfolio"
                      style={{ display: 'block' }}
                    >
                      <div>
                        <table className="panel__portfolio-list">
                          <tbody>
                            <tr>
                              <th style={{ fontSize: '15px' }}>Ticker</th>
                              <th style={{ fontSize: '15px' }}>Trend</th>
                            </tr>
                            {stockInfo.map((dep) => (
                              <tr>
                                <td
                                  style={{
                                    textAlign: 'center',
                                    color: 'black',
                                    fontSize: '16px',
                                  }}
                                >
                                  {dep[1]}
                                </td>
                                <td
                                  style={{
                                    textAlign: 'center',
                                    color: 'black',
                                    fontSize: '16px',
                                  }}
                                >
                                  {dep[0]}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="panel__value">
                          <h5>Total</h5>
                          <h5>{num_total}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel__lower">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <svg
                  fill="#5eb5f8"
                  width="1.9%"
                  style={{ marginRight: '10px' }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                  </g>
                </svg>
                <h3 style={{ color: 'black' }}>Notification</h3>
              </div>
              <div className="panel__bottom">
                <div className="panel__notificationlist">
                  <ul className="panel__list">
                    {notify_1.map((not) => (
                      <li className="panel__listcontent">
                        <span className="panel__fullname">
                          <h4>Notification</h4>
                          <h6 className="panel__name">{not.not_message}</h6>
                        </span>
                        <div className="panel__list-change"></div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel__notificationlist">
                  <ul className="panel__list">
                    {notify_2.map((not) => (
                      <li className="panel__listcontent">
                        <span className="panel__fullname">
                          <h4>Notification</h4>
                          <h6 className="panel__name">{not.not_message}</h6>
                        </span>
                        <div className="panel__list-change"></div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel__notificationlist">
                  <ul className="panel__list">
                    {notify_3.map((not) => (
                      <li className="panel__listcontent">
                        <span className="panel__fullname">
                          <h4>Notification</h4>
                          <h6 className="panel__name">{not.not_message}</h6>
                        </span>
                        <div className="panel__list-change"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReportDash;
