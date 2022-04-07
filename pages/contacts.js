import { useForm } from "react-hook-form";
import Layout from '../components/layouts/article'
import React from "react";
import Footer from '../components/footer';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Container
} from "@chakra-ui/react";

export default function HookForm() {
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Layout title="Contact">
      <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl >
          <FormLabel htmlFor="name">Nama</FormLabel>
          <Input
            type={'text'}
            name={'nama'}
            className={styles.inputField}
            placeholder="nama"
          />
        </FormControl>
        <FormControl >
          <FormLabel htmlFor="name">E-mail</FormLabel>
          <Input
            id="email"
            placeholder="shiroe.tech@network.id"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="name">Pesan</FormLabel>
          <Textarea 
          id="pesan"
          placeholder='Pesan' />
        </FormControl>  
        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Container>
    <Footer />
    </Layout>
  );
}