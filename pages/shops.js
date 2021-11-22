import Section from '../components/section'
import Layout from '../components/layouts/article'
import {
  Container,
  Heading,
  Button,
  List,
  ListItem,
  Link,
  Box,
  Icon
} from '@chakra-ui/react'
import Footer from '../components/footer'
import { IoLogoCart } from 'react-icons/io5'

const Shops = () => {
  return (
    <Layout title="Shop">
      <Container>
        <Box align="center">
          <Section delay={0.3}>
            <Heading as="h3" variant="section-title" alignItems="center">
              Shop
            </Heading>
            <List>
              <ListItem>
                <Link href="https://facebook.com" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoCart} />}
                  >
                    Shopee
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://instagram.com" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoCart} />}
                  >
                    Tokopedia
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://youtube.com" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoCart} />}
                  >
                    Bukalapak
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Section>
        </Box>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Shops
