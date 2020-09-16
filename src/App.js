import React, { useState } from 'react'
import ResumeBuilder from './Components/ResumeBuilder'
import pdfGeneration from './pdfGeneration'

export default function APP() {

  const [userDetails, setUserDetails] = useState("")

  const submit = (details) => {
    console.log(details, "details")
    setUserDetails(details)
  }


  return (
    <>
      <ResumeBuilder onSubmit={submit} />
      {userDetails !== "" && pdfGeneration(userDetails)}
    </>)
}