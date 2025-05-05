'use client';

import Image from 'next/image';
import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl md:text-2xl">Bringing the authentic taste of Northern Pakistan to your doorstep</p>
          </div>
        </div>
      </div>

      {/* Founder's Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/Images/founder.jpg"
              alt="Founder"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Founder's Story</h2>
            <p className="text-gray-600 mb-4">
              Born and raised in the picturesque valleys of Northern Pakistan, our founder developed a deep appreciation for the region's rich culinary heritage from an early age. Growing up surrounded by the majestic mountains and vibrant culture, they witnessed firsthand how traditional recipes were passed down through generations, preserving the authentic flavors of the North.
            </p>
            <p className="text-gray-600 mb-4">
              After years of working in the food industry and seeing the growing demand for authentic regional cuisine, they decided to create Zouq-e-North - a platform that would bridge the gap between the traditional flavors of Northern Pakistan and food enthusiasts across the country.
            </p>
            <p className="text-gray-600">
              Today, Zouq-e-North stands as a testament to their vision of sharing the rich culinary heritage of Northern Pakistan while supporting local farmers and artisans who are the custodians of these traditional recipes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Beginning</h3>
              <p className="text-gray-600">
                Founded in 2023, Zouq-e-North started as a small initiative to bring authentic Northern Pakistani cuisine to food lovers. What began as a passion project has now grown into a trusted platform for quality regional products.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Growth</h3>
              <p className="text-gray-600">
                Through partnerships with local farmers and artisans, we've expanded our product range while maintaining the highest standards of quality and authenticity. Our commitment to supporting local communities has been the cornerstone of our growth.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Future</h3>
              <p className="text-gray-600">
                We continue to explore new ways to bring the rich flavors of Northern Pakistan to more people while preserving traditional recipes and supporting sustainable practices in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to preserving and promoting the authentic flavors of Northern Pakistan while supporting local communities and sustainable practices.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Authenticity</h3>
            <p className="text-gray-600">Preserving traditional recipes and cooking methods</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">Maintaining the highest standards in all our products</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">Supporting local farmers and artisans</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
            <p className="text-gray-600">Promoting eco-friendly practices</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 