import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 999px;

  border: 2px solid ${({ theme }) => theme.colorBorder};
  padding: 12px 16px;
  input {
    border: none;
    border-radius: 999px;
    outline: none;
    width: 100%;
    line-height: 24px;
    font-size: 1em;

    color: ${({ theme }) => theme.colorTextParrafo};
  }
  button {
    position: absolute;
    height: 80%;
    border-radius: 999px;
    background: rgb(99, 102, 241);
    border: none;
    font-size: 20px;
    color: #fff;
    padding: 2px 16px;
    right: 4px;
  }
`;
const Button = styled.button`
  cursor: pointer;
`;
export default function FormContact() {
  return (
    <Form>
      <input type="text" placeholder="email@gmail.com" />
      <Button>Subscribe</Button>
    </Form>
  );
}
