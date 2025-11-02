// Shared data for all pages
export const publicationsData = [
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
    title: "Development of the Dynamic Stiffness Method for the Out-of-Plane Natural Vibration of an Orthotropic Plate",
    venue: "Applied Sciences, October 2022",
    authors: "Manish Chauhan, Pawan Mishra, Sarvagya Dwivedi, Minvydas Ragulskis, Rafał Burdzik, Vinayak Ranjan",
    volume: "12(20), Article 10453703",
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
    title: "Distributed Cache for ML Pipelines",
    category: "Distributed Systems",
    year: 2023,
    description: [
      "Designed and implemented a distributed caching system with LRU eviction and write-through to GCS for high-performance ML pipeline acceleration.",
      "Achieved ~5 ms P50 latency and 10k RPS capacity with horizontal scaling capabilities.",
      "Built Redis-based caching layer with consistent hashing for distributed key management and automatic failover mechanisms.",
      "Implemented Prometheus metrics and Grafana dashboards for real-time monitoring of cache hit rates, latency, and throughput.",
      "Designed fault-tolerant architecture with cache warming strategies and graceful degradation under high load.",
    ],
    url: "https://github.com/sarvagyad37/distributed-cache-system",
    tags: ["Python", "GCP", "Redis", "Prometheus", "Grafana", "Distributed Systems", "High Performance"],
  },
];

