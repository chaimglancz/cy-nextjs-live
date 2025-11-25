import { createClient } from '@supabase/supabase-js'

const cySupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const cySupabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const cySupabase = createClient(cySupabaseUrl, cySupabaseKey)