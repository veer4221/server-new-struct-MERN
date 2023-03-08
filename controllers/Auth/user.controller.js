import { User } from "../../models";
import CustomerErrorHandler from "../../services/CustomErrorHandler";

const userController = {
  me: async (req, res, next) => {
    try {
      const user = await User.findOne({ _id: req.user._id }, { password: 0, createdAt: 0, updatedAt: 0, __v: 0 });
      if (!user) return next(CustomerErrorHandler.notFound());
      res.json(user);
    } catch (error) {
      return next(error);
    }
  },
};
export default userController;
