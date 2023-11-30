import { TravelPostModel } from "../models/TravelPost.js";
import { CommentModel } from "../models/Comment.js";
import { isAuthor } from "./travel.controller.js";

export const ctrlCreateTravelPost = async (req, res) => {
  const userId = req.user._id;

  try {
    const { title, content } = req.body;

    const travelPost = new TravelPostModel({
      title,
      content,
      author: userId,
    });

    await travelPost.save();

    return res.status(201).json(travelPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlListTravelPosts = async (_req, res) => {
  try {
    const travelPosts = await TravelPostModel.find({}, ["-__v"]).populate(
      "author",
      ["-password", "-__v"]
    );

    return res.status(200).json(travelPosts);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "No se pudieron obtener las publicaciones de viaje" });
  }
};

export const ctrlGetTravelPostById = async (req, res) => {
  const { postId } = req.params;

  try {
    const travelPost = await TravelPostModel.findById(postId).populate(
      "author",
      ["-password", "-__v"]
    );

    if (!travelPost)
      return res
        .status(404)
        .json({ error: "La publicación de viaje no existe" });

    return res.status(200).json(travelPost);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "No se pudo obtener la publicación de viaje" });
  }
};

export const ctrlAddComment = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user._id;

  try {
    const comment = new CommentModel({
      ...req.body,
      author: userId,
      post: postId,
    });

    await comment.save();

    await TravelPostModel.findByIdAndUpdate(
      { _id: postId },
      { $push: { comments: comment._id } }
    );

    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "No se pudo agregar el comentario" });
  }
};

export const ctrlDeleteComment = async (req, res) => {
  const { commentId, postId } = req.params;
  const userId = req.user._id;

  const isPostAuthor = await isAuthor({ postId, userId });

  if (!isPostAuthor) {
    return res
      .status(403)
      .json({ error: "El usuario no es el autor de la publicación de viaje" });
  }

  try {
    await CommentModel.findByIdAndDelete(commentId);

    await TravelPostModel.findByIdAndUpdate(
      { _id: postId },
      { $pull: { comments: commentId } }
    );

    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar el comentario" });
  }
};
