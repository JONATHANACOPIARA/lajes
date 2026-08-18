// Configuração pública do aplicativo Lajes Pré-Moldados
const SUPABASE_URL = 'https://dhpoxcaytryoutufgvoo.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocG94Y2F5dHJ5b3V0dWZndm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MDI2NjQsImV4cCI6MjEwMjE3ODY2NH0.KL7XEvQtMENa49iwXKp88YhudRhVQFsYUfS5fRn-v9M';
const OWNER_USER_ID = 'c4789d70-3aa3-47ed-bf7e-a9748bf65973';

// Também expõe a configuração no objeto global para permitir fallback no index.html.
window.SUPABASE_URL = SUPABASE_URL;
window.SUPABASE_PUBLISHABLE_KEY = SUPABASE_PUBLISHABLE_KEY;
window.OWNER_USER_ID = OWNER_USER_ID;

// Versão da configuração para facilitar diagnóstico sem exibir a chave no aplicativo.
window.LAJES_CONFIG_VERSION = '2026-08-despesas';
