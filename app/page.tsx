import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Northern Pakistan Landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Zouq-e-North
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover Authentic Products from Northern Pakistan
          </p>
          <Link
            href="/products"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const categories = [
  {
    name: 'Dry Fruits',
    image: '/categories/dry-fruits.jpg',
  },
  {
    name: 'Honey',
    image: '/categories/honey.jpg',
  },
  {
    name: 'Herbal Tea',
    image: '/categories/herbal-tea.jpg',
  },
]

const features = [
  {
    title: 'Authentic Products',
    description: 'Directly sourced from Northern Pakistan',
    icon: '🏔️',
  },
  {
    title: 'Quality Assured',
    description: 'Premium quality products guaranteed',
    icon: '✨',
  },
  {
    title: 'Fast Delivery',
    description: 'Nationwide shipping available',
    icon: '🚚',
  },
  {
    title: 'Secure Payment',
    description: 'Safe and secure payment methods',
    icon: '🔒',
  },
] 