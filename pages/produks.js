import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProdukGridItem } from '../components/grid-item'

import thumbSongkok from '../public/images/produk/songkok.jpg'
import thumbTotbag from '../public/images/produk/totbag.jpg'
import thumbTas0 from '../public/images/produk/tas0.jpg'
import thumbTas1 from '../public/images/produk/tas1.jpg'
import thumbTas2 from '../public/images/produk/tas2.jpg'
import Layout from '../components/layouts/article'
import Footer from '../components/footer'

const Produks = () => {
  return (
    <Layout title="Produk">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Produk
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk0" title="Totbag" thumbnail={thumbTotbag}>
              tenun tenun tenun
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk1" title="Songkok" thumbnail={thumbSongkok}>
              tenun tenun tenun
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk2" title="Tas" thumbnail={thumbTas0}>
              tenun tenun tenun
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk3" title="Tas" thumbnail={thumbTas1}>
              tenun tenun tenun
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk4" title="Tas" thumbnail={thumbTas2}>
              tenun tenun tenun
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Produks
