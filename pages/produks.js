import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProdukGridItem } from '../components/grid-item'

import thumbGedogan from '../public/images/gedogan.jpeg'
import Layout from '../components/layouts/article'
import Footer from '../components/footer'

const Produks = () => {
  return (
    <Layout title="Produk">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Produk Tenun
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk0" title="outer" thumbnail={thumbGedogan}>
              tenun tenun tenun
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk1" title="outer" thumbnail={thumbGedogan}>
              tenun tenun tenun
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk2" title="outer" thumbnail={thumbGedogan}>
              tenun tenun tenun
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk3" title="outer" thumbnail={thumbGedogan}>
              tenun tenun tenun
            </ProdukGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProdukGridItem id="produk4" title="outer" thumbnail={thumbGedogan}>
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
