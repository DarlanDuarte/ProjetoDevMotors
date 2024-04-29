export interface IHomeProps {
  object: {
    slug: string
    title: string
    metadata:{
      banner:{
        url: string 
        imgix_url: string
      }

      heading: string
      cta_button:{
        title: string
        url: string
      }

      about:{
        description: string
        banner:{
          url: string
          
        }
      }

      services: IServiceProps[]

      contact:{
        email: string
        phone: string
        address: string
        time: string
      }

    }

  }
}

interface IServiceProps{
  image:{
    url: string
  }
  description: string
}