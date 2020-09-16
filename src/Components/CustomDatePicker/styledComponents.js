import styled from 'styled-components'
import DatePicker from "react-datepicker";

export const Picker = styled(DatePicker)`

padding:10px;
border: 1px solid blue;

@media screen and (max-width: 768px) {
 width:90%;
}

@media screen and (min-width: 768px) {
 width:60%;
 
}

`