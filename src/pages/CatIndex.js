import React from "react"
import { Card, CardBody, Button } from "reactstrap"
import {NavLink} from "react-router-dom"

const CatIndex = ({ cats }) => {
// console.log(cats)
  return(
    <>
      <h1>Get ready to purr at this fur!</h1>     
      {cats?.map((cat, index) => {
        return(
          <div key={index} className="cat-index">
            <Card 
              style={{ width: '18rem' }}
            >
              <img src={cat.image} alt="image of eligible feline"/>
              <CardBody>
                <NavLink to={`/catshow/${cat.id}`}>
                  {cat.name}
                </NavLink>
              </CardBody>
            </Card>
          </div>
        )
      })}
    </>
  )
}

export default CatIndex