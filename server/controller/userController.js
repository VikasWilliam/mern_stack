import User from "../modal/userModal.js";

export const create = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const { email } = newUser;

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ errorMessage: "user already exists" })
        }
        const saveData = await newUser.save();
        res.status(200).json(saveData)

    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData || userData.length === 0) {
            return res.status(400).json({ message: "User data not found" })
        }
        res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
}