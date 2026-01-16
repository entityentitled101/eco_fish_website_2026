import React from 'react';
import { COMPANY_INFO } from '../constants';
import { ViewState } from '../App';

interface HeroProps {
  onViewChange?: (view: ViewState) => void;
  theme?: 'A' | 'B';
  onThemeChange?: (theme: 'A' | 'B') => void;
}

const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  // 固定为方案B的参数
  const filterOpacity = 20; // 滤镜深度 20%
  const textShadow = '0 4px 12px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)'; // 阴影模糊12，深度60

  return (
    <section className="relative h-[67vh] flex items-center justify-center overflow-hidden">

      {/* Background with Dark Green Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/fish（1）.jpg"
          alt="生态湖泊"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b mix-blend-multiply"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(5, 74, 43, ${filterOpacity / 100}) 0%, rgba(5, 74, 43, ${(filterOpacity - 15) / 100}) 50%, rgba(5, 74, 43, ${filterOpacity / 100}) 100%)`
          }}
        ></div>
      </div>

      {/* Decorative Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-white/20 z-10 pointer-events-none flex flex-col justify-between">
        <div className="flex justify-between p-4">
          <span className="w-4 h-4 border-t border-l border-gold-400"></span>
          <span className="w-4 h-4 border-t border-r border-gold-400"></span>
        </div>
        <div className="flex justify-between p-4">
          <span className="w-4 h-4 border-b border-l border-gold-400"></span>
          <span className="w-4 h-4 border-b border-r border-gold-400"></span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center">
          <span className="py-1 px-6 border-b border-gold-500/60 text-gold-100 tracking-[0.3em] text-sm uppercase font-serif">
            {COMPANY_INFO.philosophy}
          </span>
        </div>

        <h1
          className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight font-serif"
          style={{ textShadow }}
        >
          {COMPANY_INFO.slogan}
        </h1>

        <p
          className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed font-light font-sans tracking-wide"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)' }}
        >
          摒弃粗放药物养殖，回归自然水域生态。<br className="hidden md:block" />
          构建<span className="text-white font-medium mx-1">泥 · 草 · 水 · 鱼</span>完美闭环。
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {onViewChange && (
            <button
              onClick={() => onViewChange('tech')}
              className="px-10 py-4 bg-primary-800 text-white rounded-sm font-serif font-semibold hover:bg-primary-700 transition-all border border-primary-600 shadow-2xl hover:shadow-gold-500/20"
            >
              探寻技术核心
            </button>
          )}
          <span className="text-white/40 font-serif italic text-sm">— or — </span>
          {onViewChange && (
            <button
              onClick={() => onViewChange('products')}
              className="px-10 py-4 bg-gold-500 border border-gold-600 text-primary-900 rounded-sm font-serif font-semibold hover:bg-gold-400 transition-all shadow-xl hover:shadow-gold-500/30"
            >
              鉴赏生态产品
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;