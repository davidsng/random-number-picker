const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

const upload = multer({ dest: "uploads/" });

app.use(express.static("public")); // Serve static files from the "public" directory

app.post("/upload", upload.single("file"), (req, res) => {
  const filePath = req.file.path;
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(500).send("Error reading file.");
      return;
    }
    fs.unlinkSync(filePath); // Clean up file after reading
    const numbers = data
      .toString()
      .split(/[\r\n]+/)
      .filter((line) => line)
      .map(Number);
    res.json({ numbers });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
