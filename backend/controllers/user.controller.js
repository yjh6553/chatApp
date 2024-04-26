import User from "../models/user.model.js";

export const getUserForSidebar = (req, res) => {
    try {
        const loggedInUserId = req.body._id;
    } catch (error) {
        console.error("Error in getUserForSidebar", error)
        res.status(200).json({
            error: "Internal Sever Error",
            message: error.message
        })
    }
}