import { Container, List } from '@chakra-ui/react'
import { Title, TenunImage } from '../../components/tenun'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Tenun = () => {
  return (
    <Layout title="gedogan4">
      <Container>
        <Title>Ragi 4</Title>
        <P>Reragian adalah bla bla bla bla</P>
        <List ml={4} my={4}></List>

        <TenunImage src="/images/gedogan.jpeg" alt="gedogan4"></TenunImage>
      </Container>
    </Layout>
  )
}

export default Tenun
