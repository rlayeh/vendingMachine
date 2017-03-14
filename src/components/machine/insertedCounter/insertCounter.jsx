import React, { PropTypes } from "react"

import cls from "./insertCounter.css"

const InsertCounter = ({ inserted, onReset }) =>
  <div className={cls.wrapper}>
    <div className={cls.ammountWrapper}>
      <span className={cls.ammount}>{inserted}</span>
    </div>
    <div className={cls.reset} onClick={() => onReset()}>Reset</div>
  </div>

InsertCounter.propTypes = {
  inserted: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired
}

export default InsertCounter
