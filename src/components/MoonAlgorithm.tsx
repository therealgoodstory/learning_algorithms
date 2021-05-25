import React, { useState } from 'react'
import Navigation from './Navigation'

const MoonAlgorithms = () => {
  const [cardNumber, setCardNumber] = useState("")
  const [message, setMessage] = useState("")

  const onClick = () => {
    const result = cardNumber
    .split('')
    .reduce((acc:number[], rec, idx) => {
      if (idx % 2 === 0) {
        const step1 = +rec * 2
        step1 > 9 ? acc.push(step1 - 9) : acc.push(step1)
      } else {
        acc.push(+rec)
      }
      return acc
    }, []).reduce((a, r) => a + r, 0)
  
    result % 10 === 0 ? setMessage('Карта валидна') : setMessage('Карта не валидна')
  }

  return (
    <main className="container">
      <Navigation />
      <section className="main">
        <h1 className="main__title">
          Алгоритм вычисления контрольной
          <br />
          цифры номера пластиковой карты 
          <br />
          <p>Проверить валидность карты</p>
        </h1>
        <div className="main__container">
          <span className="main__text">
            Введите номер карты
          </span>
          <div className="panel">
            <input type="number" onChange={(e) => setCardNumber(e.target.value)} className="panel__input" />
            <button type="button" onClick={onClick} className="panel__button">
              Проверить
            </button>
          </div>
        </div>
        <span className="main__result">
          {message}
        </span>
      </section>
    </main>
  );
}

export default MoonAlgorithms;