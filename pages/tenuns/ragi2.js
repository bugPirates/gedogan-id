import { Container, List } from '@chakra-ui/react'
import { Title, TenunImage } from '../../components/tenun'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Tenun = () => {
  return (
    <Layout title="gedogan2">
      <Container>
        <Title>Ragi 2</Title>
        <P>Reragian adalah bla bla bla bla</P>
        <List ml={4} my={4}></List>

        <TenunImage src="/images/gedogan.jpeg" alt="gedogan2"></TenunImage>
      </Container>
    </Layout>
  )
}

export default Tenun
