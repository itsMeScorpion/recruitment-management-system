import { combineReducers } from 'redux';

const applicationInitials = {
  data: [],
  loadingAddApplication: false,
};

//application reducer
const ApplicationReducer = (state = applicationInitials, action) => {
  switch (action.type) {
    case 'SET_ADDPOSTING_APPLICATION':
      return {
        ...state,
        loadingAddApplication: action.payload,
      };
    case 'SET_APPLICATION_DATA':
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

const loginInitials = {
  isLogin: localStorage.getItem('login'),
};

//login reducer
const LoginReducer = (state = loginInitials, action) => {
  switch (action.type) {
    case 'GET_LOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        isLogin: action.payload,
      };

    default:
      return state;
  }
};

const JobInitials = {
  jobData: [],
  getjobId: null,
  getjobDetails: {
    title: '',
    company: '',
    technologies: '',
    skills: '',
    benefits: '',
    experience: '',
    salary: '',
    mode: '',
  },
};

//job reducer
const jobReducers = (state = JobInitials, action) => {
  switch (action.type) {
    case 'GET_JOB_DETAILS':
      return {
        ...state,
        jobData: action.payload,
      };
    case 'SET_JOBID':
      return {
        ...state,
        getjobId: action.payload,
      };
    case 'SET_JOBDETAILS':
      return {
        ...state,
        getjobDetails: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  login: LoginReducer,
  applications: ApplicationReducer,
  jobs: jobReducers,
});
