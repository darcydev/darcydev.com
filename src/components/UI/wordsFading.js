import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animated, useTransition, config } from "react-spring";

import getTextWidth from "../../utils/getTextWidth";

export default function WordsFading({ words }) {
  const WORDS_ARRAY = [];
  words.forEach((word, i) => {
    WORDS_ARRAY.push({ id: i, text: word });
  });

  // subtitle keywords loop
  const [index, setIndex] = useState(0);
  const wordsTransition = useTransition(WORDS_ARRAY[index], (span) => span.id, {
    config: config.stiff,
    delay: 450,
    duration: 100,
    from: {
      opacity: 0,
      transform: "translateY(10px)",
      position: "absolute",
      top: 0,
      left: 0,
      margin: 0
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    leave: {
      opacity: 0,
      transform: "translateY(-10px)"
    }
  });

  useEffect(
    () =>
      void setInterval(
        () => setIndex((current) => (current + 1) % WORDS_ARRAY.length),
        2500
      ),
    []
  );

  return (
    <Wrapper>
      {wordsTransition.map(({ item, props, key }) => (
        <animated.span key={key} style={props}>
          {item.text}
        </animated.span>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-weight: 600;
  width: 160px;
  position: relative;
  display: inline-block;
  text-align: center;
  font-style: italic;
  color: var(--text-highlight);
  transition: color 0.2s ease-out;

  & span {
    text-align: center;
    width: 100%;
  }

  /*
  @media ${(props) => props.theme.mediaQueries.large} {
    width: 130px;
  }
  
   @media ${(props) => props.theme.mediaQueries.medium} {
    width: 110px;
  }
  
  @media ${(props) => props.theme.mediaQueries.small} {
    width: 95px;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    width: 90px;
  }
  */
`;
