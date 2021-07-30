export const getFormData = (data) => {
  let formData = new FormData();

  for (const property in data) {
    formData.append(property, data[property]);
  }

  return formData;
};
