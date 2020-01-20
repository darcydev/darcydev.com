import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import useDarkMode from "use-dark-mode";

import {
  Contained,
  StyledSection,
  Wrapper
} from "../components/layout/elements";
import Heading from "../components/UI/heading";
import Social from "../components/UI/social";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const { value: darkMode } = useDarkMode(false);
  const { darkLogo, lightLogo } = useStaticQuery(graphql`
    query {
      darkLogo: file(relativePath: { eq: "logo/logo_dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 80) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      lightLogo: file(relativePath: { eq: "logo/logo_light.png" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 80) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  const LOGO_MARKUP = darkMode ? (
    <LogoImage fluid={lightLogo.childImageSharp.fluid} />
  ) : (
    <LogoImage fluid={darkLogo.childImageSharp.fluid} />
  );

  return (
    <StyledSection id="contact">
      <Contained>
        <Wrapper>
          <Heading
            title="Contact me"
            subtitle="If you want to <span>talk</span>, you can <span>find me</span> at:"
          />
          <SocialLinks />
          {LOGO_MARKUP}
          <CopyRight>
            Copyright © {new Date().getFullYear()}, Darcy Price
          </CopyRight>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
}

const LogoImage = styled(Img)`
  width: 15%;
  margin-bottom: 1.5rem;

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 25%;
  }
`;

const CopyRight = styled.p`
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  color: var(--text-highlight);
  text-transform: uppercase;
`;
