import monogamyLogo from "@/assets/monogamy-logo.png";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src={monogamyLogo} 
            alt="Monogamy - Michael Chigbu" 
            className="h-32 md:h-40 w-auto"
          />
        </div>
        
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow"></div>
          <span className="text-sm md:text-base font-medium tracking-widest text-green-500 uppercase">
            Available for Work
          </span>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed tracking-wide">
          Remote legal assistant and digital consultant providing law firms with Web Design, SEO, AI and Workflow Automation services. Let's transform your legal practice with cutting-edge digital solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
