import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumber = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumber, bonusNumber];
}

const Lotto = () => {
  const lottoNumber = useMemo(() => getWinNumbers(), []);
  const [winNumber, setWinNumber] = useState(lottoNumber);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  useEffect(() => {
    for (let i = 0; i < winNumber.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls(prevState => [...prevState, winNumber[i]]);
      }, (i + 1) * 1000);
    }

    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumber[6]);
      setRedo(true);
    }, 7000);

    return () => {
      timeouts.current.forEach(v => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); // 비니 배열이면 componentDid Mount와 동일함.

  const onClickRedo = useCallback(() => {
    setWinNumber(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumber]);

  return (
    <>
      <div>당첨숫자</div>
      <div id=" 결과창">
        {winBalls.map(v => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};

export default Lotto;
