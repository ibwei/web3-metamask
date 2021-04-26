import { createLogger } from 'redux-logger';
import { message } from 'antd';

export const dva = {
  config: {
    onAction: ENV_CONFIG.NODE_ENV !== 'production' ? createLogger() : null,
    onError(e: Error) {
      message.error(e.message, 3);
    },
  },
};
