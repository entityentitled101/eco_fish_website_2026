import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
  onViewChange?: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  return (
    <footer className="bg-primary-950 text-white py-16 border-t border-primary-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/logo（长）.png"
                alt="绿佳元"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary-200/60 leading-relaxed text-sm max-w-xs font-light">
              我们致力于通过清水生态养殖技术，恢复水体生态，为消费者提供真正的健康好鱼。
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-gold-500 font-serif">快速导航</h4>
            <ul className="space-y-3 text-primary-200/60 text-sm">
              <li><button onClick={() => onViewChange?.('home')} className="hover:text-gold-300 transition-colors">首页概览</button></li>
              <li><button onClick={() => onViewChange?.('products')} className="hover:text-gold-300 transition-colors">生态产品</button></li>
              <li><button onClick={() => onViewChange?.('tech')} className="hover:text-gold-300 transition-colors">四养技术</button></li>
              <li><button onClick={() => onViewChange?.('team')} className="hover:text-gold-300 transition-colors">科研与基地</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-gold-500 font-serif">联系方式</h4>
            <div className="text-primary-200/60 text-sm space-y-3 font-light">
              <div>
                <p className="text-gold-400/80 font-medium mb-2">基地地址</p>
                <p>无锡市宜兴市新街街道新乐村</p>
                <p>绍兴市越城区孙端街道榆林村</p>
              </div>
              <div className="pt-2">
                <p className="text-gold-400/80 font-medium mb-2">鱼塘负责人</p>
                <p>微信：niu1031003154</p>
                <p>电话：18844151137</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-900 pt-8 text-center text-primary-200/30 text-xs font-light">
          <p>&copy; 2024 绿佳元生态农业有限公司 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;