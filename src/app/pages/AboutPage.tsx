import { Target, Eye, Award, Users } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide quality education that empowers students to achieve academic excellence and develop critical thinking skills.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the most trusted and preferred coaching institute for secondary education in Indore.",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Integrity, excellence, innovation, and student-centric approach in everything we do.",
    },
    {
      icon: Users,
      title: "Our Commitment",
      description:
        "Dedicated to nurturing talent and providing personalized attention to every student.",
    },
  ];

  const images = [
  "images/y.avif",
  "images/h.avif",
  "images/3.avif",
  "images/4.avif",
  "images/5.avif",
  "images/6.avif",
  "images/7.avif",
  "images/8.avif",
  "images/9.avif",
];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Genius Tutorial</h1>
            <p className="text-lg text-muted-foreground">
              Established in 2019, Genius Tutorial has been a beacon of quality education
              in Gandhi Nagar, Indore, helping thousands of students achieve their academic dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded by Yashwant Parmar (BCA , BSc MSc , Bed), Genius Tutorial started in 2019 with
                a vision to provide the best quality education in the Gandhi Nagar region of Indore.
              </p>
              <p className="text-muted-foreground">
                The coaching institute serves students from Class 6th to 12th, focusing on building
                strong fundamentals and exam preparation. Being part of many successful stories of
                students, the coaching is still aiming to achieve higher and higher.
              </p>
              <p className="text-muted-foreground">
                With dedicated faculty, personalized attention, and a student-centric approach,
                Genius Tutorial has established itself as a trusted name in the Gandhi Nagar area,
                helping students achieve their academic goals consistently.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-orange-100 rounded-2xl p-8 lg:p-12">
              <img
                src="images/Genius Tutorial logo.png"
                alt="Genius Tutorial"
                className="h-64 w-64 mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values and principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-accent rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="text-center p-8 bg-accent rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="text-center p-8 bg-accent rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <p className="text-muted-foreground">Students Taught</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="  text-center mb-12 ">
      <h2 className="text-3xl font-bold mb-4">Glimpses</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden rounded-lg bg-gray-50 border border-border"
        >
          <img
            src={src}
            alt={`Glimpse ${idx + 1}`}
            className="w-full h-44 sm:h-56 md:h-48 lg:h-56 object-cover transition-transform duration-300 ease-out hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}
