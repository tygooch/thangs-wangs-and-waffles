const fs = require("fs")
fs.writeFileSync(
  "./.env",
  `GOOGLE_MAPS_API_KEY=${process.env.GOOGLE_MAPS_API_KEY}\n`
)
