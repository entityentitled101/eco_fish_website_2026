import React, { useState } from 'react';
import { AlertCircle, X, Palette } from 'lucide-react';

interface HeroDebugPanelProps {
    onFilterChange: (color: string, opacity: number) => void;
    onTextShadowChange: (shadow: string) => void;
    onThemeChange: (theme: 'A' | 'B') => void;
    currentTheme: 'A' | 'B';
}

const HeroDebugPanel: React.FC<HeroDebugPanelProps> = ({
    onFilterChange,
    onTextShadowChange,
    onThemeChange,
    currentTheme
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // 滤镜控制
    const [filterHue, setFilterHue] = useState(154); // 绿色色调
    const [filterOpacity, setFilterOpacity] = useState(currentTheme === 'A' ? 65 : 30);

    // 文字阴影控制
    const [shadowBlur, setShadowBlur] = useState(12);
    const [shadowOpacity, setShadowOpacity] = useState(60);

    const handleFilterChange = (hue: number, opacity: number) => {
        setFilterHue(hue);
        setFilterOpacity(opacity);
        onFilterChange(`hsl(${hue}, 45%, 35%)`, opacity);
    };

    const handleShadowChange = (blur: number, opacity: number) => {
        setShadowBlur(blur);
        setShadowOpacity(opacity);
        onTextShadowChange(`0 4px ${blur}px rgba(0,0,0,${opacity / 100}), 0 2px 4px rgba(0,0,0,${opacity / 100 * 0.7})`);
    };

    const handleThemeSwitch = (theme: 'A' | 'B') => {
        onThemeChange(theme);
        // 根据主题自动调整滤镜
        const newOpacity = theme === 'A' ? 65 : 30;
        setFilterOpacity(newOpacity);
        handleFilterChange(filterHue, newOpacity);
    };

    return (
        <>
            {/* 红色感叹号按钮 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-24 right-4 z-[100] bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
                title="调试面板"
            >
                <AlertCircle size={24} />
            </button>

            {/* 调试面板 */}
            {isOpen && (
                <div className="fixed top-24 right-4 z-[100] bg-white rounded-lg shadow-2xl p-6 w-96 border border-gray-200 max-h-[80vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                            <Palette size={20} />
                            首页视觉调试
                        </h3>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                            <X size={20} />
                        </button>
                    </div>

                    {/* 主题切换 */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            视觉方案对比
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => handleThemeSwitch('A')}
                                className={`px-4 py-3 rounded-lg border-2 transition-all ${currentTheme === 'A'
                                        ? 'border-primary-600 bg-primary-50 text-primary-900 font-bold'
                                        : 'border-gray-300 bg-white text-gray-600 hover:border-primary-400'
                                    }`}
                            >
                                <div className="text-xs mb-1">方案 A</div>
                                <div className="text-[10px] text-gray-500">深滤镜 65%</div>
                                <div className="text-[10px] text-gray-500">白色背景</div>
                            </button>
                            <button
                                onClick={() => handleThemeSwitch('B')}
                                className={`px-4 py-3 rounded-lg border-2 transition-all ${currentTheme === 'B'
                                        ? 'border-gold-600 bg-gold-50 text-gold-900 font-bold'
                                        : 'border-gray-300 bg-white text-gray-600 hover:border-gold-400'
                                    }`}
                            >
                                <div className="text-xs mb-1">方案 B ✨</div>
                                <div className="text-[10px] text-gray-500">浅滤镜 30%</div>
                                <div className="text-[10px] text-gray-500">深绿背景</div>
                            </button>
                        </div>
                    </div>

                    {/* 滤镜颜色 */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            滤镜色调: {filterHue}°
                        </label>
                        <input
                            type="range"
                            min="120"
                            max="180"
                            value={filterHue}
                            onChange={(e) => handleFilterChange(Number(e.target.value), filterOpacity)}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="text-xs text-gray-500 mt-1">
                            绿色范围: 120°-180°
                        </div>
                    </div>

                    {/* 滤镜深度 */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            滤镜深度: {filterOpacity}%
                        </label>
                        <input
                            type="range"
                            min="20"
                            max="90"
                            value={filterOpacity}
                            onChange={(e) => handleFilterChange(filterHue, Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    {/* 文字阴影模糊度 */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            阴影模糊: {shadowBlur}px
                        </label>
                        <input
                            type="range"
                            min="4"
                            max="24"
                            value={shadowBlur}
                            onChange={(e) => handleShadowChange(Number(e.target.value), shadowOpacity)}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    {/* 文字阴影深度 */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            阴影深度: {shadowOpacity}%
                        </label>
                        <input
                            type="range"
                            min="20"
                            max="100"
                            value={shadowOpacity}
                            onChange={(e) => handleShadowChange(shadowBlur, Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    {/* 当前值预览 */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="text-xs font-medium text-gray-700 mb-2">当前方案: {currentTheme}</div>
                        <p className="text-xs text-gray-600 font-mono leading-relaxed">
                            滤镜: {filterOpacity}%<br />
                            阴影: blur {shadowBlur}px, opacity {shadowOpacity}%
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default HeroDebugPanel;
