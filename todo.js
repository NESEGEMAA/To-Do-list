const accessKey = "lL5pWt0HULevEVfvoOx7EOB1Wd4GvirCC5RuO0DnYlY"; // Replace with your Unsplash API key
const collectionId = "4509915,583204"; // Replace with the ID of the desired collections
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&collections=${collectionId}`;

// Fetch a random photo from Unsplash
axios
  .get(apiUrl)
  .then((response) => {
    const imageUrl = response.data.urls.full;
    document.body.style.backgroundImage = `url(${imageUrl})`;
  })
  .catch((error) => console.error("Error fetching image:", error));

document.addEventListener("DOMContentLoaded", function () {
  currentTasks = document.getElementById("currentTasks");
  noTasks = document.getElementById("noTasks");
  addNewTask = document.getElementById("addNewTask");
  doneButton = '<button onclick="done(this)"><span class="material-symbols-outlined">done</span></button>';
  // Get the current date and time
  const currentDate = new Date();

  // Format the date and time
  const formattedDateTime = currentDate.toLocaleString();

  addNewTask.addEventListener("keydown", function (event) {
      // Check if the pressed key is 'Enter' (key code 13)
      if (addNewTask.value.trim() != "" && event.key === "Enter") {
        // Execute your function or code here
        noTasks.style.display = "none";
        currentTasks.style.display = "flex";
        currentTasks.innerHTML += '<div class="enteredTask general">' + '<div class="text">' + addNewTask.value + '</div>' + '<div class="time">' + formattedDateTime + '</div>' + doneButton + '</div>';
        addNewTask.value = "";
      }
    });
});

function done(button) {
  const task = button.closest('.enteredTask');
  task.remove();
  
  currentTasks = document.getElementById("currentTasks");
  noTasks = document.getElementById("noTasks");

  if (currentTasks.childElementCount == 0) {
    noTasks.style.display = "flex"
    currentTasks.style.display = "none"
  }
}