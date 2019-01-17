import * as React from 'react';
import Props from 'prop-types';
import { Helmet } from 'react-helmet';
import styled, { keyframes } from 'styled-components';

const Section = ({ title, children, className }) => (
  <section className={`${className} section hero`}>
    <Helmet><title>{title}</title></Helmet>
    <header className="title">{title}</header>
    <div className="content is-large">
      {children}
    </div>
  </section>
);

Section.propTypes = {
  title: Props.string.isRequired,
  className: Props.string.isRequired,
  children: Props.element.isRequired,
};

const enterAnimation = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledSection = styled(Section)`
  animation: ${enterAnimation} 500ms linear forwards;
  opacity: 0;
`;

export default StyledSection;
