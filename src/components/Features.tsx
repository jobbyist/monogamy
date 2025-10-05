import { Shield, Zap, Brain, Lock, Cloud, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and SOC 2 certified infrastructure to keep your sensitive legal documents completely secure."
    },
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Intelligent document processing and workflow automation that learns from your firm's patterns and procedures."
    },
    {
      icon: Cloud,
      title: "Cloud-Based Platform",
      description: "Access your files and workflows from anywhere, on any device. Seamless synchronization across your entire team."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Advanced indexing and search capabilities. Find any document in milliseconds, even in massive archives."
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Built-in compliance tools for GDPR, HIPAA, and legal industry regulations. Automated audit trails included."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration features with granular permission controls and version tracking."
    }
  ];

  return (
    <section className="px-6 py-24 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Built for Modern Legal Practices
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage digital assets and automate workflows in one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
