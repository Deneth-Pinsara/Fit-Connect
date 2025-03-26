import { ERROR_RESPONSE } from "../utils/helper.js";

export const authMiddleware = (req, res, next) => {
    const jwt  = req.headers.authorization;
    const token = jwt.split("Bearer ")[1];
    if (token) {
        const auth = jwt.verify(token, process.env.JWT_SECRET || "secret");
        req.user = auth;
        next();
    } else {
        return ERROR_RESPONSE(res, 401, "Unauthorized");
    }
}