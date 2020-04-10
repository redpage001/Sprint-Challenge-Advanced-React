import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Render all the PlayerCards and check if the data from the api is being returned", async () =>{
  const { findByTestId } =render(<App />)

  const name = await findByTestId("id102")
  const country = await findByTestId("id103")
  const searches = await findByTestId("id104")

  expect(name.innerHTML).toBe("Name: Alex Morgan")
  expect(country.innerHTML).toBe("Country: United States")
  expect(searches.innerHTML).toBe("Searches: 100")
})