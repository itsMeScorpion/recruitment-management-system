import history from '../history';
import services from '../services';
import { setLogout } from '../LocalStorage';
import { getPasswordHashResponse, validatePassword } from '../hashpassword';

// to apply job
export const postingApplication = (payload) => async (dispatch) => {
  await services.postApplication(payload);
  alert('application successfully submitted');
  history.push('/jobs');
};

//  to fetch submitted application details
export const fetchApplications = () => async (dispatch) => {
  const { data } = await services.getApplicants();
  // console.log(data);
  dispatch({
    type: 'SET_APPLICATION_DATA',
    payload: data,
  });
};

// for login
export const adminLogin = (props) => async (dispatch) => {
  const authResponse = await services.getLogin(props);
  if (authResponse) {
    dispatch(setlogin(authResponse));

    history.push('/Dashboard');
  } else {
    return dispatch(alert('login failed'));
  }
};

// save to local storage
export const setlogin = (data) => {
  localStorage.setItem('login', JSON.stringify(data));
  return {
    type: 'GET_LOGIN',
    payload: data,
  };
};

// for adding job vacancies by admin

export const postingJob = (payload) => async (dispatch) => {
  await services.addJob(payload);

  history.push('/manage-jobs');
};

// action for list added jobs (admin view)

export const listJobs = (payload) => async (dispatch) => {
  const { data } = await services.listJobs(payload);
  dispatch({
    type: 'GET_JOB_DETAILS',
    payload: data,
  });
};

// to get  selected job by id
export const getJobDetails = (id) => async (dispatch) => {
  dispatch({
    type: 'SET_JOBID',
    payload: id,
  });
  const { data } = await services.getJobById(id);
  // console.log(data);
  dispatch({
    type: 'SET_JOBDETAILS',
    payload: data,
  });
};

// update job from admin side

export const updateJob = (id, payload) => async (dispatch) => {
  await services.updateJobData(id, payload);
  history.push('/manage-jobs');
};

//action for logout

export const setlogout = () => async (dispatch) => {
  dispatch({
    type: 'LOGOUT',
    payload: false,
  });
  setLogout();
  history.push('/login');
};

//action for update password

export const passwordUpdate = (details) => async (dispatch) => {
  const { data } = await services.getChangePassword();
  // console.log(data.data);
  const decrypted = await validatePassword(data.password);
  if (decrypted === details.currentPass) {
    let newPs = getPasswordHashResponse(details.newPass);
    let userName = data.username;
    const query = await services.updatePass('/', {
      userName,
      password: newPs,
    });
    console.log({ userName, newPs });
  } else {
    alert('Current Password is wrong');
  }
  history.push('/Dashboard');
};
