/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkSender } from './lib/gmailGet';
//test
(globalThis as any).checkSender = checkSender;
