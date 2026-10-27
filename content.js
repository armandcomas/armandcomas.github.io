/* Site content — publications, news, experience, and links. */
const PILLARS = {
  avatars:    { n: "01", label: "3D Avatars",  long: "3D Human Avatars & Digital Humans" },
  diffusion:  { n: "02", label: "Diffusion",   long: "Diffusion & Controllable Generation" },
  dynamics:   { n: "03", label: "Dynamics",    long: "Dynamics, Energy & Video" },
  biometrics: { n: "04", label: "Biometrics",  long: "Biometrics & Remote Sensing" },
};

/* Paper figures: drop an image in figs/ and add `fig: "figs/<id>.png"` to the
   paper below. It then shows inside the expanded row and is "denoised" in the
   hover plate (dark-on-white figures work best). */
const WORKS = [
  { id: "cojump", year: 2026, date: 2026.92, pillar: "diffusion", short: "CO₂Jump",
    thumb: "figs/cojump_thumb.gif?v=7", fig: "figs/cojump_full.jpg?v=7",
    venue: "NeurIPS 2026",
    title: "Concurrent Image Understanding and Generation: Self-Correcting Coupled Markov Jump Processes",
    authors: "Minh-Quan Le, Armand Comas, Alexandros Lattas, Stylianos Moschoglou, Pedro Vélez, Amit Raj, Aaron Germuth, Thabo Beeler, Dimitris Samaras, Di Qiu",
    blurb: "Text and image tokens generate and understand each other in a single pass. A training-free sampler couples two Markov jump processes and remasks low-confidence decisions as it goes.",
    links: [["Paper", "https://arxiv.org/abs/2607.13188"], ["Hugging Face", "https://huggingface.co/papers/2607.13188"], ["Project", "https://coupled-jump.github.io"]] },
  { id: "incode", year: 2025, date: 2025.32, pillar: "diffusion", short: "InCoDe",
    thumb: "figs/incode_thumb.png?v=7", fig: "figs/incode_full.png?v=7",
    venue: "ICLR 2025",
    title: "InCoDe: Interpretable Compressed Descriptions For Image Generation",
    authors: "Armand Comas, Aditya Chattopadhyay, Feliu Formosa, Changyu Liu, Octavia Camps, René Vidal",
    blurb: "Succinct, information-theoretically interpretable descriptions of an image that let you choose what to keep and what to regenerate.",
    links: [["OpenReview", "https://openreview.net/forum?id=aXwukBD6M6"], ["PDF", "https://proceedings.iclr.cc/paper_files/paper/2025/file/c6e897d0ffea64caf940ead49d1a370f-Paper-Conference.pdf"], ["Code", "https://github.com/ArmandCom/InCoDe"]] },
  { id: "magicmirror", year: 2024, date: 2024.75, pillar: "avatars", short: "MagicMirror",
    thumb: "figs/magicmirror_thumb.gif?v=7", fig: "figs/magicmirror_full.png?v=7",
    venue: "ECCV 2024",
    title: "MagicMirror: Fast and High-Quality Avatar Generation with a Constrained Search Space",
    authors: "Armand Comas, Di Qiu, Menglei Chai, Marcel Bühler, Amit Raj, Ruiqi Gao, Qiangeng Xu, Mark Matthews, Paulo Gotardo, Octavia Camps, Sergio Orts-Escolano, Thabo Beeler",
    blurb: "Text-guided 3D avatar generation and personalization. A conditional NeRF prior constrains the search space so diffusion guidance converges fast and stays photoreal.",
    links: [["Project", "https://syntec-research.github.io/MagicMirror/"], ["arXiv", "https://arxiv.org/abs/2404.01296"]] },
  { id: "niip", year: 2023, date: 2023.56, pillar: "dynamics", short: "Potentials",
    thumb: "figs/niip_thumb.gif?v=7", fig: "figs/niip_full.png?v=7",
    venue: "ICML 2023 · Oral",
    title: "Inferring Relational Potentials in Interacting Systems",
    authors: "Armand Comas, Yilun Du, Christian Fernandez, Sandesh Ghimire, Mario Sznaier, Joshua B. Tenenbaum, Octavia Camps",
    blurb: "Interactions modelled as learned energy potentials instead of feed-forward dynamics, so trajectories can be edited, potentials composed across models, and anomalies detected zero-shot.",
    links: [["Project", "https://energy-based-model.github.io/interaction-potentials"], ["arXiv", "https://arxiv.org/abs/2310.14466"]] },
  { id: "koopman", year: 2023, date: 2023.46, pillar: "dynamics", short: "Koopman",
    thumb: "figs/koopman_thumb.png?v=7", fig: "figs/koopman_full.png?v=7",
    venue: "L4DC 2023 · IFAC-SysID 2024",
    title: "Learning Object-Centric Dynamic Modes from Video and Emerging Properties",
    authors: "Armand Comas, Christian Fernandez, Sandesh Ghimire, Haolin Li, Mario Sznaier, Octavia Camps",
    blurb: "Video decomposed into objects and the Koopman modes of their motion: forecasting, temporal super-resolution, and backwards prediction emerge for free.",
    links: [["PMLR", "https://proceedings.mlr.press/v211/comas23a.html"], ["IFAC '24", "https://www.sciencedirect.com/science/article/pii/S2405896324013259"]] },
  { id: "turnip", year: 2021, date: 2021.72, pillar: "biometrics", short: "TURNIP",
    thumb: "figs/turnip_thumb.png?v=7", fig: "figs/turnip_full.png?v=7",
    venue: "ICIP 2021",
    title: "TURNIP: Time-Series U-Net with Recurrence for NIR Imaging PPG",
    authors: "Armand Comas, Tim K. Marks, Hassan Mansour, Suhas Lohit, Yechi Ma, Xiaoming Liu",
    blurb: "Recovering a heartbeat from near-infrared video of a driver's face: a time-series U-Net with recurrent skips, robust to motion and changing light.",
    links: [["DOI", "https://doi.org/10.1109/ICIP42928.2021.9506663"], ["PDF", "https://www.merl.com/publications/docs/TR2021-099.pdf"], ["IEEE Access '25", "https://ieeexplore.ieee.org/abstract/document/11192311/"]] },
  { id: "dive", year: 2020, date: 2020.95, pillar: "dynamics", short: "DIVE",
    thumb: "figs/dive_thumb.png?v=7", fig: "figs/dive_full.png?v=7",
    venue: "NeurIPS 2020",
    title: "Learning Disentangled Representations of Video with Missing Data",
    authors: "Armand Comas, Chi Zhang, Zlatan Feric, Octavia Camps, Rose Yu",
    blurb: "Object-centric video prediction that reasons about what it cannot see (occlusions and missing frames) by disentangling appearance, pose, and dynamics.",
    links: [["arXiv", "https://arxiv.org/abs/2006.13391"], ["Code", "https://github.com/Rose-STL-Lab/DIVE"]] },
];

