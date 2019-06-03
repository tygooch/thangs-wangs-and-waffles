const fs = require("fs")
fs.writeFileSync("./.env", `GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}\n`)
fs.writeFileSync(
  "./.env.development",
  `GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}\n`
)
fs.writeFileSync(
  "./.env.production",
  `GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}\n`
)
