// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
})

const Hello = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const node = document.getElementById('data_text')
    console.log('node.getAttribute(`dataText`))', node.getAttribute('data'))
    client
      .query({
        query: gql`
          {
            testField
          }
        `,
      })
      .then(result => console.log(result))
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div'))
  )
})
