import { connect } from "mongoose";

export const startConnection = async ({ uri, database }) => {
  try {
    const db = await connect(uri, {
      dbName: database,
    });
    console.log(`Conectado a la base de datos ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};
