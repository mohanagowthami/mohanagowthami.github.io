import styled from 'styled-components'

export const FieldContainer = styled.div`
margin:10px;
display:flex;
flex-direction:column;
font-size:18px;
`

export const Container = styled.div`
margin:20px;
display:flex;
flex-direction:column;
margin:auto;

@media screen and (max-width: 768px) {
 width:90%;
}

@media screen and (min-width: 768px) {
 width:60%;
 
}



`

export const SubHeading = styled.p`
color:orange;
width:100%;
@media screen and (max-width: 768px) {
 font-size:18px;
}

@media screen and (min-width: 768px) {
  font-size:24px;
 
}

`

export const Submit = styled.button`

background-color:blue;
color:white;
border-radius:6px;
display:flex;
padding:10px;
margin:auto;

`


export const TimePeriodContainer = styled.div`
display:flex;
flex:1;



`