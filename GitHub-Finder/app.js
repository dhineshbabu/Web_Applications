//Init gitHub
const gitHub = new GitHub;

//Init UI class
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if(userText != '') {
       //Make HTTP call
      gitHub.getUser(userText)
      .then(data => {
          if(data.profile.message === 'Not Found') {
            //Show Alert
            ui.showAlert("User not found!!!", 'alert alert-danger');

          } else {
            //Show Profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
          }
      });
    } else {
        //Clear profile
        ui.clearProfile();
    }
});