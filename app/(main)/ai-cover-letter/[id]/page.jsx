import React from 'react'

const CoverLetterPage = async ({params}) => {
    const [id]=await params.id;
    return (
    <div>
      <h1>Cover Letter for {id}</h1>
    </div>
  )
}

export default CoverLetterPage
