import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronRight, BookOpen, Lightbulb, Info, Target, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { database } from './data';
import { TermVisualizer } from './components/Visualizers';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Logo = () => (
  <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="drop-shadow-md">
      <title>tsingyun-ai-logo-白</title>
      <defs>
          <path d="M9.58190484,0 C9.23943197,0.0027545283 8.89825145,0.16972132 8.70073722,0.501747924 L8.70073722,0.501747924 L2.77315647,10.4076673 C2.58705801,10.7206241 2.58511948,11.1073175 2.76798707,11.4219694 L2.76798707,11.4219694 L7.4049405,19.1505402 C7.58673113,19.4637088 7.58565417,19.8487071 7.40214041,20.1608164 L7.40214041,20.1608164 L0.138484681,32.5485658 C-0.044167516,32.8591918 -0.0463214334,33.2416475 0.133099888,33.5543924 L0.133099888,33.5543924 L5.32447166,42.595178 C5.71670002,43.2780892 6.71504075,43.2833863 7.11437704,42.6047129 L7.11437704,42.6047129 L20.7898142,19.3973883 C21.1419797,18.7922396 20.8944945,18.1938713 20.7751675,17.9692713 L20.7751675,17.9692713 L10.4856886,0.510647169 C10.2896821,0.173323396 9.94505532,0.0027545283 9.59913618,0 L9.59913618,0 L9.58190484,0 Z M44.9608601,19.1871966 L23.7462812,19.3257705 C23.3781767,19.3281013 23.0393655,19.523249 22.8571441,19.837689 L22.8571441,19.837689 L9.20023067,43.3352986 C8.80714074,44.0116412 9.30512645,44.8530437 10.0973373,44.8513512 L10.0973373,44.8513512 L20.6819029,44.829948 C21.0512997,44.8288886 21.3916187,44.6341646 21.5747017,44.319089 L21.5747017,44.319089 L28.1049485,33.0731975 C28.2873853,32.7593932 28.6255503,32.5648811 28.9932241,32.5625503 L28.9932241,32.5625503 L38.4273824,32.5008913 C38.7954869,32.4985605 39.1340827,32.3032009 39.3163041,31.9887609 L39.3163041,31.9887609 L45.8635669,20.7019752 C46.2549337,20.0258445 45.7573788,19.1871966 44.967968,19.1871966 L44.967968,19.1871966 C44.9655987,19.1871966 44.9632294,19.1871966 44.9608601,19.1871966 L44.9608601,19.1871966 Z" id="path-1"></path>
          <radialGradient cx="57.8004477%" cy="70.5169516%" fx="57.8004477%" fy="70.5169516%" r="102.117527%" gradientTransform="translate(0.578, 0.7052), scale(0.975, 1), rotate(30.4309), scale(1, 0.3434), translate(-0.578, -0.7052)" id="radialGradient-3">
              <stop stopColor="#DCD9D4" offset="0%"></stop>
              <stop stopColor="#545556" offset="100%"></stop>
          </radialGradient>
          <radialGradient cx="63.365373%" cy="73.3677402%" fx="63.365373%" fy="73.3677402%" r="96.2632837%" gradientTransform="translate(0.6337, 0.7337), scale(0.8182, 1), rotate(29.4896), scale(1, 0.3434), translate(-0.6337, -0.7337)" id="radialGradient-4">
              <stop stopColor="#CCCCCC" offset="0%"></stop>
              <stop stopColor="#545556" offset="100%"></stop>
          </radialGradient>
      </defs>
      <g id="tsingyun-ai-logo-白" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="编组-3" transform="translate(1, 1)">
              <g id="编组">
                  <mask id="mask-2" fill="white">
                      <use href="#path-1"></use>
                  </mask>
                  <g id="Clip-2"></g>
                  <path d="M9.58190484,0 C9.23943197,0.0027545283 8.89825145,0.16972132 8.70073722,0.501747924 L8.70073722,0.501747924 L2.77315647,10.4076673 C2.58705801,10.7206241 2.58511948,11.1073175 2.76798707,11.4219694 L2.76798707,11.4219694 L7.4049405,19.1505402 C7.58673113,19.4637088 7.58565417,19.8487071 7.40214041,20.1608164 L7.40214041,20.1608164 L0.138484681,32.5485658 C-0.044167516,32.8591918 -0.0463214334,33.2416475 0.133099888,33.5543924 L0.133099888,33.5543924 L5.32447166,42.595178 C5.71670002,43.2780892 6.71504075,43.2833863 7.11437704,42.6047129 L7.11437704,42.6047129 L20.7898142,19.3973883 C21.1419797,18.7922396 20.8944945,18.1938713 20.7751675,17.9692713 L20.7751675,17.9692713 L10.4856886,0.510647169 C10.2896821,0.173323396 9.94505532,0.0027545283 9.59913618,0 L9.59913618,0 L9.58190484,0 Z M44.9608601,19.1871966 L23.7462812,19.3257705 C23.3781767,19.3281013 23.0393655,19.523249 22.8571441,19.837689 L22.8571441,19.837689 L9.20023067,43.3352986 C8.80714074,44.0116412 9.30512645,44.8530437 10.0973373,44.8513512 L10.0973373,44.8513512 L20.6819029,44.829948 C21.0512997,44.8288886 21.3916187,44.6341646 21.5747017,44.319089 L21.5747017,44.319089 L28.1049485,33.0731975 C28.2873853,32.7593932 28.6255503,32.5648811 28.9932241,32.5625503 L28.9932241,32.5625503 L38.4273824,32.5008913 C38.7954869,32.4985605 39.1340827,32.3032009 39.3163041,31.9887609 L39.3163041,31.9887609 L45.8635669,20.7019752 C46.2549337,20.0258445 45.7573788,19.1871966 44.967968,19.1871966 L44.967968,19.1871966 C44.9655987,19.1871966 44.9632294,19.1871966 44.9608601,19.1871966 L44.9608601,19.1871966 Z" id="Fill-1" fill="url(#radialGradient-3)" mask="url(#mask-2)"></path>
              </g>
              <text id="AI" fill="url(#radialGradient-4)" fillRule="nonzero" fontFamily="JiangChengXieHei-900W, 江城斜黑体" fontSize="8.55813953" fontStyle="italic" fontWeight="800" letterSpacing="1.03287902">
                  <tspan x="29.1254523" y="45.0369905">AI</tspan>
              </text>
          </g>
      </g>
  </svg>
);

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(database.map(c => c.category));
  const [selectedTerm, setSelectedTerm] = useState<any>(database[0].terms[0]);

  const filteredDatabase = useMemo(() => {
    if (!searchQuery.trim()) return database;
    const query = searchQuery.toLowerCase();
    return database.map(cat => ({
      ...cat,
      terms: cat.terms.filter(term => 
        term.name.toLowerCase().includes(query) || 
        term.short.toLowerCase().includes(query) ||
        term.deep.toLowerCase().includes(query)
      )
    })).filter(cat => cat.terms.length > 0);
  }, [searchQuery]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 bg-slate-900 text-slate-300 flex flex-col h-full shadow-xl z-10 flex-shrink-0">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Sparkles size={18} />
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">AI 术语百科全书</h1>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="搜索术语..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-800 transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {filteredDatabase.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm flex flex-col items-center gap-3">
              <Search size={32} className="opacity-20" />
              <p>未找到相关术语</p>
            </div>
          ) : (
            filteredDatabase.map((category) => {
              const Icon = category.icon;
              const isExpanded = expandedCategories.includes(category.category) || searchQuery.length > 0;
              
              return (
                <div key={category.category} className="mb-2">
                  <button 
                    onClick={() => toggleCategory(category.category)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium text-slate-200 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                      {category.category}
                    </div>
                    {isExpanded ? <ChevronDown size={16} className="text-slate-500" /> : <ChevronRight size={16} className="text-slate-500" />}
                  </button>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-7 pr-2 py-1 space-y-1 relative before:absolute before:left-3.5 before:top-0 before:bottom-0 before:w-px before:bg-slate-800">
                          {category.terms.map((term) => {
                            const isSelected = selectedTerm?.name === term.name;
                            return (
                              <button
                                key={term.name}
                                onClick={() => setSelectedTerm(term)}
                                className={cn(
                                  "w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 relative",
                                  isSelected 
                                    ? "bg-blue-600 text-white font-medium shadow-md shadow-blue-900/20" 
                                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                                )}
                              >
                                {isSelected && (
                                  <motion.div 
                                    layoutId="active-indicator"
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-white rounded-r-full"
                                  />
                                )}
                                {term.name}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto bg-slate-50 p-8 md:p-12 lg:p-16 custom-scrollbar relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent -z-10 pointer-events-none" />
        
        {/* Top Right Logo */}
        <div className="fixed top-8 right-8 md:top-12 md:right-12 z-50">
          <Logo />
        </div>
        
        <AnimatePresence mode="wait">
          {selectedTerm ? (
            <motion.div
              key={selectedTerm.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              {/* Header Section */}
              <header className="mb-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold mb-4 tracking-wide border border-blue-200/50"
                >
                  {database.find(c => c.terms.some(t => t.name === selectedTerm.name))?.category}
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                  {selectedTerm.name}
                </h2>
              </header>

              <div className="grid gap-8">
                {/* Step 1: TL;DR */}
                <motion.section 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/60 relative overflow-hidden group hover:shadow-md transition-shadow"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 rounded-l-2xl"></div>
                  <div className="flex items-start gap-5">
                    <div className="mt-1 p-3 bg-blue-50 text-blue-600 rounded-xl shadow-inner">
                      <Lightbulb size={28} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">一句话大白话</h3>
                      <p className="text-2xl text-slate-800 leading-relaxed font-medium">
                        {selectedTerm.short}
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Step 2: Interactive Visualizer */}
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full"
                >
                  <TermVisualizer type={selectedTerm.visualType} name={selectedTerm.name} />
                </motion.section>

                {/* Step 3: Deep Dive */}
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-5">
                    <div className="mt-1 p-3 bg-indigo-50 text-indigo-600 rounded-xl shadow-inner">
                      <Info size={28} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">深度解析</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {selectedTerm.deep}
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Step 4: Example */}
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-5">
                    <div className="mt-1 p-3 bg-emerald-50 text-emerald-600 rounded-xl shadow-inner">
                      <Target size={28} />
                    </div>
                    <div className="w-full">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">应用场景示例</h3>
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-slate-200 opacity-50">
                          <Target size={100} />
                        </div>
                        <p className="text-slate-700 leading-relaxed text-lg italic relative z-10">
                          "{selectedTerm.example}"
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400">
              <div className="text-center">
                <BookOpen size={64} className="mx-auto mb-6 opacity-20" />
                <p className="text-lg">请在左侧选择一个术语以查看详情</p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Watermark */}
      <div className="fixed bottom-4 right-6 text-xs text-slate-400/60 font-medium pointer-events-none z-50 select-none flex items-center gap-1">
        Powered By 清云智通 · 武汉研发中心
      </div>
    </div>
  );
}
