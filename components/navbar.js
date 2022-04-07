import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './them-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/tenuns" path={path}>
            Tenun
          </LinkItem>
          <LinkItem href="/produks" path={path}>
            Produk
          </LinkItem>
          <LinkItem href="/shops" path={path}>
            Shop
          </LinkItem>
          <LinkItem href="/videos" path={path}>
            Video
          </LinkItem>
          <LinkItem href="/struktur" path={path}>
            Struktur
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Gedogan Team</MenuItem>
                </NextLink>
                <NextLink href="/tenuns" passHref>
                  <MenuItem as={Link}>Tenun</MenuItem>
                </NextLink>
                <NextLink href="/produks" passHref>
                  <MenuItem as={Link}>Produk</MenuItem>
                </NextLink>
                <NextLink href="/shops">
                  <MenuItem as={Link}>Shop</MenuItem>
                </NextLink>
                <NextLink href="/struktur">
                  <MenuItem as={Link}>Struktur</MenuItem>
                </NextLink>
                <NextLink href="/videos">
                  <MenuItem as={Link}>Video</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
