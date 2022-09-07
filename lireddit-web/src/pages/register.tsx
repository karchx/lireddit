import React from "react";
import {Form, Formik} from "formik";
import {Box, Button} from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
import {InputField} from "../components/InputField";
import {useRegisterMutation} from "../generated/graphql";
import {toErrorMap} from "../utils/toErrorMap";
import {useRouter} from "next/router";

interface registerProps {}


const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  const router = useRouter();

  return (
    <Wrapper variant="small">
    <Formik initialValues={{username:"", password:""}} 
      onSubmit={async (values, {setErrors}) => {
      const response = await register(values);
      if(response.data?.register.errors) {
        setErrors(toErrorMap(response.data.register.errors));
      } else if (response.data?.register.user) {
        //workend
        router.push("/");
      }
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
