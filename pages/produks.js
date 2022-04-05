import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProdukGridItem } from '../components/grid-item'

import thumbSongkok from '../public/images/produk/songkok.jpg'
import thumbTotbag from '../public/images/produk/totbag.jpg'
import thumbTas0 from '../public/images/produk/tas0.jpg'
import thumbOuter00 from '../public/images/produk/outer00.jpg'
import thumbOuter01 from '../public/images/produk/outer01.jpg'
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
              
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk1" title="Songkok" thumbnail={thumbSongkok}>
              
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk2" title="Tas" thumbnail={thumbTas0}>
              
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk3" title="Outer" thumbnail={thumbOuter00}>
              
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk4" title="Outer" thumbnail={thumbOuter01}>
              
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Produks
