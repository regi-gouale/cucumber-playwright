import * as dotenv from "dotenv";

export const getEnv = () => {
  if (process.env.ENV) {
    dotenv.config({
      override: true,
      path: `src/support/env/.env.${process.env.ENV}`,
    });
  } else {
    dotenv.config({
      override: true,
      path: `src/support/env/.env.local`,
    });
  }
};
