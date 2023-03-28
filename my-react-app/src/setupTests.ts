import matchers from '@testing-library/jest-dom';
import { afterEach, expect } from 'vitest';
import { cleanup } from '@testing-library/react';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
