const User = require("../model/User");

module.exports = {
  // show all users
  async index(req, res) {
    const users = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
      include: {
        association: "publications",
      },
    });

    if (users.length < 1) {
      return res
        .status(400)
        .json({ error: true, message: "no one users found" });
    }

    return res.json(users);
  },

  // show a specific user
  async show(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: true, message: "user not found" });
    }

    return res.json(user);
  },

  // update a user
  async update(req, res) {
    const { user_id } = req.params;
    const { name, email, password, image } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: true, message: "user not found" });
    }

    const response = await User.update(
      { name, email, password, image },
      {
        where: {
          id: user_id,
        },
      }
    );

    if (response) {
      return res.json(user);
    }

    return res
      .status(400)
      .json({ error: true, message: "something went wrong" });
  },

  // crate a new user
  async store(req, res) {
    const { name, email, password, image } = req.body;

    if (!name || name === "") {
      return res
        .status(400)
        .json({ error: true, message: "The name field is required" });
    }

    if (!email || email === "") {
      return res
        .status(400)
        .json({ error: true, message: "The email field is required" });
    }

    if (!password || password === "") {
      return res
        .status(400)
        .json({ error: true, message: "The password field is required" });
    }

    const user = await User.create({ name, email, password, image });

    return res.json(user);
  },

  // delete a user
};
