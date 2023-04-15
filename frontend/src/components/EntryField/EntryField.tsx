import "./EntryField.css"

import ImagesInputField from "../../components/imagesInputField/ImagesInputField";
import Dropdown from "../Dropdown/Dropdown";

import DetailsInterface from "../../interfaces";

interface entryFieldMandatoryPropsStructure {
  label: string,
  onChange: <key extends keyof DetailsInterface>(field: key, input: DetailsInterface[key]) => void,
  field: keyof DetailsInterface,
  error: boolean
}

type entryFieldOptionalPropsStructure =
  | {
    type: "singleLine",
    placeholder: string,
    options?: never,
    value: string | undefined
  } | {
    type: "multiLine",
    placeholder: string,
    options?: never,
    value: string | undefined
  } | {
    type: "dropdown",
    placeholder: string,
    options: Array<string>,
    value: string | undefined
  } | {
    type: "inputImages",
    placeholder?: never,
    options?: never,
    value: FileList | null | undefined
  }

type entryFieldPropsStructure = entryFieldMandatoryPropsStructure & entryFieldOptionalPropsStructure

const EntryField = (props: entryFieldPropsStructure) => {
  const { label, placeholder, type, options, onChange, field, error, value } = props

  const renderField = () => {
    switch (type) {
      case "singleLine":
        return <input type="text" placeholder={placeholder} className={error ? "inputField error" : "inputField"} value={value} onChange={(event) => onChange(field, event.target.value)} />
      case "multiLine":
        return <textarea cols={30} rows={5} className={error ? "inputField error" : "inputField"} placeholder={placeholder} value={value} onChange={(event) => onChange(field, event.target.value)}></textarea>
      case "dropdown":
        return <Dropdown options={options} onChange={onChange} field={field} value={value} error={error} placeholder={placeholder} />
      case "inputImages":
        return <ImagesInputField onChange={onChange} value={value} error={error} field={field} />
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

export default EntryField;