import React, { useState } from 'react';
import { getImageUrl } from '../utils';
import Hero from './Hero';
import ComparisonWithTheme from './ComparisonWithTheme';
import { ViewState } from '../App';
import { ArrowRight } from 'lucide-react';

interface HomeViewProps {
  onViewChange: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onViewChange }) => {
  const [theme, setTheme] = useState<'A' | 'B'>('B');

  return (
    <div className="animate-fade-in">
      <Hero
        onViewChange={onViewChange}
        theme={theme}
        onThemeChange={setTheme}
      />

      <ComparisonWithTheme theme={theme} />

      {/* Product Teaser / CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary-800 text-white">
        {/* 背景图片 bg_2 */}
        <div className="absolute inset-0 opacity-15">
          <img
            src={getImageUrl("/bg_2.jpg")}
            alt="背景"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 金色半透明覆盖层 */}
        <div className="absolute inset-0 bg-gold-500/10"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
            从源头定义“好鱼”标准
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            不仅是零抗生素，更是肉质、风味与营养的全面升维。<br />
            我们提供多种优质淡水鱼类，满足不同人群的健康需求。
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div
              onClick={() => onViewChange('tech')}
              className="group cursor-pointer bg-primary-900/50 border border-primary-700 hover:border-gold-500/50 p-8 rounded-sm hover:bg-primary-900 transition-all duration-500"
            >
              <h3 className="text-2xl font-serif text-gold-200 mb-2 group-hover:text-gold-400 transition-colors">深度解析技术</h3>
              <p className="text-sm text-white/90 mb-4">了解“泥-草-水-鱼”生态闭环</p>
              <span className="inline-flex items-center text-gold-500 text-sm tracking-widest uppercase group-hover:translate-x-2 transition-transform">
                Explore Technology <ArrowRight size={16} className="ml-2" />
              </span>
            </div>
            <div
              onClick={() => onViewChange('products')}
              className="group cursor-pointer bg-primary-900/50 border border-primary-700 hover:border-gold-500/50 p-8 rounded-sm hover:bg-primary-900 transition-all duration-500"
            >
              <h3 className="text-2xl font-serif text-gold-200 mb-2 group-hover:text-gold-400 transition-colors">浏览产品系列</h3>
              <p className="text-sm text-white/90 mb-4">查看肉质细节与营养报告</p>
              <span className="inline-flex items-center text-gold-500 text-sm tracking-widest uppercase group-hover:translate-x-2 transition-transform">
                View Products <ArrowRight size={16} className="ml-2" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;