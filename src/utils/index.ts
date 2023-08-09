import { Request } from 'express';

export const getURLComponentFromReq = (req: Request) => {
  const protocol = req.protocol;
  const host = req.get('Host');
  const baseUrl = `${protocol}/host`;
  const originUrl = req.originalUrl;
  const fullUrl = protocol + host + originUrl;

  return { protocol, host, originUrl, fullUrl, baseUrl };
};
