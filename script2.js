function submit() {
   // Grab the value of the input field
   let content = document.querySelector("input").value;

   // Create a new <a> element
   let newLink = document.createElement("a");

   // Set the href attribute of the <a> element to the content
   newLink.href = content;

   // Set the text content of the <a> element to the content
   newLink.textContent = content+"  ";

   // Get the element with id "savedbookmarks"
   let savedBookmarks = document.getElementById("savedbookmarks");

   // Append the new <a> element to the "savedbookmarks" element
   savedBookmarks.appendChild(newLink);
}
