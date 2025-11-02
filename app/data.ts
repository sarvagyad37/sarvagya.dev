// Shared data for all pages
export const publicationsData = [
  // ===== 2025 PUBLICATIONS =====
  {
    title: "Quantum Transport from First Principles: A Self-Consistent DFT + NEGF Implementation in Python",
    venue: "Poster, SURP Conference, Rowan University, August 2025",
    authors: "Sarvagya Dwivedi",
    description: [
      "Coupled PySCF (DFT) with custom NEGF loop (Green's function, self-energy, broadening, transmission) for self-consistent transport.",
      "Benchmarked zero-bias transmission spectra; identified delocalized, strongly coupled orbitals dominate conductance.",
      "Outlined extensions to spin-polarized and MC-PDFT + NEGF for correlated-system transport.",
    ],
    type: "poster" as const,
    links: [
      { label: "ResearchGate", url: "https://www.researchgate.net/publication/395264828_SURP_Poster_-_Quantum_Transport_from_First_Principles" },
    ],
  },
  {
    title: "Self-Consistent NEGF Approach for Molecular Transport: A Python-Based Computational Framework",
    venue: "Poster, Rowan University SSE Symposium, August 2025",
    authors: "Sarvagya Dwivedi",
    description: [
      "Implemented self-consistent NEGF + DFT coupling solver in Python with Anderson mixing convergence acceleration.",
      "Validated numerical equivalence to TranSiesta for Li-molecular devices, confirming framework accuracy.",
      "Demonstrated capability for self-consistent transport calculations in molecular electronics.",
    ],
    type: "poster" as const,
    links: [
      { label: "ResearchGate", url: "https://www.researchgate.net/publication/393654899_Self-Consistent_NEGF_Approach_for_Molecular_Transport_A_Python-Based_Computational_Framework" },
    ],
  },
  {
    title: "Low-Rank Hankel SVD Spectral Learning for Regime Shift Detection in Financial Markets",
    venue: "Poster, Penn-York Undergraduate Research Conference, University of Pittsburgh at Bradford, PA, November 15, 2025",
    authors: "Sarvagya Dwivedi",
    description: [
      "Developed low-rank spectral learning framework using Hankel–SVD decomposition for detecting and characterizing regime shifts in financial markets.",
      "Implemented multi-channel Hankel embedding (price, volume, momentum) to reconstruct latent state-space dynamics, defining Regime Coherence Index as interpretable stability indicator.",
      "Demonstrated that coherent, low-rank spectral concentration corresponds to stable macro-regimes, while spectral flattening signals structural transitions such as the 2008 crisis and 2020 COVID-19 crash.",
    ],
    type: "poster" as const,
    links: [],
  },
  {
    title: "Efficient Algorithmic Solution for Large-Scale Eigenvalue Problems: From Structural Vibrations to Complex Systems",
    venue: "Oral Presentation, Penn-York Undergraduate Research Conference, University of Pittsburgh at Bradford, PA, November 15, 2025",
    authors: "Sarvagya Dwivedi",
    description: [
      "Developed algorithmic framework coupling Dynamic Stiffness Method (DSM) with Wittrick–Williams eigenvalue search for efficient large-scale eigenvalue problems.",
      "Implemented Python and MATLAB-based solver automating frequency-dependent DSM matrix assembly and eigenvalue computation for functionally graded plates.",
      "Demonstrated computational efficiency improvements over conventional FEM approaches while maintaining high accuracy in natural frequency prediction.",
    ],
    type: "oral" as const,
    links: [],
  },
  
  // ===== 2023 PUBLICATIONS =====
  {
    title: "Exponential functionally graded plates resting on Winkler–Pasternak foundation: Free vibration analysis by dynamic stiffness method",
    venue: "Archive of Applied Mechanics, September 2023",
    authors: "Manish Chauhan, Sarvagya Dwivedi, Ratneshwar Jha, Vinayak Ranjan",
    description: [
      "Co-developed exponential-law DSM with neutral-surface correction; implemented custom eigenvalue solver.",
      "Generated benchmark frequency tables and sensitivity plots across gradation indices and foundation stiffnesses.",
      "Established exponential grading increases frequencies via stiffness; Winkler–Pasternak coupling critically affects modes.",
    ],
    links: [
      { label: "DOI", url: "https://doi.org/10.1007/s00419-023-02392-6" },
      { label: "ResearchGate", url: "https://www.researchgate.net/publication/369621621_Exponential_functionally_graded_plates_resting_on_Winkler-Pasternak_foundation_free_vibration_analysis_by_dynamic_stiffness_method" },
    ],
  },
  
  // ===== 2022 PUBLICATIONS =====
  {
    title: "Development of the Dynamic Stiffness Method for the Out-of-Plane Natural Vibration of an Orthotropic Plate",
    venue: "Applied Sciences, October 2022",
    authors: "Manish Chauhan, Pawan Mishra, Sarvagya Dwivedi, Minvydas Ragulskis, Rafał Burdzik, Vinayak Ranjan",
    volume: "Vol. 12(20), Article 10453703",
    description: [
      "Co-authored DSM derivation for orthotropic plates; integrated Wittrick–Williams algorithm for exact modal enumeration.",
      "Validated against FEM benchmarks; published frequency datasets for analytical comparison.",
      "Captured orthotropic coupling effects with excellent agreement to numerical and analytical results.",
    ],
    links: [
      { label: "DOI", url: "https://doi.org/10.3390/app12115733" },
      { label: "ResearchGate", url: "https://www.researchgate.net/publication/361105315_Development_of_the_Dynamic_Stiffness_Method_for_the_Out-of-Plane_Natural_Vibration_of_an_Orthotropic_Plate" },
    ],
  },
  {
    title: "Analytical Investigation of Sound Radiation from Functionally Graded Thin Plates Based on Elemental Radiator Approach and Physical Neutral Surface",
    venue: "Applied Sciences, August 2022",
    authors: "Baijnath Singh, R.N. Hota, Sarvagya Dwivedi, Ratneshwar Jha, Vinayak Ranjan, Kamil Řehák",
    volume: "Vol. 12(15), 7707",
    description: [
      "Built acoustic radiation solver using elemental radiator model with physical neutral-surface corrections.",
      "Automated parametric simulations across power-law index, modulus ratio, and damping; visualized results.",
      "Showed higher stiffness gradation and modulus ratio reduce sound-power peaks; constituent choice shifts resonance bands.",
    ],
    links: [
      { label: "DOI", url: "https://doi.org/10.3390/app12157707" },
      { label: "ResearchGate", url: "https://www.researchgate.net/publication/362404418_Analytical_Investigation_of_Sound_Radiation_from_Functionally_Graded_Thin_Plates_Based_on_Elemental_Radiator_Approach_and_Physical_Neutral_Surface" },
    ],
  },
  {
    title: "Acoustic Response of Sigmoid Functionally Graded Thin Plates: A Parametric Investigation",
    venue: "Journal of Vibration Engineering & Technologies, September 2022",
    authors: "Baij Nath Singh, R. N. Hota, Sarvagya Dwivedi, Ratneshwar Jha, Vinayak Ranjan",
    description: [
      "Built vibro-acoustic solver coupling plate theory with Rayleigh integral for far-field radiation prediction.",
      "Ran parametric sweeps across sigmoid index, damping, and boundary conditions; analyzed radiation efficiency vs frequency.",
      "Found radiation efficiency peaks sharply near resonance, modulated by gradation law with low damping sensitivity.",
    ],
    links: [
      { label: "DOI", url: "https://doi.org/10.1007/s42417-022-00500-4" },
      { label: "ResearchGate", url: "https://www.researchgate.net/publication/360898982_Acoustic_Response_of_Sigmoid_Functionally_Graded_Thin_Plates_A_Parametric_Investigation" },
    ],
  },
  {
    title: "Sigmoid functionally graded plates embedded on Winkler–Pasternak foundation: Free vibration analysis by dynamic stiffness method",
    venue: "Composite Structures, May 2022",
    authors: "Manish Chauhan, Sarvagya Dwivedi, Ratneshwar Jha, Vinayak Ranjan, Prabhakar Sathujoda",
    volume: "Vol. 288, 115400",
    description: [
      "Implemented DSM with Wittrick–Williams modal count for sigmoid-graded plates on elastic foundations.",
      "Coded eigen-solver with automated parameter sweeps across gradation, boundary, and foundation stiffness.",
      "Achieved high-accuracy natural frequencies with faster convergence than FEM at lower computational cost.",
    ],
    links: [
      { label: "DOI", url: "https://doi.org/10.1016/j.compstruct.2022.115400" },
      { label: "ResearchGate", url: "https://www.researchgate.net/publication/359078888_Sigmoid_functionally_graded_plates_embedded_on_Winkler-Pasternak_foundation_Free_vibration_analysis_by_dynamic_stiffness_method" },
    ],
  },
  
  // ===== 2021 CONFERENCE PAPERS =====
  {
    title: "Effect of Power-Law Index and Modulus Ratio on Sound Radiation from Functionally Graded Material Plates by Elemental Radiator Approach",
    venue: "Online Symposium on Fluid–Structure Interaction, Vibrations, Aeroelasticity (FSIVA), October 14–15, 2021",
    authors: "Baijnath Singh, R.N. Hota, Sarvagya Dwivedi, Ratneshwar Jha, Vinayak Ranjan",
    description: [
      "Investigated sound radiation behavior of functionally graded material plates using elemental radiator approach.",
      "Analyzed effects of power-law index and modulus ratio on acoustic radiation characteristics.",
      "Established foundational methodology for subsequent vibro-acoustic analysis of graded plates.",
    ],
    type: "conference" as const,
    links: [],
  },
  {
    title: "Application of Dynamic Stiffness Method for Free Vibration Analysis of Thin Functionally Graded Plates",
    venue: "Online Symposium on Aeroelasticity, Fluid–Structure Interaction, and Vibrations (FSIVA), October 14–15, 2021",
    authors: "Manish Chauhan, Prabhakar Sathujoda, Sarvagya Dwivedi, Ratneshwar Jha, Vinayak Ranjan",
    description: [
      "Applied Dynamic Stiffness Method (DSM) for free vibration analysis of thin functionally graded plates.",
      "Developed computational framework for analyzing natural frequencies and mode shapes in graded structures.",
      "Established methodology foundation for subsequent DSM-based FGM plate research.",
    ],
    type: "conference" as const,
    links: [],
  },
  
  // ===== MANUSCRIPTS IN PREPARATION =====
  {
    title: "Spectral State-Space Modeling of Financial Market Regimes Using Multi-Channel Hankel Low-Rank Embeddings",
    venue: "In Preparation, 2025",
    authors: "Sarvagya Dwivedi",
    description: [
      "Developing spectral state-space modeling framework for financial market regime detection using multi-channel Hankel embeddings.",
      "Extending low-rank spectral learning methods to characterize regime transitions and stability indicators.",
      "Targeting submission to Physics D / Journal of Computational Finance.",
    ],
    type: "manuscript" as const,
    intendedJournal: "Physics D / Journal of Computational Finance",
    links: [],
  },
  {
    title: "Physics-Informed Surrogate Modeling of Functionally Graded Plate Natural Frequencies Using Hankel–SVD Features and the Wittrick–Williams Algorithm Derived from Dynamic Stiffness Data",
    venue: "In Preparation, 2025",
    authors: "Sarvagya Dwivedi",
    description: [
      "Developing physics-informed surrogate models for rapid prediction of functionally graded plate natural frequencies.",
      "Combining Hankel–SVD spectral features with Wittrick–Williams algorithm insights from dynamic stiffness data.",
      "Aiming to compete for ICCS29 Best Student Paper Award.",
      "Targeting submission to Composite Structures / Applied Mathematical Modelling.",
    ],
    type: "manuscript" as const,
    intendedJournal: "Composite Structures / Applied Mathematical Modelling",
    links: [],
  },
  {
    title: "Data-Driven Quantum Transport Simulation Using Multi-Functional Computational Methods",
    venue: "In Preparation, 2025",
    authors: "Sarvagya Dwivedi",
    description: [
      "Developing data-driven approaches for quantum transport simulation using multi-functional computational methods.",
      "Integrating machine learning surrogates with traditional DFT + NEGF frameworks for accelerated calculations.",
      "Targeting submission to Computational Materials Science / Physical Chemistry Chemical Physics.",
    ],
    type: "manuscript" as const,
    intendedJournal: "Computational Materials Science / Physical Chemistry Chemical Physics",
    links: [],
  },
];

