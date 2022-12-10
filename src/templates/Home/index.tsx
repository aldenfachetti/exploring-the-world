import dynamic from 'next/dynamic'
import { InfoCircle } from '@styled-icons/bootstrap/InfoCircle'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoCircle size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
