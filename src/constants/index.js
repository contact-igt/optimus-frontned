// ─── Site Info ───────────────────────────────────────────────────────────────
export const SITE = {
  name: "Optimus Eye Hospital",
  tagline: "& Dental Clinic",
  phone: "+919999965200",
  whatsapp: "9999965200",
  email: "optimuseyehospital@gmail.com",
  address:
    "Nihal Tower (Near SAS Hyundai Showroom), Arjunganj, Lucknow, Uttar Pradesh 226002",
  hours: "Mon to Sat 10:00am to 07:30pm",
  mapLink: "https://www.google.com/maps/place/Optimus+Eye+Hospital+%26+Dental+Clinic/@26.8064217,80.9915087,17z",
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // {
  //   label: "Services",
  //   href: "/services",
  //   dropdown: [
  //     { label: "Eye Care Services", href: "/services/eye-care" },
  //     { label: "Dental & Oral Care Services", href: "/services/dental-oral-care" },
  //   ],
  // },
  // { label: "Our Doctor", href: "/doctors" },
  // { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// ─── Hero Slides ─────────────────────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    id: 1,
    image: "/assets/herobanner1.png",
    title: "Dental Specialist in Arjunganj",
    subtitle: "Best Dental Hospital in Lucknow",
    description: "", // Removed description to match the clean UI in screenshot
  },
  {
    id: 2,
    image: "/assets/herobanner2.png",
    title: "Eye Specialist in Arjunganj",
    subtitle: "Advanced Eye Treatment in Lucknow",
    description: "", 
  },
];

// ─── Services ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    icon: "👁️",
    title: "Cornea Services",
    description: "We diagnose and treat corneal diseases such as infections, injuries, keratoconus, and dystrophies.",
  },
  {
    id: 2,
    icon: "🩺",
    title: "Glaucoma Services",
    description: "Comprehensive screening, diagnosis, and management of all types of glaucoma.",
  },
  {
    id: 3,
    icon: "🔬",
    title: "Cataract Services",
    description: "We specialize in advanced cataract diagnosis and treatment using modern technology, including premium IOLs and laser-assisted cataract surgery.",
  },
  {
    id: 4,
    icon: "✨",
    title: "Vitreo-Retina & ROP Care",
    description: "Our Vitreo-Retina unit specializes in conditions such as diabetic retinopathy, retinal detachment, ARMD, and vascular disorders.",
  }
];

// ─── Doctors ─────────────────────────────────────────────────────────────────
export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Arvind Verma",
    qualification: "(MBBS, MS,FMR(HVDEH,Pune))",
    specialty: "Senior Cataract and Refractive Surgeon",
    image: "/assets/aravind-dr.png",
  },
  {
    id: 2,
    name: "Dr. Neha Singh",
    qualification: "(BDS, MDS)",
    specialty: "Dental Specialist",
    image: "/assets/neha-dr.png",
  },
  {
    id: 3,
    name: "Dr. Pranav Srivastava",
    qualification: "(MBBS, MS, Fellowship in Vitreo-Retina)",
    specialty: "Vitreo-Retinal Surgeon",
    image: "/assets/pranav-dr.png",
  },
  {
    id: 4,
    name: "Dr. Amit Ghanshyam Gupta",
    qualification: "(MBBS, MS - Gold Medalist)",
    specialty: "Glaucoma & Cataract Surgeon",
    image: "/assets/amit-dr.png",
  },
];

// ─── Gallery ─────────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  { id: 1, src: "/assets/gallery.png", alt: "Clinic Interior" },
  { id: 2, src: "/assets/gallery2.png", alt: "Dental Department" },
  { id: 3, src: "/assets/gallery3.png", alt: "Eye Department" },
  { id: 4, src: "/assets/gallery4.png", alt: "Operation Theatre" },
  { id: 5, src: "/assets/clinicpic.png", alt: "Our Clinic" },
    { id: 6, src: "/assets/gallery5.png", alt: "Our Clinic" },
      { id: 7, src: "/assets/gallery6.png", alt: "Our Clinic" },
];

