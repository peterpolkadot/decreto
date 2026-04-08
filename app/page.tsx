export default function Home() {
  const awardsByYear = [
    {
      year: "2025",
      items: ["Century 21 Gold Award – Q1"],
    },
    {
      year: "2021–2024",
      items: [
        "Century 21 Centurion Award – Top 2% Worldwide (2021, 2022 & 2023)",
        "Century 21 Platinum Award – Almost every quarter",
      ],
    },
    {
      year: "2022",
      items: ["Century 21 Emerald Masters"],
    },
    {
      year: "2021",
      items: ["Century 21 Ruby Masters"],
    },
    {
      year: "2020–2022",
      items: [
        "Finalist – REB Top 10 Salesperson of the Year",
        "Finalist – REB Regional Principal of the Year",
      ],
    },
    {
      year: "2020",
      items: ["Century 21 Gold Award – Q4"],
    },
    {
      year: "2019",
      items: [
        "Century 21 Masters Award",
        "Century 21 Gold Award – Q1 & Q3",
      ],
    },
    {
      year: "Multi-Year",
      items: ["Multi-Office Award Winner (Gold and Platinum)"],
    },
  ];

  const reviews = [
    {
      rating: 5.0,
      type: "Buyer of residential land",
      location: "Truro, SA",
      text: "We purchased the land property from CJ whilst living in NSW and have a lot of experience buying and selling properties in NSW. Throughout the entire process CJ was professional, responsive and kept us fully informed. Highly recommend CJ to anyone looking to buy or sell property.",
    },
    {
      rating: 5.0,
      type: "Seller of house",
      location: "Angaston, SA",
      text: "We were very happy with CJ's professional manner. The end result was a successful sale. Glad we chose him as our agent. Always patient with our requirements and questions. We would not hesitate to recommend CJ to anyone looking to sell their property.",
    },
    {
      rating: 5.0,
      type: "Seller of house",
      location: "Tanunda, SA",
      text: "As seniors downsizing to a smaller residence it was a very stressful and emotional time. The selling of our family home which we built was made easier by CJ's calm, professional and empathetic approach. We would recommend CJ without hesitation.",
    },
  ];

  return (
    <div className="flex flex-col min-h-full font-[var(--font-barlow,_'Barlow_Semi_Condensed',_Arial,_sans-serif)]">

      {/* ── NAV ── */}
      <header className="bg-[#202020] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="block w-1 h-8 bg-[#F2B838] rounded-full" />
            <div>
              <p className="text-xs tracking-widest uppercase text-[#F2B838] font-semibold leading-none mb-0.5">
                Century 21 Adams &amp; Costello
              </p>
              <p className="text-lg font-semibold leading-none tracking-wide">
                CJ Setlhong
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#F2B838] text-[#202020] font-semibold px-5 py-2 rounded hover:bg-yellow-400 transition-colors text-sm tracking-wide"
          >
            Contact
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="bg-[#202020] text-white pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-end gap-8">
          {/* Text */}
          <div className="flex-1 pb-16">
            <p className="text-[#F2B838] uppercase tracking-widest text-sm font-semibold mb-3">
              Property Consultant
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-4">
              CJ Setlhong
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              Award-winning real estate expertise serving Wynnum, Bayside and
              surrounding communities.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-[#F2B838] text-[#202020] font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition-colors tracking-wide"
              >
                Contact
              </a>
              <a
                href="https://wynnum.century21.com.au/market-appraisal?agentid=23567"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#F2B838] text-[#F2B838] font-semibold px-6 py-3 rounded hover:bg-[#F2B838] hover:text-[#202020] transition-colors tracking-wide"
              >
                Arrange an Appraisal
              </a>
            </div>
          </div>

          {/* Photo — centered on mobile, bottom-aligned on desktop */}
          <div className="w-64 md:w-80 shrink-0 self-center md:self-end mx-auto md:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://wynnum.century21.com.au/imagecache/fitwithings/1024x1024/_files/agent_headshot/landscape_23567-tb8tsq.jpg"
              alt="CJ Setlhong – Property Consultant"
              className="w-full object-cover object-top rounded-t-lg"
              style={{ aspectRatio: "4/5" }}
            />
          </div>
        </div>
      </section>

      {/* ── GOLD DIVIDER ── */}
      <div className="h-1.5 bg-[#F2B838]" />

      {/* ── STATS BAR ── */}
      <section className="bg-[#f9f6f0]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "10+", label: "Years Experience" },
            { stat: "Top 2%", label: "Globally – Century 21" },
            { stat: "3×", label: "Centurion Award" },
            { stat: "Master's", label: "Business (Property)" },
          ].map(({ stat, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-semibold text-[#202020]">{stat}</span>
              <span className="text-sm uppercase tracking-widest text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#F2B838] uppercase tracking-widest text-sm font-semibold mb-2">
              About CJ
            </p>
            <h2 className="text-4xl font-semibold mb-6 text-[#202020]">
              Your Local Property Expert
            </h2>
            <div className="w-12 h-1 bg-[#F2B838] mb-6" />
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed text-[1.05rem]">
            <p>
              With over <strong className="text-[#202020]">10 years of real estate experience</strong>,
              CJ Setlhong brings award-winning expertise and a proven record of success to
              the Wynnum and Bayside community.
            </p>
            <p>
              A former high school Mathematics Teacher with multiple degrees including a{" "}
              <strong className="text-[#202020]">Master of Business (Property)</strong>, CJ combines
              strong communication, sharp analysis, and deep market insight to deliver
              outstanding results for his clients.
            </p>
            <p>
              CJ has built an impressive career across the Barossa, Gawler, and Adelaide
              regions, earning multiple <strong className="text-[#202020]">Century 21 Centurion Awards</strong>,
              placing him in the Top 2% of agents worldwide for 2021, 2022, and 2023.
              He has also been in the top 10 in REB awards for three consecutive years.
            </p>
            <p>
              Known for his dedication, integrity, and results-driven approach, CJ has
              extensive experience across residential, land, rural, and commercial sales.
              Now proudly part of the Wynnum community, CJ is committed to helping locals
              achieve the best possible outcome for their property.
            </p>
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="py-20 bg-[#202020] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#F2B838] uppercase tracking-widest text-sm font-semibold mb-2">
              Recognition
            </p>
            <h2 className="text-4xl font-semibold">Awards &amp; Achievements</h2>
            <div className="w-12 h-1 bg-[#F2B838] mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsByYear.map(({ year, items }) => (
              <div
                key={year}
                className="bg-white/5 border border-white/10 rounded p-5 hover:border-[#F2B838]/50 transition-colors"
              >
                <p className="text-[#F2B838] text-xs uppercase tracking-widest font-semibold mb-3">
                  {year}
                </p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-300 text-sm leading-snug">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#F2B838]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-[#f9f6f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[#F2B838] uppercase tracking-widest text-sm font-semibold mb-2">
                Client Reviews
              </p>
              <h2 className="text-4xl font-semibold text-[#202020]">
                What Clients Say
              </h2>
              <div className="w-12 h-1 bg-[#F2B838] mt-4" />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#F2B838]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-semibold text-[#202020]">4.8</span>
              <span className="text-gray-500 text-sm">29 reviews on realestate.com.au</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-[#F2B838]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#202020] text-sm">{review.type}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.realestate.com.au/agent/cj-setlhong-3896288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#202020] text-[#202020] font-semibold px-6 py-3 rounded hover:bg-[#202020] hover:text-white transition-colors tracking-wide"
            >
              See all 29 reviews on realestate.com.au
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <p className="text-[#F2B838] uppercase tracking-widest text-sm font-semibold mb-2">
              Contact
            </p>
            <h2 className="text-4xl font-semibold text-[#202020] mb-6">
              Let&apos;s Talk Property
            </h2>
            <div className="w-12 h-1 bg-[#F2B838] mb-8" />

            <div className="space-y-5 text-[#202020]">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-0.5">Mobile</p>
                <a
                  href="tel:0448085077"
                  className="text-lg font-semibold hover:text-[#F2B838] transition-colors"
                >
                  0448 085 077
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-0.5">Email</p>
                <a
                  href="mailto:cj@decreto.com.au"
                  className="text-lg font-semibold hover:text-[#F2B838] transition-colors"
                >
                  cj@decreto.com.au
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-0.5">Office</p>
                <p className="text-lg font-semibold">158 Bay Terrace, Wynnum QLD 4178</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  <a href="tel:0738932377" className="hover:text-[#F2B838] transition-colors">
                    07 3893 2377
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wynnum.century21.com.au/market-appraisal?agentid=23567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#202020] text-white font-semibold px-6 py-3 rounded hover:bg-[#F2B838] hover:text-[#202020] transition-colors tracking-wide"
              >
                Arrange an Appraisal
              </a>
              <a
                href="https://wynnum.century21.com.au/cns/refunctions/vcard/23567"
                className="border border-[#202020] text-[#202020] font-semibold px-6 py-3 rounded hover:bg-[#202020] hover:text-white transition-colors tracking-wide"
              >
                Save Contact
              </a>
            </div>
          </div>

          {/* Office card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#202020] px-6 py-4">
              <p className="text-[#F2B838] text-xs uppercase tracking-widest font-semibold mb-1">Office</p>
              <p className="text-white text-xl font-semibold">Century 21 Adams &amp; Costello</p>
            </div>
            <div className="p-6 space-y-4 text-gray-600 text-sm">
              <p>
                <span className="font-semibold text-[#202020] block mb-0.5">Address</span>
                158 Bay Terrace, Wynnum QLD 4178
              </p>
              <p>
                <span className="font-semibold text-[#202020] block mb-0.5">Phone</span>
                <a href="tel:0738932377" className="hover:text-[#F2B838] transition-colors">
                  07 3893 2377
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#202020] block mb-0.5">Email</span>
                <a href="mailto:officeadmin@c21wynnum.com" className="hover:text-[#F2B838] transition-colors">
                  officeadmin@c21wynnum.com
                </a>
              </p>
              <div className="pt-2 flex gap-3">
                <a
                  href="https://wynnum.century21.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#202020] text-white px-4 py-2 rounded hover:bg-[#F2B838] hover:text-[#202020] transition-colors font-semibold tracking-wide"
                >
                  Visit Website
                </a>
                <a
                  href="https://www.google.com/maps/dir/Current+Location/158+Bay+Terrace%2C+Wynnum+QLD+4178+AU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs border border-[#202020] text-[#202020] px-4 py-2 rounded hover:bg-[#202020] hover:text-white transition-colors font-semibold tracking-wide"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#202020] text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Century 21 Adams &amp; Costello. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/C21Wynnum"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2B838] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/century21.adamsandcostello/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2B838] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wynnum.century21.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2B838] transition-colors"
            >
              century21.com.au
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
