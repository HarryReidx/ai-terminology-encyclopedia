import { BookOpen, Sparkles, Cpu, ShieldAlert, GitBranch, Zap } from 'lucide-react';

export const database = [
  {
    category: "今天就要掌握",
    icon: Zap,
    terms: [
      {
        name: "大语言模型 (LLM)",
        short: "可以先把它理解成强大的语言黑盒。给输入，它给输出，但它本身并不直接完成业务闭环。",
        deep: "大语言模型（Large Language Model）是具有庞大参数量的深度学习模型，专门用于理解和生成人类语言。它们通过阅读互联网上的海量文本，学会了语言的统计规律。",
        example: "ChatGPT (OpenAI)、Gemini (Google)、文心一言 (Baidu)。",
        visualType: "llm"
      },
      {
        name: "提示词 (Prompt)",
        short: "你对 AI 说的每一句话，以及如何把话说明白。",
        deep: "提示词是用户输入给AI模型的文本指令。提示工程（Prompt Engineering）则是研究如何通过调整提问的结构、提供上下文、设定角色等方式，引导大语言模型生成更准确的输出。",
        example: "使用“角色扮演+背景信息+明确任务+输出格式”的模板来向AI提问。",
        visualType: "chat"
      },
      {
        name: "幻觉 (Hallucination)",
        short: "AI一本正经地胡说八道。",
        deep: "AI幻觉是指模型生成了看似合理、连贯，但实际上不符合事实、毫无根据或与输入无关的内容。这是因为模型本质上是在做概率预测，而非真正理解事实。",
        example: "问AI某位虚构人物的生平，AI可能会煞有介事地编造出他出生的年份和毕业的大学。",
        visualType: "hallucination"
      },
      {
        name: "多模态 (Multimodal)",
        short: "让 AI 拥有眼耳口鼻，能同时处理图文音视。",
        deep: "传统 AI 只能处理纯文本。多模态 AI 能够同时理解和生成文字、图像、音频和视频等多种信息形式。这使得 AI 的感知能力更接近人类，能处理更复杂的现实场景。",
        example: "上传一张财务报表截图，让 AI 直接提取数据并生成分析报告；或者用语音直接向 AI 下达复杂的绘图指令。",
        visualType: "multimodal"
      },
      {
        name: "Token & 上下文窗口",
        short: "Token 是衡量模型消耗资源的单位，可以简单理解成一种计算和使用成本的计量单位。",
        deep: "上下文窗口就像是 AI 的短期记忆容量。当输入的信息超过这个窗口大小时，最早输入的信息就会被“挤出”记忆，导致大模型出现“失忆”现象。",
        example: "128K 上下文窗口的模型可以一次性读完一本几十万字的小说，但超出部分会被遗忘。",
        visualType: "token"
      },
      {
        name: "MCP (模型上下文协议)",
        short: "AI 与各种数据源连接的“通用 USB 接口”。",
        deep: "Model Context Protocol (MCP) 是一种标准化协议，旨在让 AI 模型能够安全、统一地访问外部数据源（如本地文件、企业数据库、SaaS应用），而无需为每个应用编写定制的集成代码。",
        example: "通过 MCP，你的 AI 助手可以无缝读取你的 Notion 笔记和 GitHub 代码库来回答问题。",
        visualType: "mcp"
      },
      {
        name: "技能 (Skill / Tool)",
        short: "把某类任务的最佳实践封装成稳定可复用的能力模块，像给 AI 装上专门能力包。",
        deep: "技能或工具是指 AI 可以调用的外部功能接口（API）。通过赋予 AI 技能，它可以突破自身知识库的限制，执行如联网搜索、发送邮件、操作数据库等真实动作，从而完成特定的业务流程。",
        example: "给 AI 装备“天气查询”技能，它就能告诉你明天的天气。",
        visualType: "skill"
      },
      {
        name: "RAG (检索增强生成)",
        short: "给 AI 配个私有知识库，防止它瞎编。",
        deep: "RAG（Retrieval-Augmented Generation）结合了信息检索和文本生成。当用户提问时，系统先在外部知识库中检索相关信息，然后将这些信息连同问题一起交给AI，让AI基于检索到的事实进行回答。",
        example: "企业内部的智能客服，能够根据最新的公司规章制度准确回答员工提问。",
        visualType: "rag"
      },
      {
        name: "工作流 (Workflow)",
        short: "将 AI 任务变成可视化的流水线。",
        deep: "AI Workflow 允许开发者通过节点和连线（通常是可视化的）来编排复杂的 AI 任务。每个节点代表一个具体的操作（如调用大模型、执行代码、判断条件），数据在节点之间流转。",
        example: "在 Dify 或 Coze 中拖拽节点，搭建一个“自动总结新闻并发布到推特”的工作流。",
        visualType: "workflow"
      },
      {
        name: "智能体 (Agent)",
        short: "能自己拆解任务、查资料、调工具并完成任务的 AI 助手。",
        deep: "AI Agent不仅仅是对话模型，它具备感知环境、自主决策和执行动作的能力。给定一个复杂目标，Agent可以自行规划步骤，调用外部工具（如搜索、计算器），直到完成任务。",
        example: "你告诉它“帮我策划一场去巴黎的旅行并预订机票”，它会自动完成所有搜索和预订步骤。",
        visualType: "agent"
      },
      {
        name: "多智能体 (Multi-Agent)",
        short: "多个 AI 专家组成团队，协同工作。",
        deep: "多智能体系统由多个具有不同角色和专长的 Agent 组成。它们可以相互交流、辩论、分工合作，从而解决单个 Agent 难以处理的复杂问题。",
        example: "一个写代码的 Agent、一个测试代码的 Agent 和一个审查代码的 Agent 共同开发一个软件。",
        visualType: "multi-agent"
      }
    ]
  },
  {
    category: "基础与算力",
    icon: BookOpen,
    terms: [
      {
        name: "人工智能 (AI)",
        short: "机器模仿人类智能的技术总称。",
        deep: "人工智能（Artificial Intelligence）致力于创造能够执行通常需要人类智能才能完成的任务的系统。这包括视觉感知、语音识别、决策制定和语言翻译等。",
        example: "智能语音助手（如Siri）、自动驾驶汽车、推荐系统。",
        visualType: "ai"
      },
      {
        name: "机器学习 (ML)",
        short: "让机器从数据中找规律，而不是死记硬背指令。",
        deep: "机器学习（Machine Learning）是AI的一个子集。开发者不编写明确的解决问题的代码，而是提供大量数据和算法，让机器自己学习数据中的模式和规律，从而对新数据做出预测。",
        example: "垃圾邮件过滤、房价预测、信用评分。",
        visualType: "ml"
      },
      {
        name: "深度学习 (DL)",
        short: "模仿人脑神经元结构的复杂算法，是现代 AI 的核心。",
        deep: "深度学习（Deep Learning）是机器学习的一个分支，使用多层（深层）人工神经网络。它在处理图像、声音和非结构化文本等复杂数据方面表现出色，是当前大模型爆发的基础。",
        example: "人脸识别、医学影像分析、AlphaGo下围棋。",
        visualType: "network"
      },
      {
        name: "GPU (图形处理器)",
        short: "AI 的“超级印钞机”，擅长同时处理海量简单计算。",
        deep: "GPU最初用于渲染游戏图像，但人们发现它拥有成千上万个核心，非常适合并行处理神经网络中海量的矩阵乘法运算。它是目前训练和运行大模型不可或缺的硬件基础。",
        example: "NVIDIA 的 H100 芯片就是目前最顶级的 AI GPU 之一。",
        visualType: "gpu"
      }
    ]
  },
  {
    category: "模型与架构",
    icon: Cpu,
    terms: [
      {
        name: "Transformer",
        short: "现代 AI 的引擎架构，让 AI 学会了“联系上下文”。",
        deep: "Transformer是Google在2017年提出的一种神经网络架构。它的核心是“自注意力机制（Self-Attention）”，能够同时处理句子中的所有词，并理解词与词之间的远距离依赖关系。",
        example: "GPT（Generative Pre-trained Transformer）中的“T”就代表Transformer架构。",
        visualType: "transformer"
      },
      {
        name: "CV模型 (计算机视觉)",
        short: "赋予 AI “看”世界的能力。",
        deep: "计算机视觉（Computer Vision）模型专门用于处理和理解图像或视频数据。它们可以识别图像中的物体、人脸、场景，甚至理解动作和情感。",
        example: "自动驾驶汽车识别红绿灯和行人、手机的面容解锁。",
        visualType: "cv"
      },
      {
        name: "参数量 (Parameters)",
        short: "衡量 AI “大脑”复杂度的指标，参数越多通常越聪明。",
        deep: "参数是神经网络中连接节点的权重。你可以把它想象成 AI 大脑中的“神经突触”。参数量越大，模型能够记忆的知识和处理复杂逻辑的能力就越强，但运行成本也越高。",
        example: "GPT-3 有 1750 亿参数，而一些可在手机上运行的轻量级模型可能只有 70 亿参数。",
        visualType: "parameters"
      }
    ]
  },
  {
    category: "提示词工程",
    icon: Sparkles,
    terms: [
      {
        name: "思维链 (Chain of Thought)",
        short: "引导 AI“一步步思考”，提高逻辑推理准确度。",
        deep: "思维链（CoT）是一种提示技术，要求模型在给出最终答案前，先输出中间的推理步骤。这能显著提升模型在数学、逻辑和复杂问题上的表现。",
        example: "在提示词末尾加上：“请一步一步地思考并写出推理过程。”",
        visualType: "cot"
      },
      {
        name: "系统设定 (System Prompt)",
        short: "设定 AI 的“出厂人设”和行为准则。",
        deep: "系统提示词是位于对话最开始的全局指令，用于设定AI的身份、语气、背景知识边界以及不能违反的规则。它在整个对话过程中持续发挥作用。",
        example: "“你是一个严谨的医学专家，只能回答医学相关问题，不知道的请直接说不知道。”",
        visualType: "system-prompt"
      },
      {
        name: "温度值 (Temperature)",
        short: "控制 AI 发言的“脑洞”大小：越低越严谨，越高越有创意。",
        deep: "温度值是一个介于 0 到 1（或更高）的参数，用于控制 AI 输出的随机性。数值越低，AI 越倾向于选择概率最高的词，输出更稳定、机械；数值越高，AI 越敢于尝试低概率词，输出更具创造性和多样性。",
        example: "写代码或法律合同，温度设为 0（严谨）；写营销文案或头脑风暴，温度设为 0.8（发散）。",
        visualType: "temperature"
      }
    ]
  },
  {
    category: "开发与工作流",
    icon: GitBranch,
    terms: [
      {
        name: "知识库 (Knowledge Base)",
        short: "企业的数字大脑图书馆，AI 的外挂记忆。",
        deep: "知识库是企业私有的文档、数据和经验集合。配合 RAG（检索增强生成）技术，AI 可以在回答问题前先查阅知识库，从而给出基于公司内部真实信息的准确回答，避免胡编乱造。",
        example: "将公司的《员工手册》存入知识库，新员工问 AI “年假怎么休”时，AI 能直接引用手册条款回答。",
        visualType: "knowledge-base"
      },
      {
        name: "微调 (Fine-tuning)",
        short: "给通用 AI 开小灶，把它培养成懂公司业务的专属专家。",
        deep: "通用大模型虽然知识渊博，但不懂你们公司的黑话和特定业务。微调就是用特定行业或公司内部的高质量数据，对大模型进行“二次训练”，让它的回答更符合特定场景的需求。",
        example: "用公司过去 5 年的优秀客服对话记录来微调模型，打造一个语气和话术都完美契合公司标准的客服机器人。",
        visualType: "finetuning"
      },
      {
        name: "模型蒸馏 (Distillation)",
        short: "大模型把毕生功力传授给小模型，既聪明又省钱。",
        deep: "知识蒸馏是一种模型压缩技术。通过让一个庞大、昂贵的“教师模型”指导一个轻量级的“学生模型”学习，使得小模型在保留大部分能力的同时，运行速度更快、成本更低。",
        example: "用强大的 GPT-4 作为老师，训练出一个能在公司内网普通服务器上流畅运行的专属小模型。",
        visualType: "distillation"
      },
      {
        name: "LangChain",
        short: "开发 AI 应用的“瑞士军刀”框架。",
        deep: "LangChain 是一个开源框架，专门用于简化由大语言模型驱动的应用程序的开发。它提供了将 LLM 与其他组件（如提示词模板、记忆、外部工具、数据库）“链接”在一起的标准接口。",
        example: "使用 LangChain 快速搭建一个可以读取 PDF 并回答问题的聊天机器人。",
        visualType: "langchain"
      }
    ]
  },
  {
    category: "安全与伦理",
    icon: ShieldAlert,
    terms: [
      {
        name: "对齐与安全 (Alignment & Safety)",
        short: "确保 AI 的三观和人类一致，不教坏小朋友。",
        deep: "AI对齐研究旨在确保人工智能系统的目标、行为和输出与人类的价值观、意图和伦理道德相一致。安全性则涉及防止模型被恶意利用或输出有害内容。",
        example: "通过RLHF（基于人类反馈的强化学习）技术，让AI学会拒绝回答如何制造危险物品的问题。",
        visualType: "safety"
      },
      {
        name: "人机协作 (Human-in-the-Loop)",
        short: "AI 负责干脏活累活，人类负责最后把关。",
        deep: "在 AI 工作流程中加入人工审核或干预环节（HITL）。AI 负责快速生成初稿或提供建议，人类专家负责审查、修改和最终决策。这能最大程度结合 AI 的效率和人类的判断力，确保结果准确安全。",
        example: "AI 自动审核海量报销单并标记可疑项，财务人员只需人工复核被 AI 标记的那几张单据。",
        visualType: "hitl"
      }
    ]
  }
];
