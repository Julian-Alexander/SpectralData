import React from 'react';
import './chart.styles.scss';
import CanvasJSReact from '../../assets/canvasjs.react';
import data from '../../data/spectrum.json';
import areas from '../../data/areas.json';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints = [];

class Chart extends React.Component {
  state = {
    reload: false,
    title: 'Full Spectrum'
  };

  componentDidMount() {
    dataPoints = data.spectrum.map(val => val);
    this.setState({ reload: true });
  }

  refreshChart = (a, b, c) => {
    dataPoints = data.spectrum.map(val => val);

    const newValue = dataPoints.filter(value => value.x >= a && value.x <= b);
    dataPoints = newValue;
    this.setState({ reload: true });
    this.changeTitle(c);
  };

  fullSpectrum = title => {
    dataPoints = data.spectrum.map(val => val);
    this.setState({ title: title });
  };

  changeTitle(c) {
    this.setState({ title: c });
  }

  render() {
    const options = {
      theme: 'light2',
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: this.state.title
      },
      axisY: {
        valueFormatString: ' '
      },
      axisX: {
        includeZero: true
      },
      data: [
        {
          yValueFormatString: '#,###,###.##',
          type: 'line',
          dataPoints: dataPoints
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        <div className='buttons-container'>
          {areas.map(({ frequencies, id, name }) => {
            return (
              <button
                className='buttons'
                key={id}
                onClick={() =>
                  this.refreshChart(frequencies[0], frequencies[1], name)
                }
              >
                {name}
              </button>
            );
          })}
        </div>

        <div className='hints'>
          <div className='hint'>Click and Drag Chart to Zoom</div>
          <span className='hint'>
            Use the top right icons after Zooming to Pan and Reset
          </span>
          <span className='hint'>
            <button
              className='full-spectrum'
              onClick={() => this.fullSpectrum('Full Spectrum')}
            >
              Full Spectrum
            </button>
          </span>
          <a className='hint' href='http://localhost:3333/index.html'>
            HTML+JS Server-Side Version
          </a>
        </div>
      </div>
    );
  }
}

export default Chart;
