

# CAT TINDER TESTING WITH JEST AND REACT TESTING LIBRARY(RTL)

- Jest is the most popular JavaScript testing framework.  It gives us the following functions/template:
```javascript
describe('my function or component', () => {
    test('does the following', () => {
      expect()
  })
})
```
- RTL provides methods to write the tests. It simulates user interactions on isolated components to ensure UI behaves as desired.
- Guiding principle: The more your tests resemble the way your software is used, the more confidence they can give you.
- https://testing-library.com/


## Test for Home.js
- Create file named Home.test.js
- import render and screen from RTL
- import the component you're testing
- use the Triple A approach

```javascript
// only pulling one piece of the library out
import { render, screen } from '@testing-library/react'
import Home from './Home'

describe("<Home/>", ()=> {
    //A user can see the home page
    it("renders the home page for the user", ()=> {
// TRIPLE A approach - very common in testing.  Arrange, Act, Assert
        // Arrange - set up a condition
        render(<Home/>)
        //Act - act on that condition (interactions/passive)
        const element = screen.getByText(/it's like Tinder, but for Cats!/i)  <--- regex(not required)
        // Assert - what is expected
        expect(element).toBeInTheDocument()
    })
})
```

Troubleshooting:

- check your imports
- make sure your test template is complete(describe and test/it blocks)
- Do you need BrowserRouter?
- import userEvent from @testing-library/user-event

## Office Hours

- Work flow for front end testing
    - imports from react, react-router-dom, etc
    - proper structure of the test (describe, test, expect)
    - what user interaction are you checking
    - use screen.debug() to see document content

- References  
    [React Testing Library](https://testing-library.com/docs/queries/byrole/) 

    [Free Code Camp](https://www.freecodecamp.org/news/react-testing-library-tutorial-javascript-example-code/)

    [BobbyHadz Find by ClassName](https://bobbyhadz.com/blog/react-testing-library-find-by-classname)

- Create an additional test for the component `Home.js` that checks for the first `img` tag and all of its props.

- Create an additional test for the component `Header.js` that checks for a tag by its class name to contain some text.

## Read functionality 10/28/22
- As a developer, I can pass the cat mock data in state to my index component.
- As a user, I can see a page that lists of all the cat names.
- As a developer, I have test coverage on my index component.
- As a developer, I can refactor the show route to require an id param to show one cat.
- As a user, I can see a page featuring all the information for one cat.
- As a user, I can click on a cat name and be taken to a page that shows me all the information about that cat.
- As a developer, I have test coverage on my show component.

### Plan
#### CatIndex
- Pass mockCat data from App.js to CatIndex through the component call
    ```javascript
        <Route path="/catindex" element={<CatIndex cats={ cats }/>} />
    ```
- Pass as props on the CatIndex page
    - can be passed as props or destructure the data you want for the page with `{cats}`
    ```javascript
        const CatIndex = ({ cats }) => {
    ```
- Iterate across the array of objects to display each cat
    ```javascript
        { cats.map((cat, index) => {}) }
    ```
- Use conditional rendering to allow the component to wait for the data to reach the page to render the logic `cats?`
    ```javascript
        {cats?.map((cat, index) => {
    ```
- Use dot notation to abstract the values
    `{cat.name}`

#### CatShow
- Pass mockCat data from App.js to CatShow through the component call and the id params on the route
    ```javascript
        <Route path="/catshow/:id" element={<CatShow cats={ cats }/>} />
    ```
- Pass as props on the CatShow page
    ```javascript
        const CatShow = ({ cats }) => {
    ```
- Make the params id from route available to select a specific cat, use the useParams from react-router-dom
    ```javascript
        const { id } = useParams()
    ```
- Use a variable to store the cat that has the same id as the params id from the route. unary operator changes the string datatype from the params to a number datatype. This number datatype matches the datatype of the id of the cat object. 
    ```javascript
        let showCat = cats.find(cat => cat.id === +id)
    ```
- Use conditional rendering to allow the component to wait for the data to reach the page to render the logic `cats?`. 
    ```javascript
          let showCat = cats?.find(cat => cat.id === +id)
    ```
- Use dot notation to abstract the values
    `{showCat.name}`

### Testing Tools
- beforeEach(() => {})
    - helps you render components or declare variables that can be seen across all the it methods in a describe block
- screen.debug()
    - helps you see the html content within a document that is rendered for that particular component

## Warning: Each child in a list should have a unique "key" prop.
    - Clear this warning by providing the index as the the unique key that React needs for the mapping data.
    - Place `key={index}` in the most outlying html tag for the data that will be mapped.


## Create Functionality - 10/31/22
- Add unikitty to the list
```bash
{
    name: "Unikitty",
    age: 11,
    enjoys: "hopping and being loud",
    image: "https://live.staticflickr.com/8800/17085849346_a7f91549d6_b.jpg"
}
 ```
- Restful routes: index, update, destroy, edit, create, new, show

- New: restful route that displays a form to the user

### Track entries on the form provided on CatNew page
- Place a form on CatNew.js and update to match data entries
```javascript
    <Form>
      <FormGroup>
        <Label for="name">
          Name
        </Label>
        <Input
          name="name"
          placeholder="What is your name?"
          type="text"
        />
      </FormGroup>
    </Form>
```
- Use state and a method to track the DOM events of what the user types
```javascript
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
```
- Use onChange event listener to invoke the method on each input
```javascript
        <Input
          name="name"
          placeholder="What is your name?"
          type="text"
          onChange={ handleChange }
          // value={ newCat.name }
        />
```
### Pass data up the river to App.js
```javascript
// Create a method to pass to CatNew
  const createCat = ( cat ) => {
    console.log("Created cat", cat)
  }
// pass method on component call
    <Route path="/catnew" element={<CatNew createCat={ createCat }/>} />

// use submit button to trigger the method call on CatNew.js and redirect to CatIndex page
  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

    <Button onClick={handleSubmit} name="submit">
    Submit
    </Button>
// 
```      

### Testing notes
- Be mindful when using regex to search for text. For instance, searching the form entires for age with `/age/i` will produce results for data that has the text age and image. Recommend using the exact string "Age" to isolate the age entry for the form.
```javascript

    const ageLabel = screen.getAllByText(/age/i)
    screen.debug(ageLabel)
        // Output:
        //     <label
        //       class="form-label"
        //       for="age"
        //     >
        //       Age
        //     </label>

        //     <label
        //       class="form-label"
        //       for="image"
        //     >
        //       Image
        //     </label>

    const ageLabel = screen.getByText("Age")
    screen.debug(ageLabel)
        // Output:
        //     <label
        //     class="form-label"
        //     for="age"
        //     >
        //         Age
        //     </label>

```