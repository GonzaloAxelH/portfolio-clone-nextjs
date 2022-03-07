import React from "react";
import styled from "styled-components";
import FormContact from "../Forms/FormContact";

const UpdatesFormContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colorBorder};
  border-radius: 8px;
  background: ${({ theme }) => theme.colorFondoUpdateForm};

  margin: 16px 0;
  padding: 24px;
  p {
    color: ${({ theme }) => theme.colorTextSubtitle};
    font-size: 20px;
    span {
      color: rgb(99, 102, 241);
      font-style: italic;
      font-weight: 700;
    }
    line-height: 36px;
  }
  p:nth-child(1) {
    font-size: 24px;
    font-weight: 700;
    margin: 8px 0 24px;
  }

  p:nth-child(2) {
    margin-top: 24px;
  }
  p:nth-child(3) {
    margin-bottom: 24px;
  }

  p:nth-child(4) {
    margin: 24px 0;
  }
  p:nth-child(6) {
    margin: 24px 0 17px;
    font-size: 14px;
    color: rgb(51, 65, 85);
  }
`;

export default function UpdatesFrom() {
  return (
    <UpdatesFormContainer>
      <p>Updates delivered to your inbox!</p>
      <p>
        A periodic update about my life, recent blog posts, how-tos, and
        discoveries.
      </p>
      <p>
        As a thank you, Ill also send you a <span>FREE CSS</span> tutorial!
      </p>
      <p>No spam - unsubscribe at any time!</p>
      <FormContact />
      <p>134 subscribers – 3 issues</p>
    </UpdatesFormContainer>
  );
}

UpdatesFrom.protoTypes = {};
