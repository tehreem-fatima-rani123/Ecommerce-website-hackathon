import Categories from "@/components/Topcategories";
import Featuredproduct from "@/components/featured-product";
import HotProducts from "@/components/hotProducts";
import Logo from "@/components/Logo";
import Ourproduct from "@/components/ourProducts";
import Section01 from "@/components/Herosection";


export default function Home() {
  return (
    <>
    <Section01/>
    <Logo/>
    <Featuredproduct/>
    <Categories/>
    <HotProducts/>
    <Ourproduct/>
    </>
  )}