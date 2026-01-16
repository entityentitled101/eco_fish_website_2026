import React from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            {/* 背景遮罩 */}
            <div
                className="fixed inset-0 bg-black/60 z-50 animate-fade-in"
                onClick={onClose}
            ></div>

            {/* 弹窗内容 */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="bg-white shadow-2xl animate-scale-in relative max-w-md w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* 关闭按钮 */}
                    <button
                        onClick={onClose}
                        className="absolute -top-3 -right-3 bg-primary-900 text-white p-2 hover:bg-primary-800 transition-colors shadow-lg z-10"
                        aria-label="关闭"
                    >
                        <X size={20} />
                    </button>

                    {/* 顶部装饰 */}
                    <div className="bg-gradient-to-r from-primary-900 to-primary-800 p-6">
                        <h3 className="text-2xl font-serif font-bold text-white text-center">联系我们</h3>
                        <div className="w-16 h-1 bg-gold-500 mx-auto mt-3"></div>
                    </div>

                    {/* 内容区域 */}
                    <div className="p-8">
                        {/* 微信二维码 */}
                        <div className="mb-6">
                            <div className="bg-gradient-to-br from-gold-50 to-white p-6 border border-gold-200">
                                <img
                                    src="/weixin.jpg"
                                    alt="微信公众号二维码"
                                    className="w-full h-auto"
                                />
                            </div>
                            <p className="text-center text-gray-700 mt-4 leading-relaxed">
                                扫一扫关注我们的微信公众号，了解更多
                            </p>
                        </div>

                        {/* 联系方式 */}
                        <div className="space-y-4 border-t border-gray-200 pt-6">
                            <div>
                                <h4 className="text-sm font-bold text-primary-900 mb-3 flex items-center">
                                    <span className="w-1 h-4 bg-gold-500 mr-2"></span>
                                    基地地址
                                </h4>
                                <div className="text-sm text-gray-600 space-y-1 pl-3">
                                    <p>无锡市宜兴市新街街道新乐村</p>
                                    <p>绍兴市越城区孙端街道榆林村</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-primary-900 mb-3 flex items-center">
                                    <span className="w-1 h-4 bg-gold-500 mr-2"></span>
                                    鱼塘负责人
                                </h4>
                                <div className="text-sm text-gray-600 space-y-1 pl-3">
                                    <p>微信：niu1031003154</p>
                                    <p>电话：18844151137</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 底部装饰 */}
                    <div className="bg-gradient-to-r from-primary-900 to-primary-800 h-2"></div>
                </div>
            </div>
        </>
    );
};

export default ContactModal;
