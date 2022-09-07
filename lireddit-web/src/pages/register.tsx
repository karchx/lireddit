import React from "react";
import {Form, Formik} from "formik";
import {Box, Button} from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
import {InputField} from "../components/InputField";

interface registerProps {}
 

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
    <Formik initialValues={{username:"", password:""}} onSubmit={(value) => {
      console.log(value)
    }}>
      {({ isSubmitting }) => (
        <Form>
          <InputField name="username" placeholder="username" label="username"/>
          <Box mt={4}>
            <InputField name="password" placeholder="password" label="Password" type="password" />
          </Box>

          <Button type="submit" mt={4} colorScheme="teal" isLoading={isSubmitting} >Register</Button>
        </Form>
      )}
    </Formik>
  </Wrapper>
  );
}

export default Register;
