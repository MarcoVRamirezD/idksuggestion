// Functionality
document.addEventListener('DOMContentLoaded', function() {
        displayForm();
});

document.addEventListener('submit', function(e) {
    e.preventDefault();
    const activity = document.querySelector('input[name="activity"]:checked').value;

    validateAndDetermineActivity(activity);

});
// Variables
const container = document.querySelector('#interactive-container');

// Functions

const displayForm = () => {
    container.innerHTML = '';
    const form = document.createElement('form');
    // Form elements and attributes
    form.innerHTML = `
    <div class="form-container">
        <p>What type of activity would you prefer?</p>
        <form>
        <input type="radio" id="activity-1" name="activity" value="education">
        <label for="activity-1">Education</label><br>
        <input type="radio" id="activity-2" name="activity" value="recreational">
        <label for="activity-2">Recreational</label><br>
        <input type="radio" id="activity-3" name="activity" value="social">
        <label for="activity-3">Social</label><br>
        <input type="radio" id="activity-4" name="activity" value="diy">
        <label for="activity-4">Diy</label><br>
        <input type="radio" id="activity-5" name="activity" value="charity">
        <label for="activity-5">Charity</label><br>
        <input type="radio" id="activity-6" name="activity" value="cooking">
        <label for="activity-6">Cooking</label><br>
        <input type="radio" id="activity-7" name="activity" value="relaxation">
        <label for="activity-7">Relaxation</label><br>
        <input type="radio" id="activity-8" name="activity" value="music">
        <label for="activity-8">Music</label><br>
        <input type="radio" id="activity-9" name="activity" value="busywork">
        <label for="activity-9">Busywork</label><br>
        <input type="radio" id="activity-10" name="activity" value="any">
        <label for="activity-10">Any</label><br>
        </form>
        <div class="button-container">
        <button type="submit">Get Suggestion</button>
        </div>
    </div>
    `;

    container.appendChild(form);
}

const displayResult = (data) => {
    container.innerHTML = '';
    const result = document.createElement('div');
    result.classList.add('result-container');
    result.innerHTML = `
    <h3>The suggested activity is:</h3>
    <br>
    <p>${data.activity}</p>
    <br>
    <p>Required participants: ${data.participants}</p>
    <br>
    <p>The Activity type is: ${data.type}</p>
    <div class="button-container">
    <button onclick="displayForm()">Try Again</button>
    </div>
    `;
    container.appendChild(result);
}

const validateAndDetermineActivity = (activity) => {
    if (activity !== "any") { // Modify the condition to compare with string "1" instead of number 1
        fetch(`https://www.boredapi.com/api/activity?type=${activity}`)
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        })
    } else {
        fetch(`https://www.boredapi.com/api/activity?`)
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        })
    }
}