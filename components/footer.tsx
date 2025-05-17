import Link from "next/link"
import Image from "next/image"
import { useTina } from "tinacms/dist/react"
import { client } from "@/tina/__generated__/client"

export default async function Footer() {
  // Fetch settings from TinaCMS
  const settingsResponse = await client.queries.settings({ relativePath: "main.json" })
  const settings = useTina(settingsResponse)

  const { contactAddress, contactEmail, hours, socialLinks, galsscapeDescription, galsscapeUrl } =
    settings.data.settings.footer

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 rounded-t-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cathite-1XYr28cMKI3SXR4azfjs9nlOftCAXO.gif"
            alt="Studio Poetics Animation"
            width={200}
            height={200}
            className="rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-normal mb-4">MAIN</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:underline">
                  JOURNAL
                </Link>
              </li>
              <li>
                <Link href="/experiments" className="hover:underline">
                  EXPERIMENTS
                </Link>
              </li>
              <li>
                <Link href="/observations" className="hover:underline">
                  OBSERVATIONS
                </Link>
              </li>
              <li>
                <Link href="/designed-objects" className="hover:underline">
                  DESIGNED OBJECTS
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/awards" className="hover:underline">
                  AWARDS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">EXPLORE</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calendar" className="hover:underline">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="/exhibitions" className="hover:underline">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:underline">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/talks" className="hover:underline">
                  Talks & Lectures
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:underline">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:underline">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">CONNECT</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-xl">Studio Poetics</p>
              <p className="text-xl">Goa / Prayagraj, India</p>
              <p className="text-xl">{contactEmail}</p>
              <div className="flex gap-4 mt-4">
                <Link href="https://instagram.com" className="text-xl hover:underline">
                  Instagram
                </Link>
                <Link href="https://twitter.com" className="text-xl hover:underline">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-800 mb-12">
          <div>
            <h3 className="text-lg font-normal mb-4">Contact Us</h3>
            <p className="mb-2">{contactAddress}</p>
            <p className="mb-2">{contactEmail}</p>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Hours</h3>
            <p className="mb-2">{hours}</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-800 mb-12">
          <div>
            <h3 className="text-lg font-normal mb-4">We are on socials</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
                >
                  {social.platform}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Explore Galsscape</h3>
            <p className="mb-4">{galsscapeDescription}</p>
            <Link
              href={galsscapeUrl}
              className="border border-white rounded-full px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors inline-block"
            >
              Visit Galsscape
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-wrap justify-between gap-4">
          <div className="flex gap-4">
            <Link href="/policies" className="hover:underline">
              Visitor Policies
            </Link>
            <Link href="/license" className="hover:underline">
              License Agreement
            </Link>
          </div>
          <div>© Studio Poetics {new Date().getFullYear()}</div>
          <div>Designed by Studio Poetics</div>
        </div>
      </div>
    </footer>
  )
}
