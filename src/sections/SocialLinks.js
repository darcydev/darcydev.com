import React from "react";
import styled from "styled-components";
import { Form } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter, faDev } from "@fortawesome/free-brands-svg-icons";

import ButtonLink from "../components/UI/buttonLink";
import ContactForm from "../components/dataEntry/Forms/ContactForm";

const DOC_ID = "1sGoUUV4eUpk1fxexsNlnng6BRHblLCgbvwW-jJyT2NQ";
const FORMAT = "format=pdf";
const DOWNLOAD_LINK = `https://docs.google.com/document/d/${DOC_ID}/export?${FORMAT}`;

export default function SocialLinks({ linkContent = defaultLinkContent }) {
  const LINK_MARKUP = linkContent.map((v) => (
    <StyledLink key={v.title} rel="noreferrer" target="_blank" href={v.href}>
      <StyledIcon>{v.icon}</StyledIcon>
    </StyledLink>
  ));

  const WrappedContactForm = Form.create({ name: "contact_form" })(ContactForm);

  return (
    <Container>
      <FlexCol>
        <ButtonLink
          solid
          target="_blank"
          rel="noreferrer"
          href={DOWNLOAD_LINK}
          download
        >
          <FontAwesomeIcon icon={faFileDownload} />
          <span style={{ paddingLeft: "5px" }}>Resume</span>
        </ButtonLink>
        <FlexRow>{LINK_MARKUP}</FlexRow>
      </FlexCol>
      <FlexRow></FlexRow>
      <FlexRow>
        <WrappedContactForm />
      </FlexRow>
    </Container>
  );
}

// STYLES
const Container = styled.div`
  display: flex;

  @media ${(props) => props.theme.mediaQueries.medium} {
    flex-direction: column;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
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

const StyledIcon = styled.div`
  font-size: 2.2rem;
  transition: color 0.2s ease-out;

  ${StyledLink}:hover & {
    color: var(--background);
  }

  svg {
    color: var(--text-highlight);
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${(props) => props.theme.mediaQueries.smaller} {
    font-size: 1.6rem;

    svg {
      height: 20px;
    }
  }
`;

// DEFAULT CONTENT
const defaultLinkContent = [
  {
    title: "Github",
    href: "https://github.com/darcydev",
    icon: <FontAwesomeIcon icon={faDev} />
  },
  {
    title: "Dev.to",
    href: "https://dev.to/darcydev",
    icon: <FontAwesomeIcon icon={faGithub} />
  },
  {
    title: "Twitter",
    href: "https://twitter.com/_darcy_dev",
    icon: <FontAwesomeIcon icon={faTwitter} />
  }
];
