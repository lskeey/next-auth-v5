import CardWrapper from "./CardWrapper"
import LoginForm from "./LoginForm"

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