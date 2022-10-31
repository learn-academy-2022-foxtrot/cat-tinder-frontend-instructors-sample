import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const CatNew = ( { createCat }) => {

  const navigate = useNavigate()

  const [ newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
    // console.log("key for the cat object", e.target.name)
    // console.log("updated value from user input", e.target.value)
    setNewCat({...newCat, [e.target.name]:e.target.value})
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return(
    <>
    <h1>Cat New!</h1>
    <Form>
      <FormGroup>
        <Label for="name">
          Name
        </Label>
        <Input
          name="name"
          placeholder="What is your name?"
          type="text"
          onChange={ handleChange }
          value={ newCat.name }
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">
          Age
        </Label>
        <Input
          name="age"
          placeholder="What is your age?"
          type="number"
          onChange={ handleChange }
          value={ newCat.age }
        />
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">
          Enjoys
        </Label>
        <Input
          name="enjoys"
          placeholder="What do you enjoy?"
          type="text"
          onChange={ handleChange }
          value={ newCat.enjoys }
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">
          Image
        </Label>
        <Input
          name="image"
          placeholder="Share an image"
          type="url"
          onChange={ handleChange }
          value={ newCat.image }
        />
      </FormGroup>
      <Button onClick={handleSubmit} name="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default CatNew