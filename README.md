

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