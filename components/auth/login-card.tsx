import CardWrapper from "./card-wrapper"
import LoginForm from "./login-form"

const LoginCard = () => {
  return (
    <CardWrapper
      headerLabel="Login"
      switchButtonLabel="Don't have an account?"
      switchButtonHref="/auth/register"
      showSocial>
      <LoginForm />
    </CardWrapper>
  )
}

export default LoginCard