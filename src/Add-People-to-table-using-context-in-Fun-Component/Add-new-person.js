import React, { useState } from 'react'

export const AddPeople = (data, setData) => {
  let defaultData = { id: '', name: '', age: '', gender: '' }
  const [Add, setAdd] = useState(defaultData)
  const handleChange = (e) => {
    setAdd({ ...Add, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    setData({ ...data, Add })
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
      <label>Name:</label>

      <input
        name='name'
        type='text'
        value={Add.name}
        onChange={(e) => handleChange(e)}
        required
      />
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
      <label>Gender:</label>
      <select name='gender' onChange={(e) => handleChange(e)}>
        <option value='F'>F</option>
        <option value='M'>M</option>
      </select>
      <br />
      <input type='button' value='Submit' onClick={handleSubmit} />
      <input type='button' value='Reset' onClick={() => setAdd(defaultData)} />
    </>
  )
}
