import React, { useState } from 'react'

export const AddPeople = ({ data, setData, setOpenModal }) => {
  const checkNull = (val) => val === null || val === undefined || val === ''
  let defaultData = { id: '', name: '', age: '', gender: '' }
  const [Add, setAdd] = useState(defaultData)
  const handleChange = (e) => {
    setAdd({ ...Add, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    setOpenModal(false)
    setData([...data, Add])
  }

  return (
    <>
      <label>Id:</label>
      <input
        name='id'
        type='number'
        min={0}
        value={Add.id}
        onChange={(e) => handleChange(e)}
        required
      />
      <br />
      <br />
      <label>Name:</label>
      <input
        name='name'
        type='text'
        value={Add.name}
        onChange={(e) => handleChange(e)}
        required
      />
      <br />
      <br />
      <label>Age:</label>
      <input
        name='age'
        type='number'
        min={0}
        value={Add.age}
        onChange={(e) => handleChange(e)}
        required
      />
      <br />
      <br />
      <label>Gender:</label>
      <select name='gender' onChange={(e) => handleChange(e)}>
        <option value=''></option>
        <option value='F'>F</option>
        <option value='M'>M</option>
      </select>
      <br />
      <br />
      <input
        disabled={
          checkNull(Add.id) ||
          checkNull(Add.name) ||
          checkNull(Add.age) ||
          checkNull(Add.gender)
        }
        type='button'
        value='Submit'
        onClick={handleSubmit}
      />{' '}
      &nbsp; &nbsp;
      <input type='button' value='Reset' onClick={() => setAdd(defaultData)} />
    </>
  )
}
