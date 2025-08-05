/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkSender } from './lib/gmailGet';

(globalThis as any).checkSender = checkSender;
