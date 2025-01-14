import CtaLink from "@/components/CtaLink";
import Image from "next/image";

export default  function Home() {

  // classes and styles
  const homePage = 'flex flex-col gap-5 p-3 min-h-[80vh] text-center'
  return (
   <section className={homePage}>
      <Image 
        src='/assets/images/home-hero.png'
        width={560}
        height={400}
        alt="hero image"
        className="rounded-sm"
        priority/>

      <h1 className="heading">You got the travel plans, we got the travel vans.</h1>

      <p>Add adventure to your lief by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

      <CtaLink 
        destination="/vans" 
        desc='Find your van'
        className="bg-custom-orange text-white"/>
   </section>
  );
}
