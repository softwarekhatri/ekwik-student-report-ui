import axios from 'axios';

// Base URL of your API
const baseURL = 'http://3.141.200.126:9999';  // Example API

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
    console.log("Payload::", payload);
    const response = await axios.post(`${baseURL}/students/`, payload);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching details:', error);
    throw error;  // Propagate the error to the calling function
  }
};

export const fetchStudentReport = async (studentReportId) => {
  try {
    // console.log("studentReportId::", studentReportId);
    const response = await axios.get(`${baseURL}/students/report/${studentReportId}`);
    // console.log("fetchStudentReport::", response.data);
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

    // console.error('Error in upload file123:', error.response);
    // throw error;  // Propagate the error to the calling function

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

// export const uploadStudentData = async (form, formHeaders) => {
//   try {
//     const response = await axios.post(`${baseURL}/document/upload-student-report`, form, {
//       headers: {
//         ...formHeaders
//       }
//     });
//     return response.data;  // Return the response data on success
//   } catch (error) {
//     if (error.response) {
//       // This block is for the case when the server responds with a status code
//       // other than 2xx, like 400 or 500.
//       console.error('API responded with an error:', error.response.status);
//       console.error('Error details:', error.response.data);  // This is the body of the response, which could include error details.
      
//       // You can return or throw error.response.data if you want the calling function
//       // to handle the specific error message from the server.
//       throw new Error(`${error.response.data.message || error.response.data}`);
//     } else if (error.request) {
//       // This block is for the case when no response was received.
//       console.error('No response from server:', error.request);
//       throw new Error('No response from the server.');
//     } else {
//       // This block is for any other errors (like configuration issues, etc.)
//       console.error('Error during request setup:', error.message);
//       throw new Error(`Request setup failed: ${error.message}`);
//     }
//   }
// };


export const generatePDF = async (studentReportId) => {
  console.log("studentReportId::", studentReportId);
  try {
    const response = await axios.post(`${baseURL}/students/report/generate/${studentReportId}`, {});
    console.log("response:::", response.data);
    return response.data.message;
  } catch (error) {
    console.error('Error in generate file123:', error);
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
    console.log("Payload::", payload);
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