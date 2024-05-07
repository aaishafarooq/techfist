document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = this;
    var status = document.getElementById('status');
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, 'https://formspree.io/f/xeqynwnd'); // Replace with your Formspree endpoint
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            status.innerHTML = 'Message sent! We will get back to you soon.';
        } else {
            status.innerHTML = 'Oops! There was a problem sending your message.';
        }
    };
    xhr.send(data);
});