// ─── Why Trust ───────────────────────────────────────────────────────────────
export const WHY_TRUST = [
  {
    id: 1,
    title: "State-of-the-art Infrastructure",
    description:
      "Equipped with advanced OT units, high-precision diagnostic machines, and modern treatment technology.",
    icon: "infrastructure",
  },
  {
    id: 2,
    title: "Highly Experienced Specialists",
    description:
      "Team of senior ophthalmologists and dental surgeons offering expert, safe, and reliable care.",
    icon: "specialists",
  },
  {
    id: 3,
    title: "Advanced Robotic & 3D Technologies",
    description:
      "Cutting-edge robotic systems and 3D imaging tools ensuring precise diagnosis and advanced treatments.",
    icon: "robotic",
  },
  {
    id: 4,
    title: "Personalized Treatment Plans",
    description:
      "Each patient receives a tailored treatment strategy based on condition, lifestyle, and medical history.",
    icon: "treatment",
  },
  {
    id: 5,
    title: "Patient-friendly Environment",
    description:
      "Comfortable atmosphere with supportive staff ensuring a stress-free and caring experience.",
    icon: "environment",
  },
  {
    id: 6,
    title: "Ethical & Transparent Healthcare",
    description:
      "Honest guidance, transparent pricing, and treatment decisions focused purely on patient well-being.",
    icon: "ethical",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Lucknow",
    rating: 5,
    title: "Exceptional Cataract Surgery Experience",
    review:
      "I had cataract surgery at Optimus Eye Hospital and the entire process was smooth and painless. Dr. Arvind Verma explained everything clearly and the advanced technology made me feel completely safe. My vision is now crystal clear. Extremely grateful to the entire team.",
  },
  {
    id: 2,
    name: "Meena Sharma",
    location: "Lucknow",
    rating: 5,
    title: "Best Treatment for Glaucoma",
    review:
      "I was diagnosed with glaucoma and was very worried, but Dr. Amit Ghanshyam Gupta managed my condition with great care. His experience and confidence gave me peace of mind. Modern equipment & excellent staff. Highly recommended!",
  },
  {
    id: 3,
    name: "Richa Tiwari",
    location: "Gomti Nagar Extension",
    rating: 5,
    title: "Best Eye Hospital for Kids",
    review:
      "I visited the Paediatric & Squint Clinic for our 7-year-old daughter. The doctor was gentle and the environment child-friendly. Early detection & perfect treatment. Best hospital for kids!",
  },
  {
    id: 4,
    name: "Amit Srivastava",
    location: "Aliganj",
    rating: 5,
    title: "Completely Painless Root Canal Treatment",
    review:
      "I was scared of root canal, but Dr. Neha Singh made the procedure absolutely painless. She explained everything clearly and kept me comfortable. Pain is gone & treatment was perfect.",
  },
  {
    id: 5,
    name: "Priya Saxena",
    location: "Indira Nagar",
    rating: 5,
    title: "Excellent Cosmetic Dentistry Results",
    review:
      "I got cosmetic dental treatment for smile enhancement and the results are beyond expectations. Very advanced tools, skilled team, and natural-looking results. Truly satisfied!",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    id: 1,
    question: "What services does Optimus Eye Hospital & Dental Clinic provide?",
    answer:
      "We offer cataract surgery, glaucoma treatment, LASIK, retina care, pediatric eye care, and cornea services, as well as dental treatments including painless root canals, implants, braces, dentures, and smile makeover dentistry.",
  },
  {
    id: 2,
    question: "Which doctors are available?",
    answer:
      "Our team includes Dr. Arvind Verma (Cataract & Refractive Surgeon), Dr. Amit Ghanshyam Gupta (Glaucoma Specialist), Dr. Pranav Srivastava (Retina Surgeon), and Dr. Neha Singh (Dental Specialist).",
  },
  {
    id: 3,
    question: "Do you provide painless cataract surgery?",
    answer:
      "Yes, we specialize in painless, micro-incision & laser-assisted cataract surgeries with premium IOLs.",
  },
  {
    id: 4,
    question: "What dental treatments are available for children?",
    answer:
      "We provide cavity fillings, fluoride treatments, habit correction, braces, and preventive dental care for kids.",
  },
  {
    id: 5,
    question: "Do you offer LASIK or vision correction surgeries?",
    answer:
      "Yes, we provide LASIK, PRK, and other refractive surgeries performed by certified refractive surgeons.",
  },
  {
    id: 6,
    question: "How does your dental clinic ensure painless treatment?",
    answer:
      "We use advanced anesthesia, rotary tools, and modern dental technology to ensure completely painless procedures.",
  },
  {
    id: 7,
    question: "Do you treat retinal disorders?",
    answer:
      "Yes, we treat diabetic retinopathy, ARMD, retinal tears, and retinal detachment using advanced vitreo-retinal techniques.",
  },
  {
    id: 8,
    question: "Are dental implants available?",
    answer:
      "Yes, we offer advanced, long-lasting dental implants that look and function just like natural teeth.",
  },
  {
    id: 9,
    question: "Do you offer eye checkups for children?",
    answer:
      "Yes, our Paediatric & Squint Clinic provides complete eye testing and squint correction for kids of all ages.",
  },
  {
    id: 10,
    question: "How can I book an appointment?",
    answer:
      "You can call our helpline, visit our clinic in Arjunganj, Lucknow, or use our online booking system to schedule an appointment at your convenience.",
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "5000+", label: "Happy Patients" },
  { value: "15+", label: "Years Experience" },
  { value: "4", label: "Expert Doctors" },
  { value: "20+", label: "Services Offered" },
];
