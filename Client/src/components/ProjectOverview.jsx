export function ProjectOverview() {
  const stats = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: 'Sion-Chunabhatti, Mumbai',
      link: 'https://maps.google.com/?q=Sion-Chunabhatti,+Mumbai'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      text: '1BHK, 2BHK & Jodi Flats',
      link: '#floor-plans'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      text: 'Under Construction'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: '+91 98200 52888',
      link: 'tel:+919820052888'
    }
  ];

  return (
    <section id="overview" className="bg-[#1A1A1A] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const innerContent = (
              <>
                <div className="text-[#d7bc73]">
                  {stat.icon}
                </div>
                <span className="text-white font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.text}
                </span>
              </>
            );

            const itemClass = "bg-[#222222] rounded-2xl px-6 py-4 flex items-center gap-4 hover:bg-[#2a2a2a] transition-colors duration-300";

            return stat.link ? (
              <a
                key={index}
                href={stat.link}
                target={stat.link.startsWith('http') ? "_blank" : undefined}
                rel={stat.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className={itemClass}
              >
                {innerContent}
              </a>
            ) : (
              <div key={index} className={itemClass}>
                {innerContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
