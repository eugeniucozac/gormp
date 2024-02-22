import { Html, Head, Main, NextScript } from 'next/document';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Document = () => {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Navbar className='bg-body-tertiary'>
          <Container>
            <Navbar.Brand>Mortgage Calculator</Navbar.Brand>
          </Container>
        </Navbar>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document