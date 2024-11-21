# Invoice Management Application

This is a React-based application that automates the extraction, processing, and management of invoice, product, and customer data. The app supports file uploads (PDF, images, Excel/CSV), utilizes AI-powered tools for data extraction, and prepares for centralized state management with Redux.

## **Features**
- Upload and process files:
  - **PDF/Images**: Extract text using OCR (Tesseract.js).
  - **Excel/CSV**: Parse data into structured JSON format (PapaParse).
- Display extracted data for validation and review.
- Prepare for tabs to organize data into Invoices, Products, and Customers.

---

## **Setup Instructions**

### **Prerequisites**
1. Node.js (v16 recommended)
2. npm or yarn

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/NajirMDewan/invoice-management.git
   cd invoice-management
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## **Project Structure**
```
invoice-management/
├── public/
├── src/
│   ├── components/
│   │   └── FileUpload.js     # File upload component
│   ├── redux/
│   │   ├── store.js          # Redux store configuration
│   │   ├── invoicesSlice.js  # Invoices slice
│   │   ├── productsSlice.js  # Products slice
│   │   └── customersSlice.js # Customers slice
│   ├── utils/
│   │   ├── ocr.js            # OCR processing logic
│   │   └── parser.js         # Excel/CSV parsing logic
│   ├── App.js                # Main application component
│   └── index.js              # Entry point
├── package.json
└── README.md
```

---

## **Implemented Features**

### **File Upload**
- **Library**: `react-filepond`
- Supports multiple file types:
  - PDF
  - Images (JPG/PNG)
  - Excel/CSV

### **OCR Integration**
- **Library**: `Tesseract.js`
- Extracts text from PDFs and images for processing.

### **Excel/CSV Parsing**
- **Library**: `PapaParse`
- Converts uploaded Excel/CSV files into structured JSON data.

### **State Management**
- **Redux Toolkit**:
  - Configured slices for `Invoices`, `Products`, and `Customers`.
  - Centralized state management for consistency.

---

## **To-Do**
1. Implement tabs for Invoices, Products, and Customers.
2. Display data in organized tables.
3. Real-time updates across tabs using Redux.
4. Add validation and error handling for missing/incorrect data.
5. Deploy the application to a platform (e.g., Vercel, Netlify).

---

## **Commands**
- Start the development server:
  ```bash
  npm start
  ```
- Install dependencies:
  ```bash
  npm install
  ```

---

## **Tech Stack**
- **Frontend**: React, FilePond, Redux Toolkit
- **AI Processing**: Tesseract.js, PapaParse
- **Styling**: Minimal, customizable later

---

## **Acknowledgments**
- [Tesseract.js](https://tesseract.projectnaptha.com/)
- [PapaParse](https://www.papaparse.com/)
- [FilePond](https://pqina.nl/filepond/)

---

### Next steps are in progress..
