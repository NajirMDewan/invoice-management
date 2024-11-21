import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

// Register the plugin
registerPlugin(FilePondPluginFileValidateType);

const FileUpload = ({ onFileUpload }) => {
  return (
    <div>
      <FilePond
        allowMultiple={true}
        acceptedFileTypes={['application/pdf', 'image/*', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']}
        onupdatefiles={onFileUpload}
      />
    </div>
  );
};

export default FileUpload;
