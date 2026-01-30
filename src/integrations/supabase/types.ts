export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          business_email: string
          business_name: string
          created_at: string
          first_name: string
          id: string
          ip_address: string | null
          last_name: string
          reference_id: string
          request_details: string
          user_agent: string | null
        }
        Insert: {
          business_email: string
          business_name: string
          created_at?: string
          first_name: string
          id?: string
          ip_address?: string | null
          last_name: string
          reference_id: string
          request_details: string
          user_agent?: string | null
        }
        Update: {
          business_email?: string
          business_name?: string
          created_at?: string
          first_name?: string
          id?: string
          ip_address?: string | null
          last_name?: string
          reference_id?: string
          request_details?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      intake_submissions: {
        Row: {
          ai_analysis: Json | null
          budget: string | null
          challenges: string[] | null
          city: string | null
          company: string | null
          company_size: string | null
          country: string | null
          created_at: string
          email: string
          first_name: string | null
          focus_areas: string[] | null
          id: string
          industry: string | null
          ip_address: string | null
          job_title: string | null
          language: string | null
          last_name: string | null
          pdf_attached: boolean | null
          phone: string | null
          priority_cost_reduction: number | null
          priority_delivery: number | null
          priority_flexibility: number | null
          priority_quality: number | null
          priority_sustainability: number | null
          reference_id: string
          timeline: string | null
          user_agent: string | null
        }
        Insert: {
          ai_analysis?: Json | null
          budget?: string | null
          challenges?: string[] | null
          city?: string | null
          company?: string | null
          company_size?: string | null
          country?: string | null
          created_at?: string
          email: string
          first_name?: string | null
          focus_areas?: string[] | null
          id?: string
          industry?: string | null
          ip_address?: string | null
          job_title?: string | null
          language?: string | null
          last_name?: string | null
          pdf_attached?: boolean | null
          phone?: string | null
          priority_cost_reduction?: number | null
          priority_delivery?: number | null
          priority_flexibility?: number | null
          priority_quality?: number | null
          priority_sustainability?: number | null
          reference_id: string
          timeline?: string | null
          user_agent?: string | null
        }
        Update: {
          ai_analysis?: Json | null
          budget?: string | null
          challenges?: string[] | null
          city?: string | null
          company?: string | null
          company_size?: string | null
          country?: string | null
          created_at?: string
          email?: string
          first_name?: string | null
          focus_areas?: string[] | null
          id?: string
          industry?: string | null
          ip_address?: string | null
          job_title?: string | null
          language?: string | null
          last_name?: string | null
          pdf_attached?: boolean | null
          phone?: string | null
          priority_cost_reduction?: number | null
          priority_delivery?: number | null
          priority_flexibility?: number | null
          priority_quality?: number | null
          priority_sustainability?: number | null
          reference_id?: string
          timeline?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          email: string
          id: string
          name: string
          source: string | null
          subscribed_at: string
        }
        Insert: {
          email: string
          id?: string
          name: string
          source?: string | null
          subscribed_at?: string
        }
        Update: {
          email?: string
          id?: string
          name?: string
          source?: string | null
          subscribed_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
