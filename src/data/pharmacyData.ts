import {
  BusinessInfo,
  MedicineItem,
  ServiceItem,
  CategoryItem,
  WhyChooseUsItem,
  TestimonialItem,
  FAQItem,
  GalleryImage,
} from '../types';

import heroBannerImg from '../assets/images/pharmacy_hero_banner_1785222467271.jpg';
import storeFrontImg from '../assets/images/pharmacy_store_front_1785222479850.jpg';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Manju Medical Hall Paliganj Indra Nagar More",
  shortName: "Manju Medical Hall",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  address: "Indra Nagar More, Paliganj",
  location: "Paliganj, Bihar 801110",
  landmark: "Near Indra Nagar More, Main Road Paliganj",
  city: "Paliganj",
  state: "Bihar",
  pincode: "801110",
  phone: "06207148771",
  whatsapp: "916207148771",
  email: "manjumedicalpaliganj@gmail.com",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.33128912!2d84.8105!3d25.3508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzAyLjkiTiA4NMKwNDgnMzcuOCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapShareUrl: "https://maps.google.com/?q=Manju+Medical+Hall+Paliganj+Indra+Nagar+More+Bihar+801110",
  workingHours: {
    weekdays: "8:00 AM – 10:00 PM (Monday – Saturday)",
    sunday: "8:00 AM – 9:30 PM (Sunday Open)",
    emergency: "24x7 Urgent WhatsApp & Phone Call Support",
  },
};

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "1",
    title: "100% Genuine Medicines",
    description: "Sourced directly from authorized pharma manufacturers and official distributors with verified batch manufacturing.",
    iconName: "ShieldCheck",
    badge: "Authentic"
  },
  {
    id: "2",
    title: "Experienced Staff",
    description: "Qualified, polite healthcare staff ready to guide you on prescription understanding, dosage schedules and storage instructions.",
    iconName: "UserCheck",
  },
  {
    id: "3",
    title: "Affordable Prices",
    description: "Maximum retail price (MRP) discounts and transparent pricing on daily chronic medications and healthcare supplies.",
    iconName: "Tag",
    badge: "Best Value"
  },
  {
    id: "4",
    title: "Fast Service",
    description: "Quick order dispatch, fast counter fulfillment and instant WhatsApp prescription review for Paliganj locals.",
    iconName: "Zap",
  },
  {
    id: "5",
    title: "Prescription Medicines",
    description: "Wide inventory of chronic illness, antibiotic, cardiac, diabetic, and specialty prescription drugs in stock.",
    iconName: "FileText",
  },
  {
    id: "6",
    title: "Healthcare Products",
    description: "Complete health care store for baby products, surgical dressings, personal hygiene, and nutritional supplements.",
    iconName: "HeartPulse",
  },
  {
    id: "7",
    title: "Trusted Local Pharmacy",
    description: "Serving the families of Paliganj, Bikram, Dulhin Bazar and surrounding regions with honesty and warm personal care.",
    iconName: "Building2",
    badge: "Since Years"
  },
  {
    id: "8",
    title: "Easy WhatsApp Support",
    description: "Simply snap a photo of your prescription and send it on WhatsApp to order medicines without waiting in queues.",
    iconName: "MessageSquare",
    badge: "1-Click Order"
  }
];

