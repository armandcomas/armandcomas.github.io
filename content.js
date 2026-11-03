// Copyright 2026 Google LLC. SPDX-License-Identifier: Apache-2.0
/* Site content — publications, news, experience, and links. */
const ASSET_V = 9;

const PILLARS = {
  avatars:    { n: "01", label: "3D Avatars",  long: "3D Human Avatars & Digital Humans" },
  diffusion:  { n: "02", label: "Diffusion",   long: "Diffusion & Controllable Generation" },
  dynamics:   { n: "03", label: "Dynamics",    long: "Dynamics, Energy & Video" },
  biometrics: { n: "04", label: "Biometrics",  long: "Biometrics & Remote Sensing" },
};

/* Verified public homepages / profiles for coauthors and mentors. */
const PEOPLE = {
  "Aditya Chattopadhyay": "https://achatto1.github.io/",
  "Alexandros Lattas":    "https://alexlattas.com/",
  "Amit Raj":             "https://amitraj93.github.io/",
  "Changyu Liu":          "https://scholar.google.com/citations?user=Y40o7u0AAAAJ",
  "Di Qiu":               "https://qiudi233.github.io/",
  "Dimitris Samaras":     "http://www3.cs.stonybrook.edu/~samaras/",
  "Hassan Mansour":       "https://www.merl.com/people/mansour",
  "Hossein Taghavi":      "https://www.linkedin.com/in/mhtaghavi",
  "Jiankang Deng":        "https://jiankangdeng.github.io/",
  "Joshua B. Tenenbaum":  "https://executive.mit.edu/faculty/joshua-tenenbaum-0036g00000ra8RsAAI.html",
  "Marcel Bühler":        "https://mcbuehler.ch/",
  "Mario Sznaier":        "https://coe.northeastern.edu/people/sznaier-mario/",
  "Mark Levoy":           "https://profiles.stanford.edu/marc-levoy",
  "Mark Matthews":        "https://research.google/people/mark-j-matthews/",
  "Menglei Chai":         "https://mlchai.com/",
  "Minh-Quan Le":         "https://minhquanlecs.github.io/",
  "Octavia Camps":        "https://coe.northeastern.edu/faculty/octavia-camps/",
  "Paulo Gotardo":        "https://paulogotardo.com/",
  "Qiangeng Xu":          "https://github.com/xharlie",
  "René Vidal":           "https://www.grasp.upenn.edu/people/rene-vidal/",
  "Rose Yu":              "https://www.roseyu.com/",
  "Ruiqi Gao":            "https://ruiqigao.github.io/",
  "Sandesh Ghimire":      "https://sandeshgh.com/",
  "Sarah Ostadabbas":     "https://ostadabbas.sites.northeastern.edu/",
  "Sergio Orts-Escolano": "https://sorts-escolano.com/",
  "Stefanos Zafeiriou":   "https://profiles.imperial.ac.uk/s.zafeiriou",
  "Stylianos Moschoglou": "https://moschoglou.com/",
  "Suhas Lohit":          "https://suhaslohit.github.io/",
  "Thabo Beeler":         "https://thabobeeler.com/",
  "Tim K. Marks":         "https://www.merl.com/people/tmarks",
  "Xiaoming Liu":         "https://cse.msu.edu/~liuxm/",
  "Yilun Du":             "https://yilundu.github.io/",
};

