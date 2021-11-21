import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, TenunImage, Meta } from '../../components/tenun'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Tenun = () => {
  return (
    <Layout title="gedogan0">
      <Container>
        <Title>Ragi 0</Title>
        <P>Reragian adalah bla bla bla bla</P>
        <List ml={4} my={4}></List>

        <TenunImage src="/images/gedogan.jpeg" alt="gedogan0"></TenunImage>
      </Container>
    </Layout>
  )
}

export default Tenun
