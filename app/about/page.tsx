import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import atxImage from "../images/atx.png";
import cotaImage from "../images/cota.png";
import cota2Image from "../images/cota2.png";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Austin In Austin (Texas)</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Product manager, healthcare builder, Austin local
            </p>
          </div>
        </div>
      </section>

      {/* Austin Location Section */}
      <section className="border-t border-gray-200 dark:border-gray-800">
        {/* Full-width Austin Image */}
        <div className="w-full">
          <Image
            src={atxImage}
            alt="Austin, Texas skyline"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Content below image */}
        <div className="py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Based in Austin, Texas</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Working from the heart of Texas tech, where healthcare innovation meets startup energy.
              I love the collaborative spirit here—whether it's grabbing coffee on South Lamar,
              attending meetups downtown, or working from one of the many great spots around town.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Austin's unique blend of tech innovation and laid-back culture perfectly matches
              how I approach product management: serious about results, but human-centered in execution.
              Available for remote collaboration and local Austin partnerships.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Central Time Zone • Remote-first • Austin meetups welcome
            </p>
          </div>
        </div>
      </section>

      {/* Personal Photos Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Life in Austin</h2>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* COTA main photo */}
            <div className="lg:col-span-2">
              <Image
                src={cotaImage}
                alt="COTA Trail in Austin"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>

            {/* COTA night photo - smaller and positioned nicely */}
            <div className="flex flex-col justify-center">
              <Image
                src={cota2Image}
                alt="COTA at night"
                width={300}
                height={200}
                className="rounded-lg shadow-lg w-full object-cover mb-4"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                COTA nights - a bit blurry but captures the vibe
              </p>
            </div>

            {/* Placeholder for one more photo if you want to add it */}
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg aspect-square flex items-center justify-center lg:col-span-1">
              <p className="text-gray-500 text-center">Ready for another<br />Austin photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Story Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">How I Got Here</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">From Code to Product</h3>
              <p className="text-xl leading-relaxed">
                Started as a full-stack developer building healthcare platforms, but kept finding myself
                in the gap between "what we're building" and "what actually needs to work."
                Turns out I'm really good at translating complex healthcare requirements into
                specifications that developers can actually implement.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Healthcare Focus</h3>
              <p className="text-xl leading-relaxed">
                Three years deep in telehealth, from prescription management to lab integrations
                to pharmacy fulfillment. I've seen what breaks, what works, and what actually
                ships on time. Healthcare software is hard—but that's exactly why it needs
                someone who understands both the technical and regulatory complexity.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Austin Energy</h3>
              <p className="text-xl leading-relaxed">
                Austin's tech scene is the perfect environment for what I do. The city's
                collaborative culture, combined with serious healthcare innovation happening here,
                creates the ideal space for building products that actually matter.
                Plus, the breakfast tacos don't hurt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8">
            Whether you're building healthcare software, looking for product management expertise,
            or just want to grab coffee in Austin—I'd love to hear from you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="mailto:walkertexasdriver@gmail.com"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Me
            </Link>
            <Link
              href="/"
              className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}