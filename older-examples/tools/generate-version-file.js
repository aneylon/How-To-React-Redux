// generate version file
var fs = require("fs");
var writeFile = fs.writeFile;

var path = require("path");

var packageJson = require(process.cwd() + "/package.json");

var versionJson = path.join(process.cwd(), "public", "version.json");

var appVersion = packageJson.version;

var jsonData = {
  version: appVersion,
};

var jsonContent = JSON.stringify(jsonData);

writeFile(versionJson, jsonContent, "utf8", function (err) {
  if (err) {
    console.error("Error writing file", err);
    throw console.error(error);
  } else {
    console.log("file saved with v:", appVersion);
  }
});
