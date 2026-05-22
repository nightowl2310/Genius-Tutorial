import { BookOpen } from "lucide-react";

export function CoursesPage() {
  const courses = [
    {
      class: "Class 12th Science",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    },
    {
      class: "Class 12th Commerce",
      subjects: ["Accountancy", "Business Studies", "Economics", "English"],
    },
    {
      class: "Class 11th Science",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    },
    {
      class: "Class 11th Commerce",
      subjects: ["Accountancy", "Business Studies", "Economics", "English"],
    },
    {
      class: "Class 10th",
      subjects: ["Mathematics", "Science", "English", "Social Science" ],
    },
    {
      class: "Class 9th",
      subjects: ["Mathematics", "Science", "English", "Social Science" ],
    },
    {
      class: "Class 8th",
      subjects: ["Mathematics", "Science", "English", "Social Science" ],
    },
    {
      class: "Class 7th",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
    },
    {
      class: "Class 6th",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Our Courses</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive coaching programs for Class 6th to 12th with expert faculty
              and proven teaching methodologies
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white flex-shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{course.class}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent text-foreground text-sm rounded-lg border border-border"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Included</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-semibold mb-3">Study Material</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive notes, practice worksheets, and reference material for all subjects
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-semibold mb-3">Regular Tests</h3>
              <p className="text-sm text-muted-foreground">
                Weekly tests, monthly assessments, and full-length mock exams
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-semibold mb-3">Doubt Sessions</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated time for clearing doubts and one-on-one guidance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
