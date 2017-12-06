import React from 'react'
import style from '../stylesheets/components/button.css'

const Button = ({text}) => (
    <div className={style.btn}>
        {text}
    </div>
)

export default Button