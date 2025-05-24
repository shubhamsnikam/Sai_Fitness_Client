import axios from 'axios';

// Load backend URL from environment variables
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

// Set base URL globally
axios.defaults.baseURL = REACT_APP_BACKEND_URL;

// Member API calls

export const getMembers = async () => {
  try {
    const response = await axios.get('/api/members');
    return response.data;
  } catch (error) {
    console.error('Error fetching members:', error.response?.data || error.message);
    throw error;
  }
};

export const getMemberById = async (id) => {
  try {
    const response = await axios.get(`/api/members/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching member with id ${id}:`, error.response?.data || error.message);
    throw error;
  }
};

export const createMember = async (memberData) => {
  try {
    const response = await axios.post('/api/members', memberData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating member:', error.response?.data || error.message);
    throw error;
  }
};

export const updateMember = async (id, memberData) => {
  try {
    const response = await axios.put(`/api/members/${id}`, memberData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating member with id ${id}:`, error.response?.data || error.message);
    throw error;
  }
};

export const deleteMember = async (id) => {
  try {
    const response = await axios.delete(`/api/members/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting member with id ${id}:`, error.response?.data || error.message);
    throw error;
  }
};

// Optional: get full image URL helper
export const getMemberImageUrl = (photoPath) => {
  if (!photoPath) return '';
  return `${REACT_APP_BACKEND_URL}/${photoPath}`;
};
