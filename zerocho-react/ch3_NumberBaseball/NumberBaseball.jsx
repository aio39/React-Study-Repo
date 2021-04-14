import React, { Component } from 'react';
import Try from './Try';
function getNumbers() {}

class NumberBaseball extends Component {
  state = {
    results: '',
    value: '',
    answer: getNumbers(),
    tries: '',
    fruits: [
      { fruit: '사과', taste: '맛없다.' },
      { fruit: '배', taste: '맛없다.' },
      { fruit: '딸기', taste: '맛없다..' },
      { fruit: '수박', taste: '맛없다.' },
    ],
  };

  onSubmit = () => {};

  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.results}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            maxLength={4}
            value="this.state.value"
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도:{this.state.tries.length}</div>
        <ul>
          {this.state.fruits.map((v, i) => {
            return <Try key={v.fruit + v.taste} value={v} index={i} />;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
