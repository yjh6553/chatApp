import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        //get rid of password for security
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