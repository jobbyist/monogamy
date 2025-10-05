import { FileSearch, Settings, Rocket, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileSearch,
      step: "01",
      title: "Upload & Organize",
      description: "Import your existing documents and files. Our AI automatically categorizes and tags everything for easy retrieval."
    },
    {
      icon: Settings,
      step: "02",
      title: "Configure Workflows",
      description: "Set up automated workflows tailored to your firm's processes. No coding required with our visual builder."
    },
    {
      icon: Rocket,
      step: "03",
      title: "Deploy & Automate",
      description: "Activate your workflows and watch as routine tasks are handled automatically, freeing up your team."
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Monitor & Optimize",
      description: "Track performance with detailed analytics. Continuously improve processes with AI-powered insights."
    }
  ];

  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get started in minutes with our intuitive platform designed for legal professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-5xl font-bold text-primary/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
