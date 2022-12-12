import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoCircle } from '@styled-icons/bootstrap/InfoCircle'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Exploring the World"
        description="Wonderful historical places that I would like to visit in this big world"
        canonical="https://www.exploring-the-world.aldenmerlin.com/"
        openGraph={{
          url: 'https://www.exploring-the-world.aldenmerlin.com/',
          title: 'Exploring the World',
          description:
            'Wonderful historical places that I would like to visit in this big world',
          images: [
            {
              url: 'img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Exploring the World'
            }
          ],
          site_name: 'Exploring the World'
        }}
      />
      <LinkWrapper href="/about">
        <InfoCircle size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
