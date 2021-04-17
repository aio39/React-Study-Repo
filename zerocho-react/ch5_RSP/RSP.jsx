import React, { Component } from 'react';

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: 2,
};

class RSP extends Component {
  state = {
    imgCoord: '0',
    result: '',
    score: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { imgCoord } = this.state;
      if (imgCoord === rspCoords.바위) {
        this.setState({
          imgCoord: rspCoords.가위,
        });
      } else if (imgCoord === rspCoords.가위) {
        this.setState({
          imgCoord: rspCoords.보,
        });
      } else if (imgCoord === rspCoords.보) {
        this.setState({
          imgCoord: rspCoords.바위,
        });
      }
    }, 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { imgCoord, result, score } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={() => {}}>
            바위
          </button>
          <button id="scissor" className="btn" onClick={() => {}}>
            가위
          </button>
          <button id="paper" className="btn" onClick={() => {}}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
