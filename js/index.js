
const APIUrl = "https://api.github.com"
const RepoAPI = APIUrl+"/repos"
const ReposUrl = '/users/hellMaster120/repos'

const LangUrl = "/languages"
const FileUrl = "/contents"
let FileData = {}




document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";




function GetLeng(Data,FileData){
  new Promise(resolve => {
    fetch(Data["Url"]["Lang"],{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method:"GET"
    }).then(response => {
      let Json = response.json().then(D =>{
        Data["Leng"] = D
        GetFiles(Data,FileData)
        resolve(Json);
      })
    })
  })
}

function GetFiles(Data,FileData){
  new Promise(resolve => {
    fetch(Data["Url"]["File"],{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method:"GET"
    }).then(response => {
      let Json = response.json().then(D =>{
        Data["Files"] = D
        HandelData(Data,FileData)
        resolve(Json);
      })
    })
  })
}

function HandelData(Data,FileData){
  console.log(Data)

}

function GetRepo(){
  new Promise(resolve => {
    fetch(APIUrl+ReposUrl,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method:"GET"
    }).then(response => {
      let Json = response.json().then(Data =>{
        Data.forEach(File => {
          let Pushed = File.pushed_at
          let Created = File.created_at
          let ID = File.id
          let Name = File.name
          let FullName = File.full_name
          let Has_Pages = File.has_pages
          let Branch = File.default_branch
          let Visibility = File.visibility
          let Url = {
            Lang:RepoAPI+"/"+FullName+LangUrl,
            File:RepoAPI+"/"+FullName+FileUrl
          }
          FileData[Name] = {
            Pushed:Pushed,    
            Created:Created,
            ID:ID,    
            Name:Name,
            FullName:FullName,    
            Has_Pages:Has_Pages,
            Branch:Branch,    
            Visibility:Visibility,
            Url:Url   
          }

          GetLeng(FileData[Name],FileData)
        });
        resolve(Json);
      });
      
    })

  })
}









/*
fetch(APIUrl+ReposUrl)
.then(Res => {Res.json()
  .then(Data =>{
    Data.forEach(File => {
      FileData["Test"] = "2"
    })
  })
})



          FileData[File.name] = {
          PushedData:File.pushed_at,
          CreatedData:File.created_at,
          ID:File.id,
          Name:File.name,
          Full_Name:File.full_name,
          Has_Pages:File.has_pages,
          Branch:File.default_branch,
          Visibility:File.visibility,
          Url:{
            Lang:RepoAPI+"/"+File_FullName+LangUrl,
            File:RepoAPI+"/"+File_FullName+FileUrl
          }
        }




function GetLangData(Url){
  var LangData = {}
  fetch(APIUrl+ReposUrl)
  .then((Response) => Response.json())
  .then((Data) => {
    Data.forEach(Lang => {
    
    })
  })
}
        
allow_forking: true
archive_url: "https://api.github.com/repos/hellMaster120/BaseController/{archive_format}{/ref}"
archived: false
assignees_url: "https://api.github.com/repos/hellMaster120/BaseController/assignees{/user}"
blobs_url: "https://api.github.com/repos/hellMaster120/BaseController/git/blobs{/sha}"
branches_url: "https://api.github.com/repos/hellMaster120/BaseController/branches{/branch}"
clone_url: "https://github.com/hellMaster120/BaseController.git"
collaborators_url: "https://api.github.com/repos/hellMaster120/BaseController/collaborators{/collaborator}"
comments_url: "https://api.github.com/repos/hellMaster120/BaseController/comments{/number}"
commits_url: "https://api.github.com/repos/hellMaster120/BaseController/commits{/sha}"
compare_url: "https://api.github.com/repos/hellMaster120/BaseController/compare/{base}...{head}"
contents_url: "https://api.github.com/repos/hellMaster120/BaseController/contents/{+path}"
contributors_url: "https://api.github.com/repos/hellMaster120/BaseController/contributors"
created_at: "2022-03-22T22:31:40Z"
default_branch: "main"
deployments_url: "https://api.github.com/repos/hellMaster120/BaseController/deployments"
description: null
disabled: false
downloads_url: "https://api.github.com/repos/hellMaster120/BaseController/downloads"
events_url: "https://api.github.com/repos/hellMaster120/BaseController/events"
fork: false
forks: 0
forks_count: 0
forks_url: "https://api.github.com/repos/hellMaster120/BaseController/forks"
full_name: "hellMaster120/BaseController"
git_commits_url: "https://api.github.com/repos/hellMaster120/BaseController/git/commits{/sha}"
git_refs_url: "https://api.github.com/repos/hellMaster120/BaseController/git/refs{/sha}"
git_tags_url: "https://api.github.com/repos/hellMaster120/BaseController/git/tags{/sha}"
git_url: "git://github.com/hellMaster120/BaseController.git"
has_downloads: true
has_issues: true
has_pages: false
has_projects: true
has_wiki: true
homepage: null
hooks_url: "https://api.github.com/repos/hellMaster120/BaseController/hooks"
html_url: "https://github.com/hellMaster120/BaseController"
id: 472958257
is_template: false
issue_comment_url: "https://api.github.com/repos/hellMaster120/BaseController/issues/comments{/number}"
issue_events_url: "https://api.github.com/repos/hellMaster120/BaseController/issues/events{/number}"
issues_url: "https://api.github.com/repos/hellMaster120/BaseController/issues{/number}"
keys_url: "https://api.github.com/repos/hellMaster120/BaseController/keys{/key_id}"
labels_url: "https://api.github.com/repos/hellMaster120/BaseController/labels{/name}"
language: "Lua"
languages_url: "https://api.github.com/repos/hellMaster120/BaseController/languages"
license: null
merges_url: "https://api.github.com/repos/hellMaster120/BaseController/merges"
milestones_url: "https://api.github.com/repos/hellMaster120/BaseController/milestones{/number}"
mirror_url: null
name: "BaseController"
node_id: "R_kgDOHDDFMQ"
notifications_url: "https://api.github.com/repos/hellMaster120/BaseController/notifications{?since,all,participating}"
open_issues: 0
open_issues_count: 0
owner: {login: 'hellMaster120', id: 51432361, node_id: 'MDQ6VXNlcjUxNDMyMzYx', avatar_url: 'https://avatars.githubusercontent.com/u/51432361?v=4', gravatar_id: '', …}
private: false
pulls_url: "https://api.github.com/repos/hellMaster120/BaseController/pulls{/number}"
pushed_at: "2022-03-24T05:26:30Z"
releases_url: "https://api.github.com/repos/hellMaster120/BaseController/releases{/id}"
size: 32
ssh_url: "git@github.com:hellMaster120/BaseController.git"
stargazers_count: 0
stargazers_url: "https://api.github.com/repos/hellMaster120/BaseController/stargazers"
statuses_url: "https://api.github.com/repos/hellMaster120/BaseController/statuses/{sha}"
subscribers_url: "https://api.github.com/repos/hellMaster120/BaseController/subscribers"
subscription_url: "https://api.github.com/repos/hellMaster120/BaseController/subscription"
svn_url: "https://github.com/hellMaster120/BaseController"
tags_url: "https://api.github.com/repos/hellMaster120/BaseController/tags"
teams_url: "https://api.github.com/repos/hellMaster120/BaseController/teams"
topics: []
trees_url: "https://api.github.com/repos/hellMaster120/BaseController/git/trees{/sha}"
updated_at: "2022-03-22T22:35:42Z"
url: "https://api.github.com/repos/hellMaster120/BaseController"
visibility: "public"
watchers: 0
watchers_count: 0
web_commit_signoff_required: false
*/