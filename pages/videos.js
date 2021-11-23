import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import ReactPlayer from 'react-player'
import Footer from '../components/footer'

const Videos = () => {
  return (
    <Layout title="Video">
      <Container>
        <Heading as="h3" variant="section-title">
          Video
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=KQRKpj1a5hs"
              playIcon={<div>Icon</div>}
            />
          </Section>
        </SimpleGrid>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Videos
