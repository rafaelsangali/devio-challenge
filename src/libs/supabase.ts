import { createClient } from "@supabase/supabase-js"

export const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVia2dzc2VwYWdldWhnZ3JjdGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEyODIzMDcsImV4cCI6MTk3Njg1ODMwN30.vFrxczE7Qs-yTeXWmLzd9rrf82dL1hSS2r1t5w5QpTg"

const url = "https://ebkgssepageuhggrctid.supabase.co"

export const supabase = createClient(url, key)
