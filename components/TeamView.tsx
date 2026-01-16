import React from 'react';
import { TEAM, BASES } from '../constants';
import { MapPin } from 'lucide-react';

const TeamView: React.FC = () => {
    const teamImages = ['/ppl (1).png', '/ppl (2).png'];
    const baseImages = ['/base (1).jpg', '/base (2).jpg'];

    return (
        <div className="animate-fade-in bg-white min-h-screen">

            {/* Experts Section - Redesigned with Background Shadows */}
            <section className="py-24 bg-gradient-to-b from-nature-light to-white relative overflow-hidden">
                {/* 背景装饰阴影 - 左边 */}
                <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2"></div>
                {/* 背景装饰阴影 - 右边 */}
                <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-gold-100/30 rounded-full blur-3xl translate-x-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-gold-600 font-serif tracking-[0.2em] uppercase text-sm block mb-3">Our Experts</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900">科研力量</h2>
                        <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
                        <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
                            联合同济大学、上海海洋大学顶级专家团队，三年潜心研发，为"清水生态"提供坚实的科学背书。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {TEAM.map((member, idx) => (
                            <div
                                key={idx}
                                className="group relative"
                            >
                                {/* 圆形头像 - 浮在卡片上方 */}
                                <div
                                    className={`absolute ${idx === 0 ? 'right-8' : 'left-8'} -top-20 z-20 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-primary-100 to-gold-100 group-hover:scale-110 transition-transform duration-500`}
                                >
                                    <img
                                        src={teamImages[idx]}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* 卡片主体 */}
                                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                                    {/* 顶部渐变条 */}
                                    <div className="h-2 bg-gradient-to-r from-primary-800 via-primary-600 to-gold-500"></div>

                                    {/* 卡片内容 */}
                                    <div className="p-10 pt-24 relative overflow-hidden">
                                        {/* 背景大头像 - 淡化效果 */}
                                        <div
                                            className={`absolute ${idx === 0 ? 'right-0' : 'left-0'} top-0 w-80 h-80 opacity-[0.08] grayscale pointer-events-none`}
                                            style={{
                                                backgroundImage: `url(${teamImages[idx]})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        ></div>

                                        {/* 文字内容 - 相对定位确保在背景之上 */}
                                        <div className="relative z-10">
                                            {/* 姓名 */}
                                            <h3 className="text-3xl font-serif font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                                                {member.name}
                                            </h3>

                                            {/* 职位标签 */}
                                            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium text-sm uppercase tracking-wider rounded-full mb-6 shadow-md">
                                                {member.title}
                                            </span>

                                            {/* 分隔线 */}
                                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent mb-6"></div>

                                            {/* 机构 */}
                                            <p className="text-primary-800 font-semibold mb-6 text-base">
                                                {member.org}
                                            </p>

                                            {/* 描述 */}
                                            <p className="text-gray-600 leading-relaxed text-base">
                                                {member.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* 底部装饰线 */}
                                    <div className="h-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bases Section - Dark Theme for Contrast */}
            <section className="py-24 bg-primary-900 text-white relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-5 bg-cover bg-center"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary-700 pb-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-white">生态基地概览</h2>
                            <p className="text-primary-200 text-base md:text-lg max-w-3xl">两大养殖基地是清水生态养殖模式的实践典范，更是水体生态修复的标杆工程，以硬核技术实现'养殖与净化共生'。</p>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center gap-2 text-gold-400">
                                <MapPin size={20} />
                                <span className="text-sm tracking-widest uppercase">China · Yixing & Shaoxing</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {BASES.map((base, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="h-96 overflow-hidden relative rounded-lg mb-6 border border-primary-700 shadow-2xl">
                                    <img
                                        src={baseImages[idx]}
                                        alt={base.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                    {/* 渐变遮罩 */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/40 to-transparent"></div>

                                    {/* 底部标签 */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-primary-950/90 px-6 py-4 backdrop-blur-sm border-t border-gold-600/30">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-gold-400">
                                                <MapPin size={18} />
                                                <span className="font-sans text-sm">养殖面积：{base.area}</span>
                                            </div>
                                            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                                    {base.name}
                                </h3>
                                <p className="text-gray-300 font-light leading-relaxed border-l-2 border-primary-700 pl-6 group-hover:border-gold-500 transition-colors">
                                    {base.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamView;