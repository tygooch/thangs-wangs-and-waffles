const fs = require("fs")
fs.writeFileSync(
  "./.npmrc",
  "@fortawesome:registry=https://npm.fontawesome.com/\n//npm.fontawesome.com/:_authToken=${FONTAWESOME_TOKEN}\n"
)
