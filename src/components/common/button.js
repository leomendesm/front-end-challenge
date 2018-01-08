import React from 'react'
import style from '../../stylesheets/components/button.css'

const Button = ({text, handlerClick, disabled}) => (
    <div onClick={handlerClick} className={style.btn+ ' '+ (disabled === true? style.disabled : '')}>
        {text}
    </div>
)

export default Button