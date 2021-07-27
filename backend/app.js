const app = require("./init");

const { port } = app;

app.listen(port, () => {
  console.log(`example application listening at http://localhost:${port}`);
});
