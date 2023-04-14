import { useState } from "react";
import "./EntryField.css"

interface entryFieldMandatoryPropsStructure {
  label: string,
  onChange: (input: string, field: string) => void,
  field: string,
  error: boolean,
  value: string
}

type entryFieldOptionalPropsStructure =
  | {
    type: "singleLine",
    placeholder: string,
    options?: never
  } | {
    type: "multiLine",
    placeholder: string,
    options?: never
  } | {
    type: "dropdown",
    placeholder: string,
    options: Array<string>
  }

type entryFieldPropsStructure = entryFieldMandatoryPropsStructure & entryFieldOptionalPropsStructure

const EntryField = (props: entryFieldPropsStructure) => {
  const { label, placeholder, type, options, onChange, field, error, value } = props

  const renderField = () => {
    switch (type) {
      case "singleLine":
        return <input type="text" placeholder={placeholder} className={error ? "inputField error" : "inputField"} value={value} onChange={(event) => onChange(event.target.value, field)} />
      case "multiLine":
        return <textarea cols={30} rows={5} className={error ? "inputField error" : "inputField"} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value, field)}></textarea>
      case "dropdown":
        return <Dropdown options={options} onChange={onChange} field={field} value={value} error={error} placeholder={placeholder} />
    }
  }

  return (
    <div className="entryFieldContainer">
      <div className="label">{label}</div>
      {renderField()}
      {error && <div className="errorText">Enter {label}</div>}
    </div>
  );
};

interface dropdownPropsStructure {
  options: Array<string>,
  placeholder: string,
  onChange: (input: string, field: string) => void,
  field: string,
  value: string,
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
    onChange(option, field)
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

export default EntryField;