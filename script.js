function showAlert() {
  alert("Thanks for visiting!🎉");
}

function visitLink(url) {
  const confirmVisit = confirm("You're about to leave the site. Continue?");
  if (confirmVisit) {
    window.open(url, '_blank');
  }
}
