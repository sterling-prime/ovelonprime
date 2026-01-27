-- Explicitly deny all direct access to subscribers table
-- Only the edge function (using service role) can access this table

-- Deny all SELECT access - subscriber data is admin-only
CREATE POLICY "No public read access to subscribers"
ON public.subscribers
FOR SELECT
USING (false);

-- Deny all direct INSERT access - must go through edge function
CREATE POLICY "No public insert access to subscribers"
ON public.subscribers
FOR INSERT
WITH CHECK (false);

-- Deny all UPDATE access
CREATE POLICY "No public update access to subscribers"
ON public.subscribers
FOR UPDATE
USING (false);

-- Deny all DELETE access
CREATE POLICY "No public delete access to subscribers"
ON public.subscribers
FOR DELETE
USING (false);