import React from 'react'
import { LabelText } from './styledComponents'

export default function Label(props) {
    const { name, title } = props
    return (
        <>
            <LabelText htmlFor={name}>{title}</LabelText>

        </>)
}