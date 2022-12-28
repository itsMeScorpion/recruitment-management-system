//api

import jsonserver from './jsonserver';
import { validatePassword } from './hashpassword';

export default {
  // to submit job applications
  postApplication: (data) => jsonserver.post('applications', data),

  //get all applicants details
  getApplicants: () => jsonserver.get('applications'),

  //to fetch login details and login
  getLogin: async (data) => {
    const { data: login } = await jsonserver.get('login');
    const admin = login.find(({ username }) => username === data.uname);
    if (!admin) {
      return null;
    }
    if (validatePassword(admin.password, data.pass)) {
      return {
        username: admin.username,
        status: true,
      };
    }
    return null;
  },
  // to read to login details
  getChangePassword: () => jsonserver.get('login'),

  //to add jobs by admin
  addJob: (data) => jsonserver.post('jobs', data),

  //list job
  listJobs: () => jsonserver.get('jobs'),

  // update job data
  updateJobData: (id, data) => jsonserver.put(`jobs/${id}`, data),

  // get single job details by id
  getJobById: (id) => jsonserver.get(`jobs/${id}`),

  //update password
  updatePass: (id, data) => jsonserver.put(`login/${id}`, data),
};
