import axios from 'axios';

// Base URL of your API
let baseURL = 'http://13.61.73.87:9999';

export const updateBaseUrl = (newBaseURL) => {
  if (!newBaseURL) {
    return { message: 'New base url is required'};
  }
  baseURL = newBaseURL;
  return { message: `Base URL updated successfully: ${baseURL}` };
};

// Axios GET request function
export const fetchStudentsList = async (page, key, value) => {
  const arr = [];
  arr[key] = value;
  try {
    const payload = {
      startIndex: page,
      pageSize: 20,
      ...arr

    }
    const response = await axios.post(`${baseURL}/students/`, payload);

    return response.data;
  } catch (error) {
    console.error('Error fetching details:', error);
    throw error;  // Propagate the error to the calling function
  }
};

export const fetchStudentReport = async (studentReportId) => {
  try {
    const response = await axios.get(`${baseURL}/students/report/${studentReportId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching details:', error);
    throw error;  // Propagate the error to the calling function
  }
};

export const uploadStudentData = async (form, formHeaders) => {
  try {
    const response = await axios.post(`${baseURL}/document/upload-student-report`, form, {
      headers: {
        ...formHeaders
      }
    });
    // return response.data;
    return {
      success: true,
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      // Server responded with a status code outside the 2xx rangeconsole.error('Error Response Status:', error.response.status);
      console.error('Error Response Data:', error.response.data);
      return {
        success: false,
        status: error.response.status,
        error: error.response.data,
      };
    } else if (error.request) {
      // No response receivedconsole.error('No response received:', error.request);
      return {
        success: false,
        status: null,
        error: 'No response received from server',
      };
    } else {
      // Other errors (e.g., setting up the request)console.error('Error:', error.message);
      return {
        success: false,
        status: null,
        error: error.message,
      };
    }
  }
};

export const generatePDF = async (studentReportId) => {
  try {
    const response = await axios.post(`${baseURL}/students/report/generate/${studentReportId}`, {});
    return response.data.message;
  } catch (error) {
    console.error('Error in generate file123:', error);
    throw error;  // Propagate the error to the calling function
  }
};

export const deleteStudentReport = async (studentReportId) => {
  try {
    const response = await axios.delete(`${baseURL}/students/report/${studentReportId}`, {});
    return response.data.message;
  } catch (error) {
    console.error('Error in delete single record:', error);
    throw error;  // Propagate the error to the calling function
  }
};

export const deleteMultipleStudentRecords = async (studentReportIds) => {
  try {
    const response = await axios.delete(`${baseURL}/students/report`, { data: studentReportIds });
    return response.data.message;
  } catch (error) {
    console.error('Error in delete multiple records::', error);
    throw error;  // Propagate the error to the calling function
  }
};

export const generatePdfReport = async (page, key, value) => {
  const arr = [];
  arr[key] = value;
  try {
    const payload = {
      startIndex: page,
      pageSize: 20,
      ...arr

    }
    const response = await axios.post(`${baseURL}/students/`, payload);
    return response.data;
  } catch (error) {
    console.error('Error fetching details:', error);
    throw error;  // Propagate the error to the calling function
  }
};

export const fetchStudents = async () => {
  // Mocked API response with student data (could be from a real API or database)
  return [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 23 },
    { name: 'David', age: 21 },
    { name: 'Eve', age: 19 },
    { name: 'Frank', age: 24 },
    { name: 'Grace', age: 22 },
    { name: 'Hannah', age: 20 },
    { name: 'Ian', age: 23 },
    { name: 'Jack', age: 21 },
    { name: 'Karen', age: 19 },
    { name: 'Leo', age: 24 },
    { name: 'Mona', age: 22 },
    { name: 'Nancy', age: 20 },
    { name: 'Oscar', age: 23 },
    { name: 'Paul', age: 21 },
    { name: 'Quincy', age: 19 },
    { name: 'Rachel', age: 24 },
    { name: 'Steve', age: 22 },
    { name: 'Tina', age: 20 }
  ];
};