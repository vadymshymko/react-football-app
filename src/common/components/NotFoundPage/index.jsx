import React from 'react';

import Page from 'components/Page';
import PageHelmet from 'components/PageHelmet';

import { Message, Code, Title, LinkToHomePage } from './styles';

function NotFoundPage() {
  return (
    <Page withNav={false}>
      <PageHelmet title="Page Not Found" />

      <Message>
        <Code>404</Code>
        <Title>Oops! Page not found</Title>
        <LinkToHomePage to="/" href="/" title="Go to homepage">
          Go to homepage
        </LinkToHomePage>
      </Message>
    </Page>
  );
}

export default NotFoundPage;
