const createProject = /* GraphQL */ `
  mutation CreateProject(
     name: String!, company: String!
  ) {
    addProject(id: $id, name: $name, company: $company) {
      id
      name
      company
    }
  }
`;

const createJob = /* GraphQL */ `
  mutation CreateJob(
    name: String!,
    company: String! ,
    project_id: String!
  ) {
    addJob(
      name: $name, company: $company, project_id: $project_id
    ) {
      id
      name
      company
      project_id
    }
  }
`;

const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    id: ID!,
    last_time_job_completed: String!,
    last_time_job_completed_successfully:String!,
    total_successes: Int!,
    total_failures: Int!,
    jobs_currently_running: Int!,
    average_job_length_in_seconds: Float!,
    total_jobs: Int!
  ) {
    updateJob(
      id: $id, 
      last_time_job_completed: $last_time_job_completed,
      last_time_job_completed_successfully: $last_time_job_completed_successfully,
      total_successes: $total_successes,
      total_failures: $total_failures,
      jobs_currently_running: $jobs_currently_running,
      average_job_length_in_seconds: $average_job_length_in_seconds,
      total_jobs: $total_jobs
    ) {
      id
      company
      project_id
      last_time_job_completed
      last_time_job_completed_successfully
      total_successes
      total_failures
      jobs_currently_running
      average_job_length_in_seconds
      total_jobs
    }
  }
`;

const createJobRun = /* GraphQL */ `
  mutation CreateJobRun(
    id: ID!, job_id: String!, status: JobStatusEnum!, start_time: AWSDateTime
  ) {
    addJobRun(id: $id, job_id: $job_id, status: $status, start_time: $start_time) {
      id
      job_id
      status 
      start_time
    }
  }
`;

const updateJobRun = /* GraphQL */ `
  mutation UpdateJobRun(
    id: ID!, status: JobStatusEnum!, end_time: AWSDateTime
  ) {
    updateJobRun(id: $id,  status: $status, end_time: $end_time) {
      id
      job_id
      status 
      start_time
      end_time
    }
  }
`;


module.exports = {
  createProject,
  createJob,
  updateJob,
  createJobRun,
  updateJobRun
}