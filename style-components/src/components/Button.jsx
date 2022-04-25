import styled from 'styled-components';



const Button = styled.button`
  border:none;
  padding: 15px;
  background-color: ${({theme})=>(theme === "light" ? "teal" : "red")};
  margin: 5px;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  &:hover{
     padding: 20px;
     margin: 10px;
  }
`

export { Button };
