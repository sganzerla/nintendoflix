import React from 'react';

import PageDefault from '../../components/PageDefault';
import Container from '../../components/Container';

import Error404 from './404.webp';

function PageNotFound() {
  return (
    <PageDefault>
      <Container style={{ alignItems: 'center' }}>
        <img src={Error404} alt="404" />
        <h2>Página não encontrada</h2>
      </Container>
    </PageDefault>

  );
}

export default PageNotFound;