/* HOW TO ADD A PAPER
   1. Drop figs/<id>_thumb.png (or .gif) and optional figs/<id>_full.png into site/figs/.
   2. Copy-paste one block into WORKS below (`short` defaults to title before `:`,
      `thumb` defaults to `figs/<id>_thumb.png`, and `?v=${ASSET_V}` is appended automatically):

  { id: "slug", year: 2026, pillar: "diffusion", // avatars | diffusion | dynamics | biometrics
    venue: "CVPR 2026",
    title: "Paper Short Title: Full Subtitle Here",
    authors: "First Author, Armand Comas, Coauthor Name",
    blurb: "One- or two-sentence summary of the method and result.",
    abstract: "Optional verbatim published paper abstract.",
    fig: "figs/slug_full.png",
    links: [["Paper", "https://arxiv.org/abs/..."], ["Project", "https://..."], ["Code", "https://github.com/..."]] },
*/
const WORKS = [
  { id: "cojump", year: 2026, date: 2026.92, pillar: "diffusion", short: "CO₂Jump",
    thumb: "figs/cojump_thumb.gif", fig: "figs/cojump_full.jpg",
    venue: "NeurIPS 2026",
    title: "Concurrent Image Understanding and Generation: Self-Correcting Coupled Markov Jump Processes",
    authors: "Minh-Quan Le, Armand Comas, Alexandros Lattas, Stylianos Moschoglou, Pedro Vélez, Amit Raj, Aaron Germuth, Thabo Beeler, Dimitris Samaras, Di Qiu",
    blurb: "Text and image tokens generate and understand each other in a single pass. A training-free sampler couples two Markov jump processes and remasks low-confidence decisions as it goes.",
    abstract: "Human cognition does not separate understanding and generation. A teacher at a whiteboard speaks and draws together, each modality reshapes the other. In this paper, we bring this coupled loop to artificial systems. Masked Diffusion Models (MDMs) are ideally suited to this task, yet existing samplers either decode text and image interleavedly or independently update them in parallel branches that share only previous-step history, but not the other modality's latest decisions within the same step; combined with MDMs' inability to remask, cross-modal contradictions are neither detected nor repaired. We introduce Self-Correcting Coupled Markov Jump Processes (SC-CMJP), a framework in which one modality's transition rates are functionals of the other modality's confidence score, as weighted by cross-modal attention. Furthermore, a remasking jump retracts commitments the moment cross-modal evidence turns against them. In conjunction with SC-CMJP, we introduce CO₂Jump (Self-COrrecting COupled Jump), a novel training-free single-pass sampler for joint multimodal geneneration. For training and evaluation purposes, we have created and will release three large-scale joint multimodal generation corpora: JEdit-1M, JMaze-200K, JNono-200K, with matching in- and out-of-distribution benchmarks. CO₂Jump achieves best joint performance for image understanding and editing as well as visual reasoning (maze and nonogram solving). The performance of the sampler scales monotonically with the number of denoising steps, evidence that the benefits of cross-modal coupling compound across the trajectory. Project page: https://coupled-jump.github.io",
    links: [["Paper", "https://arxiv.org/abs/2607.13188"], ["Hugging Face", "https://huggingface.co/papers/2607.13188"], ["Project", "https://coupled-jump.github.io"]] },
  { id: "incode", year: 2025, date: 2025.32, pillar: "diffusion", short: "InCoDe",
    thumb: "figs/incode_thumb.png", fig: "figs/incode_full.png",
    venue: "ICLR 2025",
    title: "InCoDe: Interpretable Compressed Descriptions For Image Generation",
    authors: "Armand Comas, Aditya Chattopadhyay, Feliu Formosa, Changyu Liu, Octavia Camps, René Vidal",
    blurb: "Succinct, information-theoretically interpretable descriptions of an image that let you choose what to keep and what to regenerate.",
    abstract: "Generative models have been successfully applied in diverse domains, from natural language processing to image synthesis. However, despite this success, a key challenge that remains is the ability to control the semantic content of the scene being generated. We argue that adequate control of the generation process requires a data representation that allows users to access and efficiently manipulate the semantic factors shaping the data distribution. This work advocates for the adoption of succinct, informative, and interpretable representations, quantified using information-theoretic principles. Through extensive experiments, we demonstrate the efficacy of our proposed framework both qualitatively and quantitatively. Our work contributes to the ongoing quest to enhance both controllability and interpretability in the generation process. Code available at github.com/ArmandCom/InCoDe.",
    links: [["Project", "incode/"], ["OpenReview", "https://openreview.net/forum?id=aXwukBD6M6"], ["PDF", "https://proceedings.iclr.cc/paper_files/paper/2025/file/c6e897d0ffea64caf940ead49d1a370f-Paper-Conference.pdf"], ["Code", "https://github.com/ArmandCom/InCoDe"]] },
  { id: "magicmirror", year: 2024, date: 2024.75, pillar: "avatars", short: "MagicMirror",
    thumb: "figs/magicmirror_thumb.gif", fig: "figs/magicmirror_full.png",
    venue: "ECCV 2024",
    title: "MagicMirror: Fast and High-Quality Avatar Generation with a Constrained Search Space",
    authors: "Armand Comas, Di Qiu, Menglei Chai, Marcel Bühler, Amit Raj, Ruiqi Gao, Qiangeng Xu, Mark Matthews, Paulo Gotardo, Octavia Camps, Sergio Orts-Escolano, Thabo Beeler",
    blurb: "Text-guided 3D avatar generation and personalization. A conditional NeRF prior constrains the search space so diffusion guidance converges fast and stays photoreal.",
    abstract: "We introduce a novel framework for 3D human avatar generation and personalization, leveraging text prompts to enhance user engagement and customization. Central to our approach are key innovations aimed at overcoming the challenges in photo-realistic avatar synthesis. Firstly, we utilize a conditional Neural Radiance Fields (NeRF) model, trained on a large-scale unannotated multi-view dataset, to create a versatile initial solution space that accelerates and diversifies avatar generation. Secondly, we develop a geometric prior, leveraging the capabilities of Text-to-Image Diffusion Models, to ensure superior view invariance and enable direct optimization of avatar geometry. These foundational ideas are complemented by our optimization pipeline built on Variational Score Distillation (VSD), which mitigates texture loss and over-saturation issues. As supported by our extensive experiments, these strategies collectively enable the creation of custom avatars with unparalleled visual quality and better adherence to input text prompts. You can find more results and videos in our website: syntec-research.github.io/MagicMirror",
    links: [["Project", "https://syntec-research.github.io/MagicMirror/"], ["arXiv", "https://arxiv.org/abs/2404.01296"]] },
  { id: "niip", year: 2023, date: 2023.56, pillar: "dynamics", short: "Potentials",
    thumb: "figs/niip_thumb.gif", fig: "figs/niip_full.png",
    venue: "ICML 2023 · Oral",
    title: "Inferring Relational Potentials in Interacting Systems",
    authors: "Armand Comas, Yilun Du, Christian Fernandez, Sandesh Ghimire, Mario Sznaier, Joshua B. Tenenbaum, Octavia Camps",
    blurb: "Interactions modelled as learned energy potentials instead of feed-forward dynamics, so trajectories can be edited, potentials composed across models, and anomalies detected zero-shot.",
    abstract: "Systems consisting of interacting agents are prevalent in the world, ranging from dynamical systems in physics to complex biological networks. To build systems which can interact robustly in the real world, it is thus important to be able to infer the precise interactions governing such systems. Existing approaches typically discover such interactions by explicitly modeling the feed-forward dynamics of the trajectories. In this work, we propose Neural Interaction Inference with Potentials (NIIP) as an alternative approach to discover such interactions that enables greater flexibility in trajectory modeling: it discovers a set of relational potentials, represented as energy functions, which when minimized reconstruct the original trajectory. NIIP assigns low energy to the subset of trajectories which respect the relational constraints observed. We illustrate that with these representations NIIP displays unique capabilities in test-time. First, it allows trajectory manipulation, such as interchanging interaction types across separately trained models, as well as trajectory forecasting. Additionally, it allows adding external hand-crafted potentials at test-time. Finally, NIIP enables the detection of out-of-distribution samples and anomalies without explicit training. Website: https://energy-based-model.github.io/interaction-potentials.",
    links: [["Project", "https://energy-based-model.github.io/interaction-potentials"], ["arXiv", "https://arxiv.org/abs/2310.14466"]] },
  { id: "koopman", year: 2023, date: 2023.46, pillar: "dynamics", short: "Koopman",
    thumb: "figs/koopman_thumb.png", fig: "figs/koopman_full.png",
    venue: "L4DC 2023 · IFAC-SysID 2024",
    title: "Learning Object-Centric Dynamic Modes from Video and Emerging Properties",
    authors: "Armand Comas, Christian Fernandez, Sandesh Ghimire, Haolin Li, Mario Sznaier, Octavia Camps",
    blurb: "Video decomposed into objects and the Koopman modes of their motion: forecasting, temporal super-resolution, and backwards prediction emerge for free.",
    abstract: "One of the long-term objectives of Machine Learning is to endow machines with the capacity of structuring and interpreting the world as we do. This is particularly challenging in scenes involving time series, such as video sequences, since seemingly different data can correspond to the same underlying dynamics. Recent approaches seek to decompose video sequences into their composing objects, attributes and dynamics in a self-supervised fashion, thus simplifying the task of learning suitable features that can be used to analyze each component. While existing methods can successfully disentangle dynamics from other components, there have been relatively few efforts in learning parsimonious representations of these underlying dynamics. In this paper, motivated by recent advances in non-linear identification, we propose a method to decompose a video into moving objects, their attributes and the dynamic modes of their trajectories. We model video dynamics as the output of a Koopman operator to be learned from the available data. In this context, the dynamic information contained in the scene is encapsulated in the eigenvalues and eigenvectors of the Koopman operator, providing an interpretable and parsimonious representation. We show that such decomposition can be used for instance to perform video analytics, predict future frames or generate synthetic video. We test our framework in a variety of datasets that encompass different dynamic scenarios, while illustrating the novel features that emerge from our dynamic modes decomposition: Video dynamics interpretation and user manipulation at test-time. We successfully forecast challenging object trajectories from pixels, achieving competitive performance while drawing useful insights.",
    links: [["PMLR", "https://proceedings.mlr.press/v211/comas23a.html"], ["IFAC '24", "https://www.sciencedirect.com/science/article/pii/S2405896324013259"]] },
  { id: "turnip", year: 2021, date: 2021.72, pillar: "biometrics", short: "TURNIP",
    thumb: "figs/turnip_thumb.png", fig: "figs/turnip_full.png",
    venue: "ICIP 2021",
    title: "TURNIP: Time-Series U-Net with Recurrence for NIR Imaging PPG",
    authors: "Armand Comas, Tim K. Marks, Hassan Mansour, Suhas Lohit, Yechi Ma, Xiaoming Liu",
    blurb: "Recovering a heartbeat from near-infrared video of a driver's face: a time-series U-Net with recurrent skips, robust to motion and changing light.",
    abstract: "Near-Infrared (NIR) videos of faces acquired with active illumination for the problem of estimating the photoplethysmogram (PPG) signal from a distance have demonstrated improved robustness to ambient illumination. Contrary to the multichannel RGB-based solutions, prior work in the NIR regime has been purely model-based and has exploited sparsity of the PPG signal in the frequency domain. In contrast, we propose in this paper a modular neural network-based framework for estimating the remote PPG (rPPG) signal. We test our approach on two challenging datasets where the subjects are inside a car and can have a lot of head motion. We show that our method outperforms existing model-based methods as well as end-to-end deep learning methods for rPPG estimation from NIR videos.",
    links: [["DOI", "https://doi.org/10.1109/ICIP42928.2021.9506663"], ["PDF", "https://www.merl.com/publications/docs/TR2021-099.pdf"], ["IEEE Access '25", "https://ieeexplore.ieee.org/abstract/document/11192311/"]] },
  { id: "dive", year: 2020, date: 2020.95, pillar: "dynamics", short: "DIVE",
    thumb: "figs/dive_thumb.jpg", fig: "figs/dive_full.png",
    venue: "NeurIPS 2020",
    title: "Learning Disentangled Representations of Video with Missing Data",
    authors: "Armand Comas, Chi Zhang, Zlatan Feric, Octavia Camps, Rose Yu",
    blurb: "Object-centric video prediction that reasons about what it cannot see (occlusions and missing frames) by disentangling appearance, pose, and dynamics.",
    abstract: "Missing data poses significant challenges while learning representations of video sequences. We present Disentangled Imputed Video autoEncoder (DIVE), a deep generative model that imputes and predicts future video frames in the presence of missing data. Specifically, DIVE introduces a missingness latent variable, disentangles the hidden video representations into static and dynamic appearance, pose, and missingness factors for each object. DIVE imputes each object's trajectory where the data is missing. On a moving MNIST dataset with various missing scenarios, DIVE outperforms the state of the art baselines by a substantial margin. We also present comparisons on a real-world MOTSChallenge pedestrian dataset, which demonstrates the practical value of our method in a more realistic setting. Our code and data can be found at https://github.com/Rose-STL-Lab/DIVE.",
    links: [["Project", "dive/"], ["arXiv", "https://arxiv.org/abs/2006.13391"], ["Code", "https://github.com/Rose-STL-Lab/DIVE"]] },
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

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const authorsHTML = (authors) => authors.split(",").map((raw) => {
  const name = raw.trim();
  const clean = name.replace(/\*+$/, "");
  if (clean === "Armand Comas") return `<span class="me">${esc(name)}</span>`;
  const url = PEOPLE[clean] || PEOPLE[name];
  if (url) return `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(name)}</a>`;
  return esc(name);
}).join(", ");
