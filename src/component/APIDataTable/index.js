import {useEffect, useState} from 'react'
import {IconButton} from '../IconButton'
// import {Checkbox} from '../Checkbox'
import {Button} from '../Button'
import {Dialog, DialogActions, DialogContainer, DialogSurface} from '../Dialog'
import {DragAndDrop} from '../DragAndDrop'
import './index.css'

export const APIDataTable = ({columns}) => {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [cols, setCols] = useState(columns)
  const [hiddenColumns, setHiddenColumns] = useState(JSON.parse(localStorage.getItem(`hiddenColumns`)) || []) //маркер checkbox

  useEffect(() => {
    setCols(columns);
  }, [columns]);

  useEffect(() => {
    if (cols.length === 0) setCols(columns);
  }, [cols]);

  let uncheckedCheckboxes = hiddenColumns;

  const onCheckboxChange = (index, value) => {
    if (!value) {
      uncheckedCheckboxes.push(index);
    }
    else {
      const array = [...uncheckedCheckboxes];
      array.splice(array.indexOf(index), 1);
      uncheckedCheckboxes = array;
    }
  }

  const [dnd, setDnd] = useState(false)

  const handlerDnDEdit = () => {
    setDnd(prevDnd => !prevDnd)
  }

  return (
    <div className='data-table-container'>
      <IconButton
        style={{margin: 'auto'}}
        onClick={() => setDialogOpen(true)}
        icon='settings'
      />
      <Dialog
        open={isDialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
      >
        <DialogContainer>
          <DialogSurface>
            <div
              style={{
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <DragAndDrop
                cols={cols}
                dnd={dnd}
                onCheckboxChange={onCheckboxChange}
                uncheckedCheckboxes={uncheckedCheckboxes}
              />
            </div>
            <DialogActions>
              <div style={{marginRight: 'auto', marginLeft: '12px'}}>
                <Button
                  label={"Редактировать"}
                  onClick={handlerDnDEdit}
                />
              </div>

              <Button
                label={"Отмена"}
                onClick={() => setDialogOpen(false)}
              />
              <Button
                label='Oк'
                onClick={() => {
                  setDialogOpen(false)
                  setHiddenColumns(uncheckedCheckboxes)
                  localStorage.setItem(`hiddenColumns`, JSON.stringify(uncheckedCheckboxes))
                }}
              />
            </DialogActions>
          </DialogSurface>
        </DialogContainer>
      </Dialog>
    </div>
  )
}