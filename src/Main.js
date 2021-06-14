import React from 'react';

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus />
        <textarea
          id="body"
          placeholder="Write your note here..."
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">Title</h1>
        <div className="markdown-preview">Note Preview</div>
      </div>
    </div>
  );
};

export default Main;
