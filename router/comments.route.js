const { Router } = require("express");
const { commentController } = require("../controllers/commentsController");
const { commentValidator } = require("../validator/validation");
const router = Router();

router.post("/comment/:postId", auth, commentController.addComment);
router.delete("/comment/:id",  auth, commentController.deleteComment);
router.patch("/comment/:id",  auth, commentController.editComment);
router.get("/comments/:postId", commentController.getCommentsForPost);
router.get("/comments", commentController.getComment)

module.exports = router;