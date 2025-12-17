import React from 'react';

const Work = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery & Consultation",
      description: "Every project begins with understanding your vision. We listen to your ideas, preferences, and requirements, guiding you through design possibilities while capturing your style, functionality needs, and budget.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Concept Design & Planning",
      description: "Our expert designers create concept designs reflecting your aesthetic and functional needs. We present mood boards, layouts, and 3D visualizations, refining every detail to align with your expectations.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Material Selection & Finalization",
      description: "With approved designs, we select the best materials, finishes, and furnishings. We work closely with you on every choice, using only premium-quality materials that combine style, durability, and sustainability.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Execution & Installation",
      description: "Our skilled craftsmen and installation team bring the design to life. We manage every step from coordinating with suppliers to overseeing construction, ensuring everything runs smoothly and on schedule.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      number: "5",
      title: "Final Touches & Handover",
      description: "We add special touches—decor, lighting, and accessories—that enhance the overall aesthetic. After thorough final inspection, we hand over your new space, ensuring everything is perfect and ready to enjoy.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      number: "6",
      title: "Aftercare & Support",
      description: "We're committed to your satisfaction beyond handover. We provide aftercare support to ensure your space remains beautiful and functional. For any adjustments or future assistance, we're just a call away.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section id="work" className="px-4 py-10 md:py-14 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">
          How It <span className="text-red-600">Works</span>
        </h1>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-5"></div>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          At IRA Interiors, we follow a streamlined process that ensures every project is executed with precision, creativity, and care. From initial consultation to final touches, we make your design journey simple, transparent, and enjoyable.
        </p>
      </section>

      {/* Process Steps */}
      <section className="px-4 pb-10 md:pb-14 max-w-6xl mx-auto">
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}
            >
              {/* Content Side */}
              <div className="flex-1 w-full">
                <div className={`bg-white p-6 rounded-xl shadow-lg border-2 ${index % 2 === 0 ? 'border-red-600' : 'border-black'} hover:shadow-xl transition-shadow duration-300`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${index % 2 === 0 ? 'bg-red-600' : 'bg-black'} rounded-lg flex items-center justify-center flex-shrink-0 text-white`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Number Side */}
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${index % 2 === 0 ? 'bg-red-600' : 'bg-black'} flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

   
    </div>
  );
};

export default Work;