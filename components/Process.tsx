import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-nature-sand -z-10 rounded-l-[100px]"></div>

      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Our Technology</span>
          <h2 className="text-4xl font-bold text-primary-900 mt-2 mb-6">清水生态养殖的“四养”路线</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            养鱼先养水，养水先养泥，养泥先养草。构建互生互辅的健康生态闭环。
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="group relative bg-white p-8 rounded-3xl shadow-lg border border-primary-100 hover:border-primary-300 transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <step.icon size={32} />
                </div>
                <div className="absolute top-8 right-8 text-6xl font-black text-gray-100 -z-10 group-hover:text-primary-50 transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Closed Loop Graphic Explanation */}
        <div className="mt-20 bg-primary-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-bold mb-6">底层逻辑：建立生态闭环</h3>
                    <p className="text-primary-100 mb-6 leading-relaxed">
                        一个完整健全的生态体系，需遵循“养好草、改良泥、净化水，再自然养好鱼”的递进逻辑。
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                            <span>肉食性鱼类 → 捕食小型鱼虾</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                            <span>小型鱼虾 → 碎屑供养底栖螺贝</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                            <span>排泄物滋养水草 → 鱼螺贝草净水清底</span>
                        </li>
                    </ul>
                </div>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-700/50">
                     <img src="https://picsum.photos/seed/underwater/800/600" alt="水下森林" className="w-full h-full object-cover" />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                         <p className="font-bold text-lg">水下森林：生态系统的肺</p>
                     </div>
                </div>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-800 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-600 rounded-full opacity-30 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Process;