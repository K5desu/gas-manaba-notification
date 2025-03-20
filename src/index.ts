/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkSender } from './lib/gmail';

(globalThis as any).checkSender = checkSender;
