const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mi_red_social", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Conectado correctamente a bd: mi_red_social");
  } catch (error) {
    console.log(
      "No se ha podido conectar a la base de datos. Error: ",
      error.message
    );
    throw new Error("No se ha podido conectar a la base de datos !!");
  }
};

module.exports = connection;
