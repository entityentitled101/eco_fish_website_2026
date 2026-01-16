import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-nature-light py-16 border-y border-primary-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900">养水：每天都经得起考验</h2>
          <p className="text-primary-600 mt-2">全年水质优于地表水III类标准</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {STATS.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-500 mb-2 font-mono whitespace-nowrap">
                {stat.value}
              </div>
              <div className="text-base md:text-lg font-bold text-primary-900 mb-1 whitespace-nowrap">{stat.label}</div>
              <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;