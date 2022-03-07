import styled from "styled-components";
export const Tag = styled.span`
  font-size: 10px;
  font-weight: bold;
  color:#6abecd;
  position: absolute;
  margin-left: 0.5em;
  bottom: 10px;
  border:2px solid #6abecd;
  border-radius: 50%;
  padding: 0 0.4em;
  height: 12px;
  
  width: 10px;
  
`


export const Nav = styled.nav`
  background: transparent;
  display:flex;
  ul {
    display: flex;
    padding:0;
  }
 
  a{
    position:relative;
    color:rgb(75, 85, 99);
    font-size:18px;
    
    line-height:36px;
    padding:3px 24px;
    border-radius:30px;
    margin:0 0 0 24px;
  }
  
  a:hover{
      background:${({theme})=> theme.colorHover};
  }


  
`;
export const TextLink =styled.span`
    color:${({theme })=> theme.colorLink};
    font-weight:${(props)=> props.select ? "bold":"normal"};
&:after{
    content:"";

    position:absolute;
    
    height:${(props)=> props.select ? "2px":"0"};
    left:50%;
    transform:translateX(-50%);
    bottom:5px;
    width:50%;
    background:rgb(20, 184, 166);
  }
  @media (max-width:768px){
    display:none;
  }
`;