export const FEATURED_CATEGORIES: CategoryItem[] = [
  {
    id: "tablets",
    name: "Tablets",
    iconName: "Pill",
    description: "Analgesics, antibiotics, antacids, multivitamins, diabetic & BP tablets",
    count: 1200,
    popularItems: ["Paracetamol 650", "Pan D", "Glycomet GP2", "Telmikind 40"]
  },
  {
    id: "capsules",
    name: "Capsules",
    iconName: "Pill",
    description: "Gastro-resistant, vitamin D3, probiotic, & antibiotic hard shell capsules",
    count: 450,
    popularItems: ["Rabekind DSR", "Becosules", "Calcirol 60k", "Itaspor 200"]
  },
  {
    id: "syrups",
    name: "Syrups",
    iconName: "Wine",
    description: "Cough syrups, pediatric tonics, liver syrups & digestive enzymes",
    count: 320,
    popularItems: ["Ascoril LS", "Alex Syrup", "Liv 52", "Multivitamin Drops"]
  },
  {
    id: "injection",
    name: "Injection",
    iconName: "Syringe",
    description: "Insulin pens, tetanus toxoid, IV fluids, & emergency clinical injectables",
    count: 180,
    popularItems: ["Miantus Insulin", "Monocef 1g", "Pantop 40", "Dynapar AQ"]
  },
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    iconName: "Activity",
    description: "Digital BP monitors, sugar testing glucometers, nebulizers, & pulse oximeters",
    count: 85,
    popularItems: ["Omron BP Monitor", "Accu-Chek Active", "Dr Trust Nebulizer"]
  },
  {
    id: "protein-supplements",
    name: "Protein Supplements",
    iconName: "Dumbbell",
    description: "Whey protein, health drinks for adults, pregnant women & kids",
    count: 110,
    popularItems: ["Protinex", "Ensure Powder", "Horlicks Mothers", "GRD Powder"]
  },
  {
    id: "vitamins",
    name: "Vitamins",
    iconName: "Zap",
    description: "Immunity boosters, Calcium + D3, Vitamin C, Zinc & Omega 3 fish oils",
    count: 240,
    popularItems: ["Limcee 500", "Neurobion Forte", "Shelcal 500", "Evion 400"]
  },
  {
    id: "skin-care",
    name: "Skin Care",
    iconName: "Sparkles",
    description: "Dermatologist soaps, moisturizing creams, antiseptic lotions & sunscreens",
    count: 290,
    popularItems: ["Calamine Lotion", "Betadine Ointment", "Ketoconazole Soap"]
  },
  {
    id: "baby-products",
    name: "Baby Products",
    iconName: "Baby",
    description: "Baby diapers, wipes, baby soaps, powders, massage oils & Cerelac",
    count: 350,
    popularItems: ["Pampers Diapers", "Himalaya Baby Lotion", "Cerelac Stage 1", "Gripe Water"]
  },
  {
    id: "personal-hygiene",
    name: "Personal Hygiene",
    iconName: "Shield",
    description: "Antiseptic liquids, hand sanitizers, adult diapers & intimate hygiene",
    count: 210,
    popularItems: ["Dettol Liquid", "Savlon Spray", "Friends Adult Diaper"]
  },
  {
    id: "orthopedic-support",
    name: "Orthopedic Support",
    iconName: "Stethoscope",
    description: "Knee caps, lumbar belts, crepe bandages, neck collars & hot water bags",
    count: 95,
    popularItems: ["Flamingo Knee Support", "Vissco Lumbar Belt", "Flamingo Heating Pad"]
  },
  {
    id: "diabetic-care",
    name: "Diabetic Care",
    iconName: "Heart",
    description: "Glucometer strips, sugar-free sweeteners, diabetic footwear & socks",
    count: 130,
    popularItems: ["Accu-Chek Test Strips", "Sugar Free Gold", "Diabetic Care Juice"]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    shortDescription: "Authentic prescription drugs for cardiac, diabetes, hypertension, infections, and chronic diseases.",
    fullDescription: "At Manju Medical Hall, we stock a comprehensive range of genuine prescription medicines from top pharmaceutical companies like Cipla, Sun Pharma, Mankind, Lupin, Alkem, and Torrent. Our staff carefully verifies dosage instructions and provides clear guidance on storage and scheduling.",
    iconName: "FileCheck",
    features: ["100% Genuine Certified Stock", "Proper Cold-Chain Refrigeration for Insulins", "Discounted MRP on Chronic Refills", "Instant WhatsApp Order Support"],
    category: "Medicines"
  },
  {
    id: "general-medicines",
    title: "General & OTC Medicines",
    shortDescription: "Everyday healthcare essentials for fever, cold, acidity, pain relief, and digestion.",
    fullDescription: "Get instant over-the-counter access to reliable remedies for daily ailments such as fever, seasonal cold, cough, headache, muscle soreness, indigestion, and minor cuts.",
    iconName: "Pill",
    features: ["Pain Relievers & Analgesics", "Acidity & Antacids", "Cough & Cold Remedies", "Digestive Care"],
    category: "Medicines"
  },
  {
    id: "health-supplements",
    title: "Health Supplements & Nutrition",
    shortDescription: "Multivitamins, mineral capsules, protein powders, and immunity boosters.",
    fullDescription: "Support your health and vitality with premium nutritional formulations. We offer adult protein powders, pregnancy wellness supplements, geriatric nutrition drinks, and essential vitamin complexes.",
    iconName: "Dumbbell",
    features: ["Multivitamins & Zinc", "Calcium & Vitamin D3", "Adult Protein Powders", "Immunity Boosters"],
    category: "Wellness"
  },
  {
    id: "baby-care",
    title: "Baby Care & Feeding Essentials",
    shortDescription: "Infant milk formula, Cerelac, gentle baby soaps, diapers, wipes, and baby oil.",
    fullDescription: "We understand that your little ones deserve gentle, dermatologically safe care. Our baby section features top brands like Himalaya Baby, Pampers, Lactogen, Cerelac, Johnson's Baby, and Sebamed.",
    iconName: "Baby",
    features: ["Baby Foods & Formula", "Soft Diapers & Wipes", "Gentle Baby Lotions & Oils", "Teething & Bathing Items"],
    category: "Mother & Baby"
  },
  {
    id: "personal-care",
    title: "Personal Care & Cosmetics",
    shortDescription: "Skincare creams, hair care shampoos, medicated soaps, oral care, and grooming.",
    fullDescription: "Choose from a trusted assortment of medicated and daily personal care products including anti-dandruff shampoos, acne ointments, sunscreens, antiseptics, and oral hygiene supplies.",
    iconName: "Sparkles",
    features: ["Medicated Soaps & Shampoos", "Antiseptic Creams & Lotions", "Oral Hygiene Products", "Daily Skincare Essentials"],
    category: "Personal Care"
  },
  {
    id: "medical-equipment",
    title: "Medical Equipment & Devices",
    shortDescription: "Digital blood pressure monitors, glucometers, nebulizers, thermometers, and pulse oximeters.",
    fullDescription: "Monitor your vital health parameters at home accurately. We supply certified digital BP apparatus, blood glucose testing kits, steam inhalers, pulse oximeters, and digital thermometers.",
    iconName: "Activity",
    features: ["Digital BP Monitors", "Glucometer Kits & Strips", "Compressor Nebulizers", "Fingertip Oximeters"],
    category: "Devices"
  },
  {
    id: "surgical-supplies",
    title: "Surgical Supplies & Dressings",
    shortDescription: "Sterile gauze rolls, cotton, surgical tapes, disposable syringes, gloves, and IV sets.",
    fullDescription: "We serve local clinics, doctors, nursing homes, and home care patients with high-quality hospital surgical supplies, wound care kits, sterile dressings, and protective equipment.",
    iconName: "Scissors",
    features: ["Sterile Cotton & Gauze", "Micropore & Adhesive Tapes", "Disposable Syringes & Needles", "Medical Gloves & Masks"],
    category: "Surgical"
  },
  {
    id: "first-aid-products",
    title: "First Aid Supplies",
    shortDescription: "Antiseptic liquids, wound healing sprays, adhesive bandages, crepe bandages, and burn creams.",
    fullDescription: "Be prepared for unexpected household or travel minor injuries. Build or replenish your home first aid box with Dettol, Savlon, Band-Aid, Burnol, and elastic bandages.",
    iconName: "Cross",
    features: ["Antiseptic Liquids", "Adhesive Band-Aids", "Burn & Cut Ointments", "Complete First Aid Kits"],
    category: "First Aid"
  },
  {
    id: "diabetic-care",
    title: "Diabetic Care Essentials",
    shortDescription: "Insulin syringes, test strips, sugar-free drinks, diabetic foot creams, and monitoring tools.",
    fullDescription: "Comprehensive management products for diabetes mellitus. We maintain cold-chain storage for insulins and stock test strips for all major glucometer brands.",
    iconName: "HeartPulse",
    features: ["Cold-stored Insulin Pens", "Blood Sugar Test Strips", "Sugar-Free Sweeteners", "Diabetic Foot & Care"],
    category: "Specialized"
  },
  {
    id: "healthcare-essentials",
    title: "Home Care & Senior Support",
    shortDescription: "Adult diapers, underpads, water beds, walking sticks, commode chairs, and hot water bags.",
    fullDescription: "Empower elderly and bedridden patients with comfortable, dignified home care devices including pressure-relief water beds, walking aids, adult diapers, and heating pads.",
    iconName: "Shield",
    features: ["Adult Diapers & Underpads", "Walking Sticks & Crutches", "Water Beds & Air Cushions", "Orthopedic Belts & Pads"],
    category: "Home Care"
  }
];

