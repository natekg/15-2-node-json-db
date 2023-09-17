const fs = require("fs"); // set of functions for accessing the files system
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = 3000; // the "port" is the
const dbPath = path.join(__dirname, "/db.json"); // This makes the path absolute and is good for the purpose of this small project

app.use(express.json()); // for parsing application/json

app.use(cors()); // for telling the app to use the CORS package

app.use(express.static("public")); // assuming your HTML files are in a folder named "public"

app.get("/readDB", (req, res) => {
  fs.readFile(dbPath, "utf8", (err, fileData) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    // Check if fileData is not empty and is a valid JSON
    let json;
    try {
      json = JSON.parse(fileData);
    } catch (parseError) {
      return res
        .status(500)
        .json({ error: "Error parsing db.json", details: parseError });
    }
    console.log(json);
    // Responding back with the JSON data
    return res.json(json);
  });
});

app.post("/updateDB", (req, res) => {
  const data = req.body;

  fs.readFile(dbPath, "utf8", (err, fileData) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    // Check if fileData is not empty and is a valid JSON
    let json;
    try {
      json = JSON.parse(fileData);
    } catch (parseError) {
      return res
        .status(500)
        .json({ error: "Error parsing db.json", details: parseError });
    }

    json.results.push({
      timestamp: data.timestamp,
      formId: data.formId,
      value: data.value,
    });

    fs.writeFile(dbPath, JSON.stringify(json, null, 2), "utf8", (err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      return res.status(200).json({ message: "Successfully updated db.json" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} dude!!`);
});
