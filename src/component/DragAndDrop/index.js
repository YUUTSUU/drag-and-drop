import {useEffect, useRef, useState} from 'react'
import {Checkbox} from '../Checkbox'
import './index.css'

export const DragAndDrop = ({
  cols,
  dnd,
  onCheckboxChange,
  uncheckedCheckboxes
}) => {
  const [data, setData] = useState([])
  const node = useRef(null)
  const ind = useRef(null)

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('data')) || cols)
  }, [])

  const handlerDragStart = (event, index) => {
    node.current = event.target.parentNode
    ind.current = index
    event.dataTransfer.effectedAllowed = 'move'
    event.dataTransfer.setDragImage(event.target.parentNode, 50000, 50000)
    const ghost = event.target.parentNode.cloneNode(true)
    ghost.style.position = "absolute"
    ghost.style.top = (event.pageY - event.target.offsetHeight / 2) + 'px'
    ghost.style.left = (event.pageX - event.target.offsetWidth / 2) + 'px'
    ghost.style.height = event.target.offsetHeight + 'px'
    ghost.style.width = event.target.offsetWidth + 'px'
  }

  const handlerDrop = (event, index) => {
    event.preventDefault()
    if (node.current !== event.target.parentNode) {
      setData(prevData => {
        const newData = [...prevData]
        const item = newData.splice(ind.current, 1)[0]
        newData.splice(index, 0, item)
        localStorage.setItem('data', JSON.stringify(newData))
        return newData
      })
    }
  }

  const handlerDragLeave = (event) => {
    event.preventDefault()
  }

  const handlerDrag = (event) => {
    console.log(node)
  }

  const hadleDragEnter = (event) => {
  }

  const handlerDragOver = (event) => {
    event.preventDefault()
  }

  const handlerDragEnd = (event) => {
    event.preventDefault()
    node.current = null
    ind.current = null
  }

  return (
    <>
      {
        data.map((item, index) => (
          <DragAndDropItem
            key={index}
            label={item.label}
            onChange={value => onCheckboxChange(index, value)}
            checked={!uncheckedCheckboxes.includes(index)}
            handlerDragStart={event => handlerDragStart(event, index)}
            handlerDrop={event => handlerDrop(event, index)}
            handlerDragEnd={event => handlerDragEnd(event)}
            handlerDragOver={event => handlerDragOver(event)}
            handlerDragLeave={event => handlerDragLeave(event)}
            hadleDragEnter={event => hadleDragEnter(event)}
            handlerDrag={event => handlerDrag(event)}
            dnd={dnd}
          />
        ))
      }
    </>
  )
}

export const DragAndDropItem = ({
  label,
  onChange,
  checked,
  handlerDragStart,
  handlerDrop,
  handlerDragEnd,
  handlerDragLeave,
  handlerDragOver,
  hadleDragEnter,
  handlerDrag,
  dnd
}) => {
  return (
    <div
      className='drag-and-drop'
    >
      <Checkbox
        label={label}
        onChange={onChange}
        checked={checked}
      />
      {
        dnd ?
          <div
            draggable
            className="drag-and-drop-move"
            onDragStart={handlerDragStart}
            onDragLeave={handlerDragLeave}
            onDragOver={handlerDragOver}
            onDrop={handlerDrop}
            onDragEnd={handlerDragEnd}
            hadleDragEnter={hadleDragEnter}
            handlerDrag={handlerDrag}
          >
            <div className='drag-and-drop-button'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div> :
          <div className='drag-and-drop-movenot'></div>
      }
    </div>
  )
}