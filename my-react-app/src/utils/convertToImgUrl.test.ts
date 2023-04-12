import convertToImgUrl from './convertToImgUrl';
import { vi } from 'vitest';

type FileListArray = File[] & {
  item: (index: number) => File;
  length: number;
};

describe('convertToImgUrl', () => {
  it('should convert a file to a base64-encoded image URL', (done: () => void) => {
    const file = new File(['hello world'], 'test.txt', { type: 'text/plain' });
    const files: FileListArray = [file] as FileListArray;
    files.item = (index: number) => files[index];
    files.length = 1;
    const callback = (result: string | ArrayBuffer | null) => {
      expect(result).toMatch(/^data:image\/.*;base64,/);
      done();
    };
    convertToImgUrl(files, callback);
  });

  it('should call the callback with null if the file is empty', (done: () => void) => {
    const file = new File([], 'empty.txt', { type: 'text/plain' });
    const files: FileListArray = [file] as FileListArray;
    files.item = (index: number) => files[index];
    files.length = 1;
    const callback = (result: string | ArrayBuffer | null) => {
      expect(result).toBe(null);
      done();
    };
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    convertToImgUrl(files, callback);
    spy.mockRestore();
  });
});
