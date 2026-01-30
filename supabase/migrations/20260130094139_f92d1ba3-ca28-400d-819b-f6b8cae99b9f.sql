-- Create table for Demand & Execution Intake submissions
CREATE TABLE public.intake_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reference_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Contact details
  first_name TEXT,
  last_name TEXT,
  job_title TEXT,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  city TEXT,
  
  -- Step 1: Context
  industry TEXT,
  company_size TEXT,
  
  -- Step 2: Focus Areas
  focus_areas TEXT[],
  
  -- Step 3: Priorities
  priority_cost_reduction INTEGER,
  priority_quality INTEGER,
  priority_delivery INTEGER,
  priority_flexibility INTEGER,
  priority_sustainability INTEGER,
  
  -- Step 4: Challenges
  challenges TEXT[],
  
  -- Step 5: Timeline & Budget
  timeline TEXT,
  budget TEXT,
  
  -- Step 6: AI Analysis (stored as JSON)
  ai_analysis JSONB,
  
  -- Metadata
  language TEXT DEFAULT 'en',
  user_agent TEXT,
  ip_address TEXT,
  pdf_attached BOOLEAN DEFAULT false
);

-- Create table for Contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reference_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Contact details
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  business_email TEXT NOT NULL,
  request_details TEXT NOT NULL,
  
  -- Metadata
  ip_address TEXT,
  user_agent TEXT
);

-- Enable RLS on both tables
ALTER TABLE public.intake_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Restrictive RLS policies for intake_submissions (no public access - only via service role)
CREATE POLICY "No public read access to intake_submissions"
ON public.intake_submissions FOR SELECT
USING (false);

CREATE POLICY "No public insert access to intake_submissions"
ON public.intake_submissions FOR INSERT
WITH CHECK (false);

CREATE POLICY "No public update access to intake_submissions"
ON public.intake_submissions FOR UPDATE
USING (false);

CREATE POLICY "No public delete access to intake_submissions"
ON public.intake_submissions FOR DELETE
USING (false);

-- Restrictive RLS policies for contact_submissions (no public access - only via service role)
CREATE POLICY "No public read access to contact_submissions"
ON public.contact_submissions FOR SELECT
USING (false);

CREATE POLICY "No public insert access to contact_submissions"
ON public.contact_submissions FOR INSERT
WITH CHECK (false);

CREATE POLICY "No public update access to contact_submissions"
ON public.contact_submissions FOR UPDATE
USING (false);

CREATE POLICY "No public delete access to contact_submissions"
ON public.contact_submissions FOR DELETE
USING (false);