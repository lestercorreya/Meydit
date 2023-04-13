import { useState } from "react";
import "./EntryField.css"

interface entryFieldPropsStructure {
  label: string,
  placeholder: string,
  type: "singleLine" | "multiLine" | "dropdown",
  options?: Array<String>
}

interface dropdownPropsStructure {
  label: String,
  options: Array<String>
}

const EntryField = (props: entryFieldPropsStructure) => {
  const { label, placeholder, type, options = [] } = props

  return (
    <div className="entryFieldContainer">
      <div className="label">{label}</div>
      {type == "singleLine"
        ?
        <input type="text" placeholder={placeholder} className="inputField" />
        :
        type == "multiLine"
          ?
          <textarea cols={30} rows={5} className="inputField" placeholder={placeholder}></textarea>
          :
          <Dropdown label={label} options={options} />
      }
    </div>
  );
};

const Dropdown = (props: dropdownPropsStructure) => {
  const { label, options } = props

  const [menuExpanded, setMenuExpanded] = useState(false)

  const onClick = () => {
    setMenuExpanded(!menuExpanded)
  }

  return (
    <div className="dropdown">
      <div className="placeholder" onClick={onClick}>
        {label}
      </div>
      <div className="options" style={{ display: menuExpanded ? "block" : "none" }}>
        {options.map(option => {
          return (
            <div className="option">{option}</div>
          )
        })}
      </div>
    </div>
  )
}

export default EntryField;