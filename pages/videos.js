import { Container, Heading } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import ReactPlayer from 'react-player'
import Footer from '../components/footer'

const Videos = () => {
  return (
    <Layout title="Video">
      <Container>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Video
          </Heading>
          <ReactPlayer url="https://www.youtube.com/watch?v=KQRKpj1a5hs" />
        </Section>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Videos
