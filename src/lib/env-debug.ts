/**
 * Debug utility for environment variables
 * Use this to diagnose what env vars are available at runtime
 */

export function debugEnvironmentVariables() {
  const envVars = {
    // Server-side only (API routes)
    NEXT_EXTERNAL_POKER_API_KEY: process.env.NEXT_EXTERNAL_POKER_API_KEY ? '✓ SET' : '✗ MISSING',
    NEXT_API_BASE_URL: process.env.NEXT_API_BASE_URL ? '✓ SET' : '✗ MISSING',
    
    // Should be NEXT_PUBLIC_ for client-side access
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL ? '✓ SET' : '✗ MISSING',
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL ? '✓ SET' : '✗ MISSING',
  };

  console.log('=== ENVIRONMENT VARIABLES DEBUG ===');
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Variables Status:', envVars);
  console.log('====================================');

  return envVars;
}

export function checkRequiredServerEnv() {
  const required = {
    NEXT_EXTERNAL_POKER_API_KEY: process.env.NEXT_EXTERNAL_POKER_API_KEY,
    NEXT_API_BASE_URL: process.env.NEXT_API_BASE_URL,
  };

  const missing = Object.entries(required)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    return { isValid: false, missing };
  }

  return { isValid: true, missing: [] };
}
