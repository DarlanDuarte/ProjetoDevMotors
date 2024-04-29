import Image from "next/image";
import { SubMenu } from "../components/home/submenu";
import { getDataHome, getSubMenuData } from "../utils/actions/get-data";
import { IHomeProps } from "../utils/home.type";
import { Hero } from "../components/hero";
import {Phone} from 'lucide-react'
import { Services } from "../components/home/services";
import { Container } from "../components/container";
import { Footer } from "../components/home/footer";
import { IMenuProps } from "../utils/menu.type";


export default async function Home() {
  const {object}: IHomeProps = await getDataHome()
  const menu: IMenuProps = await getSubMenuData()

  /* console.log(JSON.stringify(data, null, 2)) */

  return (
    <main className={''}>
      {menu.objects.length > 0 && <SubMenu menu={menu} />}
      <Hero 
        heading={object.metadata.heading} 
        buttonTitle={object.metadata.cta_button.title} 
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#fff" />}
      />

      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
}
