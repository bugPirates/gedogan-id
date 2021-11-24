import { Container, List } from '@chakra-ui/react'
import { Title, TenunImage } from '../../components/tenun'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Tenun = () => {
  return (
    <Layout title="ragi-osap">
      <Container>
        <Title>Ragi Osap</Title>
        <P>Reragian adalah bla bla bla bla</P>
        <List ml={4} my={4}></List>

        <TenunImage
          src="/images/tenun/ragi-osap.jpg"
          alt="ragi-osap"
        ></TenunImage>
      </Container>
    </Layout>
  )
}

export default Tenun