export const MEDICINE_CATALOG: MedicineItem[] = [
  {
    id: "m1",
    name: "Paracetamol 650mg (Dolo / Crocin / Calpol)",
    brand: "Micro Labs / GSK",
    category: "Tablets",
    dosageForm: "Tablets",
    composition: "Paracetamol 650 mg",
    description: "Fast-acting analgesic and antipyretic tablet for fever, body aches, and mild-to-moderate pain.",
    uses: ["Fever reduction", "Body pain", "Headache", "Post-vaccination discomfort"],
    prescriptionRequired: false,
    inStock: true,
    priceEstimate: "₹30 – ₹35 per strip (15 tabs)",
    popular: true
  },
  {
    id: "m2",
    name: "Pan D Capsule (Pantoprazole + Domperidone)",
    brand: "Alkem Laboratories",
    category: "Capsules",
    dosageForm: "Capsules",
    composition: "Pantoprazole 40mg + Domperidone 30mg SR",
    description: "Effective gastro-resistant capsule for hyperacidity, GERD, gas, heartburn, and nausea.",
    uses: ["Acidity & Gas", "Acid reflux", "Nausea", "Stomach heaviness"],
    prescriptionRequired: true,
    inStock: true,
    priceEstimate: "₹180 – ₹199 per strip (15 caps)",
    popular: true
  },
  {
    id: "m3",
    name: "Glycomet GP 2 Tablet",
    brand: "USV Ltd",
    category: "Diabetic Care",
    dosageForm: "Tablets",
    composition: "Glimepiride 2mg + Metformin 500mg SR",
    description: "Popular anti-diabetic medication used to control high blood sugar levels in Type-2 diabetes.",
    uses: ["Type-2 Diabetes mellitus control"],
    prescriptionRequired: true,
    inStock: true,
    priceEstimate: "₹120 – ₹140 per strip (15 tabs)",
    popular: true
  },
  {
    id: "m4",
    name: "Ascoril LS Syrup (100 ml)",
    brand: "Glenmark Pharmaceuticals",
    category: "Syrups",
    dosageForm: "Syrups",
    composition: "Levosalbutamol + Ambroxol + Guaiphenesin",
    description: "Expectorant cough syrup used to relieve chest congestion, productive cough, and mucus clearance.",
    uses: ["Productive cough", "Bronchial asthma", "Chest congestion"],
    prescriptionRequired: true,
    inStock: true,
    priceEstimate: "₹115 – ₹125 per bottle",
    popular: true
  },
  {
    id: "m5",
    name: "Omron Hem-7120 Digital BP Monitor",
    brand: "Omron Healthcare",
    category: "Medical Equipment",
    dosageForm: "Medical Equipment",
    composition: "Fully Automatic Digital Upper Arm Blood Pressure Monitor",
    description: "Accurate, easy-to-use home blood pressure measuring apparatus with Intellisense technology.",
    uses: ["Home BP monitoring", "Pulse rate check", "Hypertension tracking"],
    prescriptionRequired: false,
    inStock: true,
    priceEstimate: "₹1,950 – ₹2,200",
    popular: true
  },
  {
    id: "m6",
    name: "Cerelac Wheat Apple (300g)",
    brand: "Nestle",
    category: "Baby Products",
    dosageForm: "Baby Products",
    composition: "Processed Cereal Based Complementary Food with Milk",
    description: "Nutritious infant food rich in iron, zinc, multivitamins and omega 3 for babies aged 6+ months.",
    uses: ["Infant nutrition", "Weaning food", "Healthy growth"],
    prescriptionRequired: false,
    inStock: true,
    priceEstimate: "₹280 – ₹310",
    popular: true
  },
  {
    id: "m7",
    name: "Protinex Original Powder (250g)",
    brand: "Danone Nutricia",
    category: "Protein Supplements",
    dosageForm: "Protein Supplements",
    composition: "High protein drink mix with 34 vital nutrients & zero added sugar",
    description: "Daily nutritional health supplement that builds strength, immunity, and stamina for adults.",
    uses: ["Daily protein requirement", "Immunity support", "Muscle fatigue recovery"],
    prescriptionRequired: false,
    inStock: true,
    priceEstimate: "₹380 – ₹420",
    popular: true
  },
  {
    id: "m8",
    name: "Shelcal 500 Tablet",
    brand: "Torrent Pharmaceuticals",
    category: "Vitamins",
    dosageForm: "Tablets",
    composition: "Elemental Calcium 500mg + Vitamin D3 250 IU",
    description: "Essential supplement for maintaining strong bones, teeth, and preventing osteoporosis or deficiency.",
    uses: ["Bone strength", "Calcium supplement", "Joint health"],
    prescriptionRequired: false,
    inStock: true,
    priceEstimate: "₹110 – ₹130 per strip (15 tabs)",
    popular: true
  },
  {
    id: "m9",
    name: "Volini Pain Relief Gel (50g)",
    brand: "Sun Pharma",
    category: "Orthopedic Support",
    dosageForm: "Skin Care",
    composition: "Diclofenac + Methyl Salicylate + Menthol + Linseed Oil",
    description: "Instant topical pain relief ointment for joint aches, backache, neck pain, and muscle sprains.",
    uses: ["Back pain", "Joint pain", "Muscle stiffness", "Sports injuries"],
    prescriptionRequired: false,
    inStock: true,
    priceEstimate: "₹140 – ₹160",
    popular: true
  },
  {
    id: "m10",
    name: "Accu-Chek Active Test Strips (50 Strips)",
    brand: "Roche Diabetes Care",
    category: "Diabetic Care",
    dosageForm: "Diabetic Care",
    composition: "Quantitative blood glucose testing strips",
    description: "High precision test strips compatible with Accu-Chek Active glucometer meter for fast results.",
    uses: ["Self-testing blood glucose level"],
    prescriptionRequired: false,
    inStock: true,
    priceEstimate: "₹950 – ₹1,050",
    popular: true
  },
  {
    id: "m11",
    name: "Dettol Antiseptic Disinfectant Liquid (250 ml)",
    brand: "Reckitt Benckiser",
    category: "Personal Hygiene",
    dosageForm: "Personal Hygiene",
    composition: "Chloroxylenol IP 4.8% w/v",
    description: "Trusted household antiseptic liquid for first aid, wound cleaning, laundry, and hygiene.",
    uses: ["Wound disinfection", "Bathing hygiene", "First aid cuts"],
    prescriptionRequired: false,
    inStock: true,
    priceEstimate: "₹120 – ₹135",
    popular: true
  },
  {
    id: "m12",
    name: "Limcee Chewable Vitamin C 500mg",
    brand: "Abbott Healthcare",
    category: "Vitamins",
    dosageForm: "Tablets",
    composition: "Ascorbic Acid + Sodium Ascorbate 500mg",
    description: "Delicious orange flavored vitamin C chewable tablets for antioxidant protection and immunity.",
    uses: ["Immunity boosting", "Skin repair", "Scurvy prevention"],
    prescriptionRequired: false,
    inStock: true,
    priceEstimate: "₹25 – ₹30 per strip (15 tabs)",
    popular: true
  }
];

