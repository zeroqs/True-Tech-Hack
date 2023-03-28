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
  useContrast,
  useSaturation,
  useSettings,
} from '../../context/ControllersContext.jsx'

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
  const [config, addObj, object] = SetSetting()
  const [error, setError] = React.useState(false)

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
  }, [config])
  return (
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
        </Box>
      </Modal>
    </div>
  )
}
