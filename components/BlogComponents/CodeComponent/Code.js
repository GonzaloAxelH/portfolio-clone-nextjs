import React, { useState, useEffect } from "react";

import styled from "styled-components";
import CopyIcon from "../../Icons/CopyIcon";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import TgogleThemeCodeIcon from "../../Icons/TgogleThemeCodeIcon";
import { useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

hljs.configure({ tabReplace: " " });
hljs.registerLanguage("javascript", javascript);

const ContainerCode = styled.section`
  font-family: "Fira Code", monospace;
  background-color: ${(props) => props.colorFondo};
  padding: 0.8em;
  border-radius: 8px;
  width: calc(100vw - 10vw);
  max-width: max-content;
  min-width: 100%;
<<<<<<< HEAD
  box-shadow: 4px 4px 15px 0 rgb(36 37 38 / 8%);
=======
>>>>>>> 0f4110a1759d9d952d629ad9ff35142ebc669e94
  pre {
    max-width: max-content;
    overflow-x: auto;
    tab-size: 1;

    padding: 0.5em 0;
    font-size: 15px;
  }
  code {
    font-family: "Fira Code", monospace;
    scroll-behavior: smooth;
  }
  @media (max-width: 768px) {
    width: calc(100vw - 25vw);
    pre {
      width: 100%;
    }
  }

  @media (max-width: 339px) {
    width: calc(100vw - 45vw);
  }
`;

const Headercode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.3em 0;

  p {
    color: #9ca3af;
    font-size: 15px;
    font-weight: 600;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font-size: 12px;
    padding: 0 1em;
    color: #9ca3af;
  }
  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #9ca3af;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 13px;
    }

    span {
      font-size: 10px;
    }
  }
`;
export default function Code({ pathFile, type, code }) {
  const [themeCode, setThemeCode] = useState(false);

  const refCode = useRef();
  useEffect(() => {
    //hljs.initHighlighting();
    hljs.highlightAll();
  });

  return (
    <ContainerCode colorFondo={"#2d2b57"}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/default.min.css"

        integrity="sha512-Jk4AqjWsdSzSWCSuQTfYRIF84Rq/eV0G2+tu07byYwHcbTGfdmLrHjUSwvzp5HvbiqK4ibmNwdcG49Y5RGYPTg=="
        crossOrigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <Headercode>
        <p>{pathFile}</p>
        <div>
          <span>{type}</span>
          <ButtonCopyClipboard textCodeCopy={code} />
          <button onClick={() => alert("Just Subscribers")}>

            <TgogleThemeCodeIcon />
          </button>
        </div>
      </Headercode>
      <pre>
        <code ref={refCode} className={`${type ? type : "js"}`}>
          {code}
        </code>
      </pre>
    </ContainerCode>
  );
}

/*----------------------BTN CLIPBOARD---------------------*/

function ButtonCopyClipboard({ textCodeCopy }) {
  const [isCoping, setIsCoping] = useState(false);
  const handleCopyCode = () => {
    setIsCoping(true);
    setTimeout(() => {
      setIsCoping(false);
    }, 600);
  };
  return (
    <CopyToClipboard text={textCodeCopy}>
      <button onClick={handleCopyCode}>
        {isCoping ? <span>!Copied</span> : null}
        <CopyIcon />
      </button>
    </CopyToClipboard>
  );
}
