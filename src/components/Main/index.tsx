import * as S from './styles'

const Main = ({
  title = '🧙‍♂️ Merlin 🧙‍♂️',
  description = '🌎 Discover the history places in the world 🌎'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Logo src="/img/logo.png" alt="Imagem ilustrativa de um ovni." />
    <S.Illustration
      src="/img/hero-illustration.png"
      alt="Imagem ilustrativa de uma barraca no campo com o logo do ReactJS sendo abduzido."
    />
  </S.Wrapper>
)

export default Main
