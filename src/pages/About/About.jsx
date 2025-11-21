import HeroImg from "@/assets/images/hero.png";
import OlovaLogo from "@/assets/images/olova.png";
import Particles from "@/components/Particles";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white dark:text-white bg-[#04081A] dark:bg-[#04081A] relative">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Animated particles */}
        <Particles />

        {/* Enhanced background glow effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">
          <div className="relative">
            <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
              Developer, Designer
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Soad As Hamim Mahi - Developer and Designer"
                  width={1207}
                  height={929}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
             Hello! I’m Soad As Hamim Mahi, a passionate MERN Stack Web Developer focused on creating modern, responsive, and user-friendly web applications.
              </p>
              <p className="text-white">
               Over the past 1.5 years, I’ve developed several personal projects — including Hire Mistri, a web platform for hiring skilled workers, and FB Invite & Smart Replies, a browser extension that uses AI automation to simplify social engagement. These projects have strengthened my understanding of frontend architecture, backend logic, and API integration.
              </p>
              <p>
              My stack includes React, Node.js, Express, MongoDB, and Tailwind CSS, with experience in Firebase Authentication and using AI and API tools like Gemini, OpenAI, and Mistral. I also have a creative edge with Photoshop, Illustrator, and AI prompting, blending design and development to deliver engaging digital experiences.
              </p>
             


              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I’m a lifelong learner dedicated to innovation, simplicity, and building tools that make web development faster and smarter.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Soad As Hamim Mahi, Student of
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-white">Daffodil International University</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
