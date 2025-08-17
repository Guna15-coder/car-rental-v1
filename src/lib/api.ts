import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tpxlisevrryakvhcsmko.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweGxpc2V2cnJ5YWt2aGNzbWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0MjAwMjIsImV4cCI6MjA3MDk5NjAyMn0.h6ZZdGc1B-PF878t0pD49hXidjT4FrSls0xQZl3PcIw";


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
