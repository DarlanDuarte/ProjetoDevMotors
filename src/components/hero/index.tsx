import Image from 'next/image'
import styles from './styles.module.scss'
import React, { ReactNode } from 'react'

interface IHeroProps{
  heading: string
  buttonUrl: string
  buttonTitle:string
  bannerUrl: string
  icon: ReactNode
}

export function Hero({heading, buttonTitle, bannerUrl, buttonUrl, icon}: IHeroProps){
  return(
    <main className={styles.main}>
      <div className={styles.containeHero}>
        <h1 className={styles.title}> {heading} </h1>

        <a target='_blank' href={buttonUrl} className={styles.link}>
          {icon}
          {buttonTitle}
        </a>

      </div>

      <div className={styles.contentBanner}>
        <Image className={styles.banner}
          alt={heading}
          src={bannerUrl}
          priority={true}
          quality={100}
          fill={true}
          sizes="(max-width: 480px) 100vw, (max-widtch: 1024px) 75vw, 60vw"
        />
      </div>

    </main>
  )
}