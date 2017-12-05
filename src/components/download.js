import Ocr from './ocr.js';
import React from 'react';
import fs from 'fs';
var request = require('request');
var url = 'http://tesseract.projectnaptha.com/img/eng_bw.png';
var filename = 'pic.png';

var writeFileStream = fs.createWriteStream(filename);

class dn extends React.Component{
  render(){
    return (

      request(url).pipe(writeFileStream).on('close', function() {
      console.log(url, 'saved to', filename);
      <Ocr />
  }
)
)}
};

export default dn;
