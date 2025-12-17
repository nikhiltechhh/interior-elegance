import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* About Us */}
      <section className="px-4 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              About <span className="text-red-600">IRA Interiors</span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Founded in <strong>2011</strong> by architect{' '}
              <strong>Telukunta Kaushik Kumar</strong>, IRA Interiors began in
              Hyderabad, Telangana, fueled by a passion for innovative design,
              interiors, and greenery. Starting with a lean team of two
              architects, one draftsman, and a site supervisor, the company
              quickly expanded across Andhra Pradesh and Telangana including
              Vijayawada, Visakhapatnam, Kurnool, Rajahmundry, Tirupati,
              Warangal, Siddipet, and more.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Today, IRA Interiors proudly serves clients <strong>PAN India</strong>,
              delivering standout projects such as <strong>TCS – Hyderabad & Bengaluru</strong>,
              <strong> B Braun Medical India Pvt Ltd</strong> across Andhra Pradesh,
              Telangana & Bihar, and premium residential developments in Andhra
              Pradesh, Telangana, and Karnataka.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white p-2 rounded-2xl shadow-lg border-2 border-red-600 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                alt="IRA Interiors Design"
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="px-4 py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-8">
            Our <span className="text-red-600">Expertise</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Residential',
                desc: 'Custom homes blending comfort, style, and green elements.',
              },
              {
                title: 'Commercial, Retail & Office',
                desc: 'Functional spaces that boost productivity and brand identity.',
              },
              {
                title: 'Hospitality (Hotels)',
                desc: 'Inviting designs for memorable guest experiences.',
              },
              {
                title: 'Cultural & Educational',
                desc: 'Spaces that inspire learning and community.',
              },
              {
                title: 'Healthcare',
                desc: 'Hygienic, efficient environments for wellness facilities.',
              },
              {
                title: 'High-Tech & Multiuse Developments',
                desc: 'Cutting-edge solutions for complex projects.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border hover:border-red-600 transition-all"
              >
                <h3 className="text-lg font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-4 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="bg-black rounded-2xl p-8 md:p-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Transforming Visions into Reality
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            With roots in Hyderabad’s vibrant culture and a commitment to sustainable, greenery-infused designs, IRA Interiors transforms visions into reality—nationwide. Contact us to elevate your space.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
