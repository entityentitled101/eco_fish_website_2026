import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { ChevronDown } from 'lucide-react';

interface ComparisonProps {
    theme?: 'A' | 'B';
}

const Comparison: React.FC<ComparisonProps> = ({ theme = 'A' }) => {
    // 根据主题选择不同的背景色
    const bgClass = theme === 'B' ? 'bg-primary-900' : 'bg-nature-light';
    const titleColor = theme === 'B' ? 'text-gold-300' : 'text-primary-900';
    const subtitleColor = theme === 'B' ? 'text-gold-500' : 'text-gold-600';

    return (
        <section className={`py-10 ${bgClass} transition-colors duration-500 relative overflow-hidden`}>
            {/* 背景图片 - 仅在方案B时显示 */}
            {theme === 'B' && (
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="/images/backgrounds/bg_1.jpg"
                        alt="对比背景"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-8">
                    <span className={`${subtitleColor} font-serif tracking-widest text-sm uppercase block mb-3`}>Comparison</span>
                    <h2 className={`text-4xl md:text-5xl font-serif font-bold ${theme === 'B' ? 'text-gold-200/80' : 'text-primary-900'}`}>为什么选择清水生态？</h2>
                    <div className={`w-24 h-1 ${theme === 'B' ? 'bg-gold-400' : 'bg-gold-500'} mx-auto mt-6`}></div>
                    {/* 动态箭头提示 */}
                    <div className="mt-8 flex justify-center">
                        <ChevronDown
                            size={32}
                            className={`${theme === 'B' ? 'text-gold-200/50' : 'text-gold-400/60'} animate-bounce`}
                            strokeWidth={1.5}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-0 border border-gray-200 shadow-2xl rounded-sm overflow-hidden">
                    {/* Traditional Card - Greyscale/Dark */}
                    <div className="bg-gray-50 p-12 md:p-16 border-b md:border-b-0 md:border-r border-gray-200 relative group">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gray-300"></div>
                        <h3 className="text-2xl font-serif font-bold text-gray-500 mb-2">{COMPARISON_DATA.traditional.title}</h3>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-8">Industrial Standard</p>

                        <div className="mb-8 h-48 w-full bg-gray-200 overflow-hidden relative grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100">
                            <img src={COMPARISON_DATA.traditional.image} className="w-full h-full object-cover" alt="Traditional" />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>

                        <div className="space-y-4 font-sans text-gray-600">
                            <div className="flex items-start">
                                <span className="text-gray-400 mr-4 font-serif italic">01.</span>
                                <p>高密度投放，环境恶化</p>
                            </div>
                            <div className="flex items-start">
                                <span className="text-gray-400 mr-4 font-serif italic">02.</span>
                                <p>依赖药物控制病害</p>
                            </div>
                            <div className="flex items-start">
                                <span className="text-gray-400 mr-4 font-serif italic">03.</span>
                                <p>水质混浊，土腥味重</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <span className="block text-gray-500 font-serif text-lg font-bold">{COMPARISON_DATA.traditional.highlight}</span>
                        </div>
                    </div>

                    {/* Ecological Card - Green/Gold */}
                    <div className="bg-white p-12 md:p-16 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-2 bg-primary-800"></div>
                        {/* Background Texture */}
                        <div className="absolute right-0 top-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

                        <h3 className="text-2xl font-serif font-bold text-primary-900 mb-2">{COMPARISON_DATA.ecological.title}</h3>
                        <p className="text-xs text-gold-600 uppercase tracking-wider mb-8">Green Standard</p>

                        <div className="mb-8 h-48 w-full bg-primary-100 overflow-hidden relative shadow-lg">
                            <img src={COMPARISON_DATA.ecological.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Ecological" />
                        </div>

                        <div className="space-y-4 font-sans text-primary-900">
                            <div className="flex items-start">
                                <span className="text-gold-500 mr-4 font-serif italic">01.</span>
                                <p>低密度散养，模拟自然</p>
                            </div>
                            <div className="flex items-start">
                                <span className="text-gold-500 mr-4 font-serif italic">02.</span>
                                <p>全程零抗，纯生物净化</p>
                            </div>
                            <div className="flex items-start">
                                <span className="text-gold-500 mr-4 font-serif italic">03.</span>
                                <p>水质优于III类，肉质清甜</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-primary-100">
                            <span className="block text-primary-800 font-serif text-xl font-bold">{COMPARISON_DATA.ecological.highlight}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
