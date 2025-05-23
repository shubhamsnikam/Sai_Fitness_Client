// photoUrl.js
export const getPhotoUrl = (filename) => {
    if (!filename) return 'https://via.placeholder.com/150?text=No+Image';
      return `https://sai-fitness-server.onrender.com/uploads/${filename}`;
};
