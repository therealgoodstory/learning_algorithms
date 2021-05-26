import React, { useState, useEffect } from 'react'
import '../styles/binarySearch.css'
import Navigation from './Navigation'


const BinarySearch = () => {
  const [result, setResult] = useState("")
  const [x, setX] = useState(0)
  const [allSteps, setAllSteps] = useState<number[]>([])

  const arr = new Array(10000000).fill(0).map((_, id) => id + 1)

  const onClick = () => {
    // переделать всё на const && избежать цикла
    let low = 0
    let high =  arr.length - 1
    let middle = Math.floor((low + high) / 2)
    let counter = 0
    let steps = []
  
    while (x !== arr[middle]) {
      middle = Math.floor((low + high) / 2)
      counter += 1
      steps.push(arr[middle])
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
      setAllSteps(steps)
    }
  }

  return (
    <main className="container">
      <Navigation />
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
        <div className="step-field">
          {allSteps.map((step, idx) => <span className="step-field__text" key={idx}>{step}</span>)}
        </div>
      </section>
    </main>
  );
}

export default BinarySearch;
