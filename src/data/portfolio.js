export const portfolioData = {
  person: {
    name: 'Ankit Pratihast',
    title: 'Senior Python Developer & GenAI Engineer',
    location: 'Delhi, Mumbai, India',
    phone: '+91 9768445358',
    email: 'ankitpratihast11@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ankitpratihast/',
    resume: '/Ankit_Pratihast_Senior_Python_GenAI_Engineer.pdf',
    summary:
      'Senior Python developer and AI/ML engineer focused on generative AI systems, scalable backend services, and production-grade automation for enterprise teams.',
  },
  intro: [
    'I design AI products that move from concept to production without collapsing under real-world constraints.',
    'My work spans LLM pipelines, agent orchestration, forecasting systems, recommendation engines, and web applications that turn research-heavy workflows into fast operational tools.',
  ],
  creator: {
    title: 'Part-time content creator. Full-time developer.',
    summary:
      'Beyond software delivery, I publish travel and offbeat storytelling content under Offbeat with Ankit, bringing the same consistency and curiosity I use in engineering work.',
    youtube: 'https://www.youtube.com/@offbeatwithAnkit',
    instagram: 'https://www.instagram.com/offbeatwithankit/',
    instagramMeta: 'Travel, mountains, and creator experiments outside engineering hours.',
    channels: [
      {
        name: 'YouTube',
        handle: '@offbeatwithAnkit',
        description: 'Long-form creator presence with an offbeat travel and personality-led angle.',
        image: '/youtube-profile.jpg',
      },
      {
        name: 'Instagram',
        handle: '@offbeatwithankit',
        description: 'Short-form travel, mountain, and on-the-road storytelling snapshots.',
        image: '/instagram-profile.jpg',
      },
    ],
  },
  illustrations: [
    { src: '/drawings/sketch1571506072004.png', alt: 'Digital illustration by Ankit 1' },
    { src: '/drawings/sketch1573288370984.png', alt: 'Digital illustration by Ankit 2' },
    { src: '/drawings/sketch1573378812102.png', alt: 'Digital illustration by Ankit 3' },
    { src: '/drawings/sketch1573647533229.png', alt: 'Digital illustration by Ankit 4' },
    { src: '/drawings/sketch1573670392704(1).png', alt: 'Digital illustration by Ankit 5' },
    { src: '/drawings/sketch1573670392704.png', alt: 'Digital illustration by Ankit 6' },
    { src: '/drawings/sketch1574102724244.png', alt: 'Digital illustration by Ankit 7' },
    { src: '/drawings/sketch1574268082707.png', alt: 'Digital illustration by Ankit 8' },
    { src: '/drawings/sketch1574789576238.png', alt: 'Digital illustration by Ankit 9' },
    { src: '/drawings/sketch1575040969434.png', alt: 'Digital illustration by Ankit 10' },
    { src: '/drawings/sketch1615561423941.png', alt: 'Digital illustration by Ankit 11' },
  ],
  treks: [
    {
      name: 'Sar Pass',
      note: 'A demanding Himalayan push with long trail days, changing weather, and real payoff at altitude.',
    },
    {
      name: 'Kedarkantha',
      note: 'Classic winter summit energy, snow trails, and the kind of climb that resets your head.',
    },
    {
      name: 'Brahmatal',
      note: 'Cold air, snow sections, and the wide-open mountain views that make the effort worth it.',
    },
    {
      name: 'Dayara Bugyal',
      note: 'High meadows, clean ridgelines, and one of the most visually rewarding trails in the mix.',
    },
    {
      name: 'Triund',
      note: 'Shorter than the others, but still a favourite for quick mountain perspective and clean air.',
    },
    {
      name: 'Yulla Kanda',
      note: 'Remote, beautiful, and memorable for the lake, temple route, and the sense of distance from everything else.',
    },
  ],
  stats: [
    {
      value: 5,
      suffix: '+',
      label: 'Years building AI and data products',
    },
    {
      value: 9,
      suffix: '+',
      label: 'Highlighted solutions across GenAI, analytics, and automation',
    },
    {
      value: 3,
      prefix: '$',
      suffix: 'M',
      label: 'Average annual savings delivered through automation for client',
    },
    {
      value: 1,
      suffix: 'st',
      label: 'Place in GenAI industry innovation award',
    },
  ],
  focusAreas: [
    {
      id: 'genai',
      label: 'GenAI Systems',
      headline: 'Agentic workflows, retrieval pipelines, and offline model deployment.',
      description:
        'Built resume screening, commodity intelligence, P&ID validation, and military-grade image generation solutions using LLMs, Langflow, and tailored orchestration.',
      skills: [
        'GPT',
        'Llama',
        'Stable Diffusion',
        'LangChain',
        'Langflow',
        'Ollama',
        'RAG',
        'Vector Databases',
        'Prompt Engineering',
      ],
    },
    {
      id: 'backend',
      label: 'Backend & Data',
      headline: 'Python-first APIs and pipelines that can support enterprise usage.',
      description:
        'Comfortable across Python, SQL, FastAPI, Spark, and structured data engineering workflows where reliability matters as much as model quality.',
      skills: [
        'Python',
        'FastAPI',
        'SQL',
        'Spark',
        'Scikit-Learn',
        'Data Pipelines',
        'Testing',
        'Analytics Engineering',
      ],
    },
    {
      id: 'cloud',
      label: 'Cloud & Ops',
      headline: 'Deployment-minded engineering with MLOps and AIOps discipline.',
      description:
        'Worked across AWS and Azure, including Databricks, Function Apps, Web Apps, and AI Foundry, with an emphasis on sustainable delivery and maintainability.',
      skills: [
        'AWS',
        'Azure',
        'Databricks',
        'Function Apps',
        'Web Apps',
        'AI Foundry',
        'MLOps',
        'AIOps',
      ],
    },
    {
      id: 'product',
      label: 'Product Delivery',
      headline: 'Cross-functional execution from experimentation to business outcome.',
      description:
        'Led teams, shipped client-facing platforms, and turned labor-intensive processes into measurable business wins through automation and intelligent tooling.',
      skills: [
        'Technical Leadership',
        'Client Delivery',
        'Automation Strategy',
        'Recommendation Systems',
        'Frontend Collaboration',
        'Solution Architecture',
      ],
    },
  ],
  experience: [
    {
      id: 'emergys',
      company: 'Emergys Solutions Pvt. Ltd.',
      role: 'Senior Consultant (Data Science)',
      period: 'Aug 2021 - Present',
      location: 'Pune, India',
      summary:
        'Owned and led delivery for GenAI, ML, and automation programs spanning resume screening, commodity intelligence, engineering diagram review, defense AI, and predictive cost systems.',
      bullets: [
        'Architected a GPT-based resume parser that extracts skills and ranks candidates against job descriptions.',
        'Built a commodity intelligence agent in Langflow that compresses multi-day research into minutes.',
        'Developed an agentic P&ID drawing reviewer that flags inconsistencies between requirements and vendor diagrams.',
        'Led the SDIR program in an air-gapped environment for military-oriented image generation and object detection enablement.',
        'Created construction cost prediction workflows for hierarchical WBS planning and estimation.',
        'Delivered marketing mix modeling modules to optimize discount and promotional profit scenarios.',
        'Contributed to the Intelligent Platform Assistant ecosystem, saving roughly $3M year over year through automation.',
      ],
      tags: ['GenAI', 'Langflow', 'ML', 'Automation', 'Team Leadership'],
      impact: 'Enterprise delivery across AI research, productization, and cost-saving automation.',
    },
    {
      id: 'learners-camp',
      company: 'The learners camp.',
      role: 'Data Analyst',
      period: 'Mar 2021 - Aug 2021',
      location: 'Pune, India',
      summary:
        'Built data-driven web experiences and recommendation systems for learners trying to align courses with target jobs.',
      bullets: [
        'Developed a website using React, HTML, and CSS for career-focused learning journeys.',
        'Implemented TF-IDF recommendation flows for courses and job suggestions within the product.',
        'Built Selenium-based scraping pipelines for gathering training and open dataset content.',
        'Led development of analytics pipelines behind the platform experience.',
      ],
      tags: ['React', 'TF-IDF', 'Selenium', 'Web Apps'],
      impact: 'Connected recommendation logic with a practical frontend experience.',
    },
    {
      id: 'thirdeye',
      company: 'ThirdEye Inc.',
      role: 'Data Analyst',
      period: 'Mar 2020 - Feb 2021',
      location: 'Mumbai, India',
      summary:
        'Focused on data extraction, reporting, and insight generation across education and market datasets.',
      bullets: [
        'Analyzed datasets using Python, SQL, and Excel to surface business insights.',
        'Improved extraction and reporting pipelines for faster and cleaner analysis.',
        'Generated business intelligence outputs from education and market datasets.',
      ],
      tags: ['Python', 'SQL', 'Reporting', 'BI'],
      impact: 'Built the analytical foundation that later expanded into applied ML and GenAI delivery.',
    },
  ],
  projects: [
    {
      title: 'Smart Resume Parser',
      category: 'GenAI',
      year: '2025',
      blurb:
        'GPT-powered resume screening system that extracts skills and ranks candidates against job descriptions.',
      stack: ['Python', 'GPT', 'Prompt Engineering', 'Automation'],
      outcome: 'Reduced manual screening effort for recruiting workflows.',
    },
    {
      title: 'Commodity Intelligence Agent',
      category: 'AI Agents',
      year: '2025',
      blurb:
        'Langflow-driven orchestrator that combines commodity pricing, news, trade conditions, and supplier intelligence.',
      stack: ['Langflow', 'Agents', 'Data Integration', 'LLMs'],
      outcome: 'Compressed research turnaround from days to minutes.',
    },
    {
      title: 'P&ID Drawing Reviewer',
      category: 'Engineering AI',
      year: '2024',
      blurb:
        'Agent-based reviewer that compares requirements data and vendor diagrams to flag inconsistencies.',
      stack: ['Python', 'Document Review', 'Automation', 'QA'],
      outcome: 'Automated diagram validation and generated clear error outputs for review teams.',
    },
    {
      title: 'SDIR',
      category: 'Defense AI',
      year: '2024',
      blurb:
        'Air-gapped image generation initiative for military scenarios, designed to adapt to adversary changes and improve downstream object detection.',
      stack: ['Offline Models', 'Image Generation', 'Team Leadership', 'Model Adaptation'],
      outcome: 'Won innovation recognition for next-generation GenAI use in a constrained environment.',
    },
    {
      title: 'Construction Cost Prediction',
      category: 'Machine Learning',
      year: '2023',
      blurb:
        'Predictive modeling workflows for estimating commodity costs within hierarchical WBS planning structures.',
      stack: ['Scikit-Learn', 'Forecasting', 'Pipeline Design', 'Python'],
      outcome: 'Replaced manual estimation work with automated predictive pipelines.',
    },
    {
      title: 'Marketing Mix Modeling',
      category: 'Analytics',
      year: '2023',
      blurb:
        'Profit optimization modules exploring promotional discount combinations by month, season, and quarter.',
      stack: ['Analytics', 'Optimization', 'Scenario Modeling', 'Python'],
      outcome: 'Supported higher-confidence promo planning through modeled profit outcomes.',
    },
    {
      title: 'Intelligent Platform Assistant',
      category: 'Automation',
      year: '2022',
      blurb:
        'Automation platform used globally to deploy reusable RPA bots for client teams.',
      stack: ['Automation', 'Platform Delivery', 'RPA', 'Global Rollout'],
      outcome: 'Delivered around $3M in average annual savings over two years.',
    },
    {
      title: 'Learning Recommendation Platform',
      category: 'Web Product',
      year: '2021',
      blurb:
        'Career-oriented learning website with TF-IDF recommendations for courses and job pathways.',
      stack: ['React', 'HTML/CSS', 'TF-IDF', 'Selenium'],
      outcome: 'Blended frontend usability with recommendation quality for students.',
    },
    {
      title: 'AlgoTrading Bot',
      category: 'Personal Project',
      year: '2021',
      blurb:
        'Real-time trading engine that processes market data, executes strategies, places orders, and visualizes charts in a Flask-based frontend.',
      stack: ['Python', 'Flask', 'Real-time Data', 'TradingView'],
      outcome: 'End-to-end automated trading workflow with live chart visualization.',
    },
  ],
  awards: [
    {
      title: '1st Place - Innovation in GenAI',
      organization: 'AGBA & Ministry of Information and Technology',
      detail:
        'Recognized for SDIR, a next-generation solution tackling military data scarcity with GenAI.',
    },
    {
      title: 'Star Performer',
      organization: 'Emergys Solutions',
      detail:
        'Awarded for contribution across product and engineering teams on Construction Cost Prediction and SDIR.',
    },
  ],
  education: {
    institution: 'Datta Meghe College of Engineering, University of Mumbai',
    period: 'June 2015 - May 2019',
    degree: 'Bachelor of Engineering - Electronics Engineering',
  },
};
