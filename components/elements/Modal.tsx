import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react'

import { useContext } from 'react'
import ModalContext from 'context/ModalContext'

export default function Modal({ children, name, className }) {
  const modalCtx = useContext(ModalContext)
  const modal = modalCtx.modal
  if (!modal) return null
  return (
    <div className={`modal-wrapper ${className}`}>
      <div className={"modal-card narrow"}>
        <div className="close-button" onClick={() => modalCtx.toggleModal(name)}>
          <FontAwesomeIcon icon={["fas", "times"]} />
        </div>
        <div>{children}</div>
      </div>
      
      <div className="modal-bg" onClick={() => modalCtx.toggleModal(name)} />
    </div>
  )
}
