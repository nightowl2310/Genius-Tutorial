import { Link } from "react-router";
import { Award, Users, BookOpen, TrendingUp, Star, ArrowRight } from "lucide-react";

export function HomePage() {
  const features = [
    {
      icon: Award,
      title: "Expert Faculty",
      description: "Learn from experienced teachers with proven track records",
    },
    {
      icon: Users,
      title: "Small Batches",
      description: "Personal attention with limited students per batch",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Material",
      description: "Well-structured study material and practice tests",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Consistent top results in board examinations",
    },
  ];

  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "2000+", label: "Students Taught" },
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Top Rankers" },
  ];

  const testimonials = [
    {
      name: "Himanshu Dawar",
      class: "Class 12th - JEE",
      score: "99.3%ile",
      text: "Studied my class 9th to 12th from Genius Tutorial. Got 99.3 Percentile in JEE. Today I am pursuing my engineering from SGSITS.",
    },
    {
      name: "Kavyansh Saxena",
      class: "Class 12th - 2023",
      score: "80%",
      text: "Genius Tutorial wasn't just a random coaching centre for me but it shaped the way and approach to study and push more towards academics. Hence I am currently pursuing my engineering from IET DAVV, Indore.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white rounded-full border border-primary/20 text-sm">
                <span className="text-primary font-medium">Quality Education Since 2019</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Build Your Future with{" "}
                <span className="text-primary">Genius Tutorial</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Premier coaching institute for Class 6th to 12th in Gandhi Nagar, Indore.
                Expert faculty, personalized attention, and proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/download-app"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Download App
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-border rounded-lg hover:bg-accent transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl bg-white p-8 shadow-xl border border-border">
                <img
                  src="/src/public/Genius Tutorial logo.png"
                  alt="Genius Tutorial"
                  className="h-48 w-48 mx-auto object-contain"
                />
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Top Results</p>
                      <p className="text-sm text-muted-foreground">Consistent Excellence</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Expert Teachers</p>
                      <p className="text-sm text-muted-foreground">7+ Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Genius Tutorial?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide quality education with a focus on individual student growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our successful students about their journey with Genius Tutorial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-accent rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.class}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{testimonial.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Join hundreds of successful students at Genius Tutorial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/download-app"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Download App
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
