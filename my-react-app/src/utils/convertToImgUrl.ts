const convertToImgUrl = (
  files: FileList,
  callback: (result: string | ArrayBuffer | null) => void
) => {
  const imageReader = new FileReader();
  imageReader.readAsDataURL(files[0]);
  imageReader.onloadend = () => {
    try {
      const result = imageReader.result;
      callback(result);
    } catch (error) {
      console.log(error);
      callback(null);
    }
  };
};

export default convertToImgUrl;
