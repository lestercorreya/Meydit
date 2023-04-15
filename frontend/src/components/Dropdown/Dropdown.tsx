import { useState } from "react"

import "./Dropdown.css"

import DetailsInterface from "../../interfaces"

interface dropdownPropsStructure {
  options: Array<string>,
  placeholder: string,
  onChange: <key extends keyof DetailsInterface>(field: key, input: DetailsInterface[key]) => void,
  field: keyof DetailsInterface,
  value: string | undefined,
  error: boolean
}

const Dropdown = (props: dropdownPropsStructure) => {
  const { options, onChange, field, value, placeholder, error } = props

  const [menuExpanded, setMenuExpanded] = useState(false)

  const onClick = () => {
    setMenuExpanded(!menuExpanded)
  }

  const onOptionClick = (option: string) => {
    setMenuExpanded(false)
    onChange(field, option)
  }

  return (
    <div className={error ? "dropdown error" : "dropdown"}>
      {value ? <div onClick={onClick}>{value}</div> : <div className="placeholder" onClick={onClick}>{placeholder}</div>}
      <div className="options" style={{ display: menuExpanded ? "block" : "none" }}>
        {options.map(option => {
          return (
            <div className="option" onClick={() => onOptionClick(option)}>{option}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Dropdown;