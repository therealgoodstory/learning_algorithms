import React, { useState } from 'react'
import Navigation from './Navigation'

const MoonAlgorithms = () => {
  const [cardNumber, setCardNumber] = useState("")
  const [result, setResult] = useState("")

  const onClick = () => {

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
          {result}
        </span>
      </section>
    </main>
  );
}

export default MoonAlgorithms;