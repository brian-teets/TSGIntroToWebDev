// TODO: Write your code here!
// A Bootstrap Modal with ID contact-modal and an Alert with ID conf-alert are defined in the section with ID contact.
  // Clicking the "Send a message" button displays the Modal, and clicking either button in the Modal closes the Modal.
      // .btn-primary to identify the button class name. using the id name .send-message-btn didn't work
$("#contact-modal .btn-primary").click(function() {
  // Hide the <button> with ID send-message-btn.
   $("#send-message-btn").hide();
   // Show the Alert with ID conf-alert.
   $("#conf-alert").show();
});


// more on creating your own modal:
    // https://www.youtube.com/watch?v=MBaw_6cPmAw&list=TLPQMjYwMTIwMjJqP8JfyM6a1Q&index=7
