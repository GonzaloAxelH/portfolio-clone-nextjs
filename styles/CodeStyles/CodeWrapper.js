import styled from "styled-components";

export const CodeWrapperLight = styled.div`
  * {
    transition: 0s all;
  }
  /*
Atom One Light by Daniel Gamage
Original One Light Syntax theme from https://github.com/atom/one-light-syntax
base:    #fafafa
mono-1:  #383a42
mono-2:  #686b77
mono-3:  #a0a1a7
hue-1:   #0184bb
hue-2:   #4078f2
hue-3:   #a626a4
hue-4:   #50a14f
hue-5:   #e45649
hue-5-2: #c91243
hue-6:   #986801
hue-6-2: #c18401
*/
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }

  code.hljs {
    padding: 3px 5px;
  }
  .hljs {
    color: #383a42;
  }

  .hljs-comment,
  .hljs-quote {
    color: #a0a1a7;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #a626a4;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e45649;
  }

  .hljs-literal {
    color: #0184bb;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta .hljs-string {
    color: #50a14f;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #986801;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #4078f2;
    font-weight: bold;
  }

  .hljs-built_in,
  .hljs-title.class_,
  .hljs-class .hljs-title {
    color: #c18401;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }

  .hljs-function .hljs-title,
  .hljs-attribute,
  .ruby .hljs-property,
  .hljs-title.function_,
  .hljs-section {
    font-weight: bold;
  }
`;

export const CodeWrapperDark = styled.div`
  * {
    transition: 0s all;
  }
  /*
    Paraíso (dark)
    Created by Jan T. Sott (http://github.com/idleberg)
    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)
*/

  .hljs {
    color: #a39e9b;
  }

  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }

  code.hljs {
    padding: 3px 5px;
  }

  /* Paraíso Comment */
  .hljs-comment,
  .hljs-quote {
    color: #8d8687;
  }

  /* Paraíso Red */
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-regexp,
  .hljs-link,
  .hljs-meta {
    color: #ef6155;
  }

  /* Paraíso Orange */
  .hljs-number,
  .hljs-built_in,
  .hljs-literal,
  .hljs-type,
  .hljs-params,
  .hljs-deletion {
    color: #f99b15;
  }

  /* Paraíso Yellow */
  .hljs-title,
  .hljs-section,
  .hljs-attribute {
    color: #fec418;
  }

  /* Paraíso Green */
  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition {
    color: #48b685;
  }

  /* Paraíso Purple */
  .hljs-keyword,
  .hljs-selector-tag {
    color: #815ba4;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }
`;
