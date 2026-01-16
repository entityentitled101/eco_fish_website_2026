import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-nature-sand">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Our Products</span>
            <h2 className="text-4xl font-bold text-primary-900 mt-2">生态好鱼，品质之选</h2>
          </div>
          <p className="text-gray-600 max-w-md mt-4 md:mt-0 text-right md:text-left">
            高蛋白、低脂肪、富含DHA。适配婴幼儿、健身人群、孕妇及老年人。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {PRODUCTS.map((product, idx) => (
            <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold md:hidden">{product.name}</h3>
              </div>
              
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="hidden md:block text-2xl font-bold text-primary-900 mb-4">{product.name}</h3>
                <div className="space-y-3">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                        <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm text-gray-400">清水生态认证</span>
                    <button className="text-primary-600 font-semibold text-sm hover:text-primary-800 transition-colors">
                        查看详情 &rarr;
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;