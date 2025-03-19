import { test } from './lib/gmail';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).test = test;
