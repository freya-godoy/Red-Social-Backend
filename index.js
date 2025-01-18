// Importar dependencias
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

// Mensaje bienvenida
console.log("API NODE para RED SOCIAL arrancada!!");

// Crear servidor node
const app = express();
const puerto = 3900;

// Configurar cors
app.use(cors());

// Convertir los datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cargar conf rutas
const UserRoutes = require("./routes/user");
app.use("/api/user", UserRoutes);

const PublicationRoutes = require("./routes/publication");
app.use("/api/publication", PublicationRoutes);

const FollowRoutes = require("./routes/follow");
app.use("/api/follow", FollowRoutes);

app.use((req, res, next) => {
  console.log(`Solicitud entrante: ${req.method} ${req.url}`);
  next();
});

// Ruta de prueba
app.get("/ruta-prueba", (req, res) => {
  return res.status(200).json({
    id: 1,
    nombre: "Freya",
    web: "gatitoespacial.ar",
  });
});

// Poner servidor a escuchar peticiones http
app.listen(puerto, async () => {
  // Conexion a bbdd
  await connection();

  console.log("Servidor de node corriendo en el puerto: ", puerto);
});
