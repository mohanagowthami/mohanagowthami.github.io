import React from 'react'

import { StyledInput } from './styledComponents'

export default function InputField(props) {
    const { onChange, value, type, placeholder, id, name } = props
    return (
        <>
            <StyledInput
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                value={value}
            />
        </>)
}