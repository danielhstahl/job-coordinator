## How to get started
`cd terraform`

`terraform workspace new dev`

`terraform init`

To test:

`terraform plan -var-file=dev.tfvars`

To actually create:

`terraform apply -var-file=dev.tfvars`

`cd ..`



## Make a post request

`export API_KEY=12345`

`curl -X POST https://rp4et8g4d8.execute-api.us-east-1.amazonaws.com/dev/project/create -d '{"name":"mytestname", "company":"0oa3rhm4iuHrIwZba5d7"}' -H "Content-Type: application/json" -H "Authorization: $API_KEY"`

## Example

Response from create project:

`{"id":"10cc2a0e-6822-404d-976b-6287aedb1621","project_name":"mytestname","company":"0oa3rhm4iuHrIwZba5d7","created_date":"2022-02-05T01:40:30.573Z","__typename":"Project"}`


Create a job in that project:

`curl -X POST https://rp4et8g4d8.execute-api.us-east-1.amazonaws.com/dev/project/10cc2a0e-6822-404d-976b-6287aedb1621/job/create -d '{"name":"myjobname", "company":"0oa3rhm4iuHrIwZba5d7"}' -H "Content-Type: application/json" -H "Authorization: $API_KEY"`

Response:

`
{"id":"5eb8b677-a56c-4996-92ea-0f8a77502630","job_name":"myjobname","company":"0oa3rhm4iuHrIwZba5d7","project_id":"10cc2a0e-6822-404d-976b-6287aedb1621","created_date":"2022-02-05T01:47:01.525Z","__typename":"Job"}
`

Get jobs from that project:

`curl https://rp4et8g4d8.execute-api.us-east-1.amazonaws.com/dev/project/10cc2a0e-6822-404d-976b-6287aedb1621/job  -H "Content-Type: application/json" -H "Authorization: $API_KEY"`

Start a job run:

`curl -X POST  https://rp4et8g4d8.execute-api.us-east-1.amazonaws.com/dev/job/5eb8b677-a56c-4996-92ea-0f8a77502630/start  -H "Content-Type: application/json" -H "Authorization: $API_KEY"`

Response:

`
{"id":"c5f67eab-ea9b-443f-83a5-2b654c62ed79","job_id":"5eb8b677-a56c-4996-92ea-0f8a77502630","job_status":"IN_PROGRESS","start_time":"2022-02-05T12:23:52.357Z","__typename":"JobRun"}

`

Query the job run:


`curl  https://rp4et8g4d8.execute-api.us-east-1.amazonaws.com/dev/job/5eb8b677-a56c-4996-92ea-0f8a77502630/run/c5f67eab-ea9b-443f-83a5-2b654c62ed79  -H "Content-Type: application/json" -H "Authorization: $API_KEY"`

Finish a job run:

`curl -X POST  https://rp4et8g4d8.execute-api.us-east-1.amazonaws.com/dev/job/5eb8b677-a56c-4996-92ea-0f8a77502630/run/c5f67eab-ea9b-443f-83a5-2b654c62ed79/finish -d '{"job_status":"SUCCESS"}'  -H "Content-Type: application/json" -H "Authorization: $API_KEY"`


## Okta

You have to manually add User Name for auth to work (kind of annoying!)