/* "Now" feed — public Google XR & Syntec milestones + research updates. */
const NEWS = [
  ["Sep 2026", "<i><a href=\"https://coupled-jump.github.io\" target=\"_blank\" rel=\"noopener\">CO₂Jump</a></i> (Self-Correcting Coupled Markov Jump Processes) accepted to NeurIPS 2026."],
  ["Jul 2026", "Syntec open-sourced <i><a href=\"https://github.com/google/GNM\" target=\"_blank\" rel=\"noopener\">GNM Head</a></i>, a generative anthropometric 3D model of the human head (<a href=\"https://github.com/google/GNM\" target=\"_blank\" rel=\"noopener\">code</a>, <a href=\"https://arxiv.org/abs/2607.23687\" target=\"_blank\" rel=\"noopener\">paper</a>)."],
  ["May 2026", "<i>Google XR</i> unveiled <a href=\"https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/\" target=\"_blank\" rel=\"noopener\">Android XR AI glasses</a> with Gemini at Google I/O (with Samsung, Gentle Monster, and Warby Parker)."],
  ["Dec 2025", "<i>Google XR</i> rolled out <a href=\"https://blog.google/products-and-platforms/platforms/android/android-show-xr-edition-updates/\" target=\"_blank\" rel=\"noopener\">Likeness</a> (photorealistic 3D digital avatars) following the launch of <a href=\"https://blog.google/products-and-platforms/platforms/android/samsung-galaxy-xr/\" target=\"_blank\" rel=\"noopener\">Samsung Galaxy XR</a>."],
  ["Dec 2024", "Joined <i>Google XR</i> (Syntec team, <a href=\"https://thabobeeler.com/\" target=\"_blank\" rel=\"noopener\">Thabo Beeler</a>'s group) as a Research Scientist, leveraging multi-modal generative models to synthesize the world in 3D."],
  ["Dec 2024", "Defended my <a href=\"https://search.proquest.com/openview/d89381ffeb1ebf77b77cba2af181a40e/1?pq-origsite=gscholar&amp;cbl=18750&amp;diss=y\" target=\"_blank\" rel=\"noopener\">PhD thesis</a> at Northeastern University, advised by <a href=\"https://coe.northeastern.edu/faculty/octavia-camps/\" target=\"_blank\" rel=\"noopener\">Octavia Camps</a>."],
  ["Sep 2024", "<i><a href=\"https://syntec-research.github.io/MagicMirror/\" target=\"_blank\" rel=\"noopener\">MagicMirror</a></i> presented at ECCV 2024, from my Google XR internship."],
  ["2023",     "Co-led an animated AI avatar for Residente's album release."],
  ["Jul 2023", "Oral at ICML 2023 for <i><a href=\"https://energy-based-model.github.io/interaction-potentials\" target=\"_blank\" rel=\"noopener\">Inferring Relational Potentials</a></i>, with <a href=\"https://executive.mit.edu/faculty/joshua-tenenbaum-0036g00000ra8RsAAI.html\" target=\"_blank\" rel=\"noopener\">Joshua Tenenbaum</a> and <a href=\"https://yilundu.github.io/\" target=\"_blank\" rel=\"noopener\">Yilun Du</a> (MIT CoCoSci)."],
];

