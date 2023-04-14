import { useState } from "react";

import "./EnterDetails.css"

import EntryField from "../../components/EntryField/EntryField";
import ImagesInputField from "../../components/imagesInputField/ImagesInputField";

const Details = () => {
  const firstPageFields = {
    firstName: {
      field: "firstName",
      optional: false
    },
    lastName: {
      field: "lastName",
      optional: false
    },
    phoneNo: {
      field: "phoneNo",
      optional: false
    },
    emailId: {
      field: "emailId",
      optional: false
    },
    address: {
      field: "address",
      optional: false
    },
    postCode: {
      field: "postCode",
      optional: false
    },
    state: {
      field: "state",
      optional: false
    },
  }
  const secondPageFields = {
    description: {
      field: "description",
      optional: false
    },
    typeOfDress: {
      field: "typeOfDress",
      optional: false
    },
    budget: {
      field: "budget",
      optional: false
    },
    images: {
      field: "images",
      optional: false
    },
  }
  const [completedFirstPage, setCompletedFirstPage] = useState(true)
  const [firstPageDetails, setFirstPageDetails] = useState<Record<string, string>>({})
  const [secondPageDetails, setSecondPageDetails] = useState<Record<string, string>>({})
  const [uploadedImages, setUploadedImages] = useState<FileList | null>(null)
  const [firstPageErrors, setFirstPageErrors] = useState<Record<string, boolean>>({})
  const [secondPageErrors, setSecondPageErrors] = useState<Record<string, boolean>>({})

  const onNextClick = () => {
    var errorIdentified = false
    for (const key of Object.keys(firstPageFields)) {
      if (!firstPageDetails[key]) {
        errorIdentified = true
        firstPageErrors[key] = true
        setFirstPageErrors({ ...firstPageErrors })
      }
    }

    if (!errorIdentified) {
      setCompletedFirstPage(true)
    }
  }

  const onBackClick = () => {
    setCompletedFirstPage(false)
  }

  const onSubmit = () => {
    var errorIdentified = false
    for (const key of Object.keys(secondPageFields)) {
      if (!secondPageDetails[key]) {
        errorIdentified = true
        secondPageErrors[key] = true
        setSecondPageErrors({ ...secondPageErrors })
      }
    }

    if (!errorIdentified) {
      console.log({ ...firstPageDetails, ...secondPageDetails })
    }
  }

  const onFirstPageDetailsChange = (input: string, field: string) => {
    firstPageErrors[field] = false
    firstPageDetails[field] = input
    setFirstPageErrors({ ...firstPageErrors })
    setFirstPageDetails({ ...firstPageDetails })
  }

  const onSecondPageDetailsChange = (input: string, field: string) => {
    secondPageErrors[field] = false
    secondPageDetails[field] = input
    setSecondPageErrors({ ...secondPageErrors })
    setSecondPageDetails({ ...secondPageDetails })
  }

  const onImagesUpload = (input: FileList | null) => {
    setUploadedImages(input)
  }

  return (
    <div className="detailsContainer">
      {completedFirstPage ? <SecondPage onBackClick={onBackClick} onSubmit={onSubmit} uploadedImages={uploadedImages} onImagesUpload={onImagesUpload} onChange={onSecondPageDetailsChange} fields={secondPageFields} errors={secondPageErrors} details={secondPageDetails} /> : <FirstPage onNextClick={onNextClick} onChange={onFirstPageDetailsChange} fields={firstPageFields} details={firstPageDetails} errors={firstPageErrors} />}
    </div>
  );
};

interface firstPagePropsStructure {
  onNextClick: () => void,
  onChange: (input: string, field: string) => void,
  errors: Record<string, boolean>,
  details: Record<string, string>,
  fields: {
    firstName: {
      field: string,
      optional: boolean
    },
    lastName: {
      field: string,
      optional: boolean
    },
    phoneNo: {
      field: string,
      optional: boolean
    },
    emailId: {
      field: string,
      optional: boolean
    },
    address: {
      field: string,
      optional: boolean
    },
    postCode: {
      field: string,
      optional: boolean
    },
    state: {
      field: string,
      optional: boolean
    },
  }
}

