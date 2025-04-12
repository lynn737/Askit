import {createClient} from '@supabase/supabase-js'
const supabaseUrl = 'https://tehsmitbnjrfswxcpctt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlaHNtaXRibmpyZnN3eGNwY3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MjMwODcsImV4cCI6MjA1OTk5OTA4N30.gkKj552G4WooJYSuLzOExU9e66OcMycxYhtJXTB8J2w'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase