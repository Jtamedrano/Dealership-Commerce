import React from "react";
import { Form, Formik } from "formik";
import { Spinner, Button, Container } from "react-bootstrap";
import InputField from "../../components/parts/InputField";
import { useLoginMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { useRouter } from "next/router";

interface Props {}

const AdminLogin: React.FC = () => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <Container>
      <h1>Admin Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login(values);
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.admin) {
            router.push("/admin/dashboard");
          }
        }}
      >
        {({ isSubmitting }) => (
          <div className="login">
            <Form>
              <div className="login__inputs">
                <InputField
                  label="Username"
                  placeholder="name@example.com"
                  name="username"
                />
                <InputField
                  label="Password"
                  placeholder="password"
                  name="password"
                  type="password"
                />
              </div>
              <Button type="submit">
                {isSubmitting ? <Spinner animation="border" /> : "Login"}
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </Container>
  );
};

export default AdminLogin;
