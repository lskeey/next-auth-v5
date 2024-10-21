import CardWrapper from "./card-wrapper"
import RegisterForm from "./register-form"

const RegisterCard = () => {
  return (
    <CardWrapper
      headerLabel="Register"
      switchButtonLabel="Already have an account?"
      switchButtonHref="/auth/login"
      showSocial>
      <RegisterForm />
    </CardWrapper>
  )
}

export default RegisterCard