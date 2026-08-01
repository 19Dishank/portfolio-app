import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "default_secret_key_change_me_in_production_environment_variables";

function getSecretKey() {
  return new TextEncoder().encode(JWT_SECRET);
}

export async function signAdminToken() {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecretKey());

  return token;
}

export async function verifyAdminToken(token) {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload;
  } catch (error) {
    return null;
  }
}
