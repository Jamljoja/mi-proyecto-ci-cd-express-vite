const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Endpoint simple para probar el backend
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Aqui mostrando el backend con pipeline y render" });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
