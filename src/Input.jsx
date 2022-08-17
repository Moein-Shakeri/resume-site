import React from 'react'

function Input({value,id,onChange,classLabel,classInput,type,label,disabled,placeholder}) {
  return (
    <div>
        {label && <label htmlFor={id} className={classLabel}>{label}</label>}
        <input className={classInput}value={value} id={id} onChange={onChange} type={type} placeholder={placeholder} disabled={disabled}/>
    </div>
  )
}

export default Input