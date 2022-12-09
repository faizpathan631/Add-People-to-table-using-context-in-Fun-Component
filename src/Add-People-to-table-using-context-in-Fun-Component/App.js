import React from 'react'
import contextData from './Context'
import { AddPeople } from './Add-new-person'
import ReactModal from 'react-modal'
export default function App() {
  const [data, setData] = React.useState(React.useContext(contextData))
  const [openModal, setOpenModal] = React.useState(false)

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Add new person</button>
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
      <ReactModal
        isOpen={openModal}
        ariaHideApp={false}
        onRequestClose={() => setOpenModal(false)}
      >
        <AddPeople data={data} setData={setData} setOpenModal={setOpenModal} />
      </ReactModal>
    </>
  )
}
