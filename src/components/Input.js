import { useState, useEffect } from "react"

const Input = ({ inputValue, tasks, setTask, setSelectItems, setInputValue }) => {

  const [warning, setWarning] = useState(false)
  const [selectValue, setSelectValue] = useState('')



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


  const select = (e) => {
    setSelectValue(e.target.value)
  }

  const selectSwitch = () => {
    switch (selectValue) {
      case "Checked":
        setSelectItems(tasks.filter((el) => el.checked === true))
        break;
      case "Unchecked":
        setSelectItems(tasks.filter((el) => el.checked === false))
        break;
      default:
        setSelectItems([...tasks])
    }
  }

  useEffect(() => {
    selectSwitch()
  }, [tasks, selectValue])

  return (
    <div className='input'>
      <h1 style={{ color: warning ? "red" : "white", fontSize: warning ? "40px" : "32px" }}>Dodaj zadanie</h1>
      <form type='submit'>
        <input type="text" onChange={inputHandler} value={inputValue} />
        <button onClick={onClickHandler}><i className="fas fa-plus"></i></button>
        <select onChange={select} >
          <option>All</option>
          <option>Checked</option>
          <option>Unchecked</option>
        </select>
      </form>
    </div>
  )
}

export default Input