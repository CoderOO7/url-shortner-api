import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string().default('development').required(),
  PORT: Joi.number().default(3000).required(),
  DB_URL: Joi.string().required(),
});
