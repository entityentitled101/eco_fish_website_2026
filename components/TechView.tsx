import React from 'react';
import { PROCESS_STEPS } from '../constants';
import Stats from './Stats';

const TechView: React.FC = () => {
    // 图片映射
    const stepImages = [
        '/4_mud.png',      // 养泥
        '/4_grass.png',    // 养草
        '/4_water.jpg',    // 养水
        '/4_fish.png'      // 养鱼
    ];

    return (
        <div className="animate-fade-in bg-white">
            {/* Header - 使用新的背景图 */}
            <div className="bg-primary-900 py-24 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/4_header.png"
                        alt="技术背景"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10">
                    <span className="text-gold-400 font-serif tracking-[0.2em] uppercase text-sm block mb-4">Core Technology</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">四养循环技术</h1>
                    <p className="text-primary-100 max-w-3xl mx-auto font-light text-base md:text-lg px-4">
                        自然的净化力量。以"泥、草、水、鱼"构建完整生态链，还原鱼类最本质的生存环境。
                    </p>
                </div>
            </div>

            <Stats />

            {/* 4 Steps - Large Image Layout */}
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col gap-24">
                    {PROCESS_STEPS.map((step, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-12 group`}>

                            {/* Image Area */}
                            <div className="w-full md:w-1/2 relative min-h-[400px]">
                                <div className="absolute inset-0 bg-gray-200 overflow-hidden rounded-sm shadow-xl">
                                    <img
                                        src={stepImages[idx]}
                                        alt={step.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>

                                    {/* Label on Image */}
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <span className="block text-xs text-gold-400 uppercase tracking-widest mb-1">Step 0{idx + 1}</span>
                                        <span className="font-serif text-3xl font-bold">{step.title}</span>
                                    </div>
                                </div>
                                {/* Decorative Box behind */}
                                <div className={`absolute -bottom-4 ${idx % 2 === 1 ? '-right-4' : '-left-4'} w-full h-full border border-primary-200 -z-10 rounded-sm`}></div>
                            </div>

                            {/* Text Area */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <div className="relative">
                                    <span className="text-9xl font-serif font-black text-gray-50 absolute -top-10 -left-6 -z-10 select-none">
                                        0{idx + 1}
                                    </span>
                                    <h3 className="text-3xl font-serif font-bold text-primary-900 mb-6">{step.title}技术解析</h3>
                                </div>
                                <div className="w-16 h-1 bg-gold-500 mb-8"></div>
                                <p className="text-lg text-gray-600 leading-loose font-light mb-8">
                                    {step.desc}
                                </p>

                                {/* 技术详情区域 */}
                                {idx === 3 ? (
                                    // 养鱼：显示米虾和麦穗鱼 + 详细信息
                                    <div className="space-y-6">
                                        {/* 生态食物链图片 */}
                                        <div className="bg-nature-light p-6 rounded-sm">
                                            <h4 className="text-sm font-bold text-primary-800 mb-4 tracking-wide">生态食物链</h4>
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                {/* 麦穗鱼 */}
                                                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="h-32 overflow-hidden">
                                                        <img
                                                            src="/4_fish_fish.webp"
                                                            alt="麦穗鱼"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="font-serif font-bold text-primary-900 text-sm mb-1">麦穗鱼</div>
                                                        <div className="text-xs text-gray-500">天然饵料</div>
                                                    </div>
                                                </div>

                                                {/* 米虾 */}
                                                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="h-32 overflow-hidden">
                                                        <img
                                                            src="/4_fish_shrimp.jpg"
                                                            alt="米虾"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="font-serif font-bold text-primary-900 text-sm mb-1">米虾</div>
                                                        <div className="text-xs text-gray-500">生态虾类</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 养鱼详细步骤 */}
                                        {step.details && (
                                            <div className="space-y-4">
                                                {step.details.map((detail: any, detailIdx: number) => (
                                                    <div key={detailIdx} className="bg-white p-5 border-l-3 border-gold-500 rounded-r-sm shadow-sm">
                                                        <h5 className="text-sm font-bold text-gold-700 mb-2 uppercase tracking-wide">
                                                            {detail.phase}
                                                        </h5>
                                                        <p className="text-sm text-gray-700 leading-relaxed">
                                                            {detail.content}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    // 其他三个：显示详细步骤信息
                                    <div className="space-y-4">
                                        {step.details && step.details.map((detail: any, detailIdx: number) => (
                                            <div key={detailIdx} className="bg-nature-light p-5 border-l-3 border-primary-400 rounded-r-sm hover:bg-primary-50 transition-colors">
                                                <h5 className="text-sm font-bold text-primary-800 mb-2 uppercase tracking-wide">
                                                    {detail.phase}
                                                </h5>
                                                <p className="text-sm text-gray-700 leading-relaxed">
                                                    {detail.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Summary */}
            <div className="bg-nature-paper py-24 text-center mt-12 border-t border-primary-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">不仅是技术，更是对自然的敬畏</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        我们在每一滴水、每一株草上的投入，最终都转化为了鱼肉的极致鲜美与安全。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechView;