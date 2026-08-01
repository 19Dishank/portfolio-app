import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password) {
  console.log("Usage: node scripts/generate-password-hash.js <your_password>");
  process.exit(1);
}

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

console.log("\n--------------------------------------------------");
console.log("Generated Bcrypt Hash:");
console.log(hash);
console.log("--------------------------------------------------\n");
console.log("Copy and paste this into your .env.local file:");
console.log(`ADMIN_PASSWORD_HASH="${hash}"\n`);
