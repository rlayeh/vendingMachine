import React, { PropTypes } from "react"
import cx from "classnames";

import cls from "./insertCounter.css"

const InsertCounter = ({ inserted, onReset }) =>
  <div className={cls.wrapper}>
    <span className={cls.label}>Inserted Ammount</span>
    <span className={cls.ammount}>{inserted}</span>
    <span className={cx(cls.reset, "button")} onClick={() => onReset()}>Reset</span>
  </div>

InsertCounter.propTypes = {
  inserted: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired
}

export default InsertCounter
