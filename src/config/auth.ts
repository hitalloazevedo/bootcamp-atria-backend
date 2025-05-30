import { Secret, SignOptions } from "jsonwebtoken";

export const authConfig: { secret: Secret; expiresIn: SignOptions["expiresIn"] } = {
    secret: "AtriaJR",
    expiresIn: "1d"
};
