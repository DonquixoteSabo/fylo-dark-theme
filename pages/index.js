import Head from 'next/head';
// import styled from 'styled-components'
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

export default function Home() {
  return (
    <>
      <Head>
        <title>Fylo dark theme landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>SIEMA</h1>
    </>
  );
}
