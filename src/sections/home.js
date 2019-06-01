import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useSpring, animated, config } from 'react-spring';

import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
import BackgroundLogo from '../components/UI/backgroundLogo';
import ScrollDown from '../components/UI/scrollDown';
import Button from '../components/UI/button';
import WordsTransition from '../components/UI/wordsTransition';

const SmallWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled(animated.h1)`
  font-weight: 200;
  margin: 0;
  margin-bottom: 2rem;
  line-height: 1.3;
  font-size: 7rem;
  color: var(--text-highlight);
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 6rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 4.5rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 4rem;
  }

  & span {
    font-weight: 600;
    color: var(--primary-light);
    transition: color 0.2s ease-out;
  }
`;

const SubTitle = styled(animated.h2)`
  color: var(--text);
  font-weight: 400;
  margin: 0;
  margin-bottom: 7rem;
  font-size: 1.8rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.5rem;
  }
`;

const Home = () => {
  // Title animation
  const TitleProps = useSpring({
    config: config.wobbly,
    delay: 200,
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(40px)' },
  });

  // Sub title animation
  const SubTitleProps = useSpring({
    config: config.stiff,
    delay: 300,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(40px)' },
  });

  // Button animation
  const ButtonProps = useSpring({
    config: config.stiff,
    delay: 600,
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <StyledSection fullHeight id="header">
      <BackgroundLogo />
      <Contained>
        <Wrapper>
          <SmallWrapper>
            <Title style={TitleProps}>
              Hello{' '}
              <span role="img" aria-label="Cool hand emoji">
                ✌🏼
              </span>
              ,
              <br />
              I'm <span>Fidalgo</span>
            </Title>
            <SubTitle style={SubTitleProps}>
              A <WordsTransition />
              Front-end developer
            </SubTitle>
            <Link to="about-me" spy={true} hashSpy={true} smooth={true}>
              <Button style={ButtonProps}>About me</Button>
            </Link>
          </SmallWrapper>
        </Wrapper>
      </Contained>
      <ScrollDown />
    </StyledSection>
  );
};

export default Home;