  export default function handler(req, res) {
    let projectData =[
        {
            title: "Mood Music Player",
            skills: ["React.js","Django ( Python )","HTML","CSS", "Bootstrap"],
            description:"This site is use to play music with capturing image of user and get list of songs also subscription using E-Sewa",
            githubUrl:"https://github.com/Roshankc682/Mood_Music_player",
            sampleUrl:"",
            name:"Roshankc682"
        },
        {
          title: "Online Book Shooping",
          skills: ["PHP","HTML","CSS"],
          description:"This site is to sell Book online Via using Stripe Payment",
          githubUrl:"https://github.com/Roshankc682/Book_Store",
          sampleUrl:"",
          name:"Roshankc682"
        },
        {
            title: "Group Chat WebApp",
            skills: ["Django","React","CSS","Bootstrap"],
            description:"Create a User account and get into group chat",
            githubUrl:"https://github.com/Roshankc682/Group-Chat-App",
            sampleUrl:"",
            name:"Roshankc682"
        },
        {
            title: "Animal Detection WebApp",
            skills: ["Django","React","CSS","Bootstrap"],
            description:"Detect the Breed of Animals",
            githubUrl:"https://github.com/Roshankc682/Photo_Detection_WebApp",
            sampleUrl:"",
            name:"Roshankc682"
        },
        {
            title: "Blog WebApp",
            skills: ["Django","React","CSS","Bootstrap"],
            description:"Create a User account and Read and write a blog",
            githubUrl:"https://github.com/Roshankc682/React-Django-Blog-JWT-Authentication",
            sampleUrl:"",
            name:"Roshankc682"
        },
        {
          title: "Django JWT implementation with set-cookie",
          skills: ["React.js","Django ( Python )","HTML","CSS", "Bootstrap"],
          description:"I forget things mostly so created a list extension form js you can get it from google extension also",
          githubUrl:"https://github.com/Roshankc682/Django_Set_cookie_with_JWT_Implemetation",
          sampleUrl:"",
          name:"Roshankc682"
        },
        {
        title: "Personal project To-do-List",
        skills: ["Javscript","HTML","CSS", "Bootstrap"],
        description:"This was the most fun project",
        githubUrl:"https://github.com/Roshankc682/To-do_-List",
        sampleUrl:"https://chrome.google.com/webstore/detail/to-do-list/kcfhljenkbhelpfophfokmcbahjcllai",
        name:"Roshankc682"
        },
        {
            title: "React WebApp for FrontEnd",
            skills: ["React.js","Django ( Python )","HTML","CSS", "Bootstrap"],
            description:"React WebApp for FrontEnd",
            githubUrl:"https://github.com/Roshankc682/react_set_cookie",
            sampleUrl:"",
            name:"Roshankc682"
        },
        {
            title: "Json is Awsome",
            skills: ["React.js","Django ( Python )","HTML","CSS", "Bootstrap"],
            description:"Simple JS project that take input and store in localstorage and can edit update in form of JSON",
            githubUrl:"https://github.com/Roshankc682/json-is-awsum",
            sampleUrl:"",
            name:"Roshankc682"
        },{
            title: "Json is Awsome",
            skills: ["React.js","Django ( Python )","HTML","CSS", "Bootstrap"],
            description:"Simple JS project that take input and store in localstorage and can edit update in form of JSON",
            githubUrl:"https://github.com/Roshankc682/json-is-awsum",
            sampleUrl:"",
            name:"Roshankc682"
        },{
            title: "Json is Awsome",
            skills: ["React.js","Django ( Python )","HTML","CSS", "Bootstrap"],
            description:"Simple JS project that take input and store in localstorage and can edit update in form of JSON",
            githubUrl:"https://github.com/Roshankc682/json-is-awsum",
            sampleUrl:"",
            name:"Roshankc682"
        },{
            title: "Json is Awsome",
            skills: ["React.js","Django ( Python )","HTML","CSS", "Bootstrap"],
            description:"Simple JS project that take input and store in localstorage and can edit update in form of JSON",
            githubUrl:"https://github.com/Roshankc682/json-is-awsum",
            sampleUrl:"",
            name:"Roshankc682"
        },{
            title: "Json is Awsome",
            skills: ["React.js","Django ( Python )","HTML","CSS", "Bootstrap"],
            description:"Simple JS project that take input and store in localstorage and can edit update in form of JSON",
            githubUrl:"https://github.com/Roshankc682/json-is-awsum",
            sampleUrl:"",
            name:"Roshankc682"
        },{
            title: "Json is Awsome",
            skills: ["React.js","Django ( Python )","HTML","CSS", "Bootstrap"],
            description:"Simple JS project that take input and store in localstorage and can edit update in form of JSON",
            githubUrl:"https://github.com/Roshankc682/json-is-awsum",
            sampleUrl:"",
            name:"Roshankc682"
        },
      ]
      res.status(200).json(projectData)
    }