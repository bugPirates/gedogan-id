import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/dist/client/image'
import Layout from '../components/layouts/article'
import Footer from '../components/footer'
import struktur from '../public/images/contents/Struktur.jpg'

const Struktur = () => {
  return (
    <Layout title="Struktur">
      <Container>
        <Heading as="h3" variant="section-title">
          Struktur
        </Heading>
      </Container>
      <Image src={struktur} alt="Struktur" width={1644} height={1165}/>
      <Footer />
    </Layout>
  )
}

export default Struktur
