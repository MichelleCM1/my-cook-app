import "react-native-url-polyfill/auto"
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rjyvbqkewdnvtbdircio.supabase.co'
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? ""


export const supabase = createClient(supabaseUrl, supabaseKey);