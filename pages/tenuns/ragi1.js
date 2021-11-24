import { Container, List } from '@chakra-ui/react'
import { Title, TenunImage } from '../../components/tenun'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Tenun = () => {
  return (
    <Layout title="Sabuk Beranak">
      <Container>
        <Title>Sabuk Beranak</Title>
        <P>Reragian adalah bla bla bla bla</P>
        <List ml={4} my={4}></List>

        <TenunImage
          src="/images/tenun/sabuk-beranak.jpg"
          alt="gedogan1"
        ></TenunImage>
      </Container>
    </Layout>
  )
}

export default Tenun
