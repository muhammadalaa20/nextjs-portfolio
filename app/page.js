import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
export default function Home() {
  return (
    <main> 
      <section className="h-full">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/*left side of the home page text area*/ }
            <div className="text-center xl:text-left">
              <span className="hover:text-accent">Electrical Engineer | Front-End Web Developer</span>
              <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Muhammad Alaa</span> </h1>
              <p className="max-w-[500px] mb-9 text-white/80">A motivated person who is willing to go above and beyond on any project and to learn valuable skills on my own time.</p>
            {/* the download cv button */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                    <span>Download CV</span>
                    <FiDownload className="text-xl"/>
                  </Button>
                  <div className="socials mb-8 xl:mb-0">
                    <Socials 
                    containerStyles="flex gap-6" 
                    iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center
                    text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                    />
                  </div>
              </div>
            </div>

            {/*right side of the home page the image area */}
            <div>

              photo
              
              </div>

          </div>
        </div>
      </section>
    </main>
  )
}
