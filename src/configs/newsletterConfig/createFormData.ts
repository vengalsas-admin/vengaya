export function createFormData(email: string): FormData {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('source', 'VengaYa');
  formData.append('tag', 'newsletter');
  return formData;
}
