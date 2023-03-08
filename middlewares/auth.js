import CustomerErrorHandler from "../services/CustomErrorHandler";
import JwtService from "../services/JwtService";

const auth = async (req, res, next) => {
  let authHeader = req.headers.authorization;
  if (!authHeader) return next(CustomerErrorHandler.unAuthorized());

  const token = authHeader.split(" ")[1];
  try {
    const { _id, role } = await JwtService.verify(token);
    req.user = {
      _id,
      role,
    };

    next();
  } catch (error) {
    return next(CustomerErrorHandler.unAuthorized());
  }
};

export default auth;
