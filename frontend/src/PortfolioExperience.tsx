// import { Component, Suspense, useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import {
//   ContactShadows,
//   Environment,
//   Float,
//   Html,
//   PerformanceMonitor,
//   Sparkles,
//   useProgress,
// } from '@react-three/drei';
// import { Physics, RigidBody, type RapierRigidBody } from '@react-three/rapier';
// import { gsap } from 'gsap';
// import { Group, Vector3 } from 'three';
// import {
//   ArrowRight,
//   Bot,
//   Brain,
//   Car,
//   Code2,
//   Cpu,
//   Download,
//   Mail,
//   Menu,
//   MessageCircle,
//   Play,
//   RadioTower,
//   Shield,
//   Sparkles as SparklesIcon,
//   SquareDashedBottom,
//   X,
//   type LucideIcon,
// } from 'lucide-react';
// import profileImage from './profile.jpg';
// import Resume from './SarathChandra_resume.pdf';
// import cisco from './cisco.png';
// import infosys from './infosys.jpeg';
// import nptel from './nptel.jpeg';
// import nptel2 from './nptel2.png';
// import mongodbCert from './mongodb certification.jpg';
// import salesforceAgentforce from './salesforce agentforce.jpeg';
// import shopnav from './shopnav.png';
// import borrowerInfoExchange from './BorrowerInfoExhange.png';
// import oracleCert from './oracleDataScienceCertificate.png';
// import linktree from './linktree.png';
// import movieMowa from './movieMowa.png';
// import reversee from './reversee.png';

// type Zone = 'skills' | 'vault' | 'gallery' | 'mailbox';
// type QualityMode = 'high' | 'medium' | 'low';

// type DriveState = {
//   forward: boolean;
//   back: boolean;
//   left: boolean;
//   right: boolean;
// };

// type Certification = {
//   image: string;
//   title: string;
//   badge: string;
//   description: string;
// };

// type Project = {
//   image: string;
//   name: string;
//   description: string;
//   link: string;
//   github: string;
// };

// type Reel = {
//   url: string;
//   title: string;
//   caption: string;
//   date: string;
// };

// const skillList = ['Python', 'Data Science', 'AI Video', 'MERN', 'SQL', 'C++', 'Power BI', 'Git / GitHub'];

// const certifications: Certification[] = [
//   {
//     image: mongodbCert,
//     title: 'MongoDB Associate Developer Global Certification',
//     badge: 'Global Certification',
//     description: 'MongoDB development, operations, and schema design.',
//   },
//   {
//     image: salesforceAgentforce,
//     title: 'Salesforce Agentforce Certification',
//     badge: 'Agentforce Specialist',
//     description: 'AI-powered automation and intelligent agent development.',
//   },
//   {
//     image: oracleCert,
//     title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
//     badge: 'Oracle Certified Professional',
//     description: 'Data Science on Oracle Cloud Infrastructure.',
//   },
//   {
//     image: nptel,
//     title: 'NPTEL Data Engineering Certificate',
//     badge: 'Elite',
//     description: 'Data pipelines, ETL processes, and database management.',
//   },
//   {
//     image: nptel2,
//     title: 'NPTEL Introduction to Machine Learning',
//     badge: 'Elite',
//     description: 'Supervised and unsupervised machine learning basics.',
//   },
//   {
//     image: infosys,
//     title: 'Infosys Springboard Internship Certificate',
//     badge: 'Industry Experience',
//     description: 'Hands-on data science projects and enterprise applications.',
//   },
//   {
//     image: cisco,
//     title: 'Cisco Python Essential Certificate',
//     badge: 'Cisco Essential',
//     description: 'Structured Python fundamentals and problem solving.',
//   },
// ];

// const projects: Project[] = [
//   {
//     image: shopnav,
//     name: 'ShopNav',
//     description: 'AI product scraper and comparison engine.',
//     link: 'https://shopnav-price-pilot.vercel.app/',
//     github: 'https://github.com/sarathchandrasimma/shopnav-price-pilot.git',
//   },
//   {
//     image: borrowerInfoExchange,
//     name: 'Borrower Info Exchange',
//     description: 'A dashboard for borrower analytics and management.',
//     link: 'https://bank-borrower-nexus-ai.vercel.app/',
//     github: 'https://github.com/sarathchandrasimma/bank-borrower-nexus-ai.git',
//   },
//   {
//     image: reversee,
//     name: 'Reversee',
//     description: 'Reverse prompt engineering from video and scene context.',
//     link: 'https://colab.research.google.com/drive/1LzUV5tfxMray5jiyVnOPgv1NKdB-UOeD?usp=sharing',
//     github: 'https://github.com/sarathchandrasimma/Reversee.git',
//   },
//   {
//     image: linktree,
//     name: 'AI Mowa Linktree',
//     description: 'A social link platform with themes and analytics.',
//     link: 'https://aimowalinktree.netlify.app/',
//     github: 'https://github.com/sarathchandrasimma/Custom-Link-Tree-for-social-media.git',
//   },
//   {
//     image: movieMowa,
//     name: 'iMovies',
//     description: 'Movie booking flow with selection, payment, and management.',
//     link: 'https://github.com/sarathchandrasimma/MoiveMowa-Tickek-Booking-System.git',
//     github: 'https://github.com/sarathchandrasimma/MoiveMowa-Tickek-Booking-System.git',
//   },
// ];

// const featuredReels: Reel[] = [
//   {
//     url: 'https://www.instagram.com/reel/DXas2k_kUCJ/embed/captioned/',
//     title: 'NTR Neel cinematic fight scene',
//     caption: 'High-energy AI-generated action reel.',
//     date: 'Apr 21, 2026',
//   },
//   {
//     url: 'https://www.instagram.com/reel/DWUEP-2kQAI/embed/captioned/',
//     title: 'NotebookLM workflow breakdown',
//     caption: 'Creator workflow reel with a practical angle.',
//     date: 'Mar 25, 2026',
//   },
//   {
//     url: 'https://www.instagram.com/reel/DVOWD-SEanO/embed/captioned/',
//     title: 'AI dance video bundle',
//     caption: 'A short-form AI dance bundle feature.',
//     date: 'Feb 26, 2026',
//   },
// ];

// function PortfolioExperience() {
//   const [entered, setEntered] = useState(false);
//   const [activeZone, setActiveZone] = useState<Zone>('skills');
//   const [unlockedZones, setUnlockedZones] = useState<Record<Zone, boolean>>({
//     skills: true,
//     vault: false,
//     gallery: false,
//     mailbox: false,
//   });
//   const [quality, setQuality] = useState<QualityMode>('high');
//   const [mobileControls, setMobileControls] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//   const [flashWhite, setFlashWhite] = useState(false);
//   const [sceneFailed, setSceneFailed] = useState(false);
//   const [driveState, setDriveState] = useState<DriveState>({
//     forward: false,
//     back: false,
//     left: false,
//     right: false,
//   });

//   const worldRef = useRef<HTMLDivElement>(null);
//   const splashRef = useRef<HTMLDivElement>(null);

//   const revealZone = (zone: Zone) => {
//     if (zone !== 'skills') {
//       setUnlockedZones((current) => ({ ...current, [zone]: true }));
//     }

//     setActiveZone(zone);
//   };

//   useEffect(() => {
//     const isTouch = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
//     setMobileControls(isTouch);
//   }, []);

//   useEffect(() => {
//     const onKeyDown = (event: KeyboardEvent) => {
//       if (event.code === 'Enter' && !entered) {
//         setEntered(true);
//         return;
//       }

//       setDriveState((current) => {
//         if (event.code === 'KeyW' || event.code === 'ArrowUp') return { ...current, forward: true };
//         if (event.code === 'KeyS' || event.code === 'ArrowDown') return { ...current, back: true };
//         if (event.code === 'KeyA' || event.code === 'ArrowLeft') return { ...current, left: true };
//         if (event.code === 'KeyD' || event.code === 'ArrowRight') return { ...current, right: true };
//         return current;
//       });
//     };

//     const onKeyUp = (event: KeyboardEvent) => {
//       setDriveState((current) => {
//         if (event.code === 'KeyW' || event.code === 'ArrowUp') return { ...current, forward: false };
//         if (event.code === 'KeyS' || event.code === 'ArrowDown') return { ...current, back: false };
//         if (event.code === 'KeyA' || event.code === 'ArrowLeft') return { ...current, left: false };
//         if (event.code === 'KeyD' || event.code === 'ArrowRight') return { ...current, right: false };
//         return current;
//       });
//     };

//     window.addEventListener('keydown', onKeyDown);
//     window.addEventListener('keyup', onKeyUp);
//     return () => {
//       window.removeEventListener('keydown', onKeyDown);
//       window.removeEventListener('keyup', onKeyUp);
//     };
//   }, [entered]);

//   useEffect(() => {
//     if (splashRef.current) {
//       gsap.fromTo(splashRef.current, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' });
//     }
//   }, []);

//   useEffect(() => {
//     if (entered && worldRef.current) {
//       gsap.fromTo(worldRef.current, { opacity: 0, y: 24, scale: 1.02 }, { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out' });
//     }
//   }, [entered]);

//   const setDriveFlag = (key: keyof DriveState, value: boolean) => {
//     setDriveState((current) => ({ ...current, [key]: value }));
//   };

//   const zoneLabel = useMemo(() => {
//     if (activeZone === 'vault') return 'Knowledge Vault';
//     if (activeZone === 'gallery') return 'Sky-Screen Gallery';
//     if (activeZone === 'mailbox') return 'Nexus Mailbox';
//     return 'Skill HUD';
//   }, [activeZone]);

//   const qualityLabel = useMemo(() => {
//     if (quality === 'high') return 'Adaptive high';
//     if (quality === 'medium') return 'Adaptive medium';
//     return 'Adaptive low';
//   }, [quality]);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-universe text-white">
//       <div className="noise-layer" />
//       {!entered ? (
//         <SplashScreen onEnter={() => setEntered(true)} splashRef={splashRef} />
//       ) : (
//         <div ref={worldRef} className="relative min-h-screen">
//           <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-4 sm:px-6">
//             <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 backdrop-blur-xl">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200 shadow-[0_0_35px_rgba(56,189,248,0.3)]">
//                 <Bot size={18} />
//               </div>
//               <div>
//                 <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/65">@ai.mowa</p>
//                 <p className="text-sm text-white/90">Simma Sarath Chandra</p>
//               </div>
//             </div>

//             <div className="pointer-events-auto hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 backdrop-blur-xl md:flex">
//               {(['skills', 'vault', 'gallery', 'mailbox'] as Zone[]).map((zone) => (
//                 <button
//                   key={zone}
//                   onClick={() => revealZone(zone)}
//                   className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${activeZone === zone ? 'bg-cyan-400 text-slate-950' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
//                 >
//                   {zone === 'skills' ? 'Skills' : zone === 'vault' ? 'Vault' : zone === 'gallery' ? 'Gallery' : 'Mailbox'}
//                 </button>
//               ))}
//             </div>

//             <button
//               onClick={() => setShowMenu((current) => !current)}
//               className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-white/85 backdrop-blur-xl md:hidden"
//             >
//               <Menu size={16} />
//               Menu
//             </button>
//           </div>

//           {activeZone !== 'skills' && unlockedZones[activeZone] && (
//             <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col gap-4 p-4 sm:p-6 lg:flex-row lg:items-end lg:justify-between">
//               <div className="pointer-events-auto max-w-xl rounded-[28px] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-2xl shadow-[0_0_60px_rgba(8,15,35,0.45)]">
//                 <div className="flex items-center justify-between gap-4">
//                   <div>
//                     <p className="text-[11px] uppercase tracking-[0.4em] text-cyan-200/70">World status</p>
//                     <h2 className="mt-2 text-2xl font-semibold text-white">
//                       {activeZone === 'vault' ? 'Vault access granted' : activeZone === 'gallery' ? 'Gallery online' : 'Mailbox open'}
//                     </h2>
//                   </div>
//                   <button
//                     onClick={() => revealZone('skills')}
//                     className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100 transition hover:bg-cyan-300/20"
//                   >
//                     Reset HUD
//                   </button>
//                 </div>
//                 <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">
//                   Drive to the Vault for certifications, reach the Gallery for projects and reels, and open the Mailbox for contact.
//                 </p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {skillList.map((skill) => (
//                     <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="mt-4 flex flex-wrap items-center gap-2">
//                   <SocialLink href="https://github.com/sarathchandrasimma" icon={Code2} label="GitHub" />
//                   <SocialLink href="https://www.linkedin.com/in/simma-sarathchandra/" icon={Code2} label="LinkedIn" />
//                   <SocialLink href="https://instagram.com/ai.mowa" icon={Code2} label="Instagram" />
//                   <SocialLink href="mailto:sarathchandra.simma04@gmail.com" icon={Mail} label="Email" />
//                   <SocialLink href={Resume} icon={Download} label="Resume" download />
//                 </div>
//               </div>

//               <div className="pointer-events-auto flex flex-wrap gap-3 rounded-[28px] border border-white/10 bg-slate-950/55 p-4 backdrop-blur-2xl lg:max-w-lg">
//                 <button onClick={() => revealZone('vault')} className={hudButtonClass(activeZone === 'vault')}>
//                   <Shield size={16} /> Vault
//                 </button>
//                 <button onClick={() => revealZone('gallery')} className={hudButtonClass(activeZone === 'gallery')}>
//                   <SparklesIcon size={16} /> Gallery
//                 </button>
//                 <button onClick={() => revealZone('mailbox')} className={hudButtonClass(activeZone === 'mailbox')}>
//                   <Mail size={16} /> Mailbox
//                 </button>
//                 <button onClick={() => revealZone('skills')} className={hudButtonClass(false)}>
//                   <SquareDashedBottom size={16} /> Skills
//                 </button>
//               </div>
//             </div>
//           )}

//           <div className="pointer-events-none absolute inset-x-0 top-[18.5rem] z-10 px-4 sm:px-6 lg:px-10">
//             <div className="mx-auto flex max-w-7xl justify-center lg:justify-end">
//               <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-cyan-100/80 backdrop-blur-xl">
//                 <Play size={13} /> Drive with WASD or arrows. Unlock districts by entering them.
//               </div>
//             </div>
//           </div>

//           <div className="pointer-events-none absolute inset-x-0 top-[18.5rem] z-10 px-4 sm:top-[19.5rem] sm:px-6 lg:px-10">
//             <div className="mx-auto flex max-w-7xl">
//               <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-cyan-100/80 backdrop-blur-xl">
//                 <Play size={13} /> Use WASD or arrow keys. Touch users can use the on-screen pad.
//               </div>
//             </div>
//           </div>

//           {showMenu && (
//             <div className="fixed inset-x-4 top-24 z-30 rounded-[28px] border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
//               <div className="flex items-center justify-between">
//                 <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/70">Navigation</p>
//                 <button onClick={() => setShowMenu(false)} className="rounded-full bg-white/5 p-2 text-white/80">
//                   <X size={16} />
//                 </button>
//               </div>
//               <div className="mt-4 grid grid-cols-2 gap-3">
//                 {(['skills', 'vault', 'gallery', 'mailbox'] as Zone[]).map((zone) => (
//                   <button key={zone} onClick={() => revealZone(zone)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left">
//                     <p className="text-xs uppercase tracking-[0.25em] text-cyan-100/70">{zone === 'skills' ? 'Skills' : zone === 'vault' ? 'Vault' : zone === 'gallery' ? 'Gallery' : 'Mailbox'}</p>
//                     <p className="mt-2 text-sm text-white/85">{zone === 'skills' ? 'Compact list' : zone === 'vault' ? 'Certifications' : zone === 'gallery' ? 'Projects and reels' : 'Contact overlay'}</p>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {mobileControls && <MobileControls driveState={driveState} onDriveChange={setDriveFlag} />}

//           <section className="pointer-events-none absolute inset-0">
//             <SceneErrorBoundary
//               key={sceneFailed ? 'scene-failed' : 'scene-ok'}
//               onError={() => setSceneFailed(true)}
//             >
//               {sceneFailed ? (
//                 <SceneFallback onRetry={() => setSceneFailed(false)} />
//               ) : (
//                 <Canvas
//                   camera={{ position: [0, 4, 14], fov: 54 }}
//                   shadows={quality === 'high'}
//                   dpr={quality === 'high' ? [1, 1.75] : quality === 'medium' ? [1, 1.3] : [1, 1]}
//                 >
//                   <color attach="background" args={['#020816']} />
//                   <fog attach="fog" args={['#020816', 18, 46]} />
//                   <PerformanceMonitor
//                     onDecline={() => setQuality('low')}
//                     onIncline={() => setQuality('high')}
//                   />
//                   <Suspense fallback={<LoaderOverlay />}>
//                     <WorldScene
//                       driveState={driveState}
//                       quality={quality}
//                       onZoneChange={setActiveZone}
//                       onZoneReveal={revealZone}
//                       onEdgeTeleport={() => {
//                         setFlashWhite(true);
//                         window.setTimeout(() => setFlashWhite(false), 420);
//                       }}
//                     />
//                   </Suspense>
//                 </Canvas>
//               )}
//             </SceneErrorBoundary>
//           </section>

