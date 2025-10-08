// check version
import packageFile from "../../package.json";
const packageVersion = packageFile.version;
console.log(packageVersion);

export const checkUIVersion = () => {
  fetch("./version.json").then((result) => {
    console.log({ result });
    if (result.ok) {
      result.json().then((versionFile) => {
        if (versionFile.version === packageVersion) {
          console.log("okay!");
          return true;
        } else {
          console.log("not okay!");
          return false;
        }
      });
    }
  });
};

// get

// put

// delete

// post
