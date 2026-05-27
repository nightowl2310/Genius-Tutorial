import { GraduationCap, Award, BookOpen } from "lucide-react";

export function FacultyPage() {
  const faculty = [
    {
      name: "Yashwant Parmar",
      subject: "Physics & Mathematics",
      qualification: "BCA , BSc MSc , Bed",
      experience: "7-8 years",
      expertise: "Physics, Mathematics, Board Exams",
    },
    {
      name: "Priya Parmar",
      subject: "Administration",
      qualification: "",
      experience: "",
      expertise: "Student Management, Reception, Administration",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Faculty & Infrastructure</h1>
            <p className="text-lg text-muted-foreground">
              Meet our dedicated team and learn about our facilities that support
              quality education and student success
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faculty.map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white text-xl font-bold">
                    {teacher.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{teacher.name}</h3>
                    <p className="text-primary font-medium">{teacher.subject}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <GraduationCap size={18} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground">Qualification</p>
                      <p className="text-sm">{teacher.qualification}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award size={18} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground">Experience</p>
                      <p className="text-sm">{teacher.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen size={18} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground">Expertise</p>
                      <p className="text-sm">{teacher.expertise}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Our Faculty Stands Out</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white mx-auto mb-4">
                <GraduationCap size={28} />
              </div>
              <h3 className="font-semibold mb-2">Highly Qualified</h3>
              <p className="text-sm text-muted-foreground">
                All our teachers hold advanced degrees from premier institutions
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white mx-auto mb-4">
                <Award size={28} />
              </div>
              <h3 className="font-semibold mb-2">Experienced</h3>
              <p className="text-sm text-muted-foreground">
                7-8 years of dedicated teaching experience
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white mx-auto mb-4">
                <BookOpen size={28} />
              </div>
              <h3 className="font-semibold mb-2">Student-Focused</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated to individual student growth and success
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
