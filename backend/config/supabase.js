const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Check if environment variables are loaded
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.error('Please check your .env file has:');
  console.error('SUPABASE_URL=your_url');
  console.error('SUPABASE_ANON_KEY=your_anon_key');
  console.error('SUPABASE_SERVICE_KEY=your_service_key');
  process.exit(1);
}

console.log('✅ Supabase URL found:', supabaseUrl);

// Client for frontend operations (limited permissions)
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for backend operations (full permissions)
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

module.exports = { supabase, supabaseAdmin };