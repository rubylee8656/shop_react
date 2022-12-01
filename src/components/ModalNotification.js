import './../styles/Modal.scss'
import React from 'react'

function ModalNotification({
  closeModal,
  NotificationHeader,
  NotificationBody,
}) {
  // console.log(setIsOpen)
  console.log(NotificationHeader)
  console.log(NotificationBody)

  return (
    <>
      <div className="s_modal_body" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title" id="modal_header">
                {NotificationHeader}
              </h4>
              <p className="cross-btn" onClick={closeModal}>
                X
              </p>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body" id="modal_body">
              {NotificationBody}
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="modal-btn"
                id="modal_footer"
                onClick={closeModal}
              >
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalNotification
