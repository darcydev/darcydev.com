import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import Zoom from "react-reveal/Zoom";

import ScrollLink from "../components/utils/scrollLink";
import Heading from "../components/UI/heading";
import {
  Contained,
  StyledSection,
  Wrapper
} from "../components/layout/elements";
import ButtonLink from "../components/UI/buttonLink";
import WordsFading from "../components/UI/wordsFading";
import HighlightedText from "../components/UI/HighlightedText";

const AboutText = styled.div`
  color: var(--text);
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.8;
  width: 85%;
  margin: 0 auto;
  text-align: center;
  transition: color 0.2s ease-out;

  & em {
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;
  }

  & a {
    text-decoration: underline;
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--primary);
    }
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 90%;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
    width: 95%;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    width: 100%;
  }
`;

const StackTitle = styled.h2`
  font-weight: 600;
  color: var(--text-highlight);
  margin-top: 5rem;
  font-size: 2rem;
  transition: color 0.2s ease-out;

  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 1.9rem;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    font-size: 1.8rem;
  }
`;

const Stack = styled.p`
  color: var(--primary);
  width: 75%;
  margin: 0 auto;
  text-transform: uppercase;
  margin-bottom: 5rem;
  font-size: 1.4rem;
  line-height: 1.8;
  font-weight: 700;

  @media ${(props) => props.theme.mediaQueries.small} {
    width: 90%;
    font-size: 1.3rem;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    font-size: 1.2rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;

  & a:first-of-type {
    margin-right: 3rem;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    justify-content: space-around;
    width: 100%;

    & a:first-of-type {
      margin-right: 0rem;
    }
  }
`;

const About = () => {
  const { aboutMe, siteUrl } = useStaticQuery(graphql`
    query {
      aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
        childMarkdownRemark {
          frontmatter {
            stack
            curriculum
            creativeCurriculum
          }
          htmlAst
        }
      }
      siteUrl: site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <StyledSection id="about-me">
      <Contained>
        <Wrapper>
          <Zoom>
            <Heading
              title="About me"
              subtitle="If you’re <span>wondering</span> who <span>I am</span>…"
            />
          </Zoom>
          <Zoom>
            <AboutText>
              I’m <HighlightedText text="Darcy" />, a 29 years' old{" "}
              <HighlightedText text="developer" /> from Sydney, Australia. After
              my graduating from Law School, I pursued a career in{" "}
              <HighlightedText text="corporate law" /> in London, UK. After two
              years as a lawyer, I felt stuck and decided to undertake a
              secondment through work with an NGO in India working on technology
              and app solutions for off-grid solar energy. The opportunities
              exposed me to the power of technology to affect significant and
              positive change in the community. I decided that it was time for a
              change, so I started to{" "}
              <HighlightedText text="study JavaScript" /> and within four months
              was working as a <HighlightedText text="freelance developer" />.
              Now, with over{" "}
              <HighlightedText text="2+ years of commercial experience" /> as a
              developer, I have have focused on front-end applications, but have
              also built several full-stack and back-end applications! I have
              also done a bunch of personal projects. I am always seeking to{" "}
              <WordsFading words={["create", "build", "learn"]} /> more.
              <br />
              <br />
              Away from the desk, I enjoy surfing and stand-up comedy.
              <StackTitle>
                My current <HighlightedText text="current stack" /> is:
              </StackTitle>
              <Stack>{aboutMe.childMarkdownRemark.frontmatter.stack}</Stack>
            </AboutText>
          </Zoom>
          <Zoom>
            <ButtonsWrapper>
              <ButtonLink
                solid
                target="_blank"
                rel="noreferrer"
                href={`${siteUrl.siteMetadata.siteUrl}/${aboutMe.childMarkdownRemark.frontmatter.creativeCurriculum}`}
              >
                <StyledIcon icon={faPaperPlane} />
                Resume
              </ButtonLink>
            </ButtonsWrapper>
          </Zoom>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default About;
