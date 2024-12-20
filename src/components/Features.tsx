import { Database, Network, Server, Rocket } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Data Management",
    description: "Secure and efficient cloud data solutions tailored to your needs.",
  },
  {
    icon: Network,
    title: "Network Solutions",
    description: "Optimized network architecture for maximum performance.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Scalable and reliable cloud infrastructure services.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Cutting-edge AI solutions to drive your business forward.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};