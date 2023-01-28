export function verifyEnv() {
  const obligatoryValues = [
    'DATABASE_URL',
    'JWT_KEY',
    'FIREBASE_TYPE',
    'FIREBASE_PROJECT_ID',
    'FIREBASE_PRIVATE_KEY_ID',
    'FIREBASE_PRIVATE_KEY',
    'FIREBASE_CLIENT_EMAIL',
    'FIREBASE_CLIENT_ID',
    'FIREBASE_AUTH_URI',
    'FIREBASE_TOKEN_URI',
    'FIREBASE_AUTH_PROVIDER_X509_CERT_URL',
    'FIREBASE_CLIENT_X509_CERT_URL'
  ]

  function ensureEnvValuesFilled(key: string) {
    return !!process.env[key]
  }

  if (!obligatoryValues.every(ensureEnvValuesFilled)) {
    console.error(
      'Please fill .env with valid values before running the application.'
    )
    process.exit(1)
  }
}
