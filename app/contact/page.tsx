import Image from "next/image";
import Link from "next/link";

function contact() {
  return (
    <main className="relative bg-black text-white min-h-screen flex flex-col justify-center p-6">
      <Link
        href="/"
        className="absolute top-4 left-4 flex items-center gap-2 text-gray-300 hover:text-white transition"
        aria-label="Back to Home"
      >
        <div className="w-6 h-6 border-t-2 border-l-2 border-gray-300 transform rotate-45 hover:border-white transition" />
        <span className="hidden sm:inline text-sm">Back</span>
      </Link>
      <div className="max-w-7xl w-full mx-auto space-y-10">
        <h2 className="text-4xl md:text-6xl lg:text-8xl text-center md:text-left mb-10">
          HARYA PRANATRESHNA
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 flex justify-center">
            <Image
              src="/heroimg.jpg"
              width={2600}
              height={2400}
              alt="Gambar Harya"
              className="w-full max-w-md rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <a
                href="mailto:@gmail.com"
                className="text-lg md:text-xl hover:underline block text-center lg:text-left"
              >
                @gmail.com
              </a>
              <p className="text-sm md:text-base text-gray-400 text-center lg:text-left">
                UC could mean Unconscious Competent, Uncertified, Under Construction or Ultracivilized (technology)
              </p>
            </div>
            <div>
              <a
                href="tel:+62"
                className="text-lg md:text-xl hover:underline block text-center lg:text-left"
              >
                +62
              </a>
              {/* <a
                href="tel:+954432549443"
                className="text-lg md:text-xl hover:underline block text-center lg:text-left"
              >
                +954 432 549 443
              </a> */}
            </div>
            <div className="text-gray-400 text-sm md:text-base text-center lg:text-left">
              <p className="font-medium">INDONESIA</p>
              <p>Pasadena Hills PH1/19, Taman Dayu, Pandaan</p>
              <p className="mt-4 font-medium">CARGILL</p>
              <p>Gresik Plant Manager for Cargill Cocoa and Chocolate</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-8">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-400">
            <a href="https://www.flickr.com/people/21810866@N03/" className="hover:underline" rel="noopener noreferrer">
              FLICKR
            </a>
            <a href="#" className="hover:underline" rel="noopener noreferrer">
              YOUTUBE
            </a>
            <a href="https://www.facebook.com/harya.id/" className="hover:underline" rel="noopener noreferrer">
              FACEBOOK
            </a>
            <a href="https://www.instagram.com/harya_id/" className="hover:underline" rel="noopener noreferrer">
              INSTAGRAM
            </a>
            <a href="#" className="hover:underline" rel="noopener noreferrer">
              TWITTER
            </a>
            <a href="https://www.linkedin.com/in/harya-pranatreshna-a69781a/" className="hover:underline" rel="noopener noreferrer">
              LINKEDIN
            </a>
          </div>

          <div className="text-sm text-gray-400 text-center">
            © 25
          </div>
        </div>
      </div>
    </main>
  );
}

export default contact;


