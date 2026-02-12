export function createSseStream(res, { heartbeatMs = 15000 } = {}) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders?.();

  const write = (payload) => {
    res.write(payload);
  };

  const send = (event, data) => {
