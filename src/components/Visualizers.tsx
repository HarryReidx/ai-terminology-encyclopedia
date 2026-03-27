import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Database, Search, Cpu, ArrowRight, CheckCircle2, XCircle, Sparkles, Shield, AlertTriangle, Zap, Sliders, Eye, Play, RefreshCw, Camera, Users, Wrench, Plug, GitBranch, Box, FileText, Image as ImageIcon, Music, Video, Thermometer, UserCheck, Book, GraduationCap, ArrowDownToLine, Code, Bell } from 'lucide-react';

export const AIVisualizer = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[250px] relative overflow-hidden flex items-center justify-center">
      <div className="relative w-32 h-32">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-blue-500/30 rounded-full border-dashed" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-2 border-2 border-purple-500/30 rounded-full border-dotted" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="text-blue-400" size={40} />
        </div>
        
        {/* Orbiting nodes */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
          <div className="absolute -top-2 left-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
          <div className="absolute top-1/2 -right-2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />
        </motion.div>
      </div>
    </div>
  )
};

export const LLMVisualizer = () => {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[250px] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="flex items-center justify-between w-full max-w-sm relative z-10">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-20 h-16 bg-blue-100 border border-blue-300 rounded-lg flex flex-col items-center justify-center text-blue-700 shadow-sm z-20">
          <MessageSquare size={16} className="mb-1" />
          <span className="text-[10px] font-medium">输入 (Prompt)</span>
        </motion.div>

        <div className="flex-1 flex items-center justify-center relative px-2">
          <motion.div animate={{ width: ['0%', '50%'] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute left-0 h-0.5 bg-slate-400 top-1/2 -translate-y-1/2 z-0 origin-left" />
          
          <motion.div animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 0px #000', '0 0 15px #000', '0 0 0px #000'] }} transition={{ duration: 2, repeat: Infinity }} className="w-20 h-20 bg-slate-900 rounded-xl flex flex-col items-center justify-center text-white shadow-xl z-10 border border-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent" />
            <Cpu size={20} className="mb-1 text-blue-400" />
            <span className="text-xs font-bold tracking-widest">黑盒</span>
            <span className="text-[8px] text-slate-400 mt-1">LLM</span>
          </motion.div>

          <motion.div animate={{ width: ['0%', '50%'] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }} className="absolute left-1/2 h-0.5 bg-slate-400 top-1/2 -translate-y-1/2 z-0 origin-left" />
        </div>

        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5 }} className="w-20 h-16 bg-emerald-100 border border-emerald-300 rounded-lg flex flex-col items-center justify-center text-emerald-700 shadow-sm z-20">
          <FileText size={16} className="mb-1" />
          <span className="text-[10px] font-medium">输出 (Text)</span>
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 text-xs text-slate-500 font-medium flex items-center gap-1">
        <AlertTriangle size={12} className="text-amber-500" />
        仅负责语言处理，不直接完成业务闭环
      </div>
    </div>
  )
};

export const GPUVisualizer = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-6 items-center justify-center h-[250px]">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-slate-400 font-medium">CPU (少量强大核心)</span>
        <div className="grid grid-cols-2 gap-2 bg-slate-800 p-3 rounded-lg border border-slate-700">
          {[...Array(4)].map((_, i) => (
            <motion.div key={i} animate={{ backgroundColor: ['#3b82f6', '#1e293b', '#3b82f6'] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} className="w-10 h-10 bg-blue-500 rounded-md" />
          ))}
        </div>
      </div>
      <div className="text-slate-500 font-bold text-xl">VS</div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-slate-400 font-medium">GPU (海量并行核心)</span>
        <div className="grid grid-cols-8 gap-1 bg-slate-800 p-3 rounded-lg border border-slate-700">
          {[...Array(64)].map((_, i) => (
            <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.5, repeat: Infinity, delay: Math.random() * 1 }} className="w-3 h-3 bg-emerald-500 rounded-sm" />
          ))}
        </div>
      </div>
    </div>
  )
};

export const CVVisualizer = () => {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[250px] flex items-center justify-center relative overflow-hidden">
      <div className="relative w-64 h-40 bg-slate-200 rounded-lg overflow-hidden border border-slate-300 shadow-inner">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          <Camera size={48} opacity={0.5} />
        </div>
        <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-1 bg-blue-500/50 shadow-[0_0_10px_#3b82f6] z-10" />
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.8, 1] }} className="absolute top-4 left-4 w-20 h-24 border-2 border-emerald-500 bg-emerald-500/10 rounded-sm">
          <div className="absolute -top-5 left-[-2px] bg-emerald-500 text-white text-[10px] px-1">Person 98%</div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5, times: [0, 0.2, 0.8, 1] }} className="absolute bottom-4 right-8 w-24 h-16 border-2 border-amber-500 bg-amber-500/10 rounded-sm">
          <div className="absolute -top-5 left-[-2px] bg-amber-500 text-white text-[10px] px-1">Car 92%</div>
        </motion.div>
      </div>
    </div>
  )
};

