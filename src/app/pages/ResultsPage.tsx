export function ResultsPage() {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Results & Achievements</h1>
            <p className="text-lg text-muted-foreground">
              Celebrating the success of our brilliant students who have excelled
              in their examinations
            </p>
          </div>
        </div>
      </section>

      {/* Results Posters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Poster 1 */}
            <div className="bg-white rounded-xl border-2 border-dashed border-border min-h-[500px] flex items-center justify-center">
              <img src="/src/public/genius-tutorial-gandhi-nagar-indore-tutorials-ulp1q8symc.avif" alt="Genius Tutorial" className="max-w-full max-h-full" />
            </div>

            {/* Poster 2 */}
            <div className="bg-white rounded-xl border-2 border-dashed border-border min-h-[500px] flex items-center justify-center">
              <img src="/src/public/genius-tutorial-gandhi-nagar-indore-tutorials-i2dj8hr8v7.avif" alt="Genius Tutorial" className="max-w-full max-h-full" />
            </div>

            {/* Poster 3 */}
            <div className="bg-white rounded-xl border-2 border-dashed border-border min-h-[500px] flex items-center justify-center">
              <img src="/src/public/genius-tutorial-gandhi-nagar-indore-tutorials-q2ly0nohub.jpg" alt="Genius Tutorial" className="max-w-full max-h-full" />
            </div>

            {/* Poster 4 */}
            <div className="bg-white rounded-xl border-2 border-dashed border-border min-h-[500px] flex items-center justify-center">
              <img src="/src/public/genius-tutorial-indore-tutorials-m3may5ioyz.webp" alt="Genius Tutorial" className="max-w-full max-h-full" />
            </div>

            {/* Poster 5 */}
            <div className="bg-white rounded-xl border-2 border-dashed border-border min-h-[500px] flex items-center justify-center">
              <img src="/src/public/genius-tutorial-indore-tutorials-r5hpqxuk0a.webp" alt="Genius Tutorial" className="max-w-full max-h-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