const FirstPage = (props: firstPagePropsStructure) => {
  const { onNextClick, onChange, fields, errors, details } = props

  return (
    <>
      <div className="detailsLeftSection">
        <EntryField label="First Name" placeholder="Eg: Lester" type="singleLine" onChange={onChange} field={fields.firstName.field} error={errors[fields.firstName.field]} value={details[fields.firstName.field]} />
        <EntryField label="Last Name" placeholder="Eg: Correya" type="singleLine" onChange={onChange} field={fields.lastName.field} error={errors[fields.lastName.field]} value={details[fields.lastName.field]} />
        <EntryField label="Phone No" placeholder="Eg: 04123545656" type="singleLine" onChange={onChange} field={fields.phoneNo.field} error={errors[fields.phoneNo.field]} value={details[fields.phoneNo.field]} />
        <EntryField label="Email Id" placeholder="Eg: lesterhello@gmail.com" type="singleLine" onChange={onChange} field={fields.emailId.field} error={errors[fields.emailId.field]} value={details[fields.emailId.field]} />
      </div>
      <div className="detailsRightSection">
        <div>
          <EntryField label="Address" placeholder="House No, Street, Suburb" type="singleLine" onChange={onChange} field={fields.address.field} error={errors[fields.address.field]} value={details[fields.address.field]} />
          <div className="addressContainer">
            <EntryField label="Post Code" placeholder="Eg: 3252" type="singleLine" onChange={onChange} field={fields.postCode.field} error={errors[fields.postCode.field]} value={details[fields.postCode.field]} />
            <EntryField label="State" placeholder="Eg: Victoria" type="singleLine" onChange={onChange} field={fields.state.field} error={errors[fields.state.field]} value={details[fields.state.field]} />
          </div>
        </div>
        <div className="nextButton" onClick={onNextClick}>
          Next
        </div>
      </div>
    </>
  )
}

interface secondPagePropsStructure {
  onBackClick: () => void,
  onSubmit: () => void,
  onChange: (input: string, field: string) => void,
  onImagesUpload: (input: FileList | null) => void,
  uploadedImages: FileList | null,
  details: Record<string, string>,
  errors: Record<string, boolean>,
  fields: {
    description: {
      field: string,
      optional: boolean
    },
    typeOfDress: {
      field: string,
      optional: boolean
    },
    budget: {
      field: string,
      optional: boolean
    },
    images: {
      field: string,
      optional: boolean
    },
  }
}

const SecondPage = (props: secondPagePropsStructure) => {
  const { onBackClick, onSubmit, fields, onChange, errors, details, onImagesUpload, uploadedImages } = props
  const dressTypeOptions = [
    "Ethnic Wear",
    "Dress"
  ]

  return (
    <>
      <div className="detailsLeftSection">
        <EntryField label="Description" placeholder="Additional Information about the job" value={details[fields.description.field]} type="multiLine" field={fields.description.field} onChange={onChange} error={errors[fields.description.field]} />
        <EntryField label="Type of Dress" placeholder="Select an option" type="dropdown" options={dressTypeOptions} value={details[fields.typeOfDress.field]} field={fields.typeOfDress.field} onChange={onChange} error={errors[fields.typeOfDress.field]} />
        <EntryField label="Budget" placeholder="Enter in AUD" type="singleLine" field={fields.budget.field} value={details[fields.budget.field]} onChange={onChange} error={errors[fields.budget.field]} />
      </div>
      <div className="detailsRightSection">
        <ImagesInputField onChange={onImagesUpload} uploadedImages={uploadedImages} />
        <div>
          <div className="nextButton" onClick={onBackClick}>
            Back
          </div>
          <div className="nextButton" onClick={onSubmit}>
            Submit
          </div>
        </div>
      </div>
    </>
  )
}

export default Details;