import { CloseCircle } from '@styled-icons/ionicons-outline/CloseCircle'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseCircle size={32} />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PageTemplate
