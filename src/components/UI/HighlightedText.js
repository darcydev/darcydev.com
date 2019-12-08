import React from "react";
import styled from "styled-components";

export default function HighlightedText({ classes, text }) {
  return <Container className={classes}> {text}</Container>;
}

const Container = styled.span`
  position: relative;
  font-style: italic;
  color: var(--white);
  font-weight: 800;
  display: inline-block;
  word-break: break-word;
  white-space: normal;

  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: rotate(-1deg);
    background: var(--primary);
  }
`;
