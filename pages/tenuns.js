import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { TenunGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Footer from '../components/footer'

import thumbRagiOsap from '../public/images/tenun/ragi-osap.jpg'
import thumbSabukBeranak from '../public/images/tenun/sabuk-beranak.jpg'
import thumbRagiDulang from '../public/images/tenun/dulang-berandangan.jpg'
import thumbRagiKemalo from '../public/images/tenun/ragi-kemalo.jpg'
import thumbRagiAnteng from '../public/images/tenun/ragi-anteng.jpg'

const Tenuns = () => {
  return (
    <Layout title="Tenun">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Tenun
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <TenunGridItem
              id="ragi0"
              title="Ragi Osap"
              thumbnail={thumbRagiOsap}
            >
              tenun tenun tenun
            </TenunGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <TenunGridItem
              id="ragi1"
              title="Ragi Sabuk Beranak"
              thumbnail={thumbSabukBeranak}
            >
              asdsasadj aslkdj salkds sakld alsk
            </TenunGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <TenunGridItem id="ragi2" title="Ragi Dulang Berandangan" thumbnail={thumbRagiDulang}>
              asdsasadj aslkdj salkds sakld alsk
            </TenunGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <TenunGridItem id="ragi3" title="Ragi Kemalo" thumbnail={thumbRagiKemalo}>
              asdsasadj aslkdj salkds sakld alsk
            </TenunGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <TenunGridItem id="ragi4" title="Ragi Anteng" thumbnail={thumbRagiAnteng}>
              asdsasadj aslkdj salkds sakld alsk
            </TenunGridItem>
          </Section>
        </SimpleGrid>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Tenuns
