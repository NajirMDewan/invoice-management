import Tesseract from 'tesseract.js';

export const extractTextFromImage = (file, onProgress) => {
  return Tesseract.recognize(file, 'eng', {
    logger: (info) => {
      if (onProgress) onProgress(info);
    },
  }).then(({ data: { text } }) => text);
};
