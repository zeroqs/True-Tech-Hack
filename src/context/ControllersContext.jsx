import React, { createContext, useContext } from 'react'

const BrightnessContext = createContext(null)
const ContrastContext = createContext(null)
const SaturationContext = createContext(null)
const BlurContext = createContext(null)

export function CustomSettingsProvider({ children }) {
  const [brightness, setBrightness] = React.useState(100)
  const [contrast, setContrast] = React.useState(100)
  const [saturation, setSaturation] = React.useState(100)
  const [blur, setBlur] = React.useState(0)
  return (
    <BrightnessContext.Provider value={{ brightness, setBrightness }}>
      <ContrastContext.Provider value={{ contrast, setContrast }}>
        <SaturationContext.Provider value={{ saturation, setSaturation }}>
          <BlurContext.Provider value={{ blur, setBlur }}>
            {children}
          </BlurContext.Provider>
        </SaturationContext.Provider>
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

export function useSaturation() {
  return useContext(SaturationContext)
}

export function useBlur() {
  return useContext(BlurContext)
}
