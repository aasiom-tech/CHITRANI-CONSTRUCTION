/**
 * Verified Configuration for Chitrani Construction
 * Contains authentic business registration and location details.
 */

export interface CompanyConfig {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  subtagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  operatingOffice: string;
  registeredOffice: string;
  gstin: string;
  highlights: {
    title: string;
    description: string;
  }[];
}

export const companyConfig: CompanyConfig = {
  name: "Chitrani Construction",
  legalName: "Mrunali Dipak Sonawane",
  shortName: "CHITRANI",
  tagline: "Building Infrastructure. Delivering Confidence.",
  subtagline: "Structural civil contracting and high-capacity equipment rental across Maharashtra.",
  phone: "+91 98337 06666",
  phoneRaw: "+919833706666",
  whatsapp: "+91 98337 06666",
  whatsappRaw: "919833706666",
  email: "chitraniconstruction@gmail.com",
  operatingOffice: "Shop No. 13, Vijay Nagar Society, Sahar Road, Near D Mart, Andheri East, Mumbai – 400069",
  registeredOffice: "Plot No. 15, Gat No. 146, Nehru Nagar, Mahabal Road, Ramanand Nagar, Jalgaon, Maharashtra – 425001",
  gstin: "27CLUPB6299K2Z6",
  highlights: [
    {
      title: "Construction Contracting",
      description: "Civil structural execution for residential, commercial, and infrastructure developments."
    },
    {
      title: "Concrete Equipment Rental",
      description: "Putzmeister M42-5 Concrete Boom Placer available with certified operator and helper team."
    },
    {
      title: "GST-Registered Enterprise",
      description: "Full tax-compliant enterprise under GSTIN 27CLUPB6299K2Z6 for corporate and government tenders."
    },
    {
      title: "Mumbai & Jalgaon Presence",
      description: "Strategic operating office in Andheri East, Mumbai, and registered office in Jalgaon."
    },
    {
      title: "Operator & Helper Included",
      description: "Equipment rentals delivered with experienced on-site operators for continuous pours."
    },
    {
      title: "Public & Private Sector Support",
      description: "Proven record supporting major developers, government contractors, and infrastructure teams."
    }
  ]
};
