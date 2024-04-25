import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bor52vid',
  dataset: 'production',
  apiVersion: '2024-04-22',
  useCdn: false,
});

export async function load() {
  const data = await client.fetch(`*[_type == "photo"]`);
  console.log('data', data);

  if (data) {
    return {
      photos: data,
    };
  }
  return {
    status: 500,
    body: new Error('Internal Server Error'),
  };
}
