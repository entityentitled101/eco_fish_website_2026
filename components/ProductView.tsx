import React from 'react';
const ProductView: React.FC = () => {
    const dishes = [
        {
            image: '/images/products/dish (1).JPG',
            name: '清蒸鲈鱼',
            desc: '无需料酒去腥，简单上锅清蒸便能体现原本的鲜甜滋味。清水生态养殖让鲈鱼完全没有土腥味，保留最纯粹的鲜美。'
        },
        {
            image: '/images/products/dish (2).JPG',
            name: '鲈鱼粥',
            desc: '鲈鱼的肌间小刺很少，鱼肉又嫩滑鲜美。因为全程零抗养殖，非常适合给小朋友、小宝宝做辅食煮粥吃，安全放心。'
        },
        {
            image: '/images/products/dish (3).JPG',
            name: '清蒸鲈鱼',
            desc: '蒜瓣肉质、紧实弹牙。低密度养殖赋予鲈鱼充足的活动空间，造就了肉质的紧实口感和鲜美滋味。'
        }
    ];

    const otherFish = [
        { name: '草鱼', image: '/images/products/other_fish (1).png', highlight: '肉质弹性、鲜美嫩滑' },
        { name: '清波鱼', image: '/images/products/other_fish (2).png', highlight: '高蛋白18.1%' },
        { name: '鳊鱼', image: '/images/products/other_fish (3).png', highlight: '出肉率高、肉质紧实' }
    ];

    return (
        <div className="animate-fade-in bg-white min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-b from-nature-light to-white pt-24 pb-12 px-6 border-b border-primary-100">
                <div className="container mx-auto">
                    <span className="text-gold-600 font-serif tracking-[0.2em] uppercase text-sm block mb-4">Premium Selection</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6">生态优选系列</h1>
                    <p className="text-gray-600 max-w-4xl text-base md:text-lg font-light leading-relaxed">
                        每一条鱼都经过12个月的清水净化，富含优质蛋白质
                    </p>
                </div>
            </div>

            {/* 主打产品：鲈鱼 */}
            <div className="container mx-auto px-6 py-16">

                {/* 鲈鱼标题 - 左对齐，小标题样式 */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-3">清水鲈鱼</h2>
                    <div className="w-24 h-1 bg-gold-500 mb-4"></div>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
                        低密度生态养殖，零抗零激素，DHA含量位居淡水鱼之首，肉质紧实无土腥味，从源头定义高品质淡水鱼标准
                    </p>
                </div>

                {/* 主图区域：品质甄选 + 鱼鳃 */}
                <div className="grid lg:grid-cols-3 gap-6 mb-16">
                    {/* fish_display (1) - 主图 */}
                    <div className="lg:col-span-2 h-96 lg:h-[500px] overflow-hidden shadow-2xl relative group">
                        <img
                            src="/images/products/fish_display (1).jpg"
                            alt="清水鲈鱼"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                            <h3 className="text-white text-3xl font-serif font-bold mb-2">品质甄选</h3>
                            <p className="text-white/90 text-base">体型修长，体色金黄，肉质紧实</p>
                        </div>
                    </div>

                    {/* fish_display (2) - 鱼鳃 */}
                    <div className="h-96 lg:h-[500px] overflow-hidden shadow-xl relative group">
                        <img
                            src="/images/products/fish_display (2).jpg"
                            alt="鱼鳃细节"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/90 to-transparent p-6">
                            <p className="text-white text-lg font-semibold">鱼鳃鲜红 新鲜保证</p>
                        </div>
                    </div>
                </div>

                {/* 为什么选择我们的清水生态鲈鱼 */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-8 text-center">
                        为什么选择我们的清水生态鲈鱼
                    </h3>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* 营养密度优势 */}
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-1 h-8 bg-gold-500 mr-4"></div>
                                <h4 className="text-xl font-serif font-bold text-primary-900">营养密度优势</h4>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    清水生态养殖模式培育的淡水鲈鱼，是营养与安全双优的优质食材，凭借生态养殖优势，在营养密度与食用安全性上远超普通淡水鱼。
                                </p>
                                <p>
                                    <span className="font-bold text-primary-900">蛋白质含量达18.6%-19.5g/100g</span>，接近猪里脊肉的蛋白水平，且氨基酸组成均衡、易于人体吸收；脂肪含量仅为<span className="font-bold text-primary-900">3.4%-3.6%</span>，远低于普通养殖鱼类，是典型的高蛋白低脂肪食材。
                                </p>
                                <p>
                                    得益于"水草-螺贝-虾-鱼"的生态循环系统，鱼类摄食天然饵料中的小鱼小虾，而这些饵料生物通过摄食藻类累积大量DHA，使得清水鲈鱼的<span className="font-bold text-primary-900">DHA含量最高可达脂肪酸组成的22.73%</span>，每100克鱼肉含DHA约<span className="font-bold text-primary-900">860毫克</span>，位居淡水鱼之首，甚至优于部分海鱼。
                                </p>
                            </div>
                        </div>

                        {/* 安全保障 */}
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-1 h-8 bg-gold-500 mr-4"></div>
                                <h4 className="text-xl font-serif font-bold text-primary-900">安全保障</h4>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    更核心的优势在于安全保障，养殖全程<span className="font-bold text-primary-900">零抗生素、零激素添加</span>，杜绝药残风险，区别于市场上部分"吊水鱼"，从源头确保食材纯净。
                                </p>
                                <p>
                                    <span className="font-bold text-primary-900">零药残</span>的安全属性，更是孕妇、老年人及体质敏感人群补充营养的放心之选，同时满足中高端消费群体对高品质饮食的追求，为全家庭日常膳食与特殊营养补充的理想食材。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 深绿色背景区域：品质细节 + 适应人群 */}
                <div className="bg-primary-900 -mx-6 px-6 py-16 mb-20">
                    <div className="container mx-auto">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-12 text-center">品质细节</h3>

                        {/* 鱼肉质量图片 + 错落描述 */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
                            {/* fish_quality (1) */}
                            <div className="relative">
                                <div className="h-64 overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/products/fish_quality (1).jpg"
                                        alt="内脏细节"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-gold-500 text-primary-900 px-6 py-3 shadow-lg transform rotate-2">
                                    <p className="font-bold text-sm">内脏干净 无多余油膜</p>
                                </div>
                            </div>

                            {/* fish_quality (2) */}
                            <div className="relative">
                                <div className="h-64 overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/products/fish_quality (2).jpg"
                                        alt="肉质纹理"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -top-4 -left-4 bg-white text-primary-900 px-6 py-3 shadow-lg transform -rotate-2">
                                    <p className="font-bold text-sm">鱼肉纹理清晰</p>
                                </div>
                            </div>
                        </div>

                        {/* 适应人群 */}
                        <div className="max-w-5xl mx-auto">
                            <h4 className="text-xl font-serif font-bold text-gold-400 mb-8 text-center">适应人群</h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="flex items-start gap-3 text-white">
                                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <div className="font-bold mb-1">3岁以上儿童</div>
                                        <div className="text-sm text-white/80">高DHA助力大脑与视网膜发育</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-white">
                                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <div className="font-bold mb-1">健身人群</div>
                                        <div className="text-sm text-white/80">高蛋白低脂肪，增肌减脂首选</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-white">
                                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <div className="font-bold mb-1">年轻女性</div>
                                        <div className="text-sm text-white/80">体重管理与美容养颜</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-white">
                                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <div className="font-bold mb-1">孕妇</div>
                                        <div className="text-sm text-white/80">零药残，安全补充营养</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-white">
                                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <div className="font-bold mb-1">老年人</div>
                                        <div className="text-sm text-white/80">易消化吸收，补充优质蛋白</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-white">
                                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <div className="font-bold mb-1">中高端消费群体</div>
                                        <div className="text-sm text-white/80">追求高品质饮食</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 美味呈现 */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-8 text-center">美味呈现</h3>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {dishes.map((dish, idx) => (
                            <div key={idx} className="group">
                                <div className="overflow-hidden shadow-xl mb-4">
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="text-xl font-serif font-bold text-primary-900 mb-2">{dish.name}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{dish.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 其他鱼类 */}
            <div className="bg-gradient-to-b from-primary-50 to-white py-16">
                <div className="container mx-auto px-6">
                    <h3 className="text-2xl font-serif font-bold text-primary-900 mb-8 text-center">更多优质品种</h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {otherFish.map((fish, idx) => (
                            <div key={idx} className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={fish.image}
                                        alt={fish.name}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-serif font-bold text-primary-900 text-lg mb-1">{fish.name}</h4>
                                    <p className="text-sm text-gray-600">{fish.highlight}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 产品包装与发货 - 方角无圆角 */}
            <div className="container mx-auto px-6 py-16">
                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-12 text-center">产品包装与发货</h3>

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                    {/* 精美礼盒 - 金色背景，完整显示，方角 */}
                    <div className="md:col-span-1">
                        <div className="bg-gradient-to-br from-gold-100 to-gold-50 shadow-lg p-6 h-full flex flex-col">
                            <div className="flex items-center justify-center mb-6 flex-1" style={{ minHeight: '300px' }}>
                                <img
                                    src="/images/products/gift_package.png"
                                    alt="精美礼盒"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <h4 className="font-serif font-bold text-primary-900 mb-3 text-lg">精美礼盒</h4>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    鱼是中国人餐桌上的美味佳肴，送人鱼寓意年年有余，自家餐桌也是品质甄选。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 发货方式 - 深绿背景，方角 */}
                    <div className="md:col-span-2">
                        <div className="bg-primary-900 shadow-lg p-10 h-full">
                            <h4 className="font-serif font-bold text-white mb-10 text-2xl">发货方式</h4>

                            <div className="grid md:grid-cols-2 gap-10">
                                {/* 活鱼发货 */}
                                <div>
                                    <div className="overflow-hidden shadow-2xl mb-6">
                                        <img
                                            src="/images/products/product_package (1).jpg"
                                            alt="活鱼发货"
                                            className="w-full h-56 object-cover"
                                        />
                                    </div>
                                    <h5 className="font-bold text-white mb-4 text-xl">活鱼发货</h5>
                                    <div className="space-y-2 text-white/90 leading-relaxed">
                                        <p className="text-sm">打氧发货</p>
                                        <p className="text-sm">24小时包活</p>
                                        <p className="text-sm">运输包活</p>
                                    </div>
                                </div>

                                {/* 冰鲜三去 */}
                                <div>
                                    <div className="overflow-hidden shadow-2xl mb-6">
                                        <img
                                            src="/images/products/product_package (2).jpg"
                                            alt="冰鲜三去"
                                            className="w-full h-56 object-cover"
                                        />
                                    </div>
                                    <h5 className="font-bold text-white mb-4 text-xl">冰鲜三去</h5>
                                    <div className="space-y-2 text-white/90 leading-relaxed">
                                        <p className="text-sm">去内脏、去鳞片、去鱼鳃</p>
                                        <p className="text-sm">上锅即烹</p>
                                        <p className="text-sm">美味锁鲜</p>
                                    </div>
                                </div>
                            </div>

                            {/* 底部承诺 - 极简设计 */}
                            <div className="mt-10 pt-8 border-t border-white/20">
                                <div className="flex flex-wrap gap-8 justify-center text-white/90 text-sm">
                                    <span>• 全程冷链配送</span>
                                    <span>• 24小时内发货</span>
                                    <span>• 新鲜保证</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
