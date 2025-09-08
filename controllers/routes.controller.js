// controllers/routes.controller.js
const routerPost = (req, res) => {
  console.log(req.body);
  res.json(req.body); // ou res.send(req.body)
};
export default routerPost;
