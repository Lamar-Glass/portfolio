import React, { useState } from "react";
import Heading from "../Components/Heading.jsx";
import { IoIosArrowForward } from "react-icons/io";
import RecentCertsCard from "../Components/RecentCertsCard.jsx";
import { certs } from "../data/Certs.jsx";

const RecentCerts = React.forwardRef(function RecentCerts(props, ref) {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreCerts = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const hasMore = visibleCount < certs.length;

  return (
    <section ref={ref} data-name="RecentCerts" className="scroll-mt-28 flex flex-col gap-10">
      <div>
        <Heading FWord="RECENT" LWord="CERTIFICATES" />
      </div>

      <div className="flex flex-col gap-2 relative stagger-reveal">
        {/* Vertical connector line */}
        <div className="absolute left-10 md:left-12 top-0 bottom-0 w-px bg-white/[0.03] z-0 hidden lg:block" />

        {certs.slice(0, visibleCount).map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 block"
          >
            <RecentCertsCard
              pic={cert.pic}
              heading={cert.heading}
              discr={cert.discr}
              tags={cert.tags.map((tag) => (
                <div key={tag.name} className="flex items-center gap-1.5">
                  {tag.icon} {tag.name}
                </div>
              ))}
            />
          </a>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMoreCerts}
            className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Certificates
              <IoIosArrowForward className="transition-transform duration-500 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>
        </div>
      )}
    </section>
  );
});

export default RecentCerts;

