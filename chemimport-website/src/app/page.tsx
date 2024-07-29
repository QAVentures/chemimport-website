import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-[#1E5C9B] mb-4">Your Trusted Chemical Importer</h1>
            <p className="text-xl mb-8">Sourcing specialty chemicals from across the globe</p>
            <Link href="/products" className="bg-[#4CAF50] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
              View Our Products
            </Link>
          </div>
          <div className="w-1/2">
            <Image src="/images/hero-image.jpg" alt="Chemical lab" width={600} height={400} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1E5C9B] mb-8">Featured Products</h2>
          <div className="grid grid-cols-4 gap-8">
            {['Product 1', 'Product 2', 'Product 3', 'Product 4'].map((product, index) => (
              <div key={index} className="bg-[#F5F7FA] p-4 rounded-lg">
                <div className="bg-white h-40 mb-4 rounded"></div>
                <h3 className="text-xl font-semibold mb-2">{product}</h3>
                <p className="text-gray-600">Short description of the product</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1E5C9B] mb-8">Our Services</h2>
          <div className="grid grid-cols-3 gap-8">
            {['Chemical Importing', 'Consulting Services', 'Industry Newsletter'].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600 mb-4">Brief description of the service and its benefits.</p>
                <Link href={`/services#${service.toLowerCase().replace(' ', '-')}`} className="text-[#1E5C9B] font-semibold hover:underline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1E5C9B] mb-4">About Us</h2>
          <p className="text-xl mb-8">With over 20 years of experience, we provide top-quality chemicals and expert consulting services.</p>
          <Link href="/about" className="bg-[#1E5C9B] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Learn More
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#1E5C9B] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for the latest chemical industry updates and exclusive offers.</p>
          <form className="flex">
            <input type="email" placeholder="Enter your email address" className="flex-grow p-3 rounded-l-full" />
            <button type="submit" className="bg-[#4CAF50] px-6 py-3 rounded-r-full text-lg font-semibold hover:bg-green-600 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}