export const WORKING_PROCESS_STEPS = [
  {
    step: "01",
    title: "Visit Store or Message",
    description: "Walk into our store at Indra Nagar More, Paliganj, or open our WhatsApp Order Form online.",
    iconName: "Store"
  },
  {
    step: "02",
    title: "Share Prescription",
    description: "Show your paper prescription to our pharmacist or upload a clear photo via WhatsApp.",
    iconName: "FileUp"
  },
  {
    step: "03",
    title: "Get Genuine Medicines",
    description: "Our verified pharmacist checks the medicines, batch numbers, and packs your order safely.",
    iconName: "CheckCircle2"
  },
  {
    step: "04",
    title: "Easy Payment & Guidance",
    description: "Pay conveniently via UPI, Cash, or Cards and receive clear advice on how to consume.",
    iconName: "CreditCard"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Rameshwar Prasad Singh",
    location: "Paliganj Bazar",
    rating: 5,
    comment: "Manju Medical Hall has been our family's trusted pharmacy for years. They always have genuine medicines for my father's BP and diabetes. Staff behavior is extremely polite.",
    date: "12 May 2026",
    verifiedCustomer: true,
    medicineCategory: "Diabetic & BP Refills"
  },
  {
    id: "2",
    name: "Sunita Devi",
    location: "Indra Nagar, Paliganj",
    rating: 5,
    comment: "Whenever my baby needs milk powder or fever syrup in emergency, Manju Medical Hall helps instantly. Their WhatsApp prescription ordering saves so much time!",
    date: "04 June 2026",
    verifiedCustomer: true,
    medicineCategory: "Baby Care & Pediatrics"
  },
  {
    id: "3",
    name: "Dr. Alok Kumar Sharma",
    location: "Dulhin Bazar",
    rating: 5,
    comment: "As a local medical practitioner, I frequently advise my patients to get their prescriptions filled from Manju Medical Hall because of their guaranteed 100% genuine pharma stock.",
    date: "18 April 2026",
    verifiedCustomer: true,
    medicineCategory: "Prescription Antibiotics"
  },
  {
    id: "4",
    name: "Mukesh Kumar Roy",
    location: "Bikram Main Market",
    rating: 5,
    comment: "I bought an Omron Blood Pressure Monitor and Accu-Chek glucometer from here. They demonstrated how to test blood sugar step by step. Great local service!",
    date: "29 May 2026",
    verifiedCustomer: true,
    medicineCategory: "Medical Devices"
  },
  {
    id: "5",
    name: "Pooja Kumari",
    location: "Near High School Paliganj",
    rating: 5,
    comment: "Affordable prices, clean shop, and original products. Even when a specialized injection wasn't immediately on counter, they arranged it within 2 hours.",
    date: "22 June 2026",
    verifiedCustomer: true,
    medicineCategory: "General & OTC Medicines"
  },
  {
    id: "6",
    name: "Vikas Kumar Verma",
    location: "Chandos, Paliganj",
    rating: 5,
    comment: "The phone call service is very helpful. I called 06207148771 to check availability of cardiac tablets before visiting. They kept it packed and ready for me.",
    date: "10 July 2026",
    verifiedCustomer: true,
    medicineCategory: "Heart Care Medicines"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where is Manju Medical Hall located in Paliganj?",
    answer: "Manju Medical Hall is conveniently located at Indra Nagar More, Main Road, Paliganj, Bihar 801110. It is easily accessible with ample parking for bikes and cars.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How can I order medicines through WhatsApp?",
    answer: "Simply click the green WhatsApp Order button on our website or save our number 06207148771 / 916207148771. Take a clear photo of your prescription, mention your address or requirement, and send it. Our pharmacist will verify and confirm your order promptly.",
    category: "Ordering"
  },
  {
    id: "faq-3",
    question: "Are all medicines sold at Manju Medical Hall 100% genuine?",
    answer: "Yes, absolutely! We source all our tablets, capsules, syrups, insulins, and surgical items directly from authorized company stockists and certified pharma distributors. Every item bears valid batch numbers and expiry dates.",
    category: "Quality"
  },
  {
    id: "faq-4",
    question: "Is doctor's prescription mandatory for all medicines?",
    answer: "A valid prescription from a registered medical practitioner is mandatory for Schedule H & H1 prescription drugs (antibiotics, psychiatric drugs, high-potency painkillers, chronic heart/diabetes medications). OTC medicines like antacids, fever drops, band-aids, and supplements do not require a prescription.",
    category: "Policy"
  },
  {
    id: "faq-5",
    question: "What are the store working hours?",
    answer: "Our physical store is open Monday through Saturday from 8:00 AM to 10:00 PM, and on Sundays from 8:00 AM to 9:30 PM. For urgent emergency needs, you can call us anytime at 06207148771.",
    category: "General"
  },
  {
    id: "faq-6",
    question: "Do you store insulins and temperature-sensitive injections properly?",
    answer: "Yes! We maintain dedicated medical refrigerators with continuous power backup to store insulins, vaccines, and biologics at strict cold-chain temperatures (2°C to 8°C).",
    category: "Quality"
  },
  {
    id: "faq-7",
    question: "Do you stock baby products and nutritional supplements?",
    answer: "Yes, we have a dedicated section for infant care, baby diapers, baby foods (Cerelac, Lactogen), gentle soaps, oil, as well as adult health drinks (Protinex, Ensure, Horlicks Mothers).",
    category: "Products"
  },
  {
    id: "faq-8",
    question: "What medical devices and testing equipment are available?",
    answer: "We offer digital blood pressure apparatus (Omron), glucometers & test strips (Accu-Chek, Dr. Morepen), compressor nebulizers, pulse oximeters, digital thermometers, and heating pads.",
    category: "Products"
  },
  {
    id: "faq-9",
    question: "Which payment options are accepted?",
    answer: "We accept all convenient payment modes including Cash, PhonePe, Google Pay, Paytm, UPI QR Scan, and major Debit/Credit cards.",
    category: "Payments"
  },
  {
    id: "faq-10",
    question: "Can you arrange rare or specialized medicines if not in stock?",
    answer: "Yes! If a specific specialized medicine or injection prescribed by your doctor is temporarily out of stock, we can source it from our primary regional distributor hub within 2 to 6 hours.",
    category: "Services"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    url: storeFrontImg,
    title: "Manju Medical Hall Store Front & Counter",
    category: "Store Front",
    description: "Modern, clean store counter at Indra Nagar More, Paliganj."
  },
  {
    id: "g2",
    url: heroBannerImg,
    title: "Well-Organized Medicine Shelves & Storage",
    category: "Medicine Shelves",
    description: "Systematically categorized prescription and OTC pharmaceutical inventory."
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
    title: "Genuine Pharmaceutical Supplies",
    category: "Products",
    description: "Verified pharma tablets, capsules, and health drinks."
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?q=80&w=1200&auto=format&fit=crop",
    title: "Digital BP & Healthcare Devices Section",
    category: "Medical Equipment",
    description: "Certified Omron BP monitors, glucometers, and pulse oximeters."
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    title: "Consulting Pharmacist Assisting Customer",
    category: "Customers",
    description: "Friendly staff helping local residents with dosage instructions."
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
    title: "Cold-Storage Insulins & Biologics",
    category: "Medicine Shelves",
    description: "Strict temperature-controlled refrigeration unit for insulins."
  }
];
