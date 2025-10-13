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

      {/* Origin Story Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">How I Got Into Healthcare Product Management</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Started as a Developer, Found Product</h3>
              <p className="text-xl leading-relaxed">
                I started as a full-stack developer at Rugiet Health, building prescription management features
                for a men's health telehealth platform. I was good at writing code, but I kept finding myself
                in the gap between "what we're building" and "what actually needs to work."
              </p>
              <p className="text-xl leading-relaxed mt-4">
                When I saw our patient retention numbers dropping, I didn't just implement the feature request
                on the Jira ticket. I dug into the data, talked to support, and realized the real problem was
                inflexible subscription management. I proposed a solution, wrote the specs, and built it.
                Retention increased 35%. That's when I realized I was doing product management, not just engineering.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Healthcare?</h3>
              <p className="text-xl leading-relaxed">
                Healthcare software is uniquely challenging: technical complexity + regulatory compliance +
                operational dependencies + real-world consequences. Most industries, if your product has a bug,
                someone is inconvenienced. In healthcare, if your prescription routing fails, a patient doesn't
                get their medication.
              </p>
              <p className="text-xl leading-relaxed mt-4">
                That weight motivates me. I love building products where quality matters, where "good enough"
                isn't good enough, where you have to understand the entire ecosystem—not just the code. Three
                years in telehealth taught me: the hardest problems aren't technical, they're operational.
                The best product managers understand both.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">The Technical PM Path</h3>
              <p className="text-xl leading-relaxed">
                Some PMs come from consulting or business backgrounds. I came from engineering, and I consider
                that my superpower. When a developer says "that'll take 3 weeks," I can ask why. When we're
                debating technical architecture, I can read the ERD diagram and spot the problem. When I write
                a Jira ticket, developers don't come back asking "what did you mean?"
              </p>
              <p className="text-xl leading-relaxed mt-4">
                But I'm not an engineer who became a PM because I couldn't code. I became a PM because I realized
                my highest impact isn't writing the code—it's deciding what code to write, and more importantly,
                what not to write. I ship faster by saying no more often.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Looking For Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">What I'm Looking For</h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg border-l-4 border-blue-500 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Ideal Roles</h3>
            <p className="text-lg mb-4">
              I'm seeking senior product management roles in healthcare technology where I can leverage
              my domain expertise and technical depth.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                <span><strong>Healthcare/Health Tech:</strong> B2B SaaS, telehealth platforms, care coordination tools, prescription management, digital health</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                <span><strong>Technical PM Roles:</strong> Where my ability to write detailed specs, read code, and challenge engineering estimates adds value</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                <span><strong>Stage:</strong> Series A-C startups or established healthcare platforms in rapid growth mode. I've built 0-to-1 and optimized at scale</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                <span><strong>Complex Domains:</strong> Healthcare's regulatory + technical + operational complexity excites me, not scares me</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Not a Good Fit</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 text-xl">✗</span>
                <span>Pure consumer social products without healthcare focus</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 text-xl">✗</span>
                <span>Roles requiring relocation outside Austin (remote-first is perfect)</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 text-xl">✗</span>
                <span>Companies without clear product-market fit or path to revenue</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 text-xl">✗</span>
                <span>Organizations where PM role is purely project management or feature documentation</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-semibold mb-4">Ways to Connect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-lg">☕ Austin Coffee Chats</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Based locally? I'm always happy to meet fellow healthcare tech folks. Coffee's on me.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">💼 Job Opportunities</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Hiring for a healthcare PM role? Let's talk about how I can help your team ship.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">🤝 Portfolio Reviews</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Fellow healthcare PM looking for feedback? Happy to do a 15-minute portfolio review.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">🎤 Speaking/Advisory</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Need someone to speak on healthcare product topics or advise on telehealth strategy? I'm open to it.
                </p>
              </div>
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