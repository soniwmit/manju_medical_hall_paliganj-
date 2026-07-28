export type PageView = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'order';

export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  location: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  whatsapp: string;
  email: string;
  googleMapEmbedUrl: string;
  googleMapShareUrl: string;
  workingHours: {
    weekdays: string;
    sunday: string;
    emergency: string;
  };
}

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  composition: string;
  dosageForm: 'Tablets' | 'Capsules' | 'Syrups' | 'Injection' | 'Medical Equipment' | 'Protein Supplements' | 'Vitamins' | 'Skin Care' | 'Baby Products' | 'Personal Hygiene' | 'Orthopedic Support' | 'Diabetic Care';
  description: string;
  uses: string[];
  prescriptionRequired: boolean;
  inStock: boolean;
  priceEstimate: string;
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  category: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  count: number;
  popularItems: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verifiedCustomer: boolean;
  medicineCategory: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Products' | 'Medical Equipment' | 'Customers';
  description: string;
}

export interface WhatsAppFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  prescriptionUploaded: boolean;
  prescriptionFileName?: string;
  prescriptionNotes?: string;
  message: string;
  preferredDeliveryTime: string;
}

export interface QuickInquiryFormData {
  name: string;
  phone: string;
  email: string;
  queryType: string;
  message: string;
}
