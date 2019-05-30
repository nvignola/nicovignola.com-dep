import React from 'react';
import styled from '@emotion/styled';
import gatsbyLogo from '../../static/logo/gatsby.svg';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  .gatsby-logo {
    margin-bottom: 0;
    margin-left: 0.5rem;
    vertical-align: top;
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        Made without 💛 but with{' '}
        <a title="Gatsby home page" href="https://www.gatsbyjs.org/">
          <img className="gatsby-logo" src={gatsbyLogo} width="24" />
        </a>
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
