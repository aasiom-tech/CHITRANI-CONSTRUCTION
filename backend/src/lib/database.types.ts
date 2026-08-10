export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      business_divisions: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          display_order: number;
          is_active: boolean;
          archived_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          display_order?: number;
          is_active?: boolean;
          archived_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          display_order?: number;
          is_active?: boolean;
          archived_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          division_id: string;
          name: string;
          slug: string;
          short_description: string | null;
          full_description: string | null;
          featured: boolean;
          display_order: number;
          is_active: boolean;
          seo_title: string | null;
          seo_description: string | null;
          archived_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          division_id: string;
          name: string;
          slug: string;
          short_description?: string | null;
          full_description?: string | null;
          featured?: boolean;
          display_order?: number;
          is_active?: boolean;
          seo_title?: string | null;
          seo_description?: string | null;
          archived_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          division_id?: string;
          name?: string;
          slug?: string;
          short_description?: string | null;
          full_description?: string | null;
          featured?: boolean;
          display_order?: number;
          is_active?: boolean;
          seo_title?: string | null;
          seo_description?: string | null;
          archived_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      equipment_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          display_order: number;
          is_active: boolean;
          archived_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          display_order?: number;
          is_active?: boolean;
          archived_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          display_order?: number;
          is_active?: boolean;
          archived_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      equipment: {
        Row: {
          id: string;
          category_id: string;
          name: string;
          slug: string;
          manufacturer: string | null;
          model: string | null;
          manufacture_year: number | null;
          description: string | null;
          internal_status: string;
          public_status: string;
          featured: boolean;
          display_order: number;
          is_active: boolean;
          archived_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          category_id: string;
          name: string;
          slug: string;
          manufacturer?: string | null;
          model?: string | null;
          manufacture_year?: number | null;
          description?: string | null;
          internal_status?: string;
          public_status?: string;
          featured?: boolean;
          display_order?: number;
          is_active?: boolean;
          archived_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          category_id?: string;
          name?: string;
          slug?: string;
          manufacturer?: string | null;
          model?: string | null;
          manufacture_year?: number | null;
          description?: string | null;
          internal_status?: string;
          public_status?: string;
          featured?: boolean;
          display_order?: number;
          is_active?: boolean;
          archived_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      equipment_specifications: {
        Row: {
          id: string;
          equipment_id: string;
          specification_name: string;
          value: string;
          unit: string | null;
          display_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          equipment_id: string;
          specification_name: string;
          value: string;
          unit?: string | null;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          equipment_id?: string;
          specification_name?: string;
          value?: string;
          unit?: string | null;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      contact_enquiries: {
        Row: {
          id: string;
          reference_number: string;
          name: string;
          company: string | null;
          email: string;
          phone: string;
          division_id: string | null;
          service_id: string | null;
          project_location: string | null;
          message: string;
          consent: boolean;
          consent_at: string | null;
          status: string;
          assigned_to: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          reference_number?: string;
          name: string;
          company?: string | null;
          email: string;
          phone: string;
          division_id?: string | null;
          service_id?: string | null;
          project_location?: string | null;
          message: string;
          consent?: boolean;
          consent_at?: string | null;
          status?: string;
          assigned_to?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          reference_number?: string;
          name?: string;
          company?: string | null;
          email?: string;
          phone?: string;
          division_id?: string | null;
          service_id?: string | null;
          project_location?: string | null;
          message?: string;
          consent?: boolean;
          consent_at?: string | null;
          status?: string;
          assigned_to?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
