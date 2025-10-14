// check version
import packageFile from "../../package.json";
const packageVersion = packageFile.version;

export const isCurrentUiVersion = () => {
  return false;
  // todo use async await?
};

export const checkUIVersion = () => {
  return fetch("./version.json").then((result) => {
    if (result.ok) {
      result.json().then((versionFile) => {
        if (versionFile.version === packageVersion) {
          console.log("okay!");
          return "Okay!";
        } else {
          console.log("not okay!");
          return "Not Okay!";
        }
      });
    }
  });
};

// get
export function get(url) {
  if (isCurrentUiVersion()) {
    const requestOptions = {
      method: "GET",
      headers: authHeader(url),
    };
    return fetch(url, requestOptions);
  } else {
    // do something to prompt the dialog box
    console.log("Cant do it!");
    // throw new Error("Not current version!");
    return new Promise((resolve, reject) => {
      resolve({ ok: false, message: "Not Current UI version" });
    });
  }
}

// Handle success
export async function handleSuccess(response) {
  if (response.ok) {
    return response.json();
  } else {
    return [];
    throw new Error("NOT OKAY!!1!");
  }
}
// Handle Error
export function handleError(error) {
  console.error("API call failed", error);
  throw error;
}
// Auth Header
export function authHeader(url) {
  const token = sessionStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
}

// put

// delete

// post
