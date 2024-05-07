// // Mock blog data (you can replace this with actual data)
// const blogs = [
//     {
//         title: "Mastering the Art of Coding",
//         author: "Aaisha",
//         date: "07 May 24",
//         category: "Software Engineering",
//         content: `
//             "Mastering the Art of Coding: A Comprehensive Guide to Choosing the Right Software Development Course"
//             is your compass in the dynamic world of software development education. Whether you're a novice
//             eager to embark on a coding journey or a seasoned programmer seeking to refine your skills, this
//             guide offers invaluable insights to help you make an informed decision.
//         `
//     },
//     // Add more blog entries here
// ];

// // Function to show blog detail
// function showBlogDetail(index) {
//     const blog = blogs[index - 1]; // Get the blog data based on index
//     const blogDetailContainer = document.querySelector('.blog-detail-container');
//     const blogDetail = document.querySelector('#blogDetail');

//     // Update the blog detail content
//     blogDetail.innerHTML = `
//         <h2>${blog.title}</h2>
//         <p>${blog.author} &middot; ${blog.date} &middot; ${blog.category}</p>
//         <p>${blog.content}</p>
//     `;

//     // Show the blog detail container and hide the blog container
//     blogDetailContainer.style.display = 'block';
//     document.querySelector('.blog-container').style.display = 'none';
// }

// // Function to hide blog detail and show blog container
// function hideBlogDetail() {
//     document.querySelector('.blog-detail-container').style.display = 'none';
//     document.querySelector('.blog-container').style.display = 'block';
// }
