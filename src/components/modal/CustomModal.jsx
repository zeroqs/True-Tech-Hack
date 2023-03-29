import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Controllers from '../contollers/Controllers.jsx'
import SelectConfig from '../select/Select.jsx'
import BlindType from '../blindType/BlindType.jsx'
import { Stack } from '@mui/material'
import {
  SetSetting,
  useBlur,
  useBrightness,
  useConfigLocal,
  useContrast,
  useSaturation,
  useSettings,
} from '../../context/ControllersContext.jsx'
import image from '../../assets/settings.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  width: 400,
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
}

export default function BasicModal({ modal, handleClose }) {
  const [test, addObj, object] = SetSetting()
  const [error, setError] = React.useState(false)
  const { brightness } = useBrightness()
  const { contrast } = useContrast()
  const { saturation } = useSaturation()
  const { blur } = useBlur()
  const { config, setConfig } = useConfigLocal()
  console.log(config)
  const changeConfig = () => {
    addObj()
    if (!object.configType) {
      setError(true)
    }
  }
  React.useEffect(() => {
    if (object.configType) {
      localStorage.setItem(`${object.configType}`, JSON.stringify(object))
      setError(false)
    }
  }, [test])
  return (
    <div>
      <div>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {error ? (
              <h3 style={{ color: 'red' }}>Выберите конфигурацию</h3>
            ) : (
              <></>
            )}
            <SelectConfig />
            <BlindType />
            <Controllers />
            <Stack
              direction="row"
              paddingTop={2}
              justifyContent="center"
              spacing={2}
            >
              <Button onClick={changeConfig} variant="contained">
                Сохранить
              </Button>
            </Stack>
            <div>
              <img
                style={{
                  filter: `brightness(${
                    config?.brightness / 100 ?? brightness / 100
                  }) 
            contrast(${config?.contrast / 100 ?? contrast / 100}) 
            saturate(${config?.saturation / 100 ?? saturation / 100}) 
            blur(${config?.blur ?? blur}px)
            `,
                }}
                width={400}
                src={image}
                alt=""
              />{' '}
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  )
}
