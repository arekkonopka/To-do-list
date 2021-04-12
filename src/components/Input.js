import { useState } from "react"

const Input = ({ tasks, setTask }) => {
  const [inputValue, setInputValue] = useState('')
  const [warning, setWarning] = useState(false)

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  const onClickHandler = (e) => {
    e.preventDefault()
    if (inputValue === '') { return setWarning(true) }
    else {
      setTask([...tasks, { task: inputValue, checked: false, id: Math.random() }])
      setInputValue('')
      setWarning(false)
    }
  }

  return (
    <div className='input'>
      <h1 style={{ color: warning ? "red" : "white", fontSize: warning ? "40px" : "32px" }}>Dodaj zadanie</h1>
      <form type='submit'>
        <input type="text" onChange={inputHandler} value={inputValue} />
        <button onClick={onClickHandler}><i className="fas fa-plus"></i></button>
        <select>
          <option>All</option>
          <option>Chacked</option>
          <option>Unchecked</option>
        </select>
      </form>
    </div>
  )
}

export default Input