export const MultimodalVisualizer = () => {
  const [modeIndex, setModeIndex] = useState(0);

  const modes = [
    {
      title: "文生图 (Text-to-Image)",
      inIcon: FileText, inColor: "text-blue-600", inBg: "bg-blue-100", inBorder: "border-blue-300", inText: '"画一只可爱的猫"',
      outIcon: ImageIcon, outColor: "text-emerald-600", outBg: "bg-emerald-100", outBorder: "border-emerald-300", outText: "[生成猫咪图片]"
    },
    {
      title: "图生文 (Image-to-Text)",
      inIcon: ImageIcon, inColor: "text-emerald-600", inBg: "bg-emerald-100", inBorder: "border-emerald-300", inText: "[上传发票照片]",
      outIcon: FileText, outColor: "text-blue-600", outBg: "bg-blue-100", outBorder: "border-blue-300", outText: '"总计: 128.5元"'
    },
    {
      title: "文生视频 (Text-to-Video)",
      inIcon: FileText, inColor: "text-blue-600", inBg: "bg-blue-100", inBorder: "border-blue-300", inText: '"海浪拍打沙滩"',
      outIcon: Video, outColor: "text-purple-600", outBg: "bg-purple-100", outBorder: "border-purple-300", outText: "[生成海浪视频]"
    },
    {
      title: "语音识别 (Speech-to-Text)",
      inIcon: Music, inColor: "text-amber-600", inBg: "bg-amber-100", inBorder: "border-amber-300", inText: '"帮我定个闹钟"',
      outIcon: FileText, outColor: "text-blue-600", outBg: "bg-blue-100", outBorder: "border-blue-300", outText: '"已设置明天8点闹钟"'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setModeIndex(s => (s + 1) % modes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentMode = modes[modeIndex];
  const InIcon = currentMode.inIcon;
  const OutIcon = currentMode.outIcon;

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[360px] relative flex flex-col items-center overflow-hidden">
      <div className="absolute top-6 left-6 text-slate-300 font-bold tracking-wider flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 z-20">
        <Sparkles size={16} className="text-amber-400" />
        {currentMode.title}
      </div>

      <div className="flex-1 w-full flex items-center justify-between px-4 relative mt-8">
        {/* Input */}
        <div className="w-[30%] flex justify-center z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`in-${modeIndex}`}
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col items-center gap-3 p-4 rounded-xl border ${currentMode.inBg} ${currentMode.inBorder} shadow-lg w-full max-w-[140px]`}
            >
              <InIcon size={32} className={currentMode.inColor} />
              <span className={`text-xs font-bold text-center ${currentMode.inColor}`}>{currentMode.inText}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Processing Beams */}
        <div className="absolute left-[25%] right-[25%] top-1/2 -translate-y-1/2 h-1 bg-slate-800 z-0 overflow-hidden rounded-full">
           <motion.div 
             key={`beam-${modeIndex}`}
             initial={{ x: '-100%' }}
             animate={{ x: '200%' }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
           />
        </div>

        {/* LLM Brain */}
        <div className="w-[30%] flex justify-center z-10">
          <motion.div 
            key={`llm-${modeIndex}`}
            animate={{ scale: [1, 1.1, 1], boxShadow: ['0 0 0px #3b82f6', '0 0 30px #3b82f6', '0 0 0px #3b82f6'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-24 h-24 bg-slate-800 border-2 border-blue-500/50 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent" />
            <Cpu size={36} className="text-blue-400 mb-1" />
            <span className="text-[10px] font-bold tracking-widest text-slate-300">多模态大模型</span>
          </motion.div>
        </div>

        {/* Output */}
        <div className="w-[30%] flex justify-center z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`out-${modeIndex}`}
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`flex flex-col items-center gap-3 p-4 rounded-xl border ${currentMode.outBg} ${currentMode.outBorder} shadow-lg w-full max-w-[140px]`}
            >
              <OutIcon size={32} className={currentMode.outColor} />
              <span className={`text-xs font-bold text-center ${currentMode.outColor}`}>{currentMode.outText}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const ParametersVisualizer = () => {
  const [isLarge, setIsLarge] = useState(false);
  
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[250px] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-4 z-20 flex gap-2">
        <button onClick={() => setIsLarge(false)} className={`px-3 py-1 text-xs rounded border ${!isLarge ? 'bg-blue-500/20 text-blue-400 border-blue-500/50' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>7B (轻量)</button>
        <button onClick={() => setIsLarge(true)} className={`px-3 py-1 text-xs rounded border ${isLarge ? 'bg-purple-500/20 text-purple-400 border-purple-500/50' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>100B (超大)</button>
      </div>
      
      <div className="relative w-full h-full mt-8 flex items-center justify-center">
        {/* Nodes */}
        {Array.from({ length: isLarge ? 80 : 20 }).map((_, i) => {
          const angle = (i / (isLarge ? 80 : 20)) * Math.PI * 2;
          const radius = isLarge ? 40 + Math.random() * 60 : 30 + Math.random() * 40;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{ 
                x, y, 
                backgroundColor: isLarge ? '#a855f7' : '#3b82f6',
                boxShadow: isLarge ? '0 0 8px #a855f7' : '0 0 4px #3b82f6'
              }}
              transition={{ duration: 1 }}
              className="absolute w-1.5 h-1.5 rounded-full"
            />
          )
        })}
        
        {/* Center */}
        <motion.div 
          animate={{ scale: isLarge ? 1.5 : 1, backgroundColor: isLarge ? '#9333ea' : '#2563eb' }} 
          transition={{ duration: 1 }}
          className="w-8 h-8 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10"
        >
          <Cpu size={16} className="text-white" />
        </motion.div>
      </div>
    </div>
  )
};

export const MultiAgentVisualizer = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[250px] relative flex items-center justify-center">
      <div className="relative w-full max-w-xs h-full">
        <motion.div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500/20 border border-blue-500 rounded-full flex items-center justify-center text-blue-400"><Users size={20} /></div>
          <span className="text-[10px] text-slate-400 mt-1">Planner</span>
        </motion.div>
        
        <motion.div className="absolute bottom-8 left-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center text-emerald-400"><Cpu size={20} /></div>
          <span className="text-[10px] text-slate-400 mt-1">Coder</span>
        </motion.div>

        <motion.div className="absolute bottom-8 right-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-purple-500/20 border border-purple-500 rounded-full flex items-center justify-center text-purple-400"><Eye size={20} /></div>
          <span className="text-[10px] text-slate-400 mt-1">Reviewer</span>
        </motion.div>

        <motion.div animate={{ top: ['20%', '60%'], left: ['50%', '20%'], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" />
        <motion.div animate={{ top: ['60%', '60%'], left: ['20%', '80%'], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="absolute w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" />
        <motion.div animate={{ top: ['60%', '20%'], left: ['80%', '50%'], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} className="absolute w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]" />
      </div>
    </div>
  )
};

export const SkillVisualizer = () => {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[250px] flex items-center justify-center relative overflow-hidden">
      <div className="flex items-center gap-8">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-20 h-20 bg-blue-100 border border-blue-300 rounded-full flex items-center justify-center text-blue-600 shadow-sm z-10">
          <Cpu size={32} />
        </motion.div>
        
        <div className="flex flex-col gap-3">
          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-2 text-sm font-medium text-slate-700">
            <Box size={16} className="text-blue-500" /> 搜索能力包
          </motion.div>
          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-2 text-sm font-medium text-slate-700">
            <Box size={16} className="text-emerald-500" /> 数据库能力包
          </motion.div>
          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-2 text-sm font-medium text-slate-700">
            <Box size={16} className="text-amber-500" /> 计算能力包
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-4 text-xs text-slate-400 font-medium">封装最佳实践的专门能力包</div>
    </div>
  )
};

export const MCPVisualizer = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[250px] flex items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 bg-blue-500/20 border border-blue-500 rounded-xl flex items-center justify-center text-blue-400"><Cpu size={24} /></div>
        <span className="text-[10px] text-slate-400">AI Model</span>
      </div>
      
      <div className="flex flex-col items-center gap-1">
        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-slate-500"><ArrowRight size={16} /></motion.div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-24 bg-slate-800 border-2 border-slate-600 rounded-lg flex flex-col items-center justify-center text-slate-300 relative overflow-hidden">
          <Plug size={24} className="mb-1" />
          <span className="text-[10px] font-bold">MCP</span>
          <motion.div animate={{ top: ['-10%', '110%'] }} transition={{ duration: 2, repeat: Infinity }} className="absolute left-0 right-0 h-1 bg-blue-400/50 blur-sm" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="text-slate-500"><ArrowRight size={16} /></motion.div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded border border-slate-700 text-slate-300 text-xs"><Database size={12} className="text-emerald-400"/> Local DB</div>
        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded border border-slate-700 text-slate-300 text-xs"><GitBranch size={12} className="text-purple-400"/> GitHub</div>
        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded border border-slate-700 text-slate-300 text-xs"><FileText size={12} className="text-amber-400"/> Notion</div>
      </div>
    </div>
  )
};

export const LangChainVisualizer = () => {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[250px] flex items-center justify-center overflow-hidden">
      <div className="flex items-center">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="w-20 h-16 bg-blue-100 border border-blue-300 rounded-lg flex flex-col items-center justify-center text-blue-700 shadow-sm z-10">
          <FileText size={16} className="mb-1" />
          <span className="text-[10px] font-medium">Prompt</span>
        </motion.div>
        
        <div className="w-8 h-2 bg-slate-300 -mx-1 z-0 relative">
          <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 1, repeat: Infinity }} className="absolute left-0 top-0 h-full bg-blue-400" />
        </div>

        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-20 h-16 bg-purple-100 border border-purple-300 rounded-lg flex flex-col items-center justify-center text-purple-700 shadow-sm z-10">
          <Cpu size={16} className="mb-1" />
          <span className="text-[10px] font-medium">LLM</span>
        </motion.div>

        <div className="w-8 h-2 bg-slate-300 -mx-1 z-0 relative">
          <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="absolute left-0 top-0 h-full bg-purple-400" />
        </div>

        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="w-20 h-16 bg-emerald-100 border border-emerald-300 rounded-lg flex flex-col items-center justify-center text-emerald-700 shadow-sm z-10">
          <Box size={16} className="mb-1" />
          <span className="text-[10px] font-medium">Output</span>
        </motion.div>
      </div>
    </div>
  )
};

export const WorkflowVisualizer = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[250px] relative overflow-hidden w-full">
      <svg viewBox="0 0 500 250" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Paths */}
        <path d="M 50 125 C 100 125, 100 62.5, 175 62.5" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 50 125 C 100 125, 100 187.5, 175 187.5" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 175 62.5 C 250 62.5, 250 125, 325 125" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 175 187.5 C 250 187.5, 250 125, 325 125" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 325 125 L 450 125" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Animated Dots */}
        <motion.circle r="4" fill="#3b82f6" animate={{ offsetDistance: ['0%', '100%'] }} style={{ offsetPath: "path('M 50 125 C 100 125, 100 62.5, 175 62.5')" }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
        <motion.circle r="4" fill="#10b981" animate={{ offsetDistance: ['0%', '100%'] }} style={{ offsetPath: "path('M 50 125 C 100 125, 100 187.5, 175 187.5')" }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.75, ease: "linear" }} />
        <motion.circle r="4" fill="#8b5cf6" animate={{ offsetDistance: ['0%', '100%'] }} style={{ offsetPath: "path('M 175 62.5 C 250 62.5, 250 125, 325 125')" }} transition={{ duration: 1.5, repeat: Infinity, delay: 1.5, ease: "linear" }} />
        <motion.circle r="4" fill="#8b5cf6" animate={{ offsetDistance: ['0%', '100%'] }} style={{ offsetPath: "path('M 175 187.5 C 250 187.5, 250 125, 325 125')" }} transition={{ duration: 1.5, repeat: Infinity, delay: 2.25, ease: "linear" }} />
        <motion.circle r="4" fill="#f59e0b" animate={{ offsetDistance: ['0%', '100%'] }} style={{ offsetPath: "path('M 325 125 L 450 125')" }} transition={{ duration: 1, repeat: Infinity, delay: 3, ease: "linear" }} />
      </svg>

      {/* Nodes */}
      <div className="absolute left-[10%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
        <div className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-slate-300 shadow-lg shadow-slate-900/50">
          <Play size={16} className="ml-0.5" />
        </div>
        <span className="text-[10px] text-slate-400 font-medium">Start</span>
      </div>
      
      <div className="absolute left-[35%] top-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
        <div className="px-4 py-2 bg-blue-900/40 border border-blue-500/50 rounded-lg flex items-center gap-2 text-blue-300 shadow-lg shadow-blue-900/20 backdrop-blur-sm">
          <Cpu size={14} />
          <span className="text-xs font-medium">LLM Node</span>
        </div>
      </div>

      <div className="absolute left-[35%] top-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
        <div className="px-4 py-2 bg-emerald-900/40 border border-emerald-500/50 rounded-lg flex items-center gap-2 text-emerald-300 shadow-lg shadow-emerald-900/20 backdrop-blur-sm">
          <Code size={14} />
          <span className="text-xs font-medium">Code Node</span>
        </div>
      </div>

      <div className="absolute left-[65%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
        <div className="w-12 h-12 bg-purple-900/40 border border-purple-500/50 rounded-xl flex items-center justify-center text-purple-300 shadow-lg shadow-purple-900/20 backdrop-blur-sm rotate-45">
          <GitBranch size={16} className="-rotate-45" />
        </div>
        <span className="text-[10px] text-purple-300 font-medium mt-1">分支判断</span>
      </div>

      <div className="absolute left-[90%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
        <div className="px-4 py-2 bg-amber-900/40 border border-amber-500/50 rounded-lg flex items-center gap-2 text-amber-300 shadow-lg shadow-amber-900/20 backdrop-blur-sm">
          <Bell size={14} />
          <span className="text-xs font-medium">通知</span>
        </div>
      </div>
    </div>
  )
};

export const MLVisualizer = () => {
  const [trained, setTrained] = useState(false);
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">机器学习：拟合数据</h4>
        <button onClick={() => setTrained(!trained)} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center gap-1">
          <Play size={14} /> {trained ? '重置模型' : '训练模型'}
        </button>
      </div>
      <div className="relative h-40 bg-white border border-slate-200 rounded-lg overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const x = (i / 20) * 100 + 5;
          const targetY = 100 - x; 
          const randomY = Math.random() * 100;
          return (
            <motion.div
              key={i}
              animate={{ top: trained ? `${targetY}%` : `${randomY}%`, left: `${x}%` }}
              transition={{ duration: 1, type: 'spring' }}
              className="absolute w-2 h-2 bg-blue-500 rounded-full -ml-1 -mt-1"
            />
          )
        })}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: trained ? 1 : 0 }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg className="w-full h-full">
            <motion.line x1="0%" y1="100%" x2="100%" y2="0%" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" 
              animate={{ strokeDashoffset: trained ? [0, -20] : 0 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export const TransformerVisualizer = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const words = ["The", "animal", "didn't", "cross", "the", "street", "because", "it", "was", "too", "tired"];
  
  const getHighlightClass = (index: number) => {
    if (hovered === null) return "bg-slate-100 text-slate-600";
    if (hovered === 7) { 
      if (index === 7) return "bg-blue-500 text-white";
      if (index === 1) return "bg-blue-200 text-blue-800"; 
      if (index === 0) return "bg-blue-100 text-blue-700"; 
    }
    if (hovered === index) return "bg-blue-500 text-white";
    return "bg-slate-100 text-slate-400 opacity-50";
  };

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">自注意力机制 (Self-Attention)</h4>
      <p className="text-xs text-slate-400 mb-4">将鼠标悬停在单词 "it" 上，观察模型如何将其与上下文联系起来。</p>
      <div className="flex flex-wrap gap-2 p-4 bg-white rounded-lg border border-slate-200">
        {words.map((word, i) => (
          <span 
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`px-2 py-1 rounded-md cursor-pointer transition-all duration-300 ${getHighlightClass(i)}`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export const AgentVisualizer = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { icon: MessageSquare, text: "用户: 帮我查一下明天的天气", color: "text-blue-500", bg: "bg-blue-100" },
    { icon: Cpu, text: "思考: 我需要调用天气 API 获取明天的数据", color: "text-purple-500", bg: "bg-purple-100" },
    { icon: Zap, text: "行动: 调用 getWeather(date='tomorrow')", color: "text-amber-500", bg: "bg-amber-100" },
    { icon: Eye, text: "观察: API 返回 {temp: 25, condition: 'Sunny'}", color: "text-emerald-500", bg: "bg-emerald-100" },
    { icon: CheckCircle2, text: "回复: 明天天气晴朗，气温25度。", color: "text-blue-500", bg: "bg-blue-100" }
  ];

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">Agent 自主执行循环</h4>
      <div className="space-y-3">
        {steps.map((s, i) => {
          const active = i === step;
          const past = i < step;
          const Icon = s.icon;
          return (
            <motion.div 
              key={i}
              animate={{ opacity: active || past ? 1 : 0.3, x: active ? 10 : 0 }}
              className={`flex items-center gap-3 p-2 rounded-lg ${active ? 'bg-white shadow-sm border border-slate-200' : ''}`}
            >
              <div className={`p-2 rounded-full ${active || past ? s.bg : 'bg-slate-200'} ${active || past ? s.color : 'text-slate-400'}`}>
                <Icon size={16} />
              </div>
              <span className={`text-sm ${active ? 'font-medium text-slate-800' : 'text-slate-500'}`}>{s.text}</span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
};

export const HallucinationVisualizer = () => {
  const [checked, setChecked] = useState(false);
  const [exampleIndex, setExampleIndex] = useState(0);

  const examples = [
    {
      title: "历史常识错误",
      model: "GPT-4",
      prompt: "中国历史上唯一的女皇帝是谁？她建立了哪个王朝？",
      hallucination: (
        <>
          中国历史上唯一的女皇帝是武则天，她建立了<motion.span animate={{ backgroundColor: checked ? '#fecaca' : 'transparent', color: checked ? '#b91c1c' : 'inherit' }} className="px-1 rounded transition-colors">大宋</motion.span>王朝，定都洛阳。
        </>
      ),
      factCheck: "武则天建立的是“武周”政权，而非“大宋”。大宋是由赵匡胤建立的。"
    },
    {
      title: "文学常识/逻辑错误",
      model: "GPT-3.5",
      prompt: "鲁迅为什么暴打周树人？",
      hallucination: (
        <>
          鲁迅与周树人之间的冲突始于他们在文学观念和文学路线上的分歧...鲁迅认为周树人在文学上的观点和作品未能真正体现对社会现实的关注...尤其是在新文化运动中...1926年，鲁迅在《自序》中明确批评了周树人的《故都的秋》...
        </>
      ),
      factCheck: "鲁迅和周树人其实是同一个人（鲁迅是周树人的笔名）。AI一本正经地编造了两人之间的冲突和文学批评，属于典型的幻觉。"
    }
  ];

  const current = examples[exampleIndex];

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">AI 幻觉演示</h4>
          <div className="flex gap-1">
            {examples.map((_, i) => (
              <button
                key={i}
                onClick={() => { setExampleIndex(i); setChecked(false); }}
                className={`w-2 h-2 rounded-full transition-colors ${exampleIndex === i ? 'bg-blue-600' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
        <button onClick={() => setChecked(!checked)} className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-md hover:bg-red-200 flex items-center gap-1 font-medium">
          <AlertTriangle size={14} /> {checked ? '重置' : '事实核查'}
        </button>
      </div>
      
      <div className="mb-3">
        <span className="text-[10px] font-bold text-slate-400 uppercase">{current.title}</span>
        <div className="bg-blue-50 p-2 rounded border border-blue-100 text-xs text-blue-700 mt-1">
          <strong>提问：</strong>{current.prompt}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm relative">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">AI</div>
          <span className="text-xs text-slate-500 font-medium">{current.model}</span>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed">
          {current.hallucination}
        </p>
        <AnimatePresence>
          {checked && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2 text-red-700 text-xs">
              <XCircle size={16} className="shrink-0 mt-0.5" />
              <p><strong>事实核查：</strong>{current.factCheck}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
};

export const SafetyVisualizer = () => {
  const [prompt, setPrompt] = useState<'safe' | 'unsafe'>('safe');
  const [animKey, setAnimKey] = useState(0);

  const trigger = (type: 'safe' | 'unsafe') => {
    setPrompt(type);
    setAnimKey(k => k + 1);
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[250px] relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-4 flex gap-2 z-20">
        <button onClick={() => trigger('safe')} className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 rounded text-xs hover:bg-emerald-500/30">发送安全请求</button>
        <button onClick={() => trigger('unsafe')} className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/50 rounded text-xs hover:bg-red-500/30">发送违规请求</button>
      </div>

      <div className="flex items-center justify-between w-full max-w-md mt-8 relative">
        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center z-10 border border-slate-700">
          <MessageSquare size={20} className="text-slate-400" />
        </div>

        <motion.div 
          key={animKey}
          initial={{ left: '3rem', opacity: 1 }}
          animate={prompt === 'safe' ? { left: 'calc(100% - 3rem)', opacity: 0 } : { left: '50%', opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`absolute w-4 h-4 rounded-full top-1/2 -translate-y-1/2 ${prompt === 'safe' ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : 'bg-red-400 shadow-[0_0_10px_#f87171]'}`}
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
           <motion.div animate={prompt === 'unsafe' ? { scale: [1, 1.2, 1], color: ['#64748b', '#ef4444', '#64748b'] } : {}} transition={{ duration: 0.5, delay: 0.5 }}>
             <Shield size={40} className="text-slate-500" />
           </motion.div>
        </div>

        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_#2563eb]">
          <Cpu size={20} className="text-white" />
        </div>
      </div>
      
      <div className="mt-8 text-center h-8">
         <AnimatePresence mode="wait">
           <motion.p key={animKey} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.8 }} className={`text-sm ${prompt === 'safe' ? 'text-emerald-400' : 'text-red-400'}`}>
             {prompt === 'safe' ? '✅ 请求通过，AI 正常响应' : '❌ 触发安全护栏，请求被拦截'}
           </motion.p>
         </AnimatePresence>
      </div>
    </div>
  )
};

export const HITLVisualizer = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[250px] flex items-center justify-center relative overflow-hidden">
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
            <Cpu size={24} />
          </div>
          <span className="text-[10px] font-bold text-slate-500">AI 初稿</span>
        </div>
        
        <div className="relative w-16 h-10">
          <motion.div animate={{ x: step >= 1 ? 60 : 0, opacity: step >= 1 ? 1 : 0 }} className="absolute top-1/2 -translate-y-1/2 left-0 text-slate-400">
            <FileText size={20} />
          </motion.div>
        </div>

        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-colors duration-500 ${step === 2 ? 'bg-emerald-100 text-emerald-600 border-2 border-emerald-500' : 'bg-white border-2 border-slate-300 text-slate-400'}`}>
            {step === 2 ? <CheckCircle2 size={32} /> : <UserCheck size={32} />}
          </div>
          <span className="text-[10px] font-bold text-slate-500">人工审核 (HITL)</span>
        </div>
      </div>
      
      <div className="absolute bottom-6 text-sm font-medium text-slate-600">
        {step === 0 && "AI 正在生成内容..."}
        {step === 1 && "等待人类专家审核..."}
        {step === 2 && "✅ 人工确认无误，发布！"}
      </div>
    </div>
  )
};

export const SystemPromptVisualizer = () => {
  return (
    <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-amber-50 border-b border-amber-200 p-4">
        <div className="flex items-center gap-2 mb-2 text-amber-700">
          <Sliders size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">System Prompt (系统设定)</span>
        </div>
        <p className="text-sm text-amber-800 font-mono bg-amber-100/50 p-2 rounded border border-amber-200/50">
          "你是一个脾气暴躁但心地善良的厨师。回答问题时必须带点抱怨，但最后一定要给出专业的烹饪建议。"
        </p>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm max-w-[80%]">
            怎么煎牛排才好吃？
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-sm px-4 py-2 text-sm max-w-[80%] shadow-sm">
            又来问这种基础问题！你们这些人连火候都掌握不好就想吃牛排？真是浪费好肉！<br/><br/>听好了，锅一定要烧得极热，冒烟那种！两面各煎一分半钟，然后一定要静置五分钟锁住肉汁。别再搞砸了！
          </div>
        </div>
      </div>
    </div>
  )
};

export const TemperatureVisualizer = () => {
  const [temp, setTemp] = useState(0.5);
  
  const getOutput = () => {
    if (temp < 0.3) return "天空是蓝色的，因为大气对太阳光的瑞利散射。";
    if (temp < 0.7) return "今天的天空很蓝，万里无云，是个好天气。";
    return "那片蔚蓝的苍穹，宛如一块巨大的蓝宝石，倒映着无尽的梦想与远方。";
  };

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[250px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-amber-600">
          <Thermometer size={20} />
          <span className="text-sm font-bold">温度值 (Temperature)</span>
        </div>
        <span className="text-sm font-mono bg-amber-100 text-amber-800 px-2 py-1 rounded">{temp.toFixed(1)}</span>
      </div>
      
      <input 
        type="range" 
        min="0" max="1" step="0.1" 
        value={temp} 
        onChange={(e) => setTemp(parseFloat(e.target.value))}
        className="w-full accent-amber-500 mb-2"
      />
      <div className="flex justify-between text-xs text-slate-500 mb-4">
        <span>0.0 (严谨/机械)</span>
        <span>1.0 (发散/创意)</span>
      </div>
      
      <div className="flex-1 bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-center">
        <p className="text-slate-700 text-sm italic">"{getOutput()}"</p>
      </div>
    </div>
  )
};

export const TokenVisualizer = () => {
  const [step, setStep] = useState(0);
  const maxContext = 4;
  
  const chatHistory = [
    { role: 'user', text: "你好，我叫小明，喜欢吃苹果。" },
    { role: 'llm', text: "你好小明！记住了，你喜欢苹果。" },
    { role: 'user', text: "我今年25岁，是程序员。" },
    { role: 'llm', text: "程序员很棒！25岁正是奋斗的年纪。" },
    { role: 'user', text: "我周末喜欢去徒步。" },
    { role: 'llm', text: "徒步是很好的户外运动！" },
    { role: 'user', text: "你还记得我喜欢吃什么吗？" },
    { role: 'llm', text: "抱歉，前面的对话超出了窗口，我不记得了。" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => {
        if (s >= chatHistory.length + 1) return 0;
        return s + 1;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[320px] flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center mb-4 z-10">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">上下文窗口 (Context Window)</h4>
        <span className="text-xs font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded">窗口容量: {maxContext} 条</span>
      </div>
      
      <div className="flex-1 relative bg-white border border-slate-200 rounded-lg p-3 overflow-hidden flex flex-col justify-end">
        {/* Context Window Highlight Box */}
        <div className="absolute bottom-2 left-2 right-2 h-[170px] border-2 border-dashed border-blue-400/60 bg-blue-50/40 rounded-xl pointer-events-none z-0 flex items-start justify-center pt-2 transition-all">
           <span className="text-[10px] text-blue-600 font-bold bg-white/90 px-2 py-0.5 rounded-full shadow-sm">当前上下文窗口 (仅保留最近 {maxContext} 条)</span>
        </div>

        <div className="flex flex-col gap-2.5 z-10 w-full pb-1">
          <AnimatePresence initial={false}>
            {chatHistory.slice(0, step).map((msg, i) => {
              const isForgotten = i < step - maxContext;
              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ 
                    opacity: isForgotten ? 0.4 : 1, 
                    y: 0, 
                    scale: 1,
                    filter: isForgotten ? 'blur(1px)' : 'blur(0px)'
                  }}
                  className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
                >
                  <div className={`px-3 py-2 rounded-2xl text-xs shadow-sm relative ${
                    msg.role === 'user' 
                      ? 'bg-blue-500 text-white rounded-tr-sm' 
                      : 'bg-slate-100 text-slate-700 border border-slate-200 rounded-tl-sm'
                  }`}>
                    {msg.text}
                    {isForgotten && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/30 rounded-2xl backdrop-blur-[1px]">
                        <span className="text-[10px] font-bold text-red-500 bg-white/90 px-1.5 py-0.5 rounded border border-red-200 rotate-[-10deg] shadow-sm">已遗忘</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const NetworkVisualizer = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[250px] relative overflow-hidden flex items-center justify-center">
      <div className="flex gap-8 items-center z-10">
        {[3, 5, 5, 2].map((nodes, layerIdx) => (
          <div key={layerIdx} className="flex flex-col gap-3">
            {[...Array(nodes)].map((_, nodeIdx) => (
              <motion.div
                key={nodeIdx}
                animate={{
                  boxShadow: ['0 0 0px #3b82f6', '0 0 15px #3b82f6', '0 0 0px #3b82f6'],
                  backgroundColor: ['#1e293b', '#3b82f6', '#1e293b']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: layerIdx * 0.4 + Math.random() * 0.5
                }}
                className="w-4 h-4 rounded-full border border-slate-600"
              />
            ))}
          </div>
        ))}
      </div>
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export const RAGVisualizer = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s >= 6 ? 0 : s + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[400px] flex flex-col relative overflow-hidden">
      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 z-10">检索增强生成 (RAG)</h4>

      <div className="flex-1 relative w-full mt-4">
        {/* Combined Prompt Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 3 ? 1 : 0 }}
          className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[35%] h-[75%] bg-purple-50 border-2 border-dashed border-purple-300 rounded-xl p-3 z-10 flex flex-col"
        >
          <div className="text-xs font-bold text-purple-600 text-center mb-2">
            4. 组装 Prompt (增强上下文)
          </div>
        </motion.div>

        {/* User Question */}
        <motion.div
          initial={false}
          animate={{
            top: step >= 3 ? '25%' : '20%',
            left: step >= 3 ? '50%' : '15%',
            x: '-50%',
            y: '-50%',
            scale: step >= 3 ? 0.9 : 1.1,
            opacity: step >= 0 ? 1 : 0
          }}
          transition={{ duration: 0.8, type: "spring" }}
          className="absolute bg-blue-100 text-blue-700 px-4 py-3 rounded-xl text-sm border border-blue-200 shadow-md z-20 w-[28%] text-center"
        >
          <div className="font-bold mb-2 flex items-center justify-center gap-1"><MessageSquare size={14}/> 1. 用户提问</div>
          "公司年假有几天？"
        </motion.div>

        {/* DB */}
        <motion.div
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          className="absolute top-[75%] left-[15%] -translate-x-1/2 -translate-y-1/2 bg-amber-50 border border-amber-200 p-3 rounded-xl flex flex-col items-center z-10 shadow-md w-[20%]"
        >
          <Database size={28} className="text-amber-500 mb-2" />
          <span className="text-xs text-amber-700 font-bold text-center">2. 知识库</span>
        </motion.div>

        {/* Retrieved Doc */}
        <motion.div
          initial={false}
          animate={{
            top: step >= 3 ? '65%' : '75%',
            left: step >= 3 ? '50%' : '15%',
            x: '-50%',
            y: '-50%',
            scale: step >= 3 ? 0.9 : 1.1,
            opacity: step >= 2 ? 1 : 0
          }}
          transition={{ duration: 0.8, type: "spring" }}
          className="absolute bg-amber-100 text-amber-800 px-4 py-3 rounded-xl border border-amber-300 text-sm shadow-lg z-20 w-[28%] text-center"
        >
          <div className="font-bold flex items-center justify-center gap-1 mb-2"><FileText size={14}/> 3. 检索结果</div>
          "员工手册：年假15天"
        </motion.div>

        {/* Arrow Right to LLM */}
        <motion.div
          animate={{ opacity: step >= 4 ? 1 : 0, width: step >= 4 ? '12%' : '0%' }}
          transition={{ duration: 0.5 }}
          className="absolute top-[25%] left-[68%] h-[2px] bg-slate-400 z-10 origin-left flex items-center justify-end"
        >
          <ArrowRight size={16} className="text-slate-400 absolute -right-3" />
        </motion.div>

        {/* LLM */}
        <motion.div
          animate={{ opacity: step >= 4 ? 1 : 0, scale: step === 4 ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-[25%] left-[85%] -translate-x-1/2 -translate-y-1/2 bg-slate-800 text-white px-5 py-4 rounded-2xl flex flex-col items-center gap-2 shadow-xl z-30 w-[22%]"
        >
          <Cpu size={28} className="text-purple-400" />
          <div className="text-sm font-bold tracking-wider">5. 大模型</div>
        </motion.div>

        {/* Arrow Down to Output */}
        <motion.div
          animate={{ opacity: step >= 5 ? 1 : 0, height: step >= 5 ? '25%' : '0%' }}
          transition={{ duration: 0.5 }}
          className="absolute top-[35%] left-[85%] w-[2px] bg-slate-400 z-10 origin-top flex items-end justify-center"
        >
          <ArrowDownToLine size={16} className="text-slate-400 absolute -bottom-3" />
        </motion.div>

        {/* Final Output */}
        <motion.div
          animate={{ opacity: step >= 5 ? 1 : 0, y: step >= 5 ? '-50%' : '-30%' }}
          className="absolute top-[75%] left-[85%] -translate-x-1/2 bg-emerald-100 text-emerald-800 px-4 py-3 rounded-xl text-sm border border-emerald-300 shadow-lg z-30 w-[28%] text-center font-medium"
        >
          <div className="font-bold flex items-center justify-center gap-1 mb-2"><CheckCircle2 size={14}/> 6. 最终回复</div>
          "根据员工手册，公司年假有15天。"
        </motion.div>
      </div>

      {/* Status Text */}
      <div className="mt-4 text-center text-sm text-slate-500 h-6 font-medium bg-white py-1 rounded-md border border-slate-100 shadow-sm">
        {step === 0 && "1. 用户提出问题"}
        {step === 1 && "2. 在私有知识库中进行向量检索"}
        {step === 2 && "3. 提取出最相关的背景知识片段"}
        {step === 3 && "4. 将背景知识与原问题拼接成新的 Prompt"}
        {step === 4 && "5. 大模型阅读拼接后的 Prompt 进行思考"}
        {step >= 5 && "6. 大模型基于提供的知识生成准确、无幻觉的回答"}
      </div>
    </div>
  );
};

export const KnowledgeBaseVisualizer = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[250px] flex items-center justify-center relative overflow-hidden">
      <div className="flex items-center gap-8">
        <div className="relative">
          <div className="w-16 h-20 bg-slate-800 border-2 border-slate-600 rounded-lg flex flex-col items-center justify-center text-slate-400 z-10 relative">
            <Book size={24} className="mb-2" />
            <span className="text-[10px]">企业文档</span>
          </div>
          <motion.div animate={{ x: [0, 60], y: [0, -20], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-4 left-4 text-blue-400 z-20">
            <FileText size={16} />
          </motion.div>
          <motion.div animate={{ x: [0, 60], y: [0, 20], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute top-4 left-4 text-emerald-400 z-20">
            <FileText size={16} />
          </motion.div>
        </div>
        
        <div className="w-16 h-16 bg-blue-900/50 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-400 shadow-[0_0_15px_#3b82f6]">
          <Database size={24} />
        </div>
      </div>
    </div>
  )
};

export const FinetuningVisualizer = () => {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[250px] flex items-center justify-center relative overflow-hidden">
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 mb-2">
            <Cpu size={32} />
          </div>
          <span className="text-xs text-slate-500 font-medium">通用大模型</span>
        </div>
        
        <div className="relative w-20 h-10">
          <motion.div animate={{ x: [0, 80] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 -translate-y-1/2 left-0 text-amber-500">
            <Book size={20} />
          </motion.div>
          <div className="absolute -bottom-4 left-0 right-0 text-center text-[10px] text-amber-600 font-medium">行业数据</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16 bg-blue-100 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-600 mb-2 shadow-md">
            <Cpu size={32} />
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} className="absolute -top-4 -right-2 text-amber-500">
              <GraduationCap size={24} />
            </motion.div>
          </div>
          <span className="text-xs text-blue-700 font-bold">专属行业专家</span>
        </div>
      </div>
    </div>
  )
};

export const DistillationVisualizer = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[250px] flex items-center justify-center relative overflow-hidden">
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center">
          <motion.div animate={{ boxShadow: ['0 0 10px #3b82f6', '0 0 30px #3b82f6', '0 0 10px #3b82f6'] }} transition={{ duration: 2, repeat: Infinity }} className="w-24 h-24 bg-blue-900/50 border-2 border-blue-500 rounded-2xl flex items-center justify-center text-blue-400">
            <Cpu size={48} />
          </motion.div>
          <span className="text-xs text-blue-400 mt-2">教师模型 (庞大)</span>
        </div>
        
        <div className="relative w-16 h-2">
          <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute top-0 left-0 h-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-emerald-400">
            <ArrowDownToLine size={16} />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <motion.div animate={{ backgroundColor: ['#064e3b', '#059669', '#064e3b'] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="w-12 h-12 border-2 border-emerald-500 rounded-xl flex items-center justify-center text-white">
            <Cpu size={24} />
          </motion.div>
          <span className="text-xs text-emerald-400 mt-2">学生模型 (轻量)</span>
        </div>
      </div>
    </div>
  )
};

export const PromptVisualizer = () => {
  const [isDetailed, setIsDetailed] = useState(false);
  
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[250px] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-bold text-slate-700">提示词工程</span>
        <button onClick={() => setIsDetailed(!isDetailed)} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
          切换提示词质量
        </button>
      </div>
      
      <div className="flex flex-col gap-3 flex-1">
        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-sm text-blue-800">
          <strong>Prompt:</strong> {isDetailed ? "写一首关于春天的诗，要求包含'樱花'和'微风'，风格像李白，四句。" : "写一首关于春天的诗。"}
        </div>
        
        <div className="bg-white border border-slate-200 p-3 rounded-lg text-sm text-slate-700 flex-1 shadow-sm">
          <strong>AI:</strong><br/>
          {isDetailed ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="detailed">
              春风拂柳醉长安，<br/>樱花飞舞落满天。<br/>举杯邀月同对饮，<br/>莫负春光好华年。
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="simple">
              春天来了，小草绿了。<br/>花儿开了，鸟儿叫了。<br/>天气暖和了，大家都很开心。
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
};

export const CoTVisualizer = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-[250px] flex flex-col">
      <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-sm text-blue-800 mb-4">
        <strong>问题:</strong> 小明有5个苹果，吃了2个，又买了3个，现在有几个？
      </div>
      
      <div className="flex-1 space-y-2">
        <motion.div animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : -10 }} className="bg-white border border-slate-200 p-2 rounded text-sm text-slate-600 shadow-sm flex items-center gap-2">
          <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold">1</div>
          原来有 5 个苹果
        </motion.div>
        <motion.div animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : -10 }} className="bg-white border border-slate-200 p-2 rounded text-sm text-slate-600 shadow-sm flex items-center gap-2">
          <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold">2</div>
          吃了 2 个: 5 - 2 = 3
        </motion.div>
        <motion.div animate={{ opacity: step >= 3 ? 1 : 0, x: step >= 3 ? 0 : -10 }} className="bg-emerald-50 border border-emerald-200 p-2 rounded text-sm text-emerald-700 shadow-sm flex items-center gap-2 font-medium">
          <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-bold">3</div>
          又买 3 个: 3 + 3 = 6。答案是 6。
        </motion.div>
      </div>
    </div>
  )
};

export const TermVisualizer = ({ type, name }: { type?: string, name: string }) => {
  switch (type) {
    case 'ai': return <AIVisualizer />;
    case 'ml': return <MLVisualizer />;
    case 'network': return <NetworkVisualizer />;
    case 'gpu': return <GPUVisualizer />;
    case 'llm': return <LLMVisualizer />;
    case 'transformer': return <TransformerVisualizer />;
    case 'cv': return <CVVisualizer />;
    case 'multimodal': return <MultimodalVisualizer />;
    case 'parameters': return <ParametersVisualizer />;
    case 'token': return <TokenVisualizer />;
    case 'chat': return <PromptVisualizer />;
    case 'cot': return <CoTVisualizer />;
    case 'system-prompt': return <SystemPromptVisualizer />;
    case 'temperature': return <TemperatureVisualizer />;
    case 'agent': return <AgentVisualizer />;
    case 'multi-agent': return <MultiAgentVisualizer />;
    case 'skill': return <SkillVisualizer />;
    case 'mcp': return <MCPVisualizer />;
    case 'rag': return <RAGVisualizer />;
    case 'knowledge-base': return <KnowledgeBaseVisualizer />;
    case 'finetuning': return <FinetuningVisualizer />;
    case 'distillation': return <DistillationVisualizer />;
    case 'langchain': return <LangChainVisualizer />;
    case 'workflow': return <WorkflowVisualizer />;
    case 'hallucination': return <HallucinationVisualizer />;
    case 'safety': return <SafetyVisualizer />;
    case 'hitl': return <HITLVisualizer />;
    default: return <AIVisualizer />;
  }
};
