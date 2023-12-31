import { Router } from "express";

import {
  ctrlCrearPlaylist,
  ctrlEliminarPlaylist,
  ctrlObtenerPlaylist,
  ctrlListarPlaylists,
  ctrlActualizarPlaylist,
} from "../controllers/travel.controller.js";

import {
  crearValidacionesPlaylist,
  eliminarValidacionesPlaylist,
  obtenerValidacionesPlaylist,
  listarValidacionesPlaylists,
  actualizarValidacionesPlaylist,
} from "../models/validations/travel-validations.js";

const routerTravel = Router();

routerTravel.post("/", crearValidacionesPlaylist, ctrlCrearPlaylist);
routerTravel.get("/", listarValidacionesPlaylists, ctrlListarPlaylists);

routerTravel.get(
  "/:playlistId",
  obtenerValidacionesPlaylist,
  ctrlObtenerPlaylist
);
routerTravel.patch(
  "/:playlistId",
  actualizarValidacionesPlaylist,
  ctrlActualizarPlaylist
);
routerTravel.delete(
  "/:playlistId",
  eliminarValidacionesPlaylist,
  ctrlEliminarPlaylist
);

export { routerTravel };
