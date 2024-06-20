import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = "https://vqcmivjzopbulqagdjwk.supabase.co"
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbHdma2l3end5dHJ6bmdhbmhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1MDA1MTMsImV4cCI6MjAzMTA3NjUxM30.SONHcoM0ckmnCfOCSr8dqgRI6imlBBzG1tjygj1Ebzg"
export const supabase = createClient(
  process.env.ApiKey,
  process.env.ApiPassword,
  
);
