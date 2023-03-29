import React, { createContext, useContext } from 'react'

const BrightnessContext = createContext(null)
const ContrastContext = createContext(null)
const SaturationContext = createContext(null)
const BlurContext = createContext(null)
const BlindTypeContext = createContext(null)
const SettingsContext = createContext(null)
const ConfigTypesContext = createContext(null)
const ConfigContext = createContext(null)

export function CustomSettingsProvider({ children }) {
  const [brightness, setBrightness] = React.useState(100)
  const [contrast, setContrast] = React.useState(100)
  const [saturation, setSaturation] = React.useState(100)
  const [blur, setBlur] = React.useState(0)
  const [blindType, setBlindType] = React.useState('')
  const [configType, setConfigType] = React.useState('')
  const [settings, setSettings] = React.useState({})
  const [config, setConfig] = React.useState({})

  return (
    <BrightnessContext.Provider value={{ brightness, setBrightness }}>
      <ContrastContext.Provider value={{ contrast, setContrast }}>
        <SaturationContext.Provider value={{ saturation, setSaturation }}>
          <BlurContext.Provider value={{ blur, setBlur }}>
            <SettingsContext.Provider value={{ settings, setSettings }}>
              <BlindTypeContext.Provider value={{ blindType, setBlindType }}>
                <ConfigTypesContext.Provider
                  value={{ configType, setConfigType }}
                >
                  <ConfigContext.Provider value={{ config, setConfig }}>
                    {children}
                  </ConfigContext.Provider>
                </ConfigTypesContext.Provider>
              </BlindTypeContext.Provider>
            </SettingsContext.Provider>
          </BlurContext.Provider>
        </SaturationContext.Provider>
      </ContrastContext.Provider>
    </BrightnessContext.Provider>
  )
}

export function useBrightness() {
  return useContext(BrightnessContext)
}

export function useConfigLocal() {
  return useContext(ConfigContext)
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

export function useSettings() {
  return useContext(SettingsContext)
}

export function useBlind() {
  return useContext(BlindTypeContext)
}

export function useConfig() {
  return useContext(ConfigTypesContext)
}

export function SetSetting() {
  const { brightness } = useBrightness()
  const { contrast } = useContrast()
  const { saturation } = useSaturation()
  const { blur } = useBlur()
  const { blindType } = useBlind()
  const { configType } = useConfig()
  const [config, setConfig] = React.useState([])

  const object = {
    configType: configType,
    blindType: blindType,
    brightness: brightness,
    contrast: contrast,
    saturation: saturation,
    blur: blur,
  }

  const addObj = () => {
    setConfig([object])
  }

  return [config, addObj, object]
}
