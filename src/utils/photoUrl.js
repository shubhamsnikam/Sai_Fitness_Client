const BASE_URL = 'https://sai-fitness-server.onrender.com';

export const getPhotoUrl = (filename) => {
  if (!filename) return 'https://via.placeholder.com/150?text=No+Image';
  return `${BASE_URL}/uploads/${filename}`;
};
