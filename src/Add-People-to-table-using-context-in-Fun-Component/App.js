import React from 'react'

export const Context = React.createContext()

export default function App() {
  return (
    <>
      <A></A>
    </>
  )
}
function A() {
  const d = React.useContext(Context)
  console.log('d', d)
}
