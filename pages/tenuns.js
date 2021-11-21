import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { TenunGridItem } from '../components/grid-item'
import thumbGedogan from '../public/images/gedogan.jpeg'
import Layout from '../components/layouts/article'
import Footer from '../components/footer'

const Tenuns = () => {
  return (
    <Layout title="Tenun">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Tenun
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <TenunGridItem id="ragi0" title="gedogan0" thumbnail={thumbGedogan}>
              tenun tenun tenun
            </TenunGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <TenunGridItem id="ragi1" title="gedogan1" thumbnail={thumbGedogan}>
              asdsasadj aslkdj salkds sakld alsk
            </TenunGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <TenunGridItem id="ragi2" title="gedogan2" thumbnail={thumbGedogan}>
              asdsasadj aslkdj salkds sakld alsk
            </TenunGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <TenunGridItem id="ragi3" title="gedogan3" thumbnail={thumbGedogan}>
              asdsasadj aslkdj salkds sakld alsk
            </TenunGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <TenunGridItem id="ragi4" title="gedogan4" thumbnail={thumbGedogan}>
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
