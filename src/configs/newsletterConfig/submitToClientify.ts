import { createFormData } from './createFormData';

export async function submitToClientify(email: string): Promise<void> {
  const endpoint = 'https://httpbin.org/post'; // Cambiar por endpoint real
  const formData = createFormData(email);

  const res = await fetch(endpoint, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Clientify response:', res.status, errorText);
    throw new Error('Error al enviar');
  }
}
