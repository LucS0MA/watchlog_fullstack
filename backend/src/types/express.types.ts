import { JwtPayload } from "./jwtPayload.types.js";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
