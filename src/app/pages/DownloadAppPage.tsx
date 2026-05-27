import { Download, Smartphone, CheckCircle } from "lucide-react";

export function DownloadAppPage() {
  const features = [
    "Track student attendance in real-time",
    "View test scores and detailed reports",
    "Monitor overall academic progress",
    "Personalized student mentoring and guidance",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-primary to-orange-400 text-white mb-6">
              <Smartphone size={40} />
            </div>
            <h1 className="text-4xl font-bold mb-6">Download Genius Tutorial App</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay connected with your child's academic progress. Track attendance, view test reports,
              monitor performance, and get personalized mentoring - all in one app.
            </p>
            <a
  href="/Genius Tutorial.apk"
  download
  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-lg"
>
  <Download size={24} />
  Download APK
</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">App Features</h2>
            <p className="text-muted-foreground">
              Comprehensive tracking and personalized mentoring for your child
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-accent rounded-lg border border-border">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Install</h2>
            <p className="text-muted-foreground">
              Follow these simple steps to install the Genius Tutorial app on your phone
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Download the APK File</h3>
                  
                  <div className="bg-accent rounded-xl p-6 border border-border">
                    <img src="images/install1.png" alt="Installation Step 1" className="mx-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Install anyway </h3>
                  <div className="bg-accent rounded-xl p-6 border border-border">
                    <img src="images/install2.png" alt="Installation Step 2" className="mx-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Install and Open the App</h3>
                  <div className="bg-accent rounded-xl p-6 border border-border">
                    <img src="images/install3.png" alt="Installation Step 3" className="mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Download the app now and stay connected with your child's education
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            <Download size={24} />
            Download APK Now
          </button>
        </div>
      </section>
    </div>
  );
}
