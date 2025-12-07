import User from "../modal/userModal.js";

export const create = async (req, res) => {
    debugger
    try {
        const newUser = new User(req.body);
        const { email } = newUser;

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ errorMessage: "user already exists" })
        }
        const saveData = await newUser.save();
        // res.status(200).json(saveData)
        res.status(200).json({ message: "User created successfully" });

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

export const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(400).json({ message: "user data not found" })
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({ message: "user data not found" });
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(400).json({ message: "user data not found" })
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ message: "user data not found" });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(400).json({ message: "user data not found" })
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "user deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: "user data not found" });
    }
}