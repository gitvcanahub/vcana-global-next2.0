self.onmessage = function (event) {
  const videoUrl = event.data;

  fetch(videoUrl)
    .then((response) => response.blob())
    .then((blob) => {
      self.postMessage(URL.createObjectURL(blob));
    })
    .catch((error) => {
      self.postMessage({ error: error.message });
    });
};
