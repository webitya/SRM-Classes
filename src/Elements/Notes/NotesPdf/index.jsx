import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined, FilePdfOutlined } from '@ant-design/icons';

const notesData = {
  'Class VI': [
    { id: 1, title: 'Mathematics - Class VI', file: 'math-vi.pdf' },
    { id: 2, title: 'Science - Class VI', file: 'science-vi.pdf' },
    { id: 2, title: 'Science - Class VI', file: 'science-vi.pdf' },
  ],
  'Class VII': [
    { id: 1, title: 'Mathematics - Class VII', file: 'math-vii.pdf' },
    { id: 2, title: 'Science - Class VII', file: 'science-vii.pdf' },
    { id: 2, title: 'Science - Class VII', file: 'science-vii.pdf' },
  ],
  'Class VIII': [
    { id: 1, title: 'Mathematics - Class VIII', file: 'math-viii.pdf' },
    { id: 2, title: 'Science - Class VIII', file: 'science-viii.pdf' },
    { id: 2, title: 'Science - Class VIII', file: 'science-viii.pdf' },
  ],
  'Class IX': [
    { id: 1, title: 'Mathematics - Class IX', file: 'math-ix.pdf' },
    { id: 2, title: 'Science - Class IX', file: 'science-ix.pdf' },
    { id: 2, title: 'Science - Class IX', file: 'science-ix.pdf' },
  ],
  'Class X': [
    { id: 1, title: 'Mathematics - Class X', file: 'math-x.pdf' },
    { id: 2, title: 'Science - Class X', file: 'science-x.pdf' },
    { id: 2, title: 'Science - Class X', file: 'science-x.pdf' },
  ],
  'Class XI': [
    { id: 1, title: 'Mathematics - Class XI', file: 'math-xi.pdf' },
    { id: 2, title: 'Physics - Class XI', file: 'physics-xi.pdf' },
    { id: 2, title: 'Physics - Class XI', file: 'physics-xi.pdf' },
  ],
  'Class XII': [
    { id: 1, title: 'Mathematics - Class XII', file: 'math-xii.pdf' },
    { id: 2, title: 'Physics - Class XII', file: 'physics-xii.pdf' },
    { id: 2, title: 'Physics - Class XII', file: 'physics-xii.pdf' },
  ],
};

const SampleNotes = () => {
  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = `/path/to/notes/${file}`;
    link.download = file;
    link.click();
  };

  return (
    <section className="adii-sample-notes-section py-16 px-4 lg:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Notes</h2>
        
        {/* Loop through each class in notesData */}
        {Object.keys(notesData).map((className) => (
          <div key={className} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">{className}</h3>

            {/* Notes for each class */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {notesData[className].map(note => (
                <div key={note.id} className="adii-note-card bg-white p-6 shadow-lg rounded-lg flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FilePdfOutlined className="text-red-500 text-2xl" />
                    <h4 className="text-lg font-medium text-gray-700">{note.title}</h4>
                  </div>
                  <Button
                    type="primary"
                    icon={<DownloadOutlined />}
                    onClick={() => handleDownload(note.file)}
                    className="adii-download-btn"
                  >
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SampleNotes;
