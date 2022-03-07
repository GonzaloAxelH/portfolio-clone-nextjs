import styled from "styled-components";
export const WrapperHeader = styled.header`
   position:relative;
   background: transparent;
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin:0 100px;
    padding:14px;
 @media (max-width:768px) {
    padding:12px;
 }
  @media (max-width: 1108px) {
      margin:0;
    }
  z-index:100;  
`;

export const WrapperUserImage = styled.div`
    width:48px;
    height:48px;
  img{
    border-radius:50%;
    object-fit:cover;
  }
`;
  
export const Options = styled.div`
  display:flex;

    button:nth-child(1){
      display:none;
    }
  @media (max-width:768px){
    button:nth-child(2){
      display:none;
    }

    button:nth-child(1){
      display:flex;
    }
  }


`;
export const Wrappernavbar = styled.div`
  @media (max-width:768px){
    display:none;
  }
`;

export const WrapperIcon = styled.button`
  display:flex;  
  position:relative;
  justify-content:center;
  align-items:center;
  border:none;
  border-radius:50%;
  background:rgb(229, 231, 235);
  cursor:pointer; 
  width:48px;
  height:48px; 
  margin-left:0.8em;
  svg{
    fill:rgb(17, 24, 39);
  }
  &:after{
    content:"";
    position:absolute;
    background:#fff;
    width:100%;
    height:100%;
    padding:4px;
    border-radius:50%;
    transform:scale(0.7);
    border:3px solid transparent;
    transition:0.2s all;
    z-index:-1; 
  }
  &:hover{
    &:after{
      transform:scale(1);
       border:3px solid rgb(17, 24, 39);
    }      
  }
   
`;
export const WrapperRedSocials = styled.div``

