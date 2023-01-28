export const JwtConfig = {
  key: process.env.JWT_KEY as string,
  expiresIn: '999d'
}
