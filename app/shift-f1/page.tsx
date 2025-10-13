import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import shiftF1Logo from "../images/shift_f1.jpg";
import cotaKartingTrack from "../images/cota-karting-track.jpg";
import cotaAerialView from "../images/cota-aerial-view.png";

export default function ShiftF1() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-red-600 to-orange-500">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <Image
              src={shiftF1Logo}
              alt="Shift+F1 Podcast Logo"
              width={120}
              height={120}
              className="rounded-lg bg-white/10 p-2"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Shift + F1</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Austin Tech Go-Karting at Circuit of the Americas
          </p>
          <p className="text-lg text-white/80 mb-8">
            Celebrating HireThisWalker.com's sponsorship of the Shift+F1 podcast!
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">📅 December 6th, 2025</h2>
            <p className="text-lg mb-2">11:00 AM - 4:00 PM</p>
            <p className="text-sm opacity-80">*Placeholder schedule - actual race times pending</p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Race?</h2>
              <p className="text-xl leading-relaxed mb-6">
                Join Austin's tech community for an adrenaline-fueled day at Circuit of the Americas.
                Whether you're a seasoned racer or first-time driver, this is your chance to experience
                the thrill of go-karting on one of the world's premier racing circuits.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Perfect for networking, team building, or just having an epic Saturday with fellow tech folks.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src={cotaKartingTrack}
                alt="COTA Karting Track - 15-turn layout with two straightaways"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Event Info */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Event Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-lg">📍 Location</h4>
                <p className="mb-4">Circuit of the Americas<br />9201 Circuit of the Americas Blvd<br />Austin, TX 78617</p>

                <h4 className="font-semibold mb-3 text-lg">🏁 What's Included</h4>
                <ul className="space-y-2">
                  <li>• High-speed gas karts (up to 55 mph!)</li>
                  <li>• Safety gear & helmets</li>
                  <li>• Practice sessions on 15-turn track</li>
                  <li>• Timed races with two straightaways</li>
                  <li>• Awards ceremony</li>
                  <li>• Tech networking opportunities</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-lg">⏰ Schedule (Tentative)</h4>
                <div className="space-y-2 mb-4">
                  <p><strong>11:00 AM</strong> - Check-in & Safety Briefing</p>
                  <p><strong>11:30 AM</strong> - Practice Sessions</p>
                  <p><strong>1:00 PM</strong> - Lunch Break</p>
                  <p><strong>2:00 PM</strong> - Qualifying Rounds</p>
                  <p><strong>3:00 PM</strong> - Final Races</p>
                  <p><strong>3:45 PM</strong> - Awards & Wrap-up</p>
                </div>
                <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                  ⚠️ Schedule is preliminary - actual race times will be confirmed closer to the event
                </p>

                <h4 className="font-semibold mb-3 text-lg mt-6">💰 Expected Costs</h4>
                <div className="space-y-2">
                  <p><strong>$30 per 10-minute race</strong> (standard COTA pricing)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Includes kart rental, safety gear, and track access
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Remember: First two signups get 3 races FREE! 🎁
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div className="text-center bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🏆 Early Bird Special!</h3>
            <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4 mb-6">
              <p className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                First Two Signups Get 3 Races FREE! 🎁
              </p>
              <p className="text-yellow-700 dark:text-yellow-300">
                I'm covering three races for the first two people to commit. That's your entry fee taken care of!
              </p>
            </div>
            <p className="text-lg mb-6">
              This is still in the planning stages, but if you're interested in joining Austin's tech community
              for some high-speed fun, let me know!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="mailto:walkertexasdriver@gmail.com?subject=Shift+F1 Early Bird - Count Me In!"
                className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                🏁 Claim My Spot!
              </Link>
              <Link
                href="/"
                className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Shift+F1 Podcast */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Shift+F1</h2>
              <p className="text-lg leading-relaxed mb-4">
                Shift+F1 is a beloved Formula 1 podcast hosted by Drew Scanlon, Danny O'Dwyer, and Rob Zacny.
                Since 2014, they've been bringing fans insightful commentary, race analysis, and plenty of humor
                about the world of speedy race cars.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                HireThisWalker.com is proud to be a title sponsor of this fantastic show, and this event is our
                way of bringing the F1 community together for some real-world racing action!
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.f1.cool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Visit Shift+F1
                </Link>
                <Link
                  href="https://www.f1.cool/listen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Listen Now
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-video bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold mb-2">🎧 Shift+F1</h3>
                <p className="text-gray-600 dark:text-gray-400">A podcast about speedy race cars</p>
                <p className="text-sm mt-4 text-gray-500">Hosted by Drew, Danny & Rob</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why COTA? */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src={cotaAerialView}
                alt="Aerial view of Circuit of the Americas F1 track"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Circuit of the Americas?</h2>
              <p className="text-lg leading-relaxed mb-4">
                COTA isn't just Austin's premier racing venue—it's the only purpose-built Formula 1 track in the United States.
                Their karting facility features a challenging 15-turn layout with two straightaways, offering the perfect blend
                of technical challenge and pure adrenaline.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Opened in 2017, COTA Karting sits right beside the main F1 circuit, giving you the authentic racing atmosphere
                while you battle it out in high-speed gas karts that reach up to 55 mph.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                It's a uniquely Austin experience that perfectly captures the city's blend of innovation,
                competition, and community spirit—just like the tech scene we're celebrating!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}