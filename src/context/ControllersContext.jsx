import React, { createContext, useContext } from 'react'

const BrightnessContext = createContext(null)
const ContrastContext = createContext(null)

export function TasksProvider({ children }) {
  const [brightness, setBrightness] = React.useState(100)
  const [contrast, setContrast] = React.useState(100)
  return (
    <BrightnessContext.Provider value={{ brightness, setBrightness }}>
      <ContrastContext.Provider value={{ contrast, setContrast }}>
        {children}
      </ContrastContext.Provider>
    </BrightnessContext.Provider>
  )
}

export function useBrightness() {
  return useContext(BrightnessContext)
}

export function useContrast() {
  return useContext(ContrastContext)
}
