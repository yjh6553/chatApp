import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.body._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUserForSidebar", error)
        res.status(200).json({
            error: "Internal Sever Error",
            message: error.message
        })
    }
}