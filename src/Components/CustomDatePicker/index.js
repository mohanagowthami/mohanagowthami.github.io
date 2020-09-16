import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Picker } from "./styledComponents";




export default function CustomDatePicker(props) {
    const { value, onChange } = props
    return (
        <Picker
            selected={value}
            onChange={onChange}
        />
    );

}





