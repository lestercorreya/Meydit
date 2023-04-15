import { useState } from "react";

import "./EnterDetails.css"

import EntryField from "../../components/EntryField/EntryField";

import DetailsInterface from "../../interfaces";

const Details = () => {
  const fields: Record<string, (keyof DetailsInterface)> = {
    firstName: "firstName",
    lastName: "lastName",
    phoneNo: "phoneNo",
    emailId: "emailId",
    address: "address",
    postCode: "postCode",
    state: "state",
    description: "description",
    typeOfDress: "typeOfDress",
    budget: "budget",
    images: "images"
  };
  const optionalFields = [fields.budget]
  const dressTypeOptions = [
    "Ethnic Wear",
    "Dress"
  ]

  const [details, setDetails] = useState<DetailsInterface>({})
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const onSubmit = () => {
    var errorIdentified = false
    for (const key of Object.keys(fields)) {
      if (!details[fields[key]] && !optionalFields.includes(fields[key])) {
        errorIdentified = true
        errors[key] = true
        setErrors({ ...errors })
      }
    }

    if (!errorIdentified) {
      console.log(details)
    }
  }

  const onChange = <key extends keyof DetailsInterface>(field: key, input: DetailsInterface[key]) => {
    errors[field] = false
    details[field] = input
    setErrors({ ...errors })
    setDetails({ ...details })
  }

  return (
    <div className="detailsContainer">
      <div className="detailsLeftSection">
        <EntryField label="First Name" placeholder="Eg: Lester" type="singleLine" onChange={onChange} field={fields.firstName} error={errors[fields.firstName]} value={details.firstName} />
        <EntryField label="Last Name" placeholder="Eg: Correya" type="singleLine" onChange={onChange} field={fields.lastName} error={errors[fields.lastName]} value={details.lastName} />
        <EntryField label="Phone No" placeholder="Eg: 04123545656" type="singleLine" onChange={onChange} field={fields.phoneNo} error={errors[fields.phoneNo]} value={details.phoneNo} />
        <EntryField label="Email Id" placeholder="Eg: lesterhello@gmail.com" type="singleLine" onChange={onChange} field={fields.emailId} error={errors[fields.emailId]} value={details.emailId} />
        <EntryField label="Address" placeholder="House No, Street, Suburb" type="singleLine" onChange={onChange} field={fields.address} error={errors[fields.address]} value={details.address} />
        <div className="addressContainer">
          <EntryField label="Post Code" placeholder="Eg: 3252" type="singleLine" onChange={onChange} field={fields.postCode} error={errors[fields.postCode]} value={details.postCode} />
          <EntryField label="State" placeholder="Eg: Victoria" type="singleLine" onChange={onChange} field={fields.state} error={errors[fields.state]} value={details.state} />
        </div>
      </div>
      <div className="detailsRightSection">
        <div>
          <EntryField label="Description" placeholder="Additional Information about the job" value={details.description} type="multiLine" field={fields.description} onChange={onChange} error={errors[fields.description]} />
          <EntryField label="Type of Dress" placeholder="Select an option" type="dropdown" options={dressTypeOptions} value={details.typeOfDress} field={fields.typeOfDress} onChange={onChange} error={errors[fields.typeOfDress]} />
          <EntryField label="Budget" placeholder="Enter in AUD" type="singleLine" field={fields.budget} value={details.budget} onChange={onChange} error={errors[fields.budget]} />
          <EntryField label="Images" type="inputImages" field={fields.images} value={details.images} onChange={onChange} error={errors[fields.images]} />
          <div className="nextButton" onClick={onSubmit}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;