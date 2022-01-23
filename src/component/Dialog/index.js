import {useEffect, useState} from 'react'
import {MDCDialog} from '@material/dialog'

export const Dialog = ({children, open, onClose}) => {
  const [id] = useState(`mdc-dialog`)
  useEffect(() => {
    const dialog = new MDCDialog(document.getElementById(id))
    if (open) dialog.open()
    else {
      dialog.close()
      onClose()
    }
    return () => dialog.destroy()
  }, [open])
  return (
    <div id={id} className='mdc-dialog'>
      {children}
      <div onClick={onClose} className='mdc-dialog__scrim'></div>
    </div>
  )
}

export const DialogContainer = ({children}) => {
  return <div className='mdc-dialog__container'>{children}</div>
}

export const DialogSurface = ({children}) => {
  return <div className='mdc-dialog__surface'>{children}</div>
}

export const DialogContent = ({children}) => {
  return <div className='mdc-dialog__content'>{children}</div>
}

export const DialogTitle  = ({title}) => {
  return <h2 className='mdc-dialog__title'>{title}</h2>
}

export const DialogActions = ({children}) => {
  return <div className='mdc-dialog__actions'>{children}</div>
}
