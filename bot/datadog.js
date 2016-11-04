/* REQUIRED DEPENDENCIES */
const dogapi = require(`dogapi`);

/* REQUIRED FILES */
const logger = require(`./logger.js`);

if (process.env.DATADOG_APIKEY && process.env.DATADOG_APPKEY) {
  logger.info(`Datadog enabled`);
  /* eslint-disable camelcase */
  dogapi.initialize({
    api_key: process.env.DATADOG_APIKEY,
    app_key: process.env.DATADOG_APPKEY
  });
  /* eslint-enable camelcase */
}

exports.send = (metric, value) => {
  if (dogapi.client.api_key && dogapi.client.app_key) {
    dogapi.metric.send(metric, value);
  }
};
