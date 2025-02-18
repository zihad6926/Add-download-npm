module.exports.alldown = (url) => 
  new Promise(async (resolve, reject) => {
    const { alldown } = require("nayan-videos-downloader");

    try {
      const { data, msg } = await alldown(url);

      resolve({
        status: true,
        dev: "Zihad Ahmed",
        devfb: "https://www.facebook.com/xxn.zihad",
        devwp: "01876250734", 
        data: data || msg,
      });
    } catch (error) {
      reject({ 
        status: false, 
        error: error.message || "An unexpected error occurred" 
      });
    }
  });
