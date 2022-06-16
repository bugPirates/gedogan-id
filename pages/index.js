import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Button,
  Image,
  List,
  ListItem,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Footer from '../components/footer'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/gedogan'
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoWhatsapp
} from 'react-icons/io5'
const Page = () => {
  return (
    <Layout title="Home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hai, Kami adalah gedogan team
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Gedogan Team
            </Heading>
            <p>Pringgasela weaving going world wide</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/gedoganart.png"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Tenun
          </Heading>
          <Paragraph>
            Tenun Pringgasela adalah kerajinan tenun tradisional Indonesia yang
            berasal dari Nusa Tenggara Barat dan telah ditetapkan oleh
            Direktorat Warisan dan Diplomasi Budaya sebagai Warisan Budaya
            Takbenda Indonesia pada tahun 2018 dengan domain budaya Kemahiran
            dan Kerajinan Tradisional.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/tenuns">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Tenun
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Gedogan
          </Heading>
          <BioSection>
            <BioYear>2021</BioYear>
            Terbentuk Di Pringgasela
          </BioSection>
          <Paragraph>
            Gedogan merupakan brand dibawah pokdarwis pringgasela, yang dibuat
            untuk memperkenalkan dan menjual produk tenun pringgasela. Brand ini
            bukan hanya menjual produk tenun, namun juga memberikan edukasi
            mengenai budaya menenun yang ada di desa pringgasela.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link href="https://facebook.com/gedogan.id/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  Gedogan-id
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/gedogan.id/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  Gedogan-id
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.youtube.com/channel/UCjXCz13HCguOweAg6WR3NZA"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoYoutube} />}
                >
                  Gedogan-id
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://wa.me/085339357795" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoWhatsapp} />}
                >
                  Gedogan-id
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Page
