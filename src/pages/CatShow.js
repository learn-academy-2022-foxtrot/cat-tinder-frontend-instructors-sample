import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"


const CatShow = ({cats}) => {
  // console.log("cats array:", cats)
  const { id } = useParams()
  // console.log("id from params:", id)
  
  let showCat = cats?.find(cat => cat.id === +id)
  // console.log("showCat:", showCat)

  return(
    <>
      <h1>Thanks for checking out my profile</h1>
      <div className="cat-show">
      {showCat && 
        <Card 
          style={{ width: '18rem' }}
        >
          <img src={showCat.image} alt="image of eligible feline"/>
          <CardBody>
            <CardTitle tag="h5">
              {showCat.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Age: {showCat.age}
            </CardSubtitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Hobbies: {showCat.enjoys}

            </CardSubtitle>
          </CardBody>
        </Card>
      }
    </div>
    </>
  )
}

export default CatShow