const CV = [
  ["2024 –",    "Google XR", 'Research Scientist · Syntec team (<a href="https://thabobeeler.com/" target="_blank" rel="noopener">Thabo Beeler</a>\'s group) · generative AI for 3D', 2024.95],
  ["2023 – 24", "Google XR", 'Research intern · <a href="https://thabobeeler.com/" target="_blank" rel="noopener">Thabo Beeler</a>\'s group, with VisCam &amp; DeepMind · <a href="https://syntec-research.github.io/MagicMirror/" target="_blank" rel="noopener">MagicMirror (ECCV \'24) ↗</a>', 2023.38],
  ["2022 – 23", "MINDS, JHU / UPenn", 'Research intern · <a href="https://www.grasp.upenn.edu/people/rene-vidal/" target="_blank" rel="noopener">René Vidal</a>\'s group · <a href="https://openreview.net/forum?id=aXwukBD6M6" target="_blank" rel="noopener">InCoDe (ICLR \'25) ↗</a>', 2022.85],
  ["2022",      "Adobe (Project Indigo)", 'Research intern · <a href="https://profiles.stanford.edu/marc-levoy" target="_blank" rel="noopener">Mark Levoy</a>\'s team', 2022.38],
  ["2021",      "Netflix", 'Research intern · with <a href="https://www.linkedin.com/in/mhtaghavi" target="_blank" rel="noopener">Hossein Taghavi</a> · multimodal self-supervision', 2021.38],
  ["2020",      "MERL", 'Research intern · with <a href="https://www.merl.com/people/tmarks" target="_blank" rel="noopener">Tim Marks</a> · <a href="https://doi.org/10.1109/ICIP42928.2021.9506663" target="_blank" rel="noopener">TURNIP (ICIP \'21) ↗</a> · <a href="https://ieeexplore.ieee.org/abstract/document/11192311/" target="_blank" rel="noopener">IEEE Access \'25 ↗</a>', 2020.38],
  ["2019 – 24", "Northeastern University", 'PhD, Computer Vision · <a href="https://coe.northeastern.edu/faculty/octavia-camps/" target="_blank" rel="noopener">Octavia Camps</a>\'s lab · <a href="https://search.proquest.com/openview/d89381ffeb1ebf77b77cba2af181a40e/1?pq-origsite=gscholar&amp;cbl=18750&amp;diss=y" target="_blank" rel="noopener">PhD Thesis ↗</a>', 2019.68],
  ["2012 – 19", "UPC Barcelona", 'BSc + MSc, Telecommunications Engineering', 2017.6],
];

const LINKS = [
  ["Scholar", "https://scholar.google.com/citations?user=KuczusYAAAAJ"],
  ["GitHub", "https://github.com/ArmandCom"],
  ["LinkedIn", "https://www.linkedin.com/in/armandcomas"],
];
const EMAIL = "acomas@google.com";

const esc = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const authorsHTML = (a) => esc(a).replace("Armand Comas", '<span class="me">Armand Comas</span>');
