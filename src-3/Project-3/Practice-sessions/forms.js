document.getElementById("my-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget)
  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  submitViaApi({
    firstName,
    lastName
  })

})

function submitViaApi(Data) {
  console.log(Data);
  console.log("submitted");

}