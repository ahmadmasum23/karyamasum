// Environment variable validation utility
export interface EnvValidationResult {
  isValid: boolean;
  missingVars: string[];
  errors: string[];
}

export const validateEnvironmentVariables = (): EnvValidationResult => {
  const requiredVars = {
    GITHUB_READ_USER_TOKEN_PERSONAL: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
    MONKEYTYPE_API_KEY: process.env.MONKEYTYPE_API_KEY,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    DOMAIN: process.env.DOMAIN,
  };

  const missingVars: string[] = [];
  const errors: string[] = [];

  // Check for missing variables
  Object.entries(requiredVars).forEach(([key, value]) => {
    if (!value || value.trim() === '') {
      missingVars.push(key);
    }
  });

  // Validate specific formats
  if (requiredVars.GITHUB_READ_USER_TOKEN_PERSONAL && 
      !requiredVars.GITHUB_READ_USER_TOKEN_PERSONAL.startsWith('ghp_')) {
    errors.push('GITHUB_READ_USER_TOKEN_PERSONAL must start with "ghp_"');
  }

  if (requiredVars.DOMAIN && 
      !requiredVars.DOMAIN.startsWith('http')) {
    errors.push('DOMAIN must start with "http://" or "https://"');
  }

  return {
    isValid: missingVars.length === 0 && errors.length === 0,
    missingVars,
    errors,
  };
};

export const logEnvironmentStatus = (): void => {
  const validation = validateEnvironmentVariables();
  
  if (validation.isValid) {
    console.log('✅ All environment variables are properly configured');
  } else {
    console.error('❌ Environment variable issues detected:');
    
    if (validation.missingVars.length > 0) {
      console.error('Missing variables:', validation.missingVars.join(', '));
    }
    
    if (validation.errors.length > 0) {
      console.error('Validation errors:', validation.errors);
    }
  }
};

// Runtime check for development
if (process.env.NODE_ENV !== 'production') {
  logEnvironmentStatus();
}