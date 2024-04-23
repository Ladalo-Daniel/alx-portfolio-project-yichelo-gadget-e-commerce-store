// formValidation.js
export const validateForm = (formData, setErrors) => {
    let isValid = true;
    const newErrors = {};
  
    // Validate username
    if (!formData.title) {
      newErrors.title = 'Title is required';
      isValid = false;
    }
  
    if (!formData.tags) {
      newErrors.tags = 'Tag is required';
      isValid = false;
    }
    if (!formData.image) {
      newErrors.image = 'Image is required';
      isValid = false;
    }
  
    if (!formData.minutes_read) {
      newErrors.minutes_read = 'Minutes read is required';
      isValid = false;
    }
  
    if (formData.content.length < 20) {
      newErrors.content = 'Content must be more than 20 characters';
      isValid = false;
    }
  
    // if (!formData.file) {
    //   newErrors.file = 'Blog image must be added';
    //   isValid = false;
    // }
  
    setErrors(newErrors);
    return isValid;
  };
  