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
            Khususnya kerajinan tenun tradisional sudah ada sejak zaman
            prasejarah terutama di daerah pedalaman kaliantan dan Sulawesi.
            Tenun tradisional mulai berkembang setelah masuknya pedagang dari
            india, arab, yang membawa kain tenun ke Indonesia dan selanjutnya
            diperlajari oleh masyarakat Indonesia khususnya masyarakat pesisir.
            Kemudian tenun berkembang pesat di beberapa daerah seperti Lombok,
            Bima-Dompu, Bali, NTT, Lampung, dan lain lain.
          </Paragraph>
          <Paragraph>
            Dilombok kerajinan tenun tradisional telah ada sejak abad ke -14 M.
            Seiring dengan berkembangnya perdagangan di pulau Lombok yang di
            tandai dengan banyak para pedagang sarung dan rempah rempah yang
            berasal dari Sulawesi, Palembang, Jawa,Gersik, dan Banten. Mula-mula
            para pedagang datang untuk berdagang, kemudian kemudian banyak di
            antara mereka yang menetap bertempat tinggal bahkan mendirikan
            perkampungan-perkampungan . Melalui para pedagang muslim ini agama
            Islam mulai memasuki Lombok dan diperkuat dengan datang nya pasukan
            Sunan prapen mengislamkan raja raja yang berkuasa di Lombok.
          </Paragraph>
          <Paragraph>
            Tenun tradisional gedogan Lombok keberadaannya sudah cukup lama. Di
            Desa Pringgasela saja telah ada seiring dengan lahirnya Desa
            Pringgasela yaitu sejak 1522. Disana terdapat nama sebuah HUMA
            (berbalik) yang di buat di atas tumpukan batu (Prigi : Lombok). Oleh
            penduduk sekitar menamakan Bebilik Batu Prigi. Dusun Prigi adalah
            bagian dari wilayah kekuasaan Kerajaan Selaparang . Dusun Prigi
            berbatasan dengan kali Belimbing yang biasanya digunakan sebagai
            tempat pertahanan dari serangan musuh. Sebagian besar penduduk Dusun
            Prigi berasal dari keturunan Selaparang sehingga Dusun Prigi diberi
            nama pringgasela Pringga artinya Prajurit
            batu/generasi/raga/keturunan, dan Sela berarti Selaparang. Jadi
            Pringgasela berarti generasi Selaparang.
          </Paragraph>
          <Paragraph>
            Sebelum lahirnya nama Desa Pringgasela, salah seorang tokoh agam
            Islam bernama Lebae Nursini, ia datang dari Sulawesi setelah singgaj
            di Pulau Sumbawa untuk menyebarkan agama Islam. Oleh penduduk
            Pringgasela menganggapnya sebagai seorang wali, karena ketakwaan dan
            tekanannya mengajarkan agama Islam. Sambil beliau mengajarkan agama
            Islam kepada penduduk, iapun mengajarkan cara bertani dan menenun.
            Dengan memamfaatkan bunga bunga kapas yang tumbuh liar di sepanjang
            huma-huma. Kapas itu dikumpulkan dan dijemur lalu dipintal dengan
            menggunakan alat sederhana yang sekarang di sebut ganti(gentian),
            petuk, saka, dan kanjian. Selanjutnya bunga kapas yang telah menjadi
            benang diberi warna dengan zat pewarna yang terbuat dari tumbuh
            tumbuhan, akar dan kulit kayu yang selanjutnya disesek(ditenun)
            dengan menggunakan balok-balok kayu sederhana yang dirakit
            sedemikian rupa menjadi alat tenun sederhana yang disebut alat tenun
            gedogan.
          </Paragraph>
          <Paragraph>
            {' '}
            Sampai saat ini kain tenun yang dibuat oleh Lebai Nursini masih
            tersimpan sebagai pusaka leluhur Desa Pringgasela yang disebut
            Reragian.Disamping itu terdapat umbul-umbul / atau penjor pertama
            dan tertua di Indonesia yang berumur sekitar 288 tahun dan terbuat
            dari rajutan potongan kain tenun yang disebut Tunggul.
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
            Gedogan Team Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link href="https://facebook.com" target="_blank">
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
              <Link href="https://instagram.com" target="_blank">
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
              <Link href="https://youtube.com" target="_blank">
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
              <Link href="https://youtube.com" target="_blank">
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
