const fs = require('fs');
const request = require('request');
const PDFImage = require("pdf-image").PDFImage;
const tesseract = require("node-tesseract-ocr");

const INPUT_FILE_PATH = 'tmp/input.pdf';

const convertPage = async (page, pdfImage) => {
  if(!!page) {
    return pdfImage.convertPage(page).then(function (path) {
      return [path]
    });
  }
  return pdfImage.convertFile().then(paths => {
    return paths
  });
}

class OCRController {

  async getInfosPDF(req, res) {
    try {
      const textOCR = [];
      const { url, page } = req.query;

      await request(url).pipe(fs.createWriteStream(INPUT_FILE_PATH)).on('close', async () => {
        const pdfImage = new PDFImage(INPUT_FILE_PATH);
        
        const files = await convertPage(page, pdfImage)

        for(const[index, file] of files.entries()) {
          const text = await tesseract.recognize(file)
          textOCR.push(text)
        }
        res.send(textOCR.join('<br><br>'))
      })
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = new OCRController()
