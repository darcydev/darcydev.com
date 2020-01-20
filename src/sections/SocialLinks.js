import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  fabDev,
  faTwitter,
  faGithub,
  faYoutube
} from "@fortawesome/free-solid-svg-icons";
import { Form, Icon } from "antd";

import ButtonLink from "../components/UI/buttonLink";
import Social from "../components/UI/social";
import ContactForm from "../components/dataEntry/Forms/ContactForm";

export default function SocialLinks({ linkContent = defaultLinkContent }) {
  const LINK_MARKUP = linkContent.map((v, i) => (
    <StyledLink key={v.title} rel="noreferrer" target="_blank" href={v.href}>
      {v.icon}
    </StyledLink>
  ));

  const WrappedContactForm = Form.create({ name: "contact_form" })(ContactForm);

  return (
    <Container>
      <FlexRow>
        <ButtonLink solid target="_blank" rel="noreferrer" href={undefined}>
          <StyledButtonIcon icon={faPaperPlane} />
          Resume
        </ButtonLink>
      </FlexRow>
      <FlexRow>{LINK_MARKUP}</FlexRow>
      <FlexRow>
        <WrappedContactForm />
      </FlexRow>
    </Container>
  );
}

// STYLES
const Container = styled.div``;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin-bottom: 3rem;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    margin-bottom: 2rem;
  }
`;

const StyledButtonIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--primary-light);
  margin: 0 1.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: var(--primary);
    border-color: var(--primary);
  }

  i {
    color: black;
    font-size: 25px;
    display: flex;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 4rem;
    height: 4rem;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 1rem;
    border: 1px solid var(--primary-light);
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    width: 3rem;
    height: 3rem;
    margin: 0 0.8rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--text-highlight);
  font-size: 2.2rem;
  transition: color 0.2s ease-out;

  ${StyledLink}:hover & {
    color: var(--background);
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${(props) => props.theme.mediaQueries.smaller} {
    font-size: 1.6rem;
  }
`;

// DEFAULT CONTENT
const defaultLinkContent = [
  {
    title: "Github",
    href: "https://github.com/darcydev",
    icon: (
      <img
        src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
        alt="Darcy's DEV Profile"
        height="25"
        width="25"
      />
    )
  },
  {
    title: "Dev.to",
    href: "https://dev.to/darcydev",
    icon: <Icon type="github" />
  },
  {
    title: "Twitter",
    href: "https://twitter.com/_darcy_dev",
    icon: <Icon type="twitter" />
  }
];
