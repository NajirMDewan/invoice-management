import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import { extractTextFromImage } from './utils/ocr';
import { parseExcelFile } from './utils/parser';

function App() {
  const [files, setFiles] = useState([]);
  const [ocrResults, setOcrResults] = useState('');
  const [excelData, setExcelData] = useState([]);

  const handleFileUpload = (fileItems) => {
    const uploadedFiles = fileItems.map((fileItem) => fileItem.file);
    setFiles(uploadedFiles);

    if (uploadedFiles.length > 0) {
      const file = uploadedFiles[0];

      // Handle image/PDF files
      if (file.type.includes('image') || file.type === 'application/pdf') {
        extractTextFromImage(file, (progress) => console.log(progress)).then((text) =>
          setOcrResults(text)
        );
      }

      // Handle Excel files
      if (file.type.includes('excel') || file.name.endsWith('.csv')) {
        parseExcelFile(file).then((data) => setExcelData(data));
      }
    }
  };

  return (
    <div>
      <h1>File Upload and AI Processing</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <div>
        <h2>OCR Results:</h2>
        <p>{ocrResults}</p>
        <h2>Excel Data:</h2>
        <pre>{JSON.stringify(excelData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