//           <section className="pointer-events-none absolute inset-x-0 top-24 z-10 px-4 sm:px-6 lg:px-10">
//             <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between">
//               <div className="pointer-events-auto max-w-2xl rounded-[30px] border border-white/10 bg-slate-950/40 p-5 backdrop-blur-2xl">
//                 <p className="text-[11px] uppercase tracking-[0.45em] text-cyan-100/70">Welcome</p>
//                 <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
//                   Simma Sarath Chandra, built as a cinematic world.
//                 </h1>
//                 <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
//                   A neon-blue universe for @ai.mowa: AI content creator, developer, fitness-driven builder, and visual storyteller.
//                 </p>
//               </div>

//               <div className="pointer-events-auto grid gap-3 rounded-[30px] border border-white/10 bg-slate-950/40 p-5 backdrop-blur-2xl sm:grid-cols-2 lg:w-[26rem]">
//                 <ProfileStat icon={Brain} label="Identity" value="AI Content Creator" />
//                 <ProfileStat icon={Car} label="Mode" value="Drive the world" />
//                 <ProfileStat icon={RadioTower} label="Zone" value={zoneLabel} />
//                 <ProfileStat icon={Cpu} label="Quality" value={qualityLabel} />
//               </div>
//             </div>
//           </section>

//           {activeZone !== 'skills' && unlockedZones[activeZone] && (
//             <ZonePanel zone={activeZone} onClose={() => revealZone('skills')} mobileControls={mobileControls} />
//           )}
//           {activeZone === 'skills' && (
//             <div className="pointer-events-none fixed left-4 top-24 z-30 max-w-xs rounded-[24px] border border-white/10 bg-slate-950/60 p-4 backdrop-blur-2xl sm:left-6">
//               <p className="text-[10px] uppercase tracking-[0.4em] text-cyan-100/70">Home HUD</p>
//               <p className="mt-2 text-sm text-white/85">Use the motion controls to enter a district. The section panel only appears after you arrive.</p>
//             </div>
//           )}
//           <div className={`pointer-events-none fixed inset-0 z-40 bg-white transition-opacity duration-300 ${flashWhite ? 'opacity-100' : 'opacity-0'}`} />
//         </div>
//       )}
//     </div>
//   );
// }

// function SplashScreen({ onEnter, splashRef }: { onEnter: () => void; splashRef: RefObject<HTMLDivElement | null> }) {
//   return (
//     <div ref={splashRef} className="relative flex min-h-screen items-center justify-center px-6">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.22),_transparent_22%),radial-gradient(circle_at_22%_24%,_rgba(34,211,238,0.18),_transparent_18%),radial-gradient(circle_at_82%_18%,_rgba(244,114,182,0.16),_transparent_22%),linear-gradient(180deg,#dff4ff_0%,#a8d9f8_48%,#6f96b9_100%)]" />
//       <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_25%,_rgba(255,255,255,0.18),transparent_12%),radial-gradient(circle_at_78%_20%,_rgba(255,255,255,0.12),transparent_14%),radial-gradient(circle_at_48%_72%,_rgba(255,255,255,0.08),transparent_12%)]" />
//       <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
//         <p className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.45em] text-cyan-100/80">Welcome to the universe of @ai.mowa</p>
//         <h1 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
//           WELCOME TO THE UNIVERSE OF <span className="text-cyan-300">@AI.MOWA</span>
//         </h1>
//         <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
//           Enter a cinematic portfolio where the skills stay compact, the proof is hidden inside districts, and the first second feels like a trailer rather than a website.
//         </p>
//         <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
//           <button
//             onClick={onEnter}
//             className="inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:scale-[1.02]"
//           >
//             Enter <ArrowRight size={16} />
//           </button>
//           <button onClick={onEnter} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.28em] text-white/80 backdrop-blur-xl">
//             <Play size={16} /> Preview
//           </button>
//         </div>
//         <div className="mt-12 grid gap-3 sm:grid-cols-3">
//           <SplashChip icon={Shield} title="Vault-first" text="Certifications and proof only appear when you reach the zone." />
//           <SplashChip icon={Car} title="Driveable core" text="A lightweight car proxy keeps the world fast on budget phones." />
//           <SplashChip icon={MessageCircle} title="Mowa-Bot" text="Your guide floats with a live dialogue prompt." />
//         </div>
//       </div>
//     </div>
//   );
// }

// function SplashChip({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
//   return (
//     <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-4 text-left backdrop-blur-xl">
//       <div className="flex items-center gap-3">
//         <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
//           <Icon size={18} />
//         </div>
//         <div>
//           <p className="text-sm font-semibold text-white">{title}</p>
//           <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Cinematic system</p>
//         </div>
//       </div>
//       <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
//     </div>
//   );
// }

// function LoaderOverlay() {
//   const { progress, item } = useProgress();

//   return (
//     <Html center>
//       <div className="min-w-[18rem] rounded-[28px] border border-white/10 bg-slate-950/90 px-6 py-5 text-center shadow-2xl backdrop-blur-2xl">
//         <p className="text-[11px] uppercase tracking-[0.45em] text-cyan-100/70">Loading the world</p>
//         <p className="mt-3 text-4xl font-semibold text-white">{Math.round(progress)}%</p>
//         <p className="mt-2 text-sm text-slate-300">{item ? `Syncing ${item}` : 'Preparing cinematic assets'}</p>
//       </div>
//     </Html>
//   );
// }

// function WorldScene({
//   driveState,
//   quality,
//   onZoneChange,
//   onZoneReveal,
//   onEdgeTeleport,
// }: {
//   driveState: DriveState;
//   quality: QualityMode;
//   onZoneChange: (zone: Zone) => void;
//   onZoneReveal: (zone: Zone) => void;
//   onEdgeTeleport: () => void;
// }) {
//   const carRef = useRef<RapierRigidBody>(null);
//   const botRef = useRef<Group>(null);
//   const lastZone = useRef<Zone>('skills');
//   const edgeCooldown = useRef(0);
//   const heading = useRef(0);
//   const cruiseSpeed = useRef(0);
//   const { camera } = useThree();

//   const zonePoints = useMemo(
//     () => ({
//       vault: new Vector3(10, 0, -3),
//       gallery: new Vector3(-12, 0, -2),
//       mailbox: new Vector3(0, 0, 14),
//     }),
//     [],
//   );

//   useFrame((state, delta) => {
//     const car = carRef.current;
//     const bot = botRef.current;

//     if (car) {
//       const maxSpeed = quality === 'low' ? 5.2 : quality === 'high' ? 7.4 : 6.4;
//       const acceleration = quality === 'low' ? 7.4 : 9.6;
//       const turnRate = quality === 'low' ? 1.8 : 2.3;
//       const steering = (driveState.right ? 1 : 0) - (driveState.left ? 1 : 0);
//       const throttle = (driveState.forward ? 1 : 0) - (driveState.back ? 1 : 0);

//       heading.current += steering * turnRate * delta;
//       cruiseSpeed.current += throttle * acceleration * delta;
//       cruiseSpeed.current *= 1 - Math.min(1, delta * 1.6);
//       cruiseSpeed.current = Math.max(-maxSpeed * 0.55, Math.min(maxSpeed, cruiseSpeed.current));

//       const position = car.translation();
//       const yaw = heading.current;
//       const forward = new Vector3(Math.sin(yaw), 0, -Math.cos(yaw));
//       const nextPosition = {
//         x: position.x + forward.x * cruiseSpeed.current * delta * 1.8,
//         y: 0.72,
//         z: position.z + forward.z * cruiseSpeed.current * delta * 1.8,
//       };

//       car.setRotation({ x: 0, y: Math.sin(yaw / 2), z: 0, w: Math.cos(yaw / 2) }, true);
//       car.setTranslation(nextPosition, true);
//       car.setLinvel({ x: 0, y: 0, z: 0 }, true);
//       car.setAngvel({ x: 0, y: 0, z: 0 }, true);

//       const followTarget = new Vector3(nextPosition.x + Math.sin(yaw) * 6.5, nextPosition.y + 4.2, nextPosition.z + Math.cos(yaw) * 9.5);
//       camera.position.lerp(followTarget, 0.055);
//       camera.lookAt(nextPosition.x, nextPosition.y + 0.8, nextPosition.z);

//       const current = new Vector3(nextPosition.x, nextPosition.y, nextPosition.z);
//       if (current.distanceTo(zonePoints.vault) < 4 && lastZone.current !== 'vault') {
//         lastZone.current = 'vault';
//         onZoneReveal('vault');
//         onZoneChange('vault');
//       } else if (current.distanceTo(zonePoints.gallery) < 4 && lastZone.current !== 'gallery') {
//         lastZone.current = 'gallery';
//         onZoneReveal('gallery');
//         onZoneChange('gallery');
//       } else if (current.distanceTo(zonePoints.mailbox) < 4 && lastZone.current !== 'mailbox') {
//         lastZone.current = 'mailbox';
//         onZoneReveal('mailbox');
//         onZoneChange('mailbox');
//       }

//       edgeCooldown.current -= delta;
//       if (edgeCooldown.current <= 0 && (Math.abs(position.x) > 24 || Math.abs(position.z) > 24)) {
//         edgeCooldown.current = 2.5;
//         heading.current = 0;
//         cruiseSpeed.current = 0;
//         car.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true);
//         car.setTranslation({ x: 0, y: 0.75, z: 0 }, true);
//         car.setLinvel({ x: 0, y: 0, z: 0 }, true);
//         lastZone.current = 'skills';
//         onZoneChange('skills');
//         onEdgeTeleport();
//       }
//     }

//     if (bot) {
//       const bob = Math.sin(state.clock.elapsedTime * 2.4) * 0.28;
//       bot.position.y = 2.25 + bob;
//       if (carRef.current) {
//         const position = carRef.current.translation();
//         bot.position.x = position.x + Math.sin(state.clock.elapsedTime * 0.9) * 1.3 + 2.2;
//         bot.position.z = position.z - 2.8 + Math.cos(state.clock.elapsedTime * 0.75) * 0.8;
//       }
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={1.15} color="#f8feff" />
//       <hemisphereLight intensity={1.05} color="#fdf7ef" groundColor="#7dd3fc" />
//       <directionalLight
//         position={[10, 18, 8]}
//         intensity={2.8}
//         color="#fff3d6"
//         castShadow={quality === 'high'}
//         shadow-mapSize-width={quality === 'high' ? 2048 : 1024}
//         shadow-mapSize-height={quality === 'high' ? 2048 : 1024}
//       />
//       <pointLight position={[-12, 5, -8]} intensity={18} color="#67e8f9" />
//       <pointLight position={[12, 4, 10]} intensity={12} color="#fb7185" />
//       <Environment preset="dawn" />
//       <Physics gravity={[0, 0, 0]}>
//         <RigidBody type="fixed" colliders={false}>
//           <mesh rotation-x={-Math.PI / 2} receiveShadow>
//             <planeGeometry args={[140, 140, 32, 32]} />
//             <meshStandardMaterial color="#dff4ff" metalness={0.08} roughness={0.95} />
//           </mesh>
//         </RigidBody>

//         <RigidBody ref={carRef} colliders={false} gravityScale={0} linearDamping={8} angularDamping={8} position={[0, 0.75, 0]}>
//           <group>
//             <CarProxy />
//           </group>
//         </RigidBody>
//       </Physics>

//       <BotGuide botRef={botRef} />
//       <DroneFleet />
//       <WorldDistricts />
//       <ContactShadows opacity={0.22} scale={32} blur={2.5} far={14} color="#9ccce6" />
//       <Sparkles count={quality === 'low' ? 90 : 150} scale={34} size={quality === 'low' ? 1.2 : 1.9} speed={0.35} color="#ffffff" />
//     </>
//   );
// }

// function CarProxy() {
//   return (
//     <group>
//       <mesh castShadow receiveShadow position={[0, 0.23, 0]}>
//         <boxGeometry args={[3.2, 0.58, 5.1]} />
//         <meshStandardMaterial color="#0f345f" metalness={0.95} roughness={0.2} emissive="#123d6b" emissiveIntensity={0.3} />
//       </mesh>
//       <mesh castShadow receiveShadow position={[0, 0.82, -0.2]} rotation-x={-0.06}>
//         <boxGeometry args={[2.2, 0.78, 2.6]} />
//         <meshStandardMaterial color="#1d4ed8" metalness={0.82} roughness={0.16} emissive="#0b2f6b" emissiveIntensity={0.18} />
//       </mesh>
//       <mesh position={[0, 1.12, -0.25]} rotation-x={-0.32}>
//         <boxGeometry args={[1.85, 0.58, 1.6]} />
//         <meshStandardMaterial color="#cffafe" transparent opacity={0.55} metalness={0.05} roughness={0.1} />
//       </mesh>
//       <mesh position={[0, 0.42, 2.35]}>
//         <boxGeometry args={[1.05, 0.18, 0.5]} />
//         <meshStandardMaterial color="#fef3c7" emissive="#f59e0b" emissiveIntensity={1.7} />
//       </mesh>
//       <mesh position={[-0.95, 0.4, 2.15]}>
//         <sphereGeometry args={[0.11, 18, 18]} />
//         <meshStandardMaterial color="#f87171" emissive="#f87171" emissiveIntensity={1.8} />
//       </mesh>
//       <mesh position={[0.95, 0.4, 2.15]}>
//         <sphereGeometry args={[0.11, 18, 18]} />
//         <meshStandardMaterial color="#f87171" emissive="#f87171" emissiveIntensity={1.8} />
//       </mesh>
//       {[-1.2, 1.2].map((x) =>
//         [-1.55, 1.55].map((z) => (
//           <group key={`${x}-${z}`} position={[x, -0.02, z]}>
//             <mesh rotation-x={Math.PI / 2}>
//               <cylinderGeometry args={[0.44, 0.44, 0.32, 18]} />
//               <meshStandardMaterial color="#04111f" metalness={0.6} roughness={0.45} />
//             </mesh>
//             <mesh position={[0, 0.2, 0]}>
//               <sphereGeometry args={[0.09, 16, 16]} />
//               <meshStandardMaterial color="#67e8f9" emissive="#67e8f9" emissiveIntensity={2.1} />
//             </mesh>
//           </group>
//         )),
//       )}
//     </group>
//   );
// }

// function BotGuide({ botRef }: { botRef: RefObject<Group | null> }) {
//   return (
//     <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.15}>
//       <group ref={botRef} position={[3, 2.5, -2]}>
//         <mesh castShadow>
//           <sphereGeometry args={[0.42, 30, 30]} />
//           <meshStandardMaterial color="#eff6ff" emissive="#93c5fd" emissiveIntensity={0.9} metalness={0.2} roughness={0.2} />
//         </mesh>
//         <mesh position={[0, -0.25, 0]}>
//           <cylinderGeometry args={[0.12, 0.16, 0.75, 12]} />
//           <meshStandardMaterial color="#0f172a" metalness={0.35} roughness={0.35} />
//         </mesh>
//         <mesh position={[-0.58, 0, 0]} rotation-z={Math.PI / 6}>
//           <boxGeometry args={[1.35, 0.06, 0.14]} />
//           <meshStandardMaterial color="#0f172a" metalness={0.3} roughness={0.4} />
//         </mesh>
//         <mesh position={[0.58, 0, 0]} rotation-z={-Math.PI / 6}>
//           <boxGeometry args={[1.35, 0.06, 0.14]} />
//           <meshStandardMaterial color="#0f172a" metalness={0.3} roughness={0.4} />
//         </mesh>
//         <mesh position={[0, 0.02, 0.68]}>
//           <sphereGeometry args={[0.08, 16, 16]} />
//           <meshStandardMaterial color="#fef08a" emissive="#facc15" emissiveIntensity={2.2} />
//         </mesh>
//         <mesh position={[0, 0.02, -0.68]}>
//           <sphereGeometry args={[0.08, 16, 16]} />
//           <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={2.2} />
//         </mesh>
//         <mesh position={[0, 0.02, 0]}>
//           <torusGeometry args={[0.26, 0.05, 8, 24]} />
//           <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={2} />
//         </mesh>
//       </group>
//       <Html position={[3, 4.05, -2]} center distanceFactor={10}>
//         <div className="max-w-[11rem] rounded-2xl border border-cyan-300/20 bg-slate-950/80 px-4 py-3 text-center text-xs text-slate-100 shadow-2xl backdrop-blur-xl">
//           <p className="font-semibold text-cyan-100">Mowa-Bot</p>
//           <p className="mt-1 text-slate-300">Choose your vehicle. Drive to the Vault. Look up for the latest reels.</p>
//         </div>
//       </Html>
//     </Float>
//   );
// }

// function DroneFleet() {
//   return (
//     <>
//       <OrbitDrone center={[10, 5, -3]} radius={5.5} speed={0.55} color="#f97316" label="Scout-01" />
//       <OrbitDrone center={[-12, 4.5, -2]} radius={4.8} speed={0.7} color="#a78bfa" label="Scout-02" />
//       <OrbitDrone center={[0, 5, 14]} radius={5.2} speed={0.62} color="#22d3ee" label="Scout-03" />
//     </>
//   );
// }

// function OrbitDrone({
//   center,
//   radius,
//   speed,
//   color,
//   label,
// }: {
//   center: [number, number, number];
//   radius: number;
//   speed: number;
//   color: string;
//   label: string;
// }) {
//   const droneRef = useRef<Group>(null);

//   useFrame((state) => {
//     if (!droneRef.current) return;

//     const angle = state.clock.elapsedTime * speed;
//     droneRef.current.position.set(center[0] + Math.cos(angle) * radius, center[1] + Math.sin(state.clock.elapsedTime * 1.3) * 0.5, center[2] + Math.sin(angle) * radius);
//     droneRef.current.rotation.y = -angle + Math.PI / 2;
//   });

//   return (
//     <group ref={droneRef}>
//       <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.8}>
//         <group>
//           <mesh castShadow>
//             <sphereGeometry args={[0.22, 20, 20]} />
//             <meshStandardMaterial color="#e0f2fe" emissive={color} emissiveIntensity={1.1} metalness={0.35} roughness={0.22} />
//           </mesh>
//           <mesh position={[0, -0.18, 0]}>
//             <cylinderGeometry args={[0.07, 0.1, 0.36, 10]} />
//             <meshStandardMaterial color="#0f172a" metalness={0.2} roughness={0.35} />
//           </mesh>
//           {[
//             [0.46, 0],
//             [-0.46, 0],
//             [0, 0.46],
//             [0, -0.46],
//           ].map(([x, z]) => (
//             <group key={`${x}-${z}`} position={[x, 0.02, z]}>
//               <mesh rotation-z={Math.PI / 2}>
//                 <boxGeometry args={[0.55, 0.04, 0.06]} />
//                 <meshStandardMaterial color="#1f2937" metalness={0.25} roughness={0.4} />
//               </mesh>
//               <mesh position={[0, 0.04, 0]}>
//                 <torusGeometry args={[0.1, 0.02, 6, 14]} />
//                 <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.4} />
//               </mesh>
//             </group>
//           ))}
//         </group>
//       </Float>
//       <Html center distanceFactor={14} position={[0, 0.6, 0]}>
//         <div className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/80 backdrop-blur-xl">
//           {label}
//         </div>
//       </Html>
//     </group>
//   );
// }

// function WorldDistricts() {
//   return (
//     <>
//       <District position={[10, 0.85, -3]} title="Knowledge Vault" subtitle="Certifications" accent="#22d3ee" shape="block" />
//       <District position={[-12, 0.85, -2]} title="Sky-Screen Gallery" subtitle="Projects and reels" accent="#818cf8" shape="tower" />
//       <District position={[0, 0.85, 14]} title="Nexus Mailbox" subtitle="Contact overlay" accent="#f472b6" shape="cube" />
//     </>
//   );
// }

// function District({
//   position,
//   title,
//   subtitle,
//   accent,
//   shape,
// }: {
//   position: [number, number, number];
//   title: string;
//   subtitle: string;
//   accent: string;
//   shape: 'block' | 'tower' | 'cube';
// }) {
//   return (
//     <group position={position}>
//       <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
//         {shape === 'tower' ? <cylinderGeometry args={[1.1, 1.25, 3.6, 6]} /> : shape === 'cube' ? <boxGeometry args={[2.8, 2.8, 2.8]} /> : <boxGeometry args={[4.8, 2.2, 3.4]} />}
//         <meshStandardMaterial color="#111827" metalness={0.3} roughness={0.7} />
//       </mesh>
//       <mesh position={[0, 2.8, 0]}>
//         <ringGeometry args={[1.4, 1.8, 24]} />
//         <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={2} />
//       </mesh>
//       <Html position={[0, 3.9, 0]} center distanceFactor={12}>
//         <div className="rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 text-center shadow-xl backdrop-blur-xl">
//           <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/70">{subtitle}</p>
//           <p className="mt-1 text-sm font-semibold text-white">{title}</p>
//         </div>
//       </Html>
//     </group>
//   );
// }

// function ZonePanel({
//   zone,
//   onClose,
//   mobileControls,
// }: {
//   zone: Zone;
//   onClose: () => void;
//   mobileControls?: boolean;
// }) {
//   return (
//     <div className={`pointer-events-auto fixed inset-x-4 ${mobileControls ? 'bottom-28' : 'bottom-4'} z-30 mx-auto max-h-[78vh] max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/88 shadow-[0_0_70px_rgba(2,8,22,0.7)] backdrop-blur-2xl md:right-6 md:inset-x-auto md:top-24 md:bottom-24 md:w-[30rem]`}>
//       <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
//         <div>
//           <p className="text-[10px] uppercase tracking-[0.4em] text-cyan-100/70">
//             {zone === 'skills' ? 'HUD' : zone === 'vault' ? 'Knowledge Vault' : zone === 'gallery' ? 'Sky-Screen Gallery' : 'Nexus Mailbox'}
//           </p>
//           <h3 className="mt-1 text-xl font-semibold text-white">
//             {zone === 'skills'
//               ? 'Compact skill stack'
//               : zone === 'vault'
//                 ? 'Certifications, hidden until discovery'
//                 : zone === 'gallery'
//                   ? 'Projects and reels inside the district'
//                   : 'Contact and social access'}
//           </h3>
//         </div>
//         <button onClick={onClose} className="rounded-full bg-white/5 p-2 text-white/80 transition hover:bg-white/10">
//           <X size={16} />
//         </button>
//       </div>

//       <div className="max-h-[calc(78vh-5rem)] overflow-y-auto px-5 py-5 scrollbar-hidden">
//         {zone === 'skills' && <SkillsPanel />}
//         {zone === 'vault' && <VaultPanel />}
//         {zone === 'gallery' && <GalleryPanel />}
//         {zone === 'mailbox' && <MailboxPanel />}
//       </div>
//     </div>
//   );
// }

// function SkillsPanel() {
//   return (
//     <div className="space-y-4">
//       <p className="text-sm leading-6 text-slate-300">This stays intentionally compact. Skills work best as a fast-read list, not a giant wall.</p>
//       <div className="flex flex-wrap gap-2">
//         {skillList.map((skill) => (
//           <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
//             {skill}
//           </span>
//         ))}
//       </div>
//       <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
//         <MiniRow icon={Code2} title="Core" text="Python, SQL, C++, MERN" />
//         <MiniRow icon={SparklesIcon} title="Creative" text="AI reels, content, editing, storytelling" />
//         <MiniRow icon={Shield} title="Workflow" text="Git, GitHub, data handling, deployment" />
//       </div>
//     </div>
//   );
// }

// function VaultPanel() {
//   return (
//     <div className="space-y-4">
//       {certifications.map((cert) => (
//         <div key={cert.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
//           <img src={cert.image} alt={cert.title} className="h-36 w-full object-cover" />
//           <div className="p-4">
//             <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-100/80">
//               {cert.badge}
//             </p>
//             <h4 className="mt-3 text-lg font-semibold text-white">{cert.title}</h4>
//             <p className="mt-2 text-sm leading-6 text-slate-300">{cert.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function GalleryPanel() {
//   return (
//     <div className="space-y-4">
//       <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-4">
//         <div className="flex items-center justify-between gap-3">
//           <div>
//             <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-100/70">Featured reels</p>
//             <h4 className="mt-1 text-lg font-semibold text-white">Latest Instagram posts</h4>
//           </div>
//           <a href="https://www.instagram.com/ai.mowa/reels/" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.25em] text-cyan-100/80 transition hover:text-cyan-100">
//             Open profile
//           </a>
//         </div>
//         <div className="grid gap-4 lg:grid-cols-3">
//           {featuredReels.map((reel) => (
//             <div key={reel.url} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/55 shadow-lg">
//               <div className="aspect-[9/16] bg-black">
//                 <iframe
//                   src={reel.url}
//                   title={reel.title}
//                   className="h-full w-full border-0"
//                   loading="lazy"
//                   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                 />
//               </div>
//               <div className="space-y-2 p-4">
//                 <div className="flex items-center justify-between gap-3">
//                   <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-100/70">{reel.date}</p>
//                   <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-white/70">
//                     Instagram
//                   </span>
//                 </div>
//                 <h5 className="text-sm font-semibold text-white">{reel.title}</h5>
//                 <p className="text-sm leading-6 text-slate-300">{reel.caption}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {projects.map((project) => (
//         <div
//           key={project.name}
//           className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-cyan-300/30 hover:bg-white/10"
//         >
//           <img src={project.image} alt={project.name} className="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
//           <div className="p-4">
//             <div className="flex items-center justify-between gap-3">
//               <h4 className="text-lg font-semibold text-white">{project.name}</h4>
//               <ArrowRight size={16} className="text-cyan-200" />
//             </div>
//             <p className="mt-2 text-sm leading-6 text-slate-300">{project.description}</p>
//             <div className="mt-4 flex flex-wrap gap-2">
//               <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/20">
//                 <ArrowRight size={14} /> Live
//               </a>
//               <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10">
//                 <Code2 size={14} /> Source
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 sm:grid-cols-2">
//         <MiniBadge icon={Code2} label="Reels" value="Latest AI content" />
//         <MiniBadge icon={SparklesIcon} label="Visuals" value="@ai.mowa" />
//       </div>
//     </div>
//   );
// }

// function MailboxPanel() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const sendMail = () => {
//     const subject = encodeURIComponent(`Portfolio message from ${name || 'visitor'}`);
//     const body = encodeURIComponent(`${message}\n\nReply to: ${email || 'not provided'}`);
//     window.location.href = `mailto:sarathchandra.simma04@gmail.com?subject=${subject}&body=${body}`;
//   };

//   return (
//     <div className="space-y-5">
//       <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 sm:grid-cols-[96px_1fr]">
//         <img src={profileImage} alt="Simma Sarath Chandra" className="h-24 w-24 rounded-3xl object-cover" />
//         <div>
//           <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-100/70">Simma Sarath Chandra</p>
//           <h4 className="mt-2 text-2xl font-semibold text-white">@ai.mowa</h4>
//           <p className="mt-2 text-sm leading-6 text-slate-300">AI content creator, developer, and fitness-driven builder.</p>
//         </div>
//       </div>

//       <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
//         <input
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           placeholder="Your name"
//           className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/30"
//         />
//         <input
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           placeholder="Your email"
//           className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/30"
//         />
//         <textarea
//           value={message}
//           onChange={(event) => setMessage(event.target.value)}
//           placeholder="Tell me what you want to build"
//           rows={4}
//           className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/30"
//         />
//         <div className="flex flex-wrap gap-3">
//           <button
//             onClick={sendMail}
//             className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:scale-[1.01]"
//           >
//             <Mail size={16} /> Send mail
//           </button>
//           <a
//             href={Resume}
//             download
//             className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.25em] text-white/80 transition hover:bg-white/10"
//           >
//             <Download size={16} /> Resume
//           </a>
//         </div>
//       </div>

//       <div className="grid gap-3 sm:grid-cols-2">
//         <ContactCard icon={Mail} label="Email" value="sarathchandra.simma04@gmail.com" href="mailto:sarathchandra.simma04@gmail.com" />
//         <ContactCard icon={Code2} label="GitHub" value="sarathchandrasimma" href="https://github.com/sarathchandrasimma" />
//         <ContactCard icon={Code2} label="LinkedIn" value="simma-sarathchandra" href="https://www.linkedin.com/in/simma-sarathchandra/" />
//         <ContactCard icon={MessageCircle} label="Instagram" value="ai.mowa" href="https://instagram.com/ai.mowa" />
//       </div>

//       <div className="grid gap-2 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
//         <p className="font-medium text-white">Content channels</p>
//         <QuickLink href="https://yt.oia.bio/Ai-mowa" icon={Code2} label="Ai Mowa" />
//         <QuickLink href="https://www.youtube.com/@GodsPlan-Ai" icon={Code2} label="GodsPlanAI" />
//         <QuickLink href="https://www.youtube.com/@CelebrityCrushHub" icon={Code2} label="CelebrityCrushHub" />
//         <QuickLink href="https://youtube.com/@sarath_chandra" icon={Code2} label="Sarath" />
//       </div>
//     </div>
//   );
// }

// function ContactCard({
//   icon: Icon,
//   label,
//   value,
//   href,
// }: {
//   icon: LucideIcon;
//   label: string;
//   value: string;
//   href: string;
// }) {
//   return (
//     <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noreferrer'} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition hover:bg-white/10">
//       <div className="flex items-center gap-3">
//         <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
//           <Icon size={16} />
//         </div>
//         <div>
//           <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{label}</p>
//           <p className="mt-1 text-sm text-white/90">{value}</p>
//         </div>
//       </div>
//     </a>
//   );
// }

// function QuickLink({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
//   return (
//     <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10">
//       <Icon size={14} /> {label}
//     </a>
//   );
// }

// function MiniRow({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
//   return (
//     <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-3">
//       <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
//         <Icon size={16} />
//       </div>
//       <div>
//         <p className="text-sm font-semibold text-white">{title}</p>
//         <p className="text-sm text-slate-300">{text}</p>
//       </div>
//     </div>
//   );
// }

// function MiniBadge({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
//   return (
//     <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-3">
//       <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
//         <Icon size={16} />
//       </div>
//       <div>
//         <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{label}</p>
//         <p className="mt-1 text-sm text-white/90">{value}</p>
//       </div>
//     </div>
//   );
// }

// function ProfileStat({
//   icon: Icon,
//   label,
//   value,
// }: {
//   icon: LucideIcon;
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4 backdrop-blur-xl">
//       <div className="flex items-center gap-3">
//         <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
//           <Icon size={18} />
//         </div>
//         <div>
//           <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{label}</p>
//           <p className="mt-1 text-sm font-semibold text-white">{value}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function MobileControls({
//   driveState,
//   onDriveChange,
// }: {
//   driveState: DriveState;
//   onDriveChange: (key: keyof DriveState, value: boolean) => void;
// }) {
//   return (
//     <div className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2 md:hidden">
//       <div className="grid grid-cols-3 gap-2 rounded-[28px] border border-white/10 bg-slate-950/70 p-3 backdrop-blur-2xl">
//         <div />
//         <TouchKey active={driveState.forward} label="Drive" onDown={() => onDriveChange('forward', true)} onUp={() => onDriveChange('forward', false)} />
//         <div />
//         <TouchKey active={driveState.left} label="Turn L" onDown={() => onDriveChange('left', true)} onUp={() => onDriveChange('left', false)} />
//         <TouchKey active={driveState.back} label="Reverse" onDown={() => onDriveChange('back', true)} onUp={() => onDriveChange('back', false)} />
//         <TouchKey active={driveState.right} label="Turn R" onDown={() => onDriveChange('right', true)} onUp={() => onDriveChange('right', false)} />
//       </div>
//     </div>
//   );
// }

// function TouchKey({
//   active,
//   label,
//   onDown,
//   onUp,
// }: {
//   active: boolean;
//   label: string;
//   onDown: () => void;
//   onUp: () => void;
// }) {
//   return (
//     <button
//       onPointerDown={onDown}
//       onPointerUp={onUp}
//       onPointerLeave={onUp}
//       className={`min-h-14 min-w-14 rounded-2xl border px-4 py-3 text-xs uppercase tracking-[0.25em] transition ${active ? 'border-cyan-300/40 bg-cyan-300 text-slate-950' : 'border-white/10 bg-white/5 text-white/80'}`}
//     >
//       {label}
//     </button>
//   );
// }

// function SocialLink({
//   href,
//   icon: Icon,
//   label,
//   download,
// }: {
//   href: string;
//   icon: LucideIcon;
//   label: string;
//   download?: boolean;
// }) {
//   return (
//     <a
//       href={href}
//       target={href.startsWith('mailto:') || download ? undefined : '_blank'}
//       rel={href.startsWith('mailto:') || download ? undefined : 'noreferrer'}
//       download={download}
//       className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10 hover:text-white"
//     >
//       <Icon size={14} /> {label}
//     </a>
//   );
// }

// function hudButtonClass(active: boolean) {
//   return `inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition ${active ? 'bg-cyan-300 text-slate-950' : 'border border-white/10 bg-white/5 text-white/80 hover:bg-white/10'}`;
// }

// class SceneErrorBoundary extends Component<{ children: ReactNode; onError: () => void }, { hasError: boolean }> {
//   constructor(props: { children: ReactNode; onError: () => void }) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch() {
//     this.props.onError();
//   }

//   render() {
//     if (this.state.hasError) {
//       return <SceneFallback onRetry={this.props.onError} />;
//     }

//     return this.props.children;
//   }
// }

// function SceneFallback({ onRetry }: { onRetry: () => void }) {
//   return (
//     <div className="flex h-full items-center justify-center px-6 py-16">
//       <div className="max-w-2xl rounded-[32px] border border-white/10 bg-slate-950/80 p-6 text-center shadow-2xl backdrop-blur-2xl">
//         <p className="text-[11px] uppercase tracking-[0.45em] text-cyan-100/70">3D fallback</p>
//         <h2 className="mt-3 text-3xl font-semibold text-white">The cinematic scene switched to safe mode.</h2>
//         <p className="mt-4 text-sm leading-6 text-slate-300">
//           Your browser is hitting a runtime issue in the 3D layer, so this fallback keeps the portfolio visible while the rest of the experience stays usable.
//         </p>
//         <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
//           <button onClick={onRetry} className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950">
//             Retry 3D
//           </button>
//           <a href="mailto:sarathchandra.simma04@gmail.com" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.25em] text-white/80">
//             Contact
//           </a>
//         </div>
//         <div className="mt-6 grid gap-3 sm:grid-cols-3">
//           <MiniBadge icon={Brain} label="Identity" value="Simma Sarath Chandra" />
//           <MiniBadge icon={Shield} label="Brand" value="@ai.mowa" />
//           <MiniBadge icon={RadioTower} label="Focus" value="AI content + dev" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortfolioExperience;


/**
 * AI MOWA PORTFOLIO — PortfolioExperience.tsx
 * Drop this file into your src/ replacing the existing one.
 * All asset imports (images, PDF, video) are preserved — just add your
 * intro video as  src/intro-video.mp4  and fitness video as  src/fitness-video.mp4
 * before building.  Placeholders are shown until then.
 */

// import {
//   useEffect,
//   useRef,
//   useState,
//   useCallback,
// } from 'react';
// import { gsap } from 'gsap';
// import {
//   Download,
//   Mail,
//   Play,
//   Pause,
//   ExternalLink,
//   Camera,
//   Video,
//   ChevronRight,
// } from 'lucide-react';

// // ─── Asset imports (keep exactly as your project has them) ───────────────────
// import profileImage from './profile.jpg';
// import Resume from './SarathChandra_resume.pdf';
// import cisco from './cisco.png';
// import infosys from './infosys.jpeg';
// import nptel from './nptel.jpeg';
// import nptel2 from './nptel2.png';
// import mongodbCert from './mongodb certification.jpg';
// import salesforceAgentforce from './salesforce agentforce.jpeg';
// import linktree from './linktree.png';
// import oracleCert from './oracleDataScienceCertificate.png';

// // ─── Types ───────────────────────────────────────────────────────────────────

// type ThemeId = 'crimson' | 'glass' | 'jade' | 'violet';

// interface Theme {
//   id: ThemeId;
//   name: string;
//   bg: string;
//   surface: string;
//   surfaceAlt: string;
//   border: string;
//   accent1: string;
//   accent2: string;
//   accent3: string;
//   text: string;
//   textMuted: string;
//   glow: string;
//   loaderBg: string;
//   loaderGradient: string;
// }

// // ─── Theme Definitions ───────────────────────────────────────────────────────

// const THEMES: Record<ThemeId, Theme> = {
//   crimson: {
//     id: 'crimson',
//     name: 'Crimson Void',
//     bg: '#06000A',
//     surface: 'rgba(30,0,0,0.55)',
//     surfaceAlt: 'rgba(18,0,0,0.7)',
//     border: 'rgba(255,30,30,0.15)',
//     accent1: '#FF2233',
//     accent2: '#FF6622',
//     accent3: '#FF0044',
//     text: '#FFFFFF',
//     textMuted: 'rgba(255,200,200,0.6)',
//     glow: 'rgba(255,20,40,0.35)',
//     loaderBg: 'radial-gradient(ellipse at 50% 0%, #3A0010 0%, #06000A 65%)',
//     loaderGradient: 'linear-gradient(135deg, #FF2233, #8B0000)',
//   },
//   glass: {
//     id: 'glass',
//     name: 'Glass Chrome',
//     bg: '#050508',
//     surface: 'rgba(255,255,255,0.04)',
//     surfaceAlt: 'rgba(0,240,255,0.04)',
//     border: 'rgba(0,255,255,0.18)',
//     accent1: '#00FFFF',
//     accent2: '#FF00CC',
//     accent3: '#FFFFFF',
//     text: '#FFFFFF',
//     textMuted: 'rgba(180,240,255,0.6)',
//     glow: 'rgba(0,255,255,0.3)',
//     loaderBg: 'radial-gradient(ellipse at 50% 0%, #001520 0%, #050508 65%)',
//     loaderGradient: 'linear-gradient(135deg, #00FFFF, #FF00CC)',
//   },
//   jade: {
//     id: 'jade',
//     name: 'Liquid Jade',
//     bg: '#000D06',
//     surface: 'rgba(0,40,20,0.55)',
//     surfaceAlt: 'rgba(0,25,12,0.7)',
//     border: 'rgba(0,255,100,0.15)',
//     accent1: '#00FF88',
//     accent2: '#00DDAA',
//     accent3: '#7FFFD4',
//     text: '#FFFFFF',
//     textMuted: 'rgba(150,255,200,0.6)',
//     glow: 'rgba(0,255,120,0.3)',
//     loaderBg: 'radial-gradient(ellipse at 50% 0%, #003820 0%, #000D06 65%)',
//     loaderGradient: 'linear-gradient(135deg, #00FF88, #007A3D)',
//   },
//   violet: {
//     id: 'violet',
//     name: 'Void Violet',
//     bg: '#04000E',
//     surface: 'rgba(20,0,40,0.55)',
//     surfaceAlt: 'rgba(12,0,28,0.7)',
//     border: 'rgba(140,0,255,0.18)',
//     accent1: '#9D00FF',
//     accent2: '#CC44FF',
//     accent3: '#FF88FF',
//     text: '#FFFFFF',
//     textMuted: 'rgba(200,160,255,0.6)',
//     glow: 'rgba(140,0,255,0.35)',
//     loaderBg: 'radial-gradient(ellipse at 50% 0%, #1A0040 0%, #04000E 65%)',
//     loaderGradient: 'linear-gradient(135deg, #9D00FF, #4B0082)',
//   },
// };

// const THEME_IDS: ThemeId[] = ['crimson', 'glass', 'jade', 'violet'];

// const pickRandomTheme = (): ThemeId =>
//   THEME_IDS[Math.floor(Math.random() * THEME_IDS.length)];

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const SKILLS = [
//   'Python', 'Data Science', 'AI Content Creation', 'AI Filmmaking',
//   'MERN Stack', 'SQL', 'C++', 'Power BI', 'Git / GitHub',
//   'AI Tutor', 'Video Editing', 'Machine Learning', 'MongoDB',
//   'Salesforce AI', 'Oracle Cloud', 'Data Engineering',
//   'React', 'Node.js', 'Prompt Engineering', 'Stable Diffusion',
//   'Seedance', 'Short-form Video', 'Storytelling',
// ];

// const CERTIFICATIONS = [
//   {
//     image: mongodbCert,
//     title: 'MongoDB Associate Developer',
//     badge: 'Global Certification',
//   },
//   {
//     image: salesforceAgentforce,
//     title: 'Salesforce Agentforce',
//     badge: 'Agentforce Specialist',
//   },
//   {
//     image: oracleCert,
//     title: 'Oracle Cloud Data Science',
//     badge: 'Oracle Certified',
//   },
//   { image: nptel, title: 'NPTEL Data Engineering', badge: 'Elite' },
//   { image: nptel2, title: 'NPTEL Machine Learning', badge: 'Elite' },
//   {
//     image: infosys,
//     title: 'Infosys Springboard',
//     badge: 'Industry Experience',
//   },
//   { image: cisco, title: 'Cisco Python Essential', badge: 'Cisco' },
// ];

// // ─── CSS Injection ────────────────────────────────────────────────────────────

// const GLOBAL_CSS = `
//   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500&display=swap');

//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//   html { scroll-behavior: smooth; }

//   body {
//     font-family: 'Inter', sans-serif;
//     background: #050508;
//     color: #fff;
//     overflow-x: hidden;
//     -webkit-font-smoothing: antialiased;
//   }

//   ::-webkit-scrollbar { width: 4px; }
//   ::-webkit-scrollbar-track { background: transparent; }
//   ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 2px; }

//   @keyframes ticker {
//     0%   { transform: translateX(0); }
//     100% { transform: translateX(-50%); }
//   }

//   @keyframes float-slow {
//     0%, 100% { transform: translateY(0px); }
//     50%       { transform: translateY(-14px); }
//   }

//   @keyframes pulse-ring {
//     0%   { transform: scale(0.95); opacity: 0.7; }
//     70%  { transform: scale(1.08); opacity: 0; }
//     100% { transform: scale(0.95); opacity: 0; }
//   }

//   @keyframes grain {
//     0%, 100% { transform: translate(0,0); }
//     10%       { transform: translate(-2%,-3%); }
//     30%       { transform: translate(2%,-1%); }
//     50%       { transform: translate(-1%,2%); }
//     70%       { transform: translate(3%,1%); }
//     90%       { transform: translate(-1%,-2%); }
//   }

//   .noise::after {
//     content: '';
//     position: fixed;
//     inset: -50%;
//     width: 200%;
//     height: 200%;
//     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
//     background-size: 180px 180px;
//     opacity: 0.045;
//     pointer-events: none;
//     animation: grain 7s steps(10) infinite;
//     z-index: 9998;
//   }

//   @media (prefers-reduced-motion: reduce) {
//     * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
//   }
// `;

// function injectCSS(css: string) {
//   if (typeof document === 'undefined') return;
//   const id = 'aimowa-global';
//   if (document.getElementById(id)) return;
//   const tag = document.createElement('style');
//   tag.id = id;
//   tag.textContent = css;
//   document.head.appendChild(tag);
// }

// // ─── Theme CSS variables ──────────────────────────────────────────────────────

// function applyThemeVars(theme: Theme) {
//   const r = document.documentElement;
//   r.style.setProperty('--bg', theme.bg);
//   r.style.setProperty('--surface', theme.surface);
//   r.style.setProperty('--surface-alt', theme.surfaceAlt);
//   r.style.setProperty('--border', theme.border);
//   r.style.setProperty('--a1', theme.accent1);
//   r.style.setProperty('--a2', theme.accent2);
//   r.style.setProperty('--a3', theme.accent3);
//   r.style.setProperty('--text', theme.text);
//   r.style.setProperty('--text-muted', theme.textMuted);
//   r.style.setProperty('--glow', theme.glow);
//   r.style.setProperty('--loader-bg', theme.loaderBg);
//   r.style.setProperty('--loader-grad', theme.loaderGradient);
//   document.body.style.background = theme.bg;
// }

// // ─── Loader Component ─────────────────────────────────────────────────────────

// function Loader({ theme, onDone }: { theme: Theme; onDone: () => void }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const subRef = useRef<HTMLParagraphElement>(null);
//   const barRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         gsap.to(ref.current, {
//           opacity: 0,
//           duration: 0.55,
//           ease: 'power2.inOut',
//           onComplete: onDone,
//         });
//       },
//     });

//     tl.fromTo(
//       titleRef.current,
//       { opacity: 0, y: 32, filter: 'blur(12px)' },
//       { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out' },
//     )
//       .fromTo(
//         subRef.current,
//         { opacity: 0, y: 16 },
//         { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
//         '-=0.4',
//       )
//       .fromTo(
//         barRef.current,
//         { scaleX: 0, transformOrigin: 'left center' },
//         { scaleX: 1, duration: 2.2, ease: 'power1.inOut' },
//         '-=0.3',
//       )
//       .addPause('+=0.3');
//   }, [onDone]);

//   const loaderStyle: React.CSSProperties = {
//     position: 'fixed',
//     inset: 0,
//     zIndex: 9999,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: theme.loaderBg,
//     gap: '0',
//   };

//   return (
//     <div ref={ref} style={loaderStyle}>
//       {/* Animated radial halo */}
//       <div
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%,-50%)',
//           width: 500,
//           height: 500,
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
//           animation: 'pulse-ring 3s ease-out infinite',
//           pointerEvents: 'none',
//         }}
//       />

//       <div ref={titleRef} style={{ textAlign: 'center', position: 'relative' }}>
//         <h1
//           style={{
//             fontFamily: 'Syne, sans-serif',
//             fontSize: 'clamp(4rem, 14vw, 10rem)',
//             fontWeight: 800,
//             letterSpacing: '-0.03em',
//             lineHeight: 1,
//             background: theme.loaderGradient,
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text',
//           }}
//         >
//           AI.MOWA
//         </h1>
//         <p
//           ref={subRef}
//           style={{
//             fontFamily: 'Syne, sans-serif',
//             fontSize: 'clamp(1rem, 3vw, 1.6rem)',
//             fontWeight: 400,
//             color: theme.textMuted,
//             letterSpacing: '0.25em',
//             marginTop: '0.5rem',
//             textAlign: 'right',
//             paddingRight: '0.15em',
//           }}
//         >
//           Sarath Chandra
//         </p>
//       </div>

//       {/* Progress bar */}
//       <div
//         style={{
//           marginTop: '3.5rem',
//           width: 'min(320px, 72vw)',
//           height: 2,
//           background: theme.border,
//           borderRadius: 2,
//           overflow: 'hidden',
//         }}
//       >
//         <div
//           ref={barRef}
//           style={{
//             height: '100%',
//             background: theme.loaderGradient,
//             borderRadius: 2,
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// // ─── Theme Switcher ───────────────────────────────────────────────────────────

// function ThemeSwitcher({
//   current,
//   onChange,
// }: {
//   current: ThemeId;
//   onChange: (t: ThemeId) => void;
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div style={{ position: 'relative' }}>
//       <button
//         onClick={() => setOpen((o) => !o)}
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: 8,
//           padding: '8px 16px',
//           borderRadius: 999,
//           border: '1px solid var(--border)',
//           background: 'var(--surface)',
//           color: 'var(--text)',
//           cursor: 'pointer',
//           fontSize: 12,
//           letterSpacing: '0.08em',
//           backdropFilter: 'blur(12px)',
//           transition: 'background 0.2s',
//         }}
//       >
//         <span
//           style={{
//             width: 10,
//             height: 10,
//             borderRadius: '50%',
//             background: THEMES[current].accent1,
//             boxShadow: `0 0 8px ${THEMES[current].accent1}`,
//             display: 'inline-block',
//           }}
//         />
//         Theme
//       </button>

//       {open && (
//         <div
//           style={{
//             position: 'absolute',
//             top: 'calc(100% + 8px)',
//             right: 0,
//             background: 'rgba(8,8,14,0.92)',
//             border: '1px solid var(--border)',
//             borderRadius: 16,
//             padding: 8,
//             backdropFilter: 'blur(24px)',
//             zIndex: 1000,
//             minWidth: 160,
//           }}
//         >
//           {THEME_IDS.map((id) => (
//             <button
//               key={id}
//               onClick={() => {
//                 onChange(id);
//                 setOpen(false);
//               }}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 10,
//                 width: '100%',
//                 padding: '8px 12px',
//                 borderRadius: 10,
//                 border: 'none',
//                 background: current === id ? 'var(--surface)' : 'transparent',
//                 color: '#fff',
//                 cursor: 'pointer',
//                 fontSize: 13,
//                 textAlign: 'left',
//                 transition: 'background 0.15s',
//               }}
//             >
//               <span
//                 style={{
//                   width: 10,
//                   height: 10,
//                   borderRadius: '50%',
//                   background: THEMES[id].accent1,
//                   display: 'inline-block',
//                   flexShrink: 0,
//                 }}
//               />
//               {THEMES[id].name}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── Navbar ───────────────────────────────────────────────────────────────────

// const NAV_LINKS = [
//   { label: 'About', href: '#hero' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Certs', href: '#certs' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Fitness', href: '#fitness' },
//   { label: 'Contact', href: '#contact' },
// ];

// function Navbar({
//   currentTheme,
//   onThemeChange,
// }: {
//   currentTheme: ThemeId;
//   onThemeChange: (t: ThemeId) => void;
// }) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const navStyle: React.CSSProperties = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 200,
//     padding: '12px 24px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     transition: 'background 0.3s, backdrop-filter 0.3s',
//     background: scrolled ? 'rgba(4,4,10,0.75)' : 'transparent',
//     backdropFilter: scrolled ? 'blur(18px)' : 'none',
//     borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
//   };

//   return (
//     <nav style={navStyle}>
//       {/* Logo */}
//       <a
//         href="#hero"
//         style={{
//           fontFamily: 'Syne, sans-serif',
//           fontWeight: 800,
//           fontSize: 20,
//           letterSpacing: '-0.02em',
//           background: 'var(--loader-grad)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           backgroundClip: 'text',
//           textDecoration: 'none',
//         }}
//       >
//         AI.MOWA
//       </a>

//       {/* Desktop nav */}
//       <div
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: 4,
//         }}
//         className="desktop-nav"
//       >
//         {NAV_LINKS.map((l) => (
//           <a
//             key={l.href}
//             href={l.href}
//             style={{
//               padding: '6px 14px',
//               borderRadius: 999,
//               color: 'var(--text-muted)',
//               textDecoration: 'none',
//               fontSize: 13,
//               letterSpacing: '0.04em',
//               transition: 'color 0.2s',
//             }}
//             onMouseEnter={(e) =>
//               ((e.target as HTMLElement).style.color = 'var(--text)')
//             }
//             onMouseLeave={(e) =>
//               ((e.target as HTMLElement).style.color = 'var(--text-muted)')
//             }
//           >
//             {l.label}
//           </a>
//         ))}
//         <div style={{ marginLeft: 8 }}>
//           <ThemeSwitcher current={currentTheme} onChange={onThemeChange} />
//         </div>
//       </div>
//     </nav>
//   );
// }

// // ─── Hero Section ─────────────────────────────────────────────────────────────

// /**
//  * VIDEO PLACEHOLDER NOTE:
//  * Replace the <div> placeholder inside HeroSection with:
//  *   import introVideo from './intro-video.mp4';
//  *   <video src={introVideo} ... />
//  * once you have the file.
//  */
// function HeroSection() {
//   const [playing, setPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const togglePlay = useCallback(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     if (v.paused) {
//       v.play();
//       setPlaying(true);
//     } else {
//       v.pause();
//       setPlaying(false);
//     }
//   }, []);

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo(
//       '.hero-text-block',
//       { opacity: 0, x: -40 },
//       { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' },
//     ).fromTo(
//       '.hero-video-block',
//       { opacity: 0, x: 40 },
//       { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' },
//       '-=0.6',
//     );
//   }, []);

//   return (
//     <section
//       id="hero"
//       ref={sectionRef}
//       style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         padding: '100px 24px 60px',
//         maxWidth: 1200,
//         margin: '0 auto',
//         gap: 60,
//         flexWrap: 'wrap',
//       }}
//     >
//       {/* Left: text */}
//       <div
//         className="hero-text-block"
//         style={{ flex: '1 1 340px', opacity: 0 }}
//       >
//         <p
//           style={{
//             fontSize: 12,
//             letterSpacing: '0.35em',
//             color: 'var(--a1)',
//             marginBottom: 20,
//             fontFamily: 'Inter, sans-serif',
//             fontWeight: 500,
//           }}
//         >
//           @AI.MOWA
//         </p>

//         <h1
//           style={{
//             fontFamily: 'Syne, sans-serif',
//             fontSize: 'clamp(3rem, 8vw, 6rem)',
//             fontWeight: 800,
//             letterSpacing: '-0.04em',
//             lineHeight: 0.95,
//             color: 'var(--text)',
//             marginBottom: 12,
//           }}
//         >
//           AI.MOWA
//         </h1>

//         <p
//           style={{
//             fontFamily: 'Syne, sans-serif',
//             fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
//             fontWeight: 600,
//             color: 'var(--a1)',
//             letterSpacing: '0.08em',
//             marginBottom: 24,
//           }}
//         >
//           Sarath Chandra
//         </p>

//         <p
//           style={{
//             fontSize: 14,
//             color: 'var(--text-muted)',
//             letterSpacing: '0.04em',
//             lineHeight: 1.7,
//             maxWidth: 380,
//             marginBottom: 36,
//           }}
//         >
//           AI Content Creator &nbsp;|&nbsp; Data Science Student &nbsp;|&nbsp; AI Enthusiast
//         </p>

//         <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
//           <a
//             href={Resume}
//             download
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: 8,
//               padding: '12px 24px',
//               borderRadius: 999,
//               background: 'var(--loader-grad)',
//               color: '#000',
//               fontWeight: 700,
//               fontSize: 13,
//               letterSpacing: '0.08em',
//               textDecoration: 'none',
//               boxShadow: `0 0 24px var(--glow)`,
//               transition: 'transform 0.2s',
//             }}
//             onMouseEnter={(e) =>
//               ((e.currentTarget as HTMLElement).style.transform = 'scale(1.03)')
//             }
//             onMouseLeave={(e) =>
//               ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')
//             }
//           >
//             <Download size={14} /> Resume
//           </a>
//           <a
//             href="#contact"
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: 8,
//               padding: '12px 24px',
//               borderRadius: 999,
//               border: '1px solid var(--border)',
//               background: 'var(--surface)',
//               color: 'var(--text)',
//               fontWeight: 500,
//               fontSize: 13,
//               letterSpacing: '0.08em',
//               textDecoration: 'none',
//               backdropFilter: 'blur(12px)',
//               transition: 'background 0.2s',
//             }}
//           >
//             <Mail size={14} /> Contact
//           </a>
//         </div>
//       </div>

//       {/* Right: video */}
//       <div
//         className="hero-video-block"
//         style={{
//           flex: '1 1 300px',
//           position: 'relative',
//           opacity: 0,
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       >
//         {/* Glow ring */}
//         <div
//           style={{
//             position: 'absolute',
//             inset: -20,
//             borderRadius: '50%',
//             background: `radial-gradient(circle, var(--glow) 0%, transparent 70%)`,
//             animation: 'float-slow 5s ease-in-out infinite',
//             pointerEvents: 'none',
//           }}
//         />

//         <div
//           style={{
//             position: 'relative',
//             width: 'min(340px, 88vw)',
//             aspectRatio: '9/16',
//             borderRadius: 28,
//             overflow: 'hidden',
//             border: '1px solid var(--border)',
//             boxShadow: `0 0 60px var(--glow)`,
//             background: 'var(--surface-alt)',
//             cursor: 'pointer',
//           }}
//           onClick={togglePlay}
//         >
//           {/*
//            * ── VIDEO PLACEHOLDER ──────────────────────────────────────────
//            * Once you have  src/intro-video.mp4  in your project, replace
//            * this entire comment block + the placeholder div below with:
//            *
//            *   import introVideo from './intro-video.mp4';
//            *   ...
//            *   <video
//            *     ref={videoRef}
//            *     src={introVideo}
//            *     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//            *     playsInline
//            *     loop
//            *   />
//            *
//            * The play/pause button below will work automatically.
//            * ──────────────────────────────────────────────────────────────
//            */}
//           <div
//             style={{
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: 12,
//               background: 'var(--surface-alt)',
//             }}
//           >
//             <img
//               src={profileImage}
//               alt="AI Mowa"
//               style={{
//                 width: '70%',
//                 aspectRatio: '1',
//                 objectFit: 'cover',
//                 borderRadius: '50%',
//                 border: '3px solid var(--border)',
//                 boxShadow: `0 0 30px var(--glow)`,
//               }}
//             />
//             <p
//               style={{
//                 color: 'var(--text-muted)',
//                 fontSize: 11,
//                 letterSpacing: '0.15em',
//                 textAlign: 'center',
//                 padding: '0 16px',
//               }}
//             >
//               ADD  intro-video.mp4  →  replace this placeholder
//             </p>
//           </div>

//           {/* Play / Pause button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               togglePlay();
//             }}
//             style={{
//               position: 'absolute',
//               bottom: 20,
//               right: 20,
//               width: 48,
//               height: 48,
//               borderRadius: '50%',
//               background: 'var(--loader-grad)',
//               border: 'none',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               boxShadow: `0 0 20px var(--glow)`,
//               color: '#000',
//               transition: 'transform 0.15s',
//             }}
//             onMouseEnter={(e) =>
//               ((e.currentTarget as HTMLElement).style.transform = 'scale(1.1)')
//             }
//             onMouseLeave={(e) =>
//               ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')
//             }
//           >
//             {playing ? <Pause size={18} /> : <Play size={18} />}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Skills Ticker ────────────────────────────────────────────────────────────

// function SkillsTicker() {
//   const doubled = [...SKILLS, ...SKILLS];

//   return (
//     <section
//       id="skills"
//       style={{ padding: '40px 0 60px', overflow: 'hidden' }}
//     >
//       <p
//         style={{
//           textAlign: 'center',
//           fontFamily: 'Syne, sans-serif',
//           fontSize: 13,
//           letterSpacing: '0.35em',
//           color: 'var(--a1)',
//           marginBottom: 28,
//           fontWeight: 600,
//         }}
//       >
//         SKILLS
//       </p>

//       <div style={{ position: 'relative' }}>
//         {/* Fade masks */}
//         <div
//           style={{
//             position: 'absolute',
//             left: 0,
//             top: 0,
//             bottom: 0,
//             width: 120,
//             background: `linear-gradient(to right, var(--bg), transparent)`,
//             zIndex: 2,
//             pointerEvents: 'none',
//           }}
//         />
//         <div
//           style={{
//             position: 'absolute',
//             right: 0,
//             top: 0,
//             bottom: 0,
//             width: 120,
//             background: `linear-gradient(to left, var(--bg), transparent)`,
//             zIndex: 2,
//             pointerEvents: 'none',
//           }}
//         />

//         <div
//           style={{
//             display: 'flex',
//             gap: 12,
//             animation: 'ticker 38s linear infinite',
//             width: 'max-content',
//           }}
//         >
//           {doubled.map((skill, i) => (
//             <div
//               key={i}
//               style={{
//                 padding: '10px 22px',
//                 borderRadius: 999,
//                 border: '1px solid var(--border)',
//                 background: 'var(--surface)',
//                 color: 'var(--text)',
//                 fontSize: 13,
//                 letterSpacing: '0.04em',
//                 whiteSpace: 'nowrap',
//                 backdropFilter: 'blur(8px)',
//                 flexShrink: 0,
//               }}
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Certifications ───────────────────────────────────────────────────────────

// function CertificationsSection() {
//   const trackRef = useRef<HTMLDivElement>(null);

//   return (
//     <section
//       id="certs"
//       style={{ padding: '60px 0', overflow: 'hidden' }}
//     >
//       <p
//         style={{
//           textAlign: 'center',
//           fontFamily: 'Syne, sans-serif',
//           fontSize: 13,
//           letterSpacing: '0.35em',
//           color: 'var(--a1)',
//           marginBottom: 32,
//           fontWeight: 600,
//         }}
//       >
//         CERTIFICATIONS
//       </p>

//       <div style={{ position: 'relative' }}>
//         <div
//           style={{
//             position: 'absolute',
//             left: 0,
//             top: 0,
//             bottom: 0,
//             width: 80,
//             background: `linear-gradient(to right, var(--bg), transparent)`,
//             zIndex: 2,
//             pointerEvents: 'none',
//           }}
//         />
//         <div
//           style={{
//             position: 'absolute',
//             right: 0,
//             top: 0,
//             bottom: 0,
//             width: 80,
//             background: `linear-gradient(to left, var(--bg), transparent)`,
//             zIndex: 2,
//             pointerEvents: 'none',
//           }}
//         />

//         <div
//           ref={trackRef}
//           style={{
//             display: 'flex',
//             gap: 16,
//             overflowX: 'auto',
//             paddingLeft: 32,
//             paddingRight: 32,
//             paddingBottom: 8,
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none',
//           }}
//         >
//           {CERTIFICATIONS.map((cert) => (
//             <div
//               key={cert.title}
//               style={{
//                 flexShrink: 0,
//                 width: 180,
//                 borderRadius: 20,
//                 border: '1px solid var(--border)',
//                 background: 'var(--surface)',
//                 backdropFilter: 'blur(12px)',
//                 overflow: 'hidden',
//                 transition: 'transform 0.2s, box-shadow 0.2s',
//               }}
//               onMouseEnter={(e) => {
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.transform = 'translateY(-4px)';
//                 el.style.boxShadow = `0 12px 40px var(--glow)`;
//               }}
//               onMouseLeave={(e) => {
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.transform = 'translateY(0)';
//                 el.style.boxShadow = 'none';
//               }}
//             >
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 style={{
//                   width: '100%',
//                   height: 110,
//                   objectFit: 'cover',
//                   display: 'block',
//                 }}
//               />
//               <div style={{ padding: '12px 14px' }}>
//                 <p
//                   style={{
//                     fontSize: 9,
//                     letterSpacing: '0.2em',
//                     color: 'var(--a1)',
//                     marginBottom: 4,
//                     fontWeight: 600,
//                   }}
//                 >
//                   {cert.badge}
//                 </p>
//                 <p
//                   style={{
//                     fontSize: 11,
//                     color: 'var(--text)',
//                     lineHeight: 1.5,
//                     fontWeight: 500,
//                   }}
//                 >
//                   {cert.title}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Projects Section ─────────────────────────────────────────────────────────

// function ProjectsSection() {
//   return (
//     <section
//       id="projects"
//       style={{
//         padding: '60px 24px',
//         maxWidth: 900,
//         margin: '0 auto',
//       }}
//     >
//       <p
//         style={{
//           fontFamily: 'Syne, sans-serif',
//           fontSize: 13,
//           letterSpacing: '0.35em',
//           color: 'var(--a1)',
//           marginBottom: 32,
//           fontWeight: 600,
//           textAlign: 'center',
//         }}
//       >
//         PROJECTS
//       </p>

//       {/* Featured: AI Mowa Linktree */}
//       <div
//         style={{
//           borderRadius: 28,
//           border: '1px solid var(--border)',
//           background: 'var(--surface)',
//           backdropFilter: 'blur(16px)',
//           overflow: 'hidden',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: 0,
//         }}
//       >
//         <div
//           style={{
//             flex: '1 1 260px',
//             maxHeight: 300,
//             overflow: 'hidden',
//           }}
//         >
//           <img
//             src={linktree}
//             alt="AI Mowa Linktree"
//             style={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               display: 'block',
//             }}
//           />
//         </div>

//         <div
//           style={{
//             flex: '1 1 280px',
//             padding: '36px 36px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             gap: 16,
//           }}
//         >
//           <p
//             style={{
//               fontSize: 10,
//               letterSpacing: '0.3em',
//               color: 'var(--a1)',
//               fontWeight: 600,
//             }}
//           >
//             FEATURED PROJECT
//           </p>
//           <h3
//             style={{
//               fontFamily: 'Syne, sans-serif',
//               fontSize: 28,
//               fontWeight: 700,
//               color: 'var(--text)',
//               letterSpacing: '-0.02em',
//             }}
//           >
//             AI Mowa Linktree
//           </h3>
//           <p
//             style={{
//               fontSize: 14,
//               color: 'var(--text-muted)',
//               lineHeight: 1.7,
//               maxWidth: 320,
//             }}
//           >
//             A custom social link platform built for @ai.mowa — themed, fast, and analytics-ready. More projects coming soon.
//           </p>
//           <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
//             <a
//               href="https://aimowalinktree.netlify.app/"
//               target="_blank"
//               rel="noreferrer"
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 6,
//                 padding: '10px 20px',
//                 borderRadius: 999,
//                 background: 'var(--loader-grad)',
//                 color: '#000',
//                 fontWeight: 700,
//                 fontSize: 12,
//                 letterSpacing: '0.08em',
//                 textDecoration: 'none',
//                 boxShadow: `0 0 18px var(--glow)`,
//               }}
//             >
//               <ExternalLink size={13} /> Live
//             </a>
//             <a
//               href="https://github.com/sarathchandrasimma/Custom-Link-Tree-for-social-media.git"
//               target="_blank"
//               rel="noreferrer"
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 6,
//                 padding: '10px 20px',
//                 borderRadius: 999,
//                 border: '1px solid var(--border)',
//                 background: 'var(--surface)',
//                 color: 'var(--text)',
//                 fontSize: 12,
//                 letterSpacing: '0.08em',
//                 textDecoration: 'none',
//               }}
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* "More coming" placeholder row */}
//       <div
//         style={{
//           marginTop: 20,
//           borderRadius: 20,
//           border: '1px dashed var(--border)',
//           padding: '28px 32px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           gap: 16,
//           flexWrap: 'wrap',
//         }}
//       >
//         <p
//           style={{
//             color: 'var(--text-muted)',
//             fontSize: 14,
//             letterSpacing: '0.04em',
//           }}
//         >
//           More projects unlocking soon →
//         </p>
//         <ChevronRight size={18} color="var(--a1)" />
//       </div>
//     </section>
//   );
// }

// // ─── Social Section ───────────────────────────────────────────────────────────

// function SocialSection() {
//   return (
//     <section
//       style={{
//         padding: '40px 24px 60px',
//         maxWidth: 700,
//         margin: '0 auto',
//       }}
//     >
//       <p
//         style={{
//           fontFamily: 'Syne, sans-serif',
//           fontSize: 13,
//           letterSpacing: '0.35em',
//           color: 'var(--a1)',
//           marginBottom: 28,
//           fontWeight: 600,
//           textAlign: 'center',
//         }}
//       >
//         FOLLOW THE WORK
//       </p>

//       <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
//         <SocialCard
//           Icon={Video}
//           handle="AI Mowa"
//           subtext="AI Filmmaking & Tutorials"
//           href="https://yt.oia.bio/Ai-mowa"
//           color="var(--a1)"
//         />
//         <SocialCard
//           Icon={Camera}
//           handle="@ai.mowa"
//           subtext="Reels, Content & AI Creations"
//           href="https://instagram.com/ai.mowa"
//           color="var(--a2)"
//         />
//       </div>
//     </section>
//   );
// }

// function SocialCard({
//   Icon,
//   handle,
//   subtext,
//   href,
//   color,
// }: {
//   Icon: React.FC<{ size?: number }>;
//   handle: string;
//   subtext: string;
//   href: string;
//   color: string;
// }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noreferrer"
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: 16,
//         padding: '20px 28px',
//         borderRadius: 24,
//         border: '1px solid var(--border)',
//         background: 'var(--surface)',
//         backdropFilter: 'blur(12px)',
//         textDecoration: 'none',
//         color: 'var(--text)',
//         transition: 'transform 0.2s, box-shadow 0.2s',
//         flex: '1 1 240px',
//         maxWidth: 300,
//       }}
//       onMouseEnter={(e) => {
//         const el = e.currentTarget as HTMLElement;
//         el.style.transform = 'translateY(-3px)';
//         el.style.boxShadow = `0 12px 40px var(--glow)`;
//       }}
//       onMouseLeave={(e) => {
//         const el = e.currentTarget as HTMLElement;
//         el.style.transform = 'translateY(0)';
//         el.style.boxShadow = 'none';
//       }}
//     >
//       <div
//         style={{
//           width: 48,
//           height: 48,
//           borderRadius: 16,
//           background: `${color}18`,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: color,
//           flexShrink: 0,
//           boxShadow: `0 0 16px ${color}30`,
//         }}
//       >
//         <Icon size={22} />
//       </div>
//       <div>
//         <p
//           style={{
//             fontFamily: 'Syne, sans-serif',
//             fontWeight: 700,
//             fontSize: 16,
//             marginBottom: 3,
//           }}
//         >
//           {handle}
//         </p>
//         <p style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.02em' }}>
//           {subtext}
//         </p>
//       </div>
//     </a>
//   );
// }

// // ─── Fitness Section ──────────────────────────────────────────────────────────

// /**
//  * VIDEO PLACEHOLDER NOTE:
//  * Replace the placeholder div with:
//  *   import fitnessVideo from './fitness-video.mp4';
//  *   <video ref={fitnessRef} src={fitnessVideo} ... />
//  * once you have the file.
//  */
// function FitnessSection() {
//   const [playing, setPlaying] = useState(false);
//   const fitnessRef = useRef<HTMLVideoElement>(null);

//   const toggle = useCallback(() => {
//     const v = fitnessRef.current;
//     if (!v) return;
//     if (v.paused) {
//       v.play();
//       setPlaying(true);
//     } else {
//       v.pause();
//       setPlaying(false);
//     }
//   }, []);

//   return (
//     <section
//       id="fitness"
//       style={{
//         padding: '60px 24px',
//         maxWidth: 900,
//         margin: '0 auto',
//         display: 'flex',
//         alignItems: 'center',
//         gap: 48,
//         flexWrap: 'wrap',
//       }}
//     >
//       {/* Text left */}
//       <div style={{ flex: '1 1 260px' }}>
//         <p
//           style={{
//             fontFamily: 'Syne, sans-serif',
//             fontSize: 11,
//             letterSpacing: '0.35em',
//             color: 'var(--a1)',
//             marginBottom: 16,
//             fontWeight: 600,
//           }}
//         >
//           BEYOND THE SCREEN
//         </p>
//         <h2
//           style={{
//             fontFamily: 'Syne, sans-serif',
//             fontSize: 'clamp(2rem, 5vw, 3.2rem)',
//             fontWeight: 800,
//             color: 'var(--text)',
//             letterSpacing: '-0.03em',
//             lineHeight: 1.05,
//             marginBottom: 16,
//           }}
//         >
//           Built in the
//           <br />
//           gym too.
//         </h2>
//         <p
//           style={{
//             fontSize: 14,
//             color: 'var(--text-muted)',
//             lineHeight: 1.75,
//             maxWidth: 320,
//           }}
//         >
//           Discipline that starts in the gym bleeds into every line of code, every frame of content. The grind never stops.
//         </p>
//       </div>

//       {/* Video right */}
//       <div
//         style={{
//           flex: '1 1 240px',
//           position: 'relative',
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       >
//         <div
//           style={{
//             width: 'min(260px, 82vw)',
//             aspectRatio: '9/16',
//             borderRadius: 24,
//             overflow: 'hidden',
//             border: '1px solid var(--border)',
//             boxShadow: `0 0 50px var(--glow)`,
//             background: 'var(--surface-alt)',
//             position: 'relative',
//             cursor: 'pointer',
//           }}
//           onClick={toggle}
//         >
//           {/*
//            * ── FITNESS VIDEO PLACEHOLDER ──────────────────────────────────
//            * Replace with:
//            *   import fitnessVideo from './fitness-video.mp4';
//            *   <video
//            *     ref={fitnessRef}
//            *     src={fitnessVideo}
//            *     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//            *     playsInline
//            *     loop
//            *   />
//            * ──────────────────────────────────────────────────────────────
//            */}
//           <div
//             style={{
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               flexDirection: 'column',
//               gap: 10,
//             }}
//           >
//             <img
//               src={profileImage}
//               alt="Fitness"
//               style={{
//                 width: '60%',
//                 aspectRatio: '1',
//                 objectFit: 'cover',
//                 borderRadius: '50%',
//                 border: '2px solid var(--border)',
//               }}
//             />
//             <p
//               style={{
//                 color: 'var(--text-muted)',
//                 fontSize: 10,
//                 letterSpacing: '0.12em',
//                 textAlign: 'center',
//                 padding: '0 12px',
//               }}
//             >
//               ADD  fitness-video.mp4
//             </p>
//           </div>

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               toggle();
//             }}
//             style={{
//               position: 'absolute',
//               bottom: 16,
//               right: 16,
//               width: 44,
//               height: 44,
//               borderRadius: '50%',
//               background: 'var(--loader-grad)',
//               border: 'none',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               color: '#000',
//               boxShadow: `0 0 20px var(--glow)`,
//             }}
//           >
//             {playing ? <Pause size={16} /> : <Play size={16} />}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Contact Section ──────────────────────────────────────────────────────────

// function ContactSection() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [type, setType] = useState<'ai' | 'personal'>('ai');

//   const targetEmail =
//     type === 'ai'
//       ? 'aimowa.official@gmail.com'
//       : 'sarathchandra.simma04@gmail.com';

//   const sendMail = () => {
//     const subject = encodeURIComponent(
//       `${type === 'ai' ? '[AI Mowa Collab]' : '[Career/Personal]'} Message from ${name || 'visitor'}`,
//     );
//     const body = encodeURIComponent(
//       `${message}\n\nReply to: ${email || 'not provided'}`,
//     );
//     window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
//   };

//   const inputStyle: React.CSSProperties = {
//     width: '100%',
//     padding: '14px 18px',
//     borderRadius: 14,
//     border: '1px solid var(--border)',
//     background: 'var(--surface-alt)',
//     color: 'var(--text)',
//     fontSize: 14,
//     outline: 'none',
//     backdropFilter: 'blur(8px)',
//     transition: 'border-color 0.2s',
//     fontFamily: 'Inter, sans-serif',
//   };

//   return (
//     <section
//       id="contact"
//       style={{
//         padding: '60px 24px 100px',
//         maxWidth: 760,
//         margin: '0 auto',
//       }}
//     >
//       <p
//         style={{
//           fontFamily: 'Syne, sans-serif',
//           fontSize: 13,
//           letterSpacing: '0.35em',
//           color: 'var(--a1)',
//           marginBottom: 16,
//           fontWeight: 600,
//           textAlign: 'center',
//         }}
//       >
//         CONTACT
//       </p>
//       <h2
//         style={{
//           fontFamily: 'Syne, sans-serif',
//           fontSize: 'clamp(2rem, 5vw, 3rem)',
//           fontWeight: 800,
//           color: 'var(--text)',
//           letterSpacing: '-0.03em',
//           textAlign: 'center',
//           marginBottom: 48,
//         }}
//       >
//         Let's build something
//       </h2>

//       {/* Email type toggle */}
//       <div
//         style={{
//           display: 'flex',
//           gap: 8,
//           marginBottom: 28,
//           background: 'var(--surface)',
//           borderRadius: 16,
//           padding: 6,
//           border: '1px solid var(--border)',
//           backdropFilter: 'blur(12px)',
//         }}
//       >
//         {(['ai', 'personal'] as const).map((t) => (
//           <button
//             key={t}
//             onClick={() => setType(t)}
//             style={{
//               flex: 1,
//               padding: '10px 16px',
//               borderRadius: 12,
//               border: 'none',
//               background: type === t ? 'var(--loader-grad)' : 'transparent',
//               color: type === t ? '#000' : 'var(--text-muted)',
//               fontWeight: type === t ? 700 : 400,
//               fontSize: 13,
//               cursor: 'pointer',
//               transition: 'all 0.2s',
//               letterSpacing: '0.04em',
//               fontFamily: 'Inter, sans-serif',
//             }}
//           >
//             {t === 'ai' ? 'AI Content / Collab' : 'Career / Personal'}
//           </button>
//         ))}
//       </div>

//       {/* Email info */}
//       <div
//         style={{
//           borderRadius: 16,
//           border: '1px solid var(--border)',
//           background: 'var(--surface)',
//           padding: '14px 18px',
//           marginBottom: 20,
//           backdropFilter: 'blur(8px)',
//         }}
//       >
//         <p style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--a1)', marginBottom: 4 }}>
//           {type === 'ai' ? 'FOR AI CONTENT & COLLAB ENQUIRIES' : 'FOR CAREER & PERSONAL'}
//         </p>
//         <p style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>
//           {targetEmail}
//         </p>
//         <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
//           {type === 'ai'
//             ? 'AI Mowa page collabs, sponsorships, AI filmmaking enquiries'
//             : 'Career opportunities, internships, personal matters'}
//         </p>
//       </div>

//       {/* Form */}
//       <div
//         style={{
//           borderRadius: 28,
//           border: '1px solid var(--border)',
//           background: 'var(--surface)',
//           backdropFilter: 'blur(16px)',
//           padding: '32px 28px',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 14,
//         }}
//       >
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Your name"
//           style={inputStyle}
//         />
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Your email"
//           style={inputStyle}
//         />
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Tell me what you want to build"
//           rows={5}
//           style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
//         />
//         <button
//           onClick={sendMail}
//           style={{
//             display: 'inline-flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: 8,
//             padding: '14px 28px',
//             borderRadius: 999,
//             background: 'var(--loader-grad)',
//             border: 'none',
//             color: '#000',
//             fontWeight: 700,
//             fontSize: 14,
//             letterSpacing: '0.08em',
//             cursor: 'pointer',
//             boxShadow: `0 0 24px var(--glow)`,
//             transition: 'transform 0.2s',
//             fontFamily: 'Inter, sans-serif',
//           }}
//           onMouseEnter={(e) =>
//             ((e.currentTarget as HTMLElement).style.transform = 'scale(1.02)')
//           }
//           onMouseLeave={(e) =>
//             ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')
//           }
//         >
//           <Mail size={16} /> Send Message
//         </button>
//       </div>

//       {/* Quick links */}
//       <div
//         style={{
//           marginTop: 28,
//           display: 'flex',
//           gap: 10,
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//         }}
//       >
//         {[
//           {
//             label: 'GitHub',
//             href: 'https://github.com/sarathchandrasimma',
//           },
//           {
//             label: 'LinkedIn',
//             href: 'https://www.linkedin.com/in/simma-sarathchandra/',
//           },
//           {
//             label: 'Resume',
//             href: Resume,
//             download: true,
//           },
//         ].map((l) => (
//           <a
//             key={l.label}
//             href={l.href}
//             target={l.download ? undefined : '_blank'}
//             rel={l.download ? undefined : 'noreferrer'}
//             download={l.download}
//             style={{
//               padding: '10px 20px',
//               borderRadius: 999,
//               border: '1px solid var(--border)',
//               background: 'var(--surface)',
//               color: 'var(--text-muted)',
//               fontSize: 13,
//               textDecoration: 'none',
//               backdropFilter: 'blur(8px)',
//               transition: 'color 0.2s',
//             }}
//             onMouseEnter={(e) =>
//               ((e.currentTarget as HTMLElement).style.color = 'var(--text)')
//             }
//             onMouseLeave={(e) =>
//               ((e.currentTarget as HTMLElement).style.color =
//                 'var(--text-muted)')
//             }
//           >
//             {l.label}
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

// // ─── Footer ───────────────────────────────────────────────────────────────────

// function Footer() {
//   return (
//     <footer
//       style={{
//         borderTop: '1px solid var(--border)',
//         padding: '24px 32px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap',
//         gap: 12,
//       }}
//     >
//       <p
//         style={{
//           fontFamily: 'Syne, sans-serif',
//           fontWeight: 800,
//           fontSize: 16,
//           background: 'var(--loader-grad)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           backgroundClip: 'text',
//         }}
//       >
//         AI.MOWA
//       </p>
//       <p
//         style={{
//           fontSize: 12,
//           color: 'var(--text-muted)',
//           letterSpacing: '0.06em',
//         }}
//       >
//         © {new Date().getFullYear()} Simma Sarath Chandra
//       </p>
//     </footer>
//   );
// }

// // ─── Root Component ───────────────────────────────────────────────────────────

// export default function PortfolioExperience() {
//   const [themeId, setThemeId] = useState<ThemeId>(() => pickRandomTheme());
//   const [loaded, setLoaded] = useState(false);

//   const theme = THEMES[themeId];

//   useEffect(() => {
//     injectCSS(GLOBAL_CSS);
//   }, []);

//   useEffect(() => {
//     applyThemeVars(theme);
//     document.body.style.background = theme.bg;
//   }, [theme]);

//   const handleThemeChange = (id: ThemeId) => {
//     setThemeId(id);
//   };

//   return (
//     <div className="noise" style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>
//       {!loaded && (
//         <Loader theme={theme} onDone={() => setLoaded(true)} />
//       )}

//       <div
//         style={{
//           opacity: loaded ? 1 : 0,
//           transition: 'opacity 0.6s ease',
//           pointerEvents: loaded ? 'auto' : 'none',
//         }}
//       >
//         <Navbar currentTheme={themeId} onThemeChange={handleThemeChange} />
//         <main>
//           <HeroSection />
//           <SkillsTicker />
//           <CertificationsSection />
//           <ProjectsSection />
//           <SocialSection />
//           <FitnessSection />
//           <ContactSection />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   );
// }


/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  AI.MOWA — PORTFOLIO v3 · "LIQUID SIGNAL"
 *  ───────────────────────────────────────────────────────────────────────────
 *  SETUP (2 minutes):
 *  1. Replace your src/PortfolioExperience.tsx with this file.
 *  2. VIDEOS → drop  intro-video.mp4  and  fitness-video.mp4  into src/ ,
 *     then find the "VIDEO SETUP" block below and uncomment 4 lines.
 *     (If TypeScript complains about .mp4, add this line to src/vite-env.d.ts:
 *        declare module '*.mp4';
 *     )
 *  Until videos are added, sections show your profile image as a cinematic
 *  poster background — everything else works immediately.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { gsap } from 'gsap';
import {
  Download,
  Mail,
  Play,
  Pause,
  ExternalLink,
  X,
  Eye,
  ChevronRight,
} from 'lucide-react';

// ─── Assets (unchanged from your project) ────────────────────────────────────
import Resume from './SarathChandra_resume.pdf';
import cisco from './cisco.png';
import infosys from './infosys.jpeg';
import nptel from './nptel.jpeg';
import nptel2 from './nptel2.png';
import mongodbCert from './mongodb certification.jpg';
import salesforceAgentforce from './salesforce agentforce.jpeg';
import linktree from './linktree.png';
import oracleCert from './oracleDataScienceCertificate.png';
import horizontalIntroVideo from './horizontal intro.mp4';
import verticalIntroVideo from './vertical intro.mp4';
import horizontalFitnessVideo from './horizontal fitness.mp4';
import verticalFitnessVideo from './vertical fitness .mp4';

type Brand = 'instagram' | 'youtube' | 'linkedin' | 'github';

function BrandIcon({ brand, size = 22 }: { brand: Brand; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true } as const;

  if (brand === 'instagram') {
    return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" /></svg>;
  }

  if (brand === 'youtube') {
    return <svg {...common}><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.9 12a29 29 0 0 0 .5 4.8 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z" /><path d="m10 15.5 5-3.5-5-3.5v7Z" fill="#070003" /></svg>;
  }

  if (brand === 'linkedin') {
    return <svg {...common}><path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.5h3.8v11.2H3.3V9.5Zm6.1 0h3.6v1.5h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8v5.8h-3.8v-5.1c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.2H9.4V9.5Z" /></svg>;
  }

  return <svg {...common}><path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.2-5.1 5.5.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" /></svg>;
}

const INTRO_VIDEO = { desktop: horizontalIntroVideo, mobile: verticalIntroVideo };
const FITNESS_VIDEO = { desktop: horizontalFitnessVideo, mobile: verticalFitnessVideo };

// ─── Theme Engine ────────────────────────────────────────────────────────────

type ThemeId = 'ember';

interface Theme {
  id: ThemeId;
  name: string;
  bg: string;
  surface: string;
  surfaceAlt: string;
  border: string;
  a1: string;
  a2: string;
  a3: string;
  text: string;
  textMuted: string;
  glow: string;
  grad: string;
  loaderBg: string;
}

const THEMES: Record<ThemeId, Theme> = {
  ember: {
    id: 'ember',
    name: 'Blood Ember',
    bg: '#070003',
    surface: 'rgba(40,2,8,0.45)',
    surfaceAlt: 'rgba(22,0,4,0.72)',
    border: 'rgba(255,45,60,0.16)',
    a1: '#FF2D3F',
    a2: '#FF7A1A',
    a3: '#FFB3B3',
    text: '#FFFFFF',
    textMuted: 'rgba(255,205,205,0.62)',
    glow: 'rgba(255,30,55,0.38)',
    grad: 'linear-gradient(120deg,#FF2D3F 0%,#FF7A1A 60%,#FFD3A1 100%)',
    loaderBg: 'radial-gradient(ellipse at 50% -10%, #40000E 0%, #070003 62%)',
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const SKILLS_A = [
  'Python', 'Data Science', 'AI Content Creation', 'AI Filmmaking', 'MERN Stack',
  'SQL', 'C++', 'Power BI', 'Machine Learning', 'MongoDB', 'Prompt Engineering',
];
const SKILLS_B = [
  'AI Tutor', 'Video Editing', 'Storytelling', 'React', 'Node.js', 'Git / GitHub',
  'Salesforce AI', 'Oracle Cloud', 'Data Engineering', 'Stable Diffusion', 'Short-form Video',
];

interface Cert {
  image: string;
  title: string;
  badge: string;
  fileName: string;
}

const CERTIFICATIONS: Cert[] = [
  { image: mongodbCert, title: 'MongoDB Associate Developer', badge: 'Global Certification', fileName: 'MongoDB-Associate-Developer.jpg' },
  { image: salesforceAgentforce, title: 'Salesforce Agentforce', badge: 'Agentforce Specialist', fileName: 'Salesforce-Agentforce.jpeg' },
  { image: oracleCert, title: 'Oracle Cloud Data Science 2025', badge: 'Oracle Certified Professional', fileName: 'Oracle-Data-Science.png' },
  { image: nptel, title: 'NPTEL Data Engineering', badge: 'Elite', fileName: 'NPTEL-Data-Engineering.jpeg' },
  { image: nptel2, title: 'NPTEL Machine Learning', badge: 'Elite', fileName: 'NPTEL-Machine-Learning.png' },
  { image: infosys, title: 'Infosys Springboard Internship', badge: 'Industry Experience', fileName: 'Infosys-Springboard.jpeg' },
  { image: cisco, title: 'Cisco Python Essential', badge: 'Cisco Essential', fileName: 'Cisco-Python-Essential.png' },
];

interface Project {
  image: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

// Add future projects to this array — the grid renders automatically.
const PROJECTS: Project[] = [
  {
    image: linktree,
    name: 'AI Mowa Linktree',
    description: 'A custom social link platform built for @ai.mowa — themed, fast, analytics-ready.',
    link: 'https://aimowalinktree.netlify.app/',
    github: 'https://github.com/sarathchandrasimma/Custom-Link-Tree-for-social-media.git',
  },
];

// ─── Global CSS ──────────────────────────────────────────────────────────────

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Space Grotesk',sans-serif;background:#050505;color:#fff;overflow-x:hidden;-webkit-font-smoothing:antialiased}
::selection{background:var(--a1);color:#000}
::-webkit-scrollbar{width:5px;height:5px}
::-webkit-scrollbar-thumb{background:var(--a1);border-radius:3px}
::-webkit-scrollbar-track{background:transparent}

.font-display{font-family:'Unbounded',sans-serif}

/* ── Marquees ── */
@keyframes marquee-r{from{transform:translateX(-50%)}to{transform:translateX(0)}}
@keyframes marquee-l{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.marquee-track:hover{animation-play-state:paused}

/* ── Liquid blobs ── */
@keyframes blob-morph{
  0%,100%{border-radius:42% 58% 61% 39%/45% 40% 60% 55%}
  25%{border-radius:62% 38% 33% 67%/55% 62% 38% 45%}
  50%{border-radius:35% 65% 57% 43%/40% 33% 67% 60%}
  75%{border-radius:57% 43% 40% 60%/62% 55% 45% 38%}
}
@keyframes blob-drift-a{
  0%,100%{transform:translate(0,0) scale(1)}
  33%{transform:translate(11vw,-9vh) scale(1.25)}
  66%{transform:translate(-7vw,11vh) scale(.82)}
}
@keyframes blob-drift-b{
  0%,100%{transform:translate(0,0) scale(1.1)}
  50%{transform:translate(-13vw,7vh) scale(.78)}
}
.blob{position:absolute;filter:blur(75px);pointer-events:none;will-change:transform,border-radius;
  animation:blob-morph 14s ease-in-out infinite, blob-drift-a 26s ease-in-out infinite}
.blob-b{animation:blob-morph 11s ease-in-out infinite reverse, blob-drift-b 21s ease-in-out infinite}

/* ── Film grain ── */
@keyframes grain{
  0%,100%{transform:translate(0,0)}10%{transform:translate(-2%,-3%)}30%{transform:translate(2%,-1%)}
  50%{transform:translate(-1%,2%)}70%{transform:translate(3%,1%)}90%{transform:translate(-1%,-2%)}
}
.noise::after{content:'';position:fixed;inset:-50%;width:200%;height:200%;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  background-size:180px 180px;opacity:.05;pointer-events:none;animation:grain 7s steps(10) infinite;z-index:9990}

/* ── Text effects ── */
@keyframes shimmer{from{background-position:200% center}to{background-position:-200% center}}
.shimmer-text{background:linear-gradient(110deg,#fff 25%,var(--a1) 42%,var(--a2) 52%,#fff 72%);
  background-size:220% auto;-webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;animation:shimmer 7s linear infinite}
.grad-text{background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}

.loader-grid{position:absolute;inset:-30%;background-image:linear-gradient(rgba(255,45,63,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,45,63,.08) 1px,transparent 1px);background-size:42px 42px;transform:perspective(500px) rotateX(58deg) translateY(20%);mask-image:linear-gradient(to top,black,transparent 70%);animation:grid-drift 5s linear infinite}
@keyframes grid-drift{to{background-position:0 42px,42px 0}}
.loader-ring{position:absolute;border:1px solid rgba(255,45,63,.32);border-radius:50%;animation:ring-spin 4s linear infinite}
.loader-ring-a{width:min(72vw,620px);height:min(72vw,620px);border-top-color:var(--a1);border-bottom-color:var(--a2)}
.loader-ring-b{width:min(54vw,460px);height:min(54vw,460px);border-left-color:var(--a2);animation-duration:2.6s;animation-direction:reverse}
@keyframes ring-spin{to{transform:rotate(360deg)}}

@keyframes pulse-ring{0%{transform:scale(.9);opacity:.55}80%,100%{transform:scale(1.7);opacity:0}}
@keyframes float-slow{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}

/* ── Scroll reveal ── */
.rv{opacity:0;transform:translateY(46px);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}
.rv.in{opacity:1;transform:none}

/* ── Utilities ── */
.scroll-x{scrollbar-width:thin;scrollbar-color:var(--a1) transparent;-ms-overflow-style:auto}
.scroll-x::-webkit-scrollbar{height:7px}
.scroll-x::-webkit-scrollbar-thumb{background:var(--a1);border-radius:8px}
.scroll-x::-webkit-scrollbar-track{background:rgba(255,255,255,.06);border-radius:8px}
.cert-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;padding:4px clamp(20px,5vw,48px)}
@media(max-width:700px){.nav-links{display:none}.hero-title{font-size:clamp(2.35rem,11vw,4.5rem)!important}.hero-role{white-space:normal!important;max-width:340px!important}.fitness-copy{text-align:left!important}.fitness-copy p{margin-left:0!important}.video-overlay{background:linear-gradient(180deg,rgba(7,0,3,.52) 0%,transparent 38%,rgba(7,0,3,.28) 100%)!important}.video-play-control{width:54px!important;height:54px!important;right:18px!important;left:auto!important;bottom:22px!important}.video-sound-control{left:18px!important;right:auto!important;bottom:28px!important;padding:9px 12px!important;font-size:10px!important}}
@media(max-width:700px){.cert-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:480px){.cert-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

function injectCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('aimowa-css')) return;
  const tag = document.createElement('style');
  tag.id = 'aimowa-css';
  tag.textContent = GLOBAL_CSS;
  document.head.appendChild(tag);
}

function applyThemeVars(t: Theme) {
  const r = document.documentElement.style;
  r.setProperty('--bg', t.bg);
  r.setProperty('--surface', t.surface);
  r.setProperty('--surface-alt', t.surfaceAlt);
  r.setProperty('--border', t.border);
  r.setProperty('--a1', t.a1);
  r.setProperty('--a2', t.a2);
  r.setProperty('--a3', t.a3);
  r.setProperty('--text', t.text);
  r.setProperty('--text-muted', t.textMuted);
  r.setProperty('--glow', t.glow);
  r.setProperty('--grad', t.grad);
  document.body.style.background = t.bg;
}

// ─── Liquid Background ───────────────────────────────────────────────────────

function LiquidBackground({ theme }: { theme: Theme }) {
  const blob = (color: string, size: string, top: string, left: string, extra?: CSSProperties, cls = 'blob') => (
    <div
      className={cls === 'blob' ? 'blob' : 'blob blob-b'}
      style={{
        width: size,
        height: size,
        top,
        left,
        background: `radial-gradient(circle at 32% 32%, ${color}, transparent 68%)`,
        opacity: 0.4,
        ...extra,
      }}
    />
  );

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      {blob(theme.a1 + '66', 'min(46vw,540px)', '-12%', '-8%')}
      {blob(theme.a2 + '55', 'min(38vw,460px)', '55%', '68%', { animationDelay: '-6s' }, 'blob-b')}
      {blob(theme.a1 + '3D', 'min(30vw,360px)', '68%', '6%', { animationDelay: '-12s' })}
    </div>
  );
}

// ─── Loader — the title itself IS the loading animation ─────────────────────

function Loader({ theme, onDone }: { theme: Theme; onDone: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          opacity: 0,
          scale: 1.04,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: onDone,
        });
      },
    });

    // A short, high-energy reveal keeps the portfolio immediately usable.
    tl.fromTo(
      '.ldr-letter',
      { yPercent: 130, opacity: 0, rotateX: -95 },
      { yPercent: 0, opacity: 1, rotateX: 0, duration: 0.42, stagger: 0.045, ease: 'back.out(1.5)' },
    )
      // Subtitle compresses into place from wide letter-spacing
      .fromTo(
        subRef.current,
        { opacity: 0, letterSpacing: '1.3em' },
        { opacity: 1, letterSpacing: '0.5em', duration: 0.45, ease: 'power3.out' },
        '-=0.25',
      )
      // Live % counter runs in parallel from t=0.4
      .to(
        counter,
        {
          v: 100,
          duration: 1.15,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (pctRef.current) pctRef.current.textContent = String(Math.round(counter.v)).padStart(3, '0');
          },
        },
        0.4,
      );

    return () => { tl.kill(); };
  }, [onDone]);

  const letters = 'AI.MOWA'.split('');

  return (
    <div
      ref={rootRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.loaderBg,
        overflow: 'hidden',
      }}
    >
      {/* Liquid blobs inside the loader too */}
      <div className="blob" style={{ width: 'min(50vw,520px)', height: 'min(50vw,520px)', top: '-14%', left: '-10%', background: `radial-gradient(circle at 30% 30%, ${theme.a1}55, transparent 68%)`, opacity: 0.5 }} />
      <div className="blob blob-b" style={{ width: 'min(40vw,420px)', height: 'min(40vw,420px)', top: '58%', left: '66%', background: `radial-gradient(circle at 30% 30%, ${theme.a2}50, transparent 68%)`, opacity: 0.45, animationDelay: '-7s' }} />
      <div className="loader-grid" />
      <div className="loader-ring loader-ring-a" />
      <div className="loader-ring loader-ring-b" />

      {/* Pulsing halo behind the title */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 560, height: 560, borderRadius: '50%', background: `radial-gradient(circle, ${theme.glow} 0%, transparent 65%)`, animation: 'pulse-ring 2.6s ease-out infinite', pointerEvents: 'none' }} />

      {/* AI.MOWA — animated letter by letter, shimmer gradient fill */}
      <h1
        className="font-display shimmer-text"
        style={{
          fontSize: 'clamp(3.2rem, 13vw, 9.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          display: 'flex',
          perspective: 700,
          position: 'relative',
        }}
      >
        {letters.map((l, i) => (
          <span key={i} className="ldr-letter" style={{ display: 'inline-block', transformStyle: 'preserve-3d', opacity: 0 }}>
            {l}
          </span>
        ))}
      </h1>

      <p
        ref={subRef}
        className="font-display"
        style={{
          marginTop: '1.4rem',
          fontSize: 'clamp(0.7rem, 2.2vw, 1.05rem)',
          fontWeight: 400,
          color: theme.textMuted,
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
          opacity: 0,
          paddingLeft: '0.5em',
        }}
      >
        Sarath Chandra
      </p>

      {/* Live counter — bottom right, editorial style */}
      <div style={{ position: 'absolute', bottom: 34, right: 40, display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span ref={pctRef} className="font-display" style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 700, color: theme.a1, fontVariantNumeric: 'tabular-nums' }}>000</span>
        <span style={{ fontSize: 12, color: theme.textMuted, letterSpacing: '0.3em' }}>%</span>
      </div>

    </div>
  );
}

// ─── Scroll reveal hook ──────────────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Intro', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certs', href: '#certs' },
  { label: 'Projects', href: '#projects' },
  { label: 'Fitness', href: '#fitness' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300, padding: '12px clamp(16px,4vw,36px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.35s ease',
      background: scrolled ? 'rgba(4,4,9,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    }}>
      <a href="#hero" className="font-display grad-text" style={{ fontWeight: 900, fontSize: 17, textDecoration: 'none', letterSpacing: '0.02em' }}>
        AI.MOWA
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div className="nav-links" style={{ display: 'flex', gap: 2 }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ padding: '6px 13px', borderRadius: 999, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, letterSpacing: '0.05em', transition: 'color .2s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--a1)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Full-screen Video Section (shared by Hero + Fitness) ────────────────────
/**
 * Full-viewport section. The video (or poster image until you add the mp4)
 * fills the ENTIRE background edge-to-edge. Content overlays on top:
 *  - contentSide 'left'  → text block sits left, subject breathes on right
 *  - contentSide 'right' → text block sits right
 * One glowing play/pause button controls the background video.
 * Fully responsive: on mobile the text stacks over the video bottom.
 */
function VideoStage({
  id,
  videoSrc,
  contentSide,
  allowAudio = false,
  preload = 'metadata',
  children,
}: {
  id: string;
  videoSrc: { desktop: string; mobile: string };
  contentSide: 'left' | 'right';
  allowAudio?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  children: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  }, []);

  const enableSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setSoundOn(true);
    void video.play().then(() => setPlaying(true)).catch(() => setSoundOn(false));
  }, []);

  // Pause the video automatically when it scrolls out of view
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else if (!v.paused) {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const isLeft = contentSide === 'left';

  return (
    <section id={id} style={{ position: 'relative', minHeight: '100svh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'stretch' }}>
      {/* ── BACKGROUND LAYER: video fills the whole section ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
            ref={videoRef}
            muted
            playsInline
            loop
            preload={preload}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: isLeft ? '75% center' : '25% center' }}
          >
            <source src={videoSrc.mobile} media="(max-width: 700px)" />
            <source src={videoSrc.desktop} />
          </video>
        {/* Cinematic gradient so text is always readable, tinted by theme */}
        <div className="video-overlay" style={{
          position: 'absolute', inset: 0,
          background: isLeft
            ? 'linear-gradient(90deg, var(--bg) 0%, color-mix(in srgb, var(--bg) 82%, transparent) 34%, transparent 68%), linear-gradient(0deg, var(--bg) 0%, transparent 30%)'
            : 'linear-gradient(270deg, var(--bg) 0%, color-mix(in srgb, var(--bg) 82%, transparent) 34%, transparent 68%), linear-gradient(0deg, var(--bg) 0%, transparent 30%)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, color-mix(in srgb, var(--bg) 55%, transparent) 0%, transparent 22%)' }} />
      </div>

      {allowAudio && !soundOn && (
        <button
          onClick={enableSound}
          className="video-sound-control"
          aria-label="Enable intro video sound"
          style={{
            position: 'absolute', zIndex: 4, bottom: 'clamp(28px,7vh,58px)', right: 'clamp(98px,11vw,142px)',
            border: '1px solid var(--border)', borderRadius: 999, padding: '10px 15px',
            background: 'rgba(7,0,3,.72)', color: 'var(--text)', cursor: 'pointer',
            fontSize: 11, letterSpacing: '.08em', backdropFilter: 'blur(12px)',
          }}
        >
          Enable sound
        </button>
      )}

      {/* ── CONTENT LAYER ── */}
      <div style={{
        position: 'relative', zIndex: 2, width: '100%', maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'flex-end', justifyContent: isLeft ? 'flex-start' : 'flex-end',
        padding: 'clamp(90px,14vh,140px) clamp(20px,5vw,64px) clamp(48px,9vh,96px)',
      }}>
        <div style={{ maxWidth: 560, width: '100%', minWidth: 0 }}>{children}</div>
      </div>

      {/* ── PLAY / PAUSE — single glowing control ── */}
      <button
        className="video-play-control"
        onClick={toggle}
        aria-label={playing ? 'Pause video' : 'Play video'}
        style={{
          position: 'absolute', zIndex: 3, bottom: 'clamp(24px,6vh,52px)',
          [isLeft ? 'right' : 'left']: 'clamp(20px,5vw,56px)',
          width: 'clamp(54px,5vw,68px)', height: 'clamp(54px,5vw,68px)', borderRadius: '50%', border: '1px solid var(--border)',
          background: playing ? 'var(--surface)' : 'var(--grad)',
          color: playing ? 'var(--a1)' : '#000',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          boxShadow: '0 0 34px var(--glow)', backdropFilter: 'blur(10px)',
          transition: 'transform .2s, background .3s',
        } as CSSProperties}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
      >
        {/* pulse ring when idle */}
        {!playing && <span style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: '2px solid var(--a1)', animation: 'pulse-ring 2.2s ease-out infinite' }} />}
        {playing ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: 3 }} />}
      </button>
    </section>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  useEffect(() => {
    gsap.fromTo('.hero-anim', { opacity: 0, y: 44 }, { opacity: 1, y: 0, duration: 1, stagger: 0.14, ease: 'power3.out', delay: 0.15 });
  }, []);

  return (
    <VideoStage id="hero" videoSrc={INTRO_VIDEO} contentSide="left" allowAudio>
      <h1 className="hero-anim hero-title font-display shimmer-text" style={{ opacity: 0, fontSize: 'clamp(2.35rem,8vw,5rem)', fontWeight: 900, lineHeight: 0.98, letterSpacing: '-0.02em', marginBottom: 10, whiteSpace: 'nowrap', overflow: 'visible' }}>
        AI.MOWA
      </h1>
      <p className="hero-anim font-display" style={{ opacity: 0, fontSize: 'clamp(1rem,2.6vw,1.45rem)', fontWeight: 500, color: 'var(--a1)', letterSpacing: '0.14em', marginBottom: 20, textTransform: 'uppercase' }}>
        Sarath Chandra
      </p>
      <p className="hero-anim hero-role" style={{ opacity: 0, fontSize: 'clamp(0.78rem,1.8vw,0.98rem)', color: 'var(--text-muted)', letterSpacing: '0.01em', lineHeight: 1.6, marginBottom: 28, maxWidth: 520, whiteSpace: 'nowrap' }}>
        AI Content Creator&ensp;·&ensp;Data Science Student&ensp;·&ensp;AI Enthusiast
      </p>
      <div className="hero-anim" style={{ opacity: 0, display: 'flex', gap: 12, alignItems: 'center' }}>
        {[
          { brand: 'instagram' as Brand, label: 'Instagram', href: 'https://instagram.com/ai.mowa' },
          { brand: 'youtube' as Brand, label: 'YouTube', href: 'https://yt.oia.bio/Ai-mowa' },
          { brand: 'linkedin' as Brand, label: 'LinkedIn', href: 'https://www.linkedin.com/in/simma-sarathchandra/' },
          { brand: 'github' as Brand, label: 'GitHub', href: 'https://github.com/sarathchandrasimma' },
        ].map(({ brand, label, href }) => (
          <a
            key={brand}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            style={{
              width: 44, height: 44, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', textDecoration: 'none',
              boxShadow: '0 0 18px var(--glow)', backdropFilter: 'blur(12px)', transition: 'transform .2s, color .2s, background .2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.color = 'var(--a1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.color = 'var(--text)'; }}
          >
            <BrandIcon brand={brand} size={19} />
          </a>
        ))}
      </div>
    </VideoStage>
  );
}

// ─── Skills — dual-direction marquee, no background, low-opacity heading ─────

function MarqueeRow({ items, direction, speed }: { items: string[]; direction: 'l' | 'r'; speed: number }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <div
        className="marquee-track"
        style={{
          display: 'flex', gap: 14, width: 'max-content', padding: '7px 0',
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="font-display"
            style={{
              whiteSpace: 'nowrap', fontSize: 'clamp(0.95rem,2.4vw,1.5rem)', fontWeight: 500,
              color: i % 3 === 1 ? 'var(--a1)' : 'var(--text)',
              opacity: i % 3 === 1 ? 0.9 : 0.5,
              letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: 14,
            }}
          >
            {skill}
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--a2)', opacity: 0.6, display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '76px 0 68px', position: 'relative' }}>
      <h2
        className="font-display rv"
        style={{
          textAlign: 'center', fontSize: 'clamp(2.4rem,7vw,4.6rem)', fontWeight: 900,
          color: 'var(--text)', opacity: 0.09, letterSpacing: '0.28em', marginBottom: -14,
          textTransform: 'uppercase', pointerEvents: 'none', userSelect: 'none',
        }}
      >
        Skills
      </h2>
      <div className="rv" style={{ position: 'relative' }}>
        {/* Edge fades */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 'clamp(50px,10vw,140px)', background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 'clamp(50px,10vw,140px)', background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <MarqueeRow items={SKILLS_A} direction="r" speed={40} />
        <MarqueeRow items={SKILLS_B} direction="l" speed={46} />
      </div>
    </section>
  );
}

// ─── Certifications — compact strip + View/Download modal restored ───────────

function CertModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.82)',
        backdropFilter: 'blur(14px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(14px,4vw,40px)', animation: 'none',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 'min(650px, 88vw)', width: '100%', maxHeight: '82vh', overflow: 'auto', borderRadius: 20,
          border: '1px solid var(--border)', background: 'var(--surface-alt)', backdropFilter: 'blur(24px)',
          boxShadow: '0 30px 100px rgba(0,0,0,0.7), 0 0 60px var(--glow)',
        }}
        className="scroll-x"
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 17px', borderBottom: '1px solid var(--border)' }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.28em', color: 'var(--a1)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{cert.badge}</p>
            <h3 className="font-display" style={{ fontSize: 'clamp(.85rem,2.5vw,1.05rem)', fontWeight: 700, color: 'var(--text)' }}>{cert.title}</h3>
          </div>
          <button onClick={onClose} aria-label="Close" style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <X size={15} />
          </button>
        </div>
        <img src={cert.image} alt={cert.title} style={{ width: '100%', maxHeight: '58vh', objectFit: 'contain', display: 'block', background: '#000' }} />
        <div style={{ display: 'flex', gap: 8, padding: '13px 17px', flexWrap: 'wrap' }}>
          <a
            href={cert.image}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 999, background: 'var(--grad)', color: '#000', fontWeight: 700, fontSize: 12, letterSpacing: '0.04em', textDecoration: 'none', boxShadow: '0 0 20px var(--glow)' }}
          >
            <Eye size={14} /> View Full Size
          </a>
          <a
            href={cert.image}
            download={cert.fileName}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 999, border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', fontSize: 12, letterSpacing: '0.04em', textDecoration: 'none' }}
          >
            <Download size={14} /> Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);

  return (
    <section id="certs" style={{ padding: '48px 0 56px', position: 'relative' }}>
      <p className="rv" style={{ textAlign: 'center', fontSize: 12, letterSpacing: '0.42em', color: 'var(--a1)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase' }}>
        Certifications
      </p>
      <p className="rv" style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', marginBottom: 28, letterSpacing: '0.06em' }}>
        tap any card to view or download
      </p>

      <div className="rv cert-grid" aria-label="Certification list">
          {CERTIFICATIONS.map((cert) => (
            <button
              key={cert.title}
              onClick={() => setActiveCert(cert)}
              style={{
                width: '100%', borderRadius: 18, border: '1px solid var(--border)',
                background: 'var(--surface)', backdropFilter: 'blur(12px)', overflow: 'hidden',
                cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'transform .22s, box-shadow .22s, border-color .22s',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 16px 44px var(--glow)';
                el.style.borderColor = 'var(--a1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'none';
                el.style.boxShadow = 'none';
                el.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ position: 'relative' }}>
                <img src={cert.image} alt={cert.title} style={{ width: '100%', height: 'clamp(120px, 12vw, 150px)', objectFit: 'cover', display: 'block' }} />
                <span style={{ position: 'absolute', top: 8, right: 8, width: 26, height: 26, borderRadius: '50%', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--a1)' }}>
                  <Eye size={12} />
                </span>
              </div>
              <div style={{ padding: '12px 15px 16px' }}>
                <p style={{ fontSize: 9, letterSpacing: '0.18em', color: 'var(--a1)', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase' }}>{cert.badge}</p>
                <p style={{ fontSize: 12.5, color: 'var(--text)', lineHeight: 1.45, fontWeight: 500 }}>{cert.title}</p>
              </div>
            </button>
          ))}
      </div>

      {activeCert && <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />}
    </section>
  );
}

// ─── Projects — featured card, future-ready grid ─────────────────────────────

function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: '56px clamp(20px,5vw,48px) 64px', maxWidth: 1000, margin: '0 auto' }}>
      <p className="rv" style={{ fontSize: 12, letterSpacing: '0.42em', color: 'var(--a1)', marginBottom: 26, fontWeight: 600, textTransform: 'uppercase', textAlign: 'center' }}>
        Projects
      </p>

      {PROJECTS.map((project, idx) => (
        <div
          key={project.name}
          className="rv"
          style={{
            borderRadius: 26, border: '1px solid var(--border)', background: 'var(--surface)',
            backdropFilter: 'blur(18px)', overflow: 'hidden', display: 'flex', flexWrap: 'wrap',
            marginBottom: 18, transition: 'box-shadow .3s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 20px 70px var(--glow)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
        >
          <div style={{ flex: '1 1 280px', minHeight: 220, maxHeight: 360, aspectRatio: '16 / 9', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(255,45,63,.16), rgba(7,0,3,.92))', borderRight: '1px solid var(--border)' }}>
            <img src={project.image} alt={`${project.name} cover`} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', filter: 'saturate(1.05) contrast(1.02)' }} />
          </div>
          <div style={{ flex: '1 1 300px', padding: 'clamp(24px,4vw,40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
            <p style={{ fontSize: 10, letterSpacing: '0.32em', color: 'var(--a1)', fontWeight: 600, textTransform: 'uppercase' }}>
              {idx === 0 ? 'Featured Project' : 'Project'}
            </p>
            <h3 className="font-display" style={{ fontSize: 'clamp(1.4rem,4vw,1.9rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>
              {project.name}
            </h3>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 380 }}>{project.description}</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 4 }}>
              <a href={project.link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 22px', borderRadius: 999, background: 'var(--grad)', color: '#000', fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none', boxShadow: '0 0 18px var(--glow)' }}>
                <ExternalLink size={13} /> Live
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 22px', borderRadius: 999, border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none' }}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="rv" style={{ borderRadius: 18, border: '1px dashed var(--border)', padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 13, letterSpacing: '0.05em' }}>More projects unlocking soon</p>
        <ChevronRight size={17} color="var(--a1)" />
      </div>
    </section>
  );
}

// ─── Socials — only AI Mowa YouTube + Instagram ──────────────────────────────

function SocialSection() {
  return (
    <section style={{ padding: '20px clamp(20px,5vw,48px) 64px', maxWidth: 760, margin: '0 auto' }}>
      <p className="rv" style={{ fontSize: 12, letterSpacing: '0.42em', color: 'var(--a1)', marginBottom: 24, fontWeight: 600, textTransform: 'uppercase', textAlign: 'center' }}>
        Follow The Work
      </p>
      <div className="rv" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { brand: 'youtube' as Brand, handle: 'AI Mowa', sub: 'AI Filmmaking & Tutorials', href: 'https://yt.oia.bio/Ai-mowa', color: 'var(--a1)' },
          { brand: 'instagram' as Brand, handle: '@ai.mowa', sub: 'Reels & AI Creations', href: 'https://instagram.com/ai.mowa', color: 'var(--a2)' },
        ].map(({ brand, handle, sub, href, color }) => (
          <a
            key={handle}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 15, padding: '18px 26px', borderRadius: 22,
              border: '1px solid var(--border)', background: 'var(--surface)', backdropFilter: 'blur(14px)',
              textDecoration: 'none', color: 'var(--text)', flex: '1 1 240px', maxWidth: 310,
              transition: 'transform .22s, box-shadow .22s',
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 14px 44px var(--glow)'; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = 'none'; }}
          >
            <span style={{ width: 48, height: 48, borderRadius: 15, background: 'var(--surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0, boxShadow: '0 0 16px var(--glow)' }}>
              <BrandIcon brand={brand} size={22} />
            </span>
            <span>
              <span className="font-display" style={{ display: 'block', fontWeight: 700, fontSize: 15, marginBottom: 3 }}>{handle}</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.02em' }}>{sub}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── Fitness — full-screen video stage, text right, short & impactful ────────

function FitnessSection() {
  return (
    <VideoStage id="fitness" videoSrc={FITNESS_VIDEO} contentSide="right" preload="auto">
      <div className="fitness-copy" style={{ textAlign: 'right' }}>
        <h2 className="rv font-display fitness-title" style={{ fontSize: 'clamp(2rem,6vw,4rem)', fontWeight: 900, letterSpacing: '0', lineHeight: 1.08, marginBottom: 16, overflowWrap: 'break-word' }}>
          <span className="shimmer-text">PIXELS &amp; PLATES.</span>
        </h2>
        <p className="rv" style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 340, marginLeft: 'auto' }}>
          One builds the craft.<br />
          The other builds the creator.
        </p>
      </div>
    </VideoStage>
  );
}

// ─── Contact — compact, two-email routing ────────────────────────────────────

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'ai' | 'personal'>('ai');

  const targetEmail = type === 'ai' ? 'aimowa.official@gmail.com' : 'sarathchandra.simma04@gmail.com';

  const sendMail = () => {
    const subject = encodeURIComponent(`${type === 'ai' ? '[AI Mowa Collab]' : '[Career]'} ${name || 'Portfolio visitor'}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email || 'not provided'}`);
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const inputStyle: CSSProperties = {
    width: '100%', padding: '11px 15px', borderRadius: 12, border: '1px solid var(--border)',
    background: 'var(--surface-alt)', color: 'var(--text)', fontSize: 13.5, outline: 'none',
    fontFamily: 'Space Grotesk, sans-serif',
  };

  return (
    <section id="contact" style={{ padding: '36px clamp(20px,5vw,48px) 42px', maxWidth: 540, margin: '0 auto' }}>
      <h2 className="rv font-display" style={{ fontSize: 'clamp(1.45rem,4vw,2rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '0', textAlign: 'center', marginBottom: 20 }}>
        <span className="grad-text">Let's Connect</span>
      </h2>

      {/* Toggle */}
      <div className="rv" style={{ display: 'flex', gap: 6, marginBottom: 10, background: 'var(--surface)', borderRadius: 12, padding: 4, border: '1px solid var(--border)', backdropFilter: 'blur(12px)' }}>
        {(['ai', 'personal'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            style={{
              flex: 1, padding: '8px 10px', borderRadius: 9, border: 'none',
              background: type === t ? 'var(--grad)' : 'transparent',
              color: type === t ? '#000' : 'var(--text-muted)',
              fontWeight: type === t ? 700 : 400, fontSize: 12.5, cursor: 'pointer',
              letterSpacing: '0.04em', fontFamily: 'Space Grotesk, sans-serif', transition: 'all .2s',
            }}
          >
            {t === 'ai' ? 'AI Content / Collab' : 'Career / Personal'}
          </button>
        ))}
      </div>

      {/* Email hint — one compact line */}
      <p className="rv" style={{ fontSize: 11.5, color: 'var(--text-muted)', textAlign: 'center', marginBottom: 12, letterSpacing: '0.02em' }}>
        {type === 'ai'
          ? <>AI Mowa collabs & enquiries → <span style={{ color: 'var(--a1)', fontWeight: 600 }}>aimowa.official@gmail.com</span></>
          : <>Career & personal → <span style={{ color: 'var(--a1)', fontWeight: 600 }}>sarathchandra.simma04@gmail.com</span></>}
      </p>

      {/* Compact form */}
      <div className="rv" style={{ borderRadius: 16, border: '1px solid var(--border)', background: 'var(--surface)', backdropFilter: 'blur(16px)', padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" style={{ ...inputStyle, flex: '1 1 140px' }} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ ...inputStyle, flex: '1 1 140px' }} />
        </div>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What do you want to build?" rows={3} style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }} />
        <button
          onClick={sendMail}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '12px 24px', borderRadius: 999, background: 'var(--grad)', border: 'none',
            color: '#000', fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', cursor: 'pointer',
            boxShadow: '0 0 22px var(--glow)', fontFamily: 'Space Grotesk, sans-serif', transition: 'transform .2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'none')}
        >
          <Mail size={15} /> Send Message
        </button>
      </div>

      {/* Quick links */}
    </section>
  );
}

function FooterActions() {
  const socialLinks: { brand: Brand; label: string; href: string }[] = [
    { brand: 'instagram', label: 'Instagram', href: 'https://instagram.com/ai.mowa' },
    { brand: 'youtube', label: 'YouTube', href: 'https://yt.oia.bio/Ai-mowa' },
    { brand: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/simma-sarathchandra/' },
    { brand: 'github', label: 'GitHub', href: 'https://github.com/sarathchandrasimma' },
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', padding: '0 clamp(20px,5vw,48px) 42px' }}>
      <a href={Resume} download style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px', borderRadius: 999, background: 'var(--grad)', color: '#000', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.06em', textDecoration: 'none', boxShadow: '0 0 22px var(--glow)' }}>
        <Download size={14} /> Resume
      </a>
      {socialLinks.map(({ brand, label, href }) => (
        <a
          key={brand}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          style={{ width: 42, height: 42, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', textDecoration: 'none', boxShadow: '0 0 16px var(--glow)', transition: 'transform .2s, color .2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.color = 'var(--a1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.color = 'var(--text)'; }}
        >
          <BrandIcon brand={brand} size={18} />
        </a>
      ))}
    </div>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '22px clamp(20px,5vw,40px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, position: 'relative', zIndex: 2 }}>
      <p className="font-display grad-text" style={{ fontWeight: 900, fontSize: 15 }}>AI.MOWA</p>
      <p style={{ fontSize: 11.5, color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
        © {new Date().getFullYear()} Simma Sarath Chandra
      </p>
    </footer>
  );
}

// ─── Root ────────────────────────────────────────────────────────────────────

export default function PortfolioExperience() {
  const [loaded, setLoaded] = useState(false);
  const theme = THEMES.ember;

  useEffect(() => { injectCSS(); }, []);
  useEffect(() => { applyThemeVars(theme); }, [theme]);
  useReveal();

  // Re-run reveal observer after loader finishes (elements now visible)
  useEffect(() => {
    if (!loaded) return;
    const els = document.querySelectorAll('.rv:not(.in)');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [loaded]);

  return (
    <div className="noise" style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--text)', position: 'relative' }}>
      <LiquidBackground theme={theme} />

      {!loaded && <Loader theme={theme} onDone={() => setLoaded(true)} />}

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.7s ease', pointerEvents: loaded ? 'auto' : 'none', position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <HeroSection />
          <SkillsSection />
          <CertificationsSection />
          <ProjectsSection />
          <SocialSection />
          <FitnessSection />
          <ContactSection />
          <FooterActions />
        </main>
        <Footer />
      </div>
    </div>
  );
}
