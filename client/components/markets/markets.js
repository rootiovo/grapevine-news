import React, { Component } from 'react';
import Chart from "react-google-charts";
import './markets.css';

class Markets extends Component {

  constructor(props) {
    super(props);
}

  render () {

    const data = [
      ["Year", "Sales", "Expenses"],
      ["2004", 1000, 400],
      ["2005", 1170, 460],
      ["2006", 660, 1120],
      ["2007", 1030, 540]
    ];

    const options = {
      title: "Company Performance",
      legend: { position: "bottom" }
    };
    
    return (
        <div className="markets">
          <div className="card">
            <div className="card-header">
            <i className="fas fa-chart-line"></i>&nbsp;<span>Markets</span>
            </div>
            <div className="card-body">
              <div className="line-chart-wrapper" style={{ width: '100%', height: '400px' }}>
              <div className="App">
                <Chart
                  chartType="LineChart"
                  width="100%"
                  height="400px"
                  data={data}
                  options={options}
                />
              </div>             
                  </div>
                    </div>
                  </div>
              </div>
          )
          }
        }

export default Markets;
