import React, { PropTypes } from "react"

import cls from "./message.css"

const Message = ({ message }) =>
  <div className={cls.wrapper}>
    <span className={cls.message}>{message}</span>
  </div>

Message.propTypes = {
  message: PropTypes.string
}

export default Message
