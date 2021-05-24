import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/binarySearch.css'

const BinarySearch = () => {
  const [result, setResult] = useState("")
  const [x, setX] = useState(0)

  const arr = new Array(10000000).fill(0).map((_, id) => id + 1)

  const onClick = () => {
    let low = 0
    let high =  arr.length - 1
    let middle = Math.floor((low + high) / 2)
    let counter = 0
  
    while (x !== arr[middle]) {
      middle = Math.floor((low + high) / 2)
      counter += 1
      if (x > arr[middle]) { low = middle }
      if (x < arr[middle]) { high = middle }
      if (x < arr[low] || x > arr[high]) {
        break
      }
    }
    if (x < arr[low] || x > arr[high]) {
      setResult('Введённое число отсутствует')
    } else {
      setResult(`Число найденно за ${counter} итераций!`)
    }
  }

  return (
    <main className="container">
      <nav className="main-nav">
        <Link to="/" className="main-nav__link">
          HOME
        </Link>
      </nav>
      <section className="main">
        <h1 className="main__title">
          Binary search for a number <br /> from 0 to 10 000 000
        </h1>
        <div className="main__container">
          <span className="main__text">
            Введите число
          </span>
          <div className="panel">
            <input type="number" onChange={(e) => setX(Number(e.target.value))} className="panel__input" />
            <button type="button" onClick={onClick} className="panel__button">
              Поиск
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

export default BinarySearch;
