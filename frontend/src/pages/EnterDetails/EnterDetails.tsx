import { useState } from "react";

import "./EnterDetails.css"

import EntryField from "../../components/EntryField/EntryField";
import ImagesInputField from "../../components/imagesInputField/ImagesInputField";

const Details = () => {
  const fields = {
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
  }
  const optionalFields = [fields.budget]
  const dressTypeOptions = [
    "Ethnic Wear",
    "Dress"
  ]

  const [details, setDetails] = useState<Record<string, string>>({})
  const [uploadedImages, setUploadedImages] = useState<FileList | null>(null)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const onSubmit = () => {
    var errorIdentified = false
    for (const key of Object.keys(fields)) {
      if (!details[key] && !optionalFields.includes(key) && (key != fields.images || !uploadedImages)) {
        errorIdentified = true
        errors[key] = true
        setErrors({ ...errors })
      }
    }

    if (!errorIdentified) {
      console.log(details)
    }
  }

  const onChange = (input: string, field: string) => {
    errors[field] = false
    details[field] = input
    setErrors({ ...errors })
    setDetails({ ...details })
  }

  const onImagesUpload = (input: FileList | null) => {
    errors[fields.images] = false
    setUploadedImages(input)
    setErrors({ ...errors })
  }

  return (
    <div className="detailsContainer">
      <div className="detailsLeftSection">
        <EntryField label="First Name" placeholder="Eg: Lester" type="singleLine" onChange={onChange} field={fields.firstName} error={errors[fields.firstName]} value={details[fields.firstName]} />
        <EntryField label="Last Name" placeholder="Eg: Correya" type="singleLine" onChange={onChange} field={fields.lastName} error={errors[fields.lastName]} value={details[fields.lastName]} />
        <EntryField label="Phone No" placeholder="Eg: 04123545656" type="singleLine" onChange={onChange} field={fields.phoneNo} error={errors[fields.phoneNo]} value={details[fields.phoneNo]} />
        <EntryField label="Email Id" placeholder="Eg: lesterhello@gmail.com" type="singleLine" onChange={onChange} field={fields.emailId} error={errors[fields.emailId]} value={details[fields.emailId]} />
        <EntryField label="Address" placeholder="House No, Street, Suburb" type="singleLine" onChange={onChange} field={fields.address} error={errors[fields.address]} value={details[fields.address]} />
        <div className="addressContainer">
          <EntryField label="Post Code" placeholder="Eg: 3252" type="singleLine" onChange={onChange} field={fields.postCode} error={errors[fields.postCode]} value={details[fields.postCode]} />
          <EntryField label="State" placeholder="Eg: Victoria" type="singleLine" onChange={onChange} field={fields.state} error={errors[fields.state]} value={details[fields.state]} />
        </div>
      </div>
      <div className="detailsRightSection">
        <div>
          <EntryField label="Description" placeholder="Additional Information about the job" value={details[fields.description]} type="multiLine" field={fields.description} onChange={onChange} error={errors[fields.description]} />
          <EntryField label="Type of Dress" placeholder="Select an option" type="dropdown" options={dressTypeOptions} value={details[fields.typeOfDress]} field={fields.typeOfDress} onChange={onChange} error={errors[fields.typeOfDress]} />
          <EntryField label="Budget" placeholder="Enter in AUD" type="singleLine" field={fields.budget} value={details[fields.budget]} onChange={onChange} error={errors[fields.budget]} />
          <ImagesInputField onChange={onImagesUpload} uploadedImages={uploadedImages} error={errors[fields.images]} />
          <div className="nextButton" onClick={onSubmit}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;