import React from 'react'
import contextData from './Context'
import { AddPeople } from './Add-new-person'
export default function App() {
  const [data, setData] = React.useState(React.useContext(contextData))

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <AddPeople data={data} setData={setData} />
    </>
  )
}
