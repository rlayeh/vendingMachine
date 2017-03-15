import React, { PropTypes } from "react"
import cx from "classnames";

import cls from "./message.css"

const Message = ({ message, onClick }) =>
  <div className={cx(cls.wrapper, { [cls.visible]: !!message })} onClick={onClick}>
    <span className={cls.message}>{message}</span>
  </div>

Message.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string
}

export default Message