export const projectsData = [
  {
    title: "scf‑negf — Self‑Consistent NEGF Quantum Transport Simulator",
    category: "Quantum Transport",
    year: 2024,
    description: [
      "Developed a self-consistent NEGF + DFT solver with Anderson mixing convergence and PySCF integration for quantum transport calculations.",
      "Implemented iterative Poisson–Schrödinger coupling and matrix-based Hamiltonian construction using quantum chemical data to achieve self-consistent potential convergence.",
      "Analyzed current–voltage (I–V) characteristics and transmission spectra to evaluate quantum conductance in molecular junctions, validating computational results against analytical benchmarks.",
      "Designed a modular workflow adaptable for integration with machine learning–based surrogate models for accelerated quantum transport prediction.",
    ],
    url: "https://github.com/sarvagyad37/scf-negf",
    tags: ["Python", "PySCF", "NEGF", "DFT", "Quantum Transport", "Scientific Computing"],
    relatedPublications: [
      "Quantum Transport from First Principles: A Self-Consistent DFT + NEGF Implementation in Python"
    ],
  },
  {
    title: "pyRUQT — Recursive Quantum Transport Package",
    category: "Quantum Transport",
    year: 2023,
    description: [
      "Implemented recursive Green's function algorithm with self-consistent corrections for efficient quantum transport calculations.",
      "Created a reusable package with comprehensive testing, documentation, and benchmarked performance optimizations.",
      "Developed modular architecture supporting multiple transport models and material systems.",
    ],
    url: "https://github.com/HoyLab-Rowan/pyRUQT",
    tags: ["Python", "Quantum Transport", "Green's Function", "Recursive Algorithm"],
    relatedPublications: [
      "Quantum Transport from First Principles: A Self-Consistent DFT + NEGF Implementation in Python"
    ],
  },
  {
    title: "LSTM Price Prediction Model",
    category: "Machine Learning",
    year: 2024,
    description: [
      "Built a deep learning model for financial time series forecasting using LSTM networks with attention mechanisms.",
      "Implemented comprehensive regularization techniques (dropout, L2 regularization, early stopping) and achieved improved generalization performance on out-of-sample data.",
      "Trained on multiple asset classes with hyperparameter optimization using grid search and cross-validation.",
      "Achieved robust performance metrics with focus on minimizing overfitting through careful feature engineering and model architecture design.",
    ],
    url: "#",
    tags: ["Python", "TensorFlow", "LSTM", "Time Series", "Finance", "Deep Learning"],
    relatedPublications: [
      "Low-Rank Hankel SVD Spectral Learning for Regime Shift Detection in Financial Markets"
    ],
  },
  {
    title: "Sentiment Analysis Transformer",
    category: "Machine Learning",
    year: 2024,
    description: [
      "Trained transformer-based models for financial news sentiment classification using BERT architecture fine-tuning.",
      "Achieved strong performance on sentiment prediction tasks with focus on financial domain adaptation.",
      "Implemented custom tokenization and preprocessing pipeline optimized for financial text data including earnings reports, news articles, and social media.",
      "Developed multi-class classification system with confidence scoring and attention visualization for interpretability.",
    ],
    url: "#",
    tags: ["Python", "PyTorch", "Transformers", "NLP", "Finance", "BERT"],
    relatedPublications: [
      "Low-Rank Hankel SVD Spectral Learning for Regime Shift Detection in Financial Markets"
    ],
  },
  {
    title: "Algorithmic Trading System",
    category: "Finance & Trading",
    year: 2024,
    description: [
      "Developed a quantitative trading platform with comprehensive backtesting framework, risk management modules, and real-time data integration.",
      "Implemented multiple strategy classes including mean reversion, momentum, and statistical arbitrage with configurable risk parameters.",
      "Built portfolio optimization module with Sharpe ratio maximization and maximum drawdown constraints.",
      "Integrated real-time market data feeds with position sizing algorithms and automated trade execution with slippage modeling.",
      "Designed comprehensive risk management system with stop-loss, position limits, and portfolio-level risk controls.",
    ],
    url: "#",
    tags: ["Python", "Quantitative Finance", "Backtesting", "Risk Management", "Trading", "Portfolio Optimization"],
    relatedPublications: [
      "Low-Rank Hankel SVD Spectral Learning for Regime Shift Detection in Financial Markets"
    ],
  },
  {
    title: "Distributed Cache for Machine Learning Pipelines",
    category: "Distributed Systems",
    year: 2023,
    description: [
      "Enhanced distributed cache system to expedite machine learning model access, achieving sub-5ms response time.",
      "Implemented custom monitoring for predictive model performance metrics using Prometheus and Grafana.",
      "Handled 10,000+ requests per second, simulating real-time data analytics and predictive scoring workloads.",
      "Designed write-through architecture to Google Cloud Storage for persistent caching and fault tolerance.",
      "Built horizontal scaling capabilities with Redis-based distributed key management and automatic failover mechanisms.",
    ],
    url: "https://github.com/sarvagyad37/distributed-cache-system",
    tags: ["Python", "Google Cloud Console", "GCP", "Redis", "Prometheus", "Grafana", "Distributed Systems", "High Performance"],
  },
  {
    title: "Customer Behavior Analysis Platform",
    category: "Machine Learning",
    year: 2024,
    description: [
      "Developed a machine learning model to predict customer lifetime value, achieving 85% accuracy.",
      "Implemented a recommendation system with Cassandra backend for increased user retention.",
      "Utilized NLP techniques to analyze customer feedback, enhancing product insights.",
      "Built end-to-end ML pipeline with feature engineering, model training, and deployment workflows.",
      "Designed scalable data processing architecture for handling large-scale customer interaction datasets.",
    ],
    url: "#",
    tags: ["Python", "scikit-learn", "TensorFlow", "Keras", "Cassandra", "NLP", "Machine Learning", "Recommendation Systems"],
  },
  {
    title: "SeaSOS - AR Evacuation Guidance",
    category: "AR/VR & Mobile",
    year: 2024,
    hackathonWinner: "3rd Place — NJIT HackTheLoc 2024",
    description: [
      "Engineered an iOS app integrating AI and AR for indoor navigation, improving evacuation on cruise ships.",
      "Implemented Unity Navigation AI to calculate optimal evacuation routes, reducing time to exit by 20%.",
      "Employed RoomPlan API for real-time 3D mapping with navigation markers, achieving 99.9% accuracy.",
      "Built real-time pathfinding algorithms with dynamic obstacle avoidance for emergency scenarios.",
      "Designed intuitive AR interface with visual navigation cues and safety instructions.",
    ],
    url: "https://github.com/sarvagyad37/SeaSOS",
    tags: ["Unity", "Swift", "ARKit", "Redis", "Vuforia AR", "iOS", "AR", "Navigation", "Computer Vision"],
  },
  {
    title: "BlocSoc - NFT Authentication Protocol",
    category: "Web Development",
    year: 2022,
    hackathonWinner: "2nd Place — IEEE ProfHacks 2022",
    description: [
      "Developed an NFT authentication protocol for apps to issue credentials proving participant identity on the blockchain.",
      "Built a decentralized blogging application with NFT-based authentication to promote free speech and censorship resistance.",
      "Implemented governance system where verified users can participate in content moderation, voting, and platform development.",
      "Designed merit-based token distribution system rewarding anonymous contributors based on community upvotes and participation.",
      "Created transparent, append-only blockchain ledger ensuring immutable records and permissionless access to public resources.",
    ],
    url: "https://devpost.com/software/blocsoc-nft-authentication",
    tags: ["Blockchain", "Ethereum", "NFT", "Web3", "Solidity", "Decentralized", "Governance", "Authentication"],
  },
  {
    title: "MediSync - AI-Enhanced VR Health System",
    category: "AR/VR & Mobile",
    year: 2023,
    hackathonWinner: "1st Place — UPMC Hack 2023",
    description: [
      "Designed VR-based real-time collaboration environment, leveraging AI to enhance digital healthcare experiences.",
      "Incorporated computer vision and ML for automated medical report and imagery analysis, achieving 98% precision in user-result matching.",
      "Built immersive VR platform for remote medical consultations and collaborative diagnosis.",
      "Integrated TensorFlow models for medical image classification and report generation.",
      "Developed MongoDB-based data management system for secure patient information storage and retrieval.",
    ],
    url: "https://github.com/sarvagyad37/medisync",
    tags: ["Next.js", "MongoDB", "TensorFlow", "Unity VR", "GCP", "Computer Vision", "VR", "Healthcare", "AI"],
  },
  {
    title: "SkillSwap",
    category: "Web Development",
    year: 2025,
    hackathonWinner: "3rd Place — Temple University OwlHacks 2025",
    description: [
      "Designed a token-based community skill-exchange platform with a lightweight on-chain/off-chain blockchain rewards+trust model.",
      "Led UI/UX and data logic integration for seamless user experience.",
      "Implemented blockchain-based trust system for skill verification and community rewards.",
      "Built scalable platform architecture supporting skill matching and peer-to-peer exchanges.",
      "Developed decentralized skills marketplace empowering Philadelphia communities with token-based economy.",
    ],
    url: "https://github.com/ZeeshanRehan/SkillSwap",
    tags: ["Blockchain", "Web Development", "Token System", "UI/UX", "Community Platform", "Next.js", "TypeScript", "React"],
  },
  {
    title: "LinkWise Analytics Platform",
    category: "Web Development",
    year: 2023,
    description: [
      "Developed a data-driven link management platform, handling over 40,000 entities and user interaction data.",
      "Optimized data analytics pipeline with Tableau data visualization, resulting in 8% conversion rate improvement.",
      "Built scalable backend architecture with Node.js for high-throughput link processing and analytics.",
      "Implemented MongoDB data models for efficient storage and retrieval of link metadata and user interactions.",
      "Designed React-based dashboard with real-time analytics and interactive data visualizations.",
    ],
    url: "#",
    tags: ["React", "MongoDB", "Node.js", "Tableau", "Data Analytics", "Full Stack", "Web Development"],
  },
];

