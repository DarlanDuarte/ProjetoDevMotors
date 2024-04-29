import Image from 'next/image'
import { IHomeProps } from '../../../utils/home.type'
import styles from './styles.module.scss'



export function Services({object}: IHomeProps){
  return(
    <>
      <section id='servicos' className={styles.containerAbout}>

        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p> {object.metadata.about.description} </p>
        </article>

        <div className={styles.bannerAbout}>
          <Image className={styles.imageAbout}
            src={object.metadata.about.banner.url}
            alt='Imagem ilustrativa sobre a empresa'
            quality={100}
            fill={true}
            sizes="(max-width: 480px) 100vw, (max-widtch: 1024px) 75vw, 60vw"
          />
        </div>

      </section>

      <h2 className={styles.serviceTitle}>Conheça nossos serviços</h2>

      <section className={styles.services}>

        {object.metadata.services.map((item, index) =>(
          
          <article className={styles.service} key={index}>
            <div className={styles.innerService}>
              <Image className={styles.imageService}
                src={item.image.url}
                alt='Imagem ilustrativa sobre a empresa'
                quality={100}
                fill={true}
                sizes="(max-width: 480px) 100vw, (max-widtch: 1024px) 75vw, 60vw"
              />
            </div>

            <p>{item.description}</p>
          </article>

        ))}

      </section>

    </>
  )
}