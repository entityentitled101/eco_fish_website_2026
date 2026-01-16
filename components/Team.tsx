import React from 'react';
import { TEAM, BASES } from '../constants';
import { MapPin } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Experts Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">国家级专家团队潜心研发</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              联合同济大学、上海海洋大学等机构，潜心三年研发，为您的健康与生态环境保驾护航。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {TEAM.map((member, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 items-start bg-primary-50 p-8 rounded-3xl border border-primary-100">
                <div className="w-24 h-24 rounded-full bg-primary-200 flex-shrink-0 overflow-hidden border-4 border-white shadow-md">
                    <img src={`https://picsum.photos/seed/${member.name}/200`} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-bold text-primary-900">{member.name}</h3>
                    <span className="text-sm font-medium text-primary-600 bg-primary-100 px-2 py-0.5 rounded">{member.title}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-500 mb-3">{member.org}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bases Section */}
        <div id="bases">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-gray-200 flex-grow"></div>
            <h3 className="text-2xl font-bold text-primary-900">两大养殖基地</h3>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {BASES.map((base, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden h-80 shadow-lg">
                <img 
                  src={`https://picsum.photos/seed/base${idx}/800/600`} 
                  alt={base.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/60 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 text-primary-300 mb-2">
                    <MapPin size={18} />
                    <span className="text-sm font-bold tracking-wider uppercase">养殖面积: {base.area}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">{base.name}</h4>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {base.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;