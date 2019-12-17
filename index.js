const app = require("./src/app");
const env = app.get("env");

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} in ${env} mode`);
});
