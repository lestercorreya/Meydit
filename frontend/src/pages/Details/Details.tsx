import { useState } from "react";

import "./Details.css"

import EntryField from "../../components/EntryField/EntryField";

const Details = () => {
  const [completedFirstPage, setCompletedFirstPage] = useState(true)

  const onNextClick = () => {
    setCompletedFirstPage(true)
  }

  const onBackClick = () => {
    setCompletedFirstPage(false)
  }

  const onSubmit = () => {

  }

  return (
    <div className="detailsContainer">
      {completedFirstPage ? <SecondPage onBackClick={onBackClick} onSubmit={onSubmit} /> : <FirstPage onNextClick={onNextClick} />}
    </div>
  );
};

interface firstPagePropsStructure {
  onNextClick: () => void
}

interface secondPagePropsStructure {
  onBackClick: () => void,
  onSubmit: () => void
}

const FirstPage = (props: firstPagePropsStructure) => {
  const { onNextClick } = props

  return (
    <>
      <div className="detailsLeftSection">
        <EntryField label="First Name" placeholder="Eg: Lester" type="singleLine" />
        <EntryField label="Last Name" placeholder="Eg: Correya" type="singleLine" />
        <EntryField label="Phone No" placeholder="Eg: 04123545656" type="singleLine" />
        <EntryField label="Email Id" placeholder="Eg: lesterhello@gmail.com" type="singleLine" />
      </div>
      <div className="detailsRightSection">
        <EntryField label="Address" placeholder="House No, Street, Suburb" type="singleLine" />
        <div className="addressContainer">
          <EntryField label="Post Code" placeholder="Eg: 3252" type="singleLine" />
          <EntryField label="State" placeholder="Eg: Victoria" type="singleLine" />
        </div>
        <div className="nextButton" onClick={onNextClick}>
          Next
        </div>
      </div>
    </>
  )
}

const SecondPage = (props: secondPagePropsStructure) => {
  const { onBackClick, onSubmit } = props
  const dressTypeOptions = [
    "Ethnic Wear",
    "Dress"
  ]

  return (
    <>
      <div>
        <EntryField label="Description" placeholder="Additional Information about the job" type="multiLine" />
        <EntryField label="Description" placeholder="Additional Information about the job" type="dropdown" options={dressTypeOptions} />
      </div>
      <div>
        <div className="nextButton" onClick={onBackClick}>
          Back
        </div>
        <div className="nextButton" onClick={onSubmit}>
          Submit
        </div>
      </div>
    </>
  )
}

export default Details;