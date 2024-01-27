// Function to open a specific tab
function openTab(tabName) {
    // Hide all tab content
    var tabContents = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(tabName + 'Tab').classList.add('active');
}

// Set the default tab to be displayed on page load
document.addEventListener('DOMContentLoaded', function() {
    openTab('games');
});
