const Publication = require("../model/Publication");
const User = require("../model/User");

module.exports = {
  // show all publications
  async index(req, res) {
    const publications = await Publication.findAll();

    if (publications.length < 1) {
      return res
        .status(400)
        .json({ error: true, message: "no one publications found" });
    }

    return res.json(publications);
  },
  // show a specific publication
  async show(req, res) {
    const { publication_id } = req.params;

    const publication = await Publication.findByPk(publication_id);

    if (!publication) {
      return res
        .status(400)
        .json({ error: true, message: "no publication found" });
    }

    return res.json(publication);
  },
  // update a publication
  // create new publication
  async store(req, res) {
    const { user_id, title, text, image, is_text } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: true, message: "user not found" });
    }

    const publication = await Publication.create({
      user_id,
      title,
      text,
      image,
      is_text,
    });

    return res.json(publication);
  },
  // delete a publication
};
