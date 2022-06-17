import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes


  //COMPANIES
  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  /** Get all companies */
  static async getCompanies(){
    let res = await this.request(`companies`);
    return res.companies;
  }
  static async getCompaniesNameLike(name){
    let res = await this.request(`companies?name=${name}`)
    return res.companies
  }


  //JOBS
  /** Get details on a job by id. */
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }
  /** Get details on all jobs. */
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  static async getJobsNameLike(title){
    let res = await this.request(`jobs?title=${title}`)
    return res.jobs
  }

  //USERS
  /** Get details on user by username. */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get details on all users. */
  static async getUsers() {
    let res = await this.request(`users`);
    return res.users;
  }


  /** Register New user */
  static async register(userdata){
    
      let res = await this.request(`auth/register`, userdata, 'post')
      return res;
  }

  /** updates user */

  static async update(userdata){
    const data = {
      firstName:userdata.firstName,
      lastName:userdata.lastName,
      email:userdata.email
    }
    let res = await this.request(`users/${userdata.username}`, data, 'patch')
    return res

  }


  /** Login  user */

  static async login(userdata){
    let res = await this.request(`auth/token`, userdata, 'post')
    return res;
  }

  /**Apply to a job*/
  static async apply(username,jobId){
    let res = await this.request(`users/${username}/jobs/${jobId}`, {},'post')
    return res;
  } 
  


}



// for now, put token ("testuser" / "password" on class)
//admin
//JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTEzNTM5OX0.Eurujo8_NHNJ6B1Fe4XKGlWsf4cziOCFkIEf14zhpJ4";

//test user
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;

