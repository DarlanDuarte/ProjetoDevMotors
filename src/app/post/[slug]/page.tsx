import { Phone } from "lucide-react"
import { Hero } from "../../../components/hero"
import { getItemBySlug } from "../../../utils/actions/get-data"
import { IPostProps } from "../../../utils/post.type"
import { Container } from "../../../components/container"
import styles from './styles.module.scss'
import Image from "next/image"


export default async function Page({params: {slug}} : {params: {slug: string}}){
  const { objects }: IPostProps = await getItemBySlug(slug)

  //console.log(JSON.stringify(objects, null, 2))
  
  
  
  return(
    <>
      <Hero 
        heading={objects[0].title} 
        buttonTitle={objects[0].metadata.button.title} 
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#fff" />}
      />


      <Container>

        <section className={styles.about}>

          <article className={styles.innerAbout}>
            
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>

            <p>
              {objects[0].metadata.description.text}
            </p>

            {objects[0].metadata.description.button_active && (
              <a 
                href={objects[0].metadata.description.button_url}
                target="_blank"
                className={styles.link}
              
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}


          </article>

          <div className={styles.bannerAbout}>

            <Image  src={objects[0].metadata.description.banner.url} 
              className={styles.imageAbout}
              alt={objects[0].title}
              quality={100}
              priority={true}
              fill={true}
              sizes="(max-width: 480px) 100vw, (max-widtch: 1024px) 75vw, 60vw"

            />

          </div>


        </section>

      </Container>

    </>
  )
}