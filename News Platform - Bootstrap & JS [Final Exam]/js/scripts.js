/*!
* Start Bootstrap - Blog Post v5.0.9 (https://startbootstrap.com/template/blog-post)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// Dynamically Updating Comments Section
document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentsContainer = document.getElementById("commentsContainer");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const commentName = document.getElementById("commentName").value;
        const commentText = document.getElementById("commentMessage").value;

        if (commentText.trim() !== "") {
            const timestamp = new Date().toLocaleDateString();
            addComment(commentName, commentText, timestamp);
            commentForm.reset();
        }
    });

    const comments = [
        { id: 1, name: "Beethoven", comment: "Good news!", timestamp: "17.11.2023" },
        { id: 2, name: "Mozart", comment: "Interesting article.", timestamp: "19.11.2023" },
        { id: 3, name: "Wolfgang", comment: "Thanks for sharing!", timestamp: "23.11.2023" }
    ];

    // Load existing comments
    comments.forEach(comment => {
        addComment(comment.name, comment.comment, comment.timestamp);
    });

    function addComment(commenterName, commentText, timestamp) {
        const comment = document.createElement("div");
        comment.classList.add("comment", "mb-4");

        const commenterInfo = document.createElement("div");
        commenterInfo.classList.add("comment-header", "d-flex", "justify-content-between");

        const commenterDetails = document.createElement("div");
        commenterDetails.classList.add("commenter-info");
        const commenterImage = document.createElement("img");
        commenterImage.classList.add("rounded-circle");
        commenterImage.src = "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";
        commenterImage.alt = "Commenter Image";
        commenterImage.style = "width: 45px; height: 45px";
        const commenterNameElement = document.createElement("span");
        commenterNameElement.classList.add("ms-2", "fw-bold");
        commenterNameElement.textContent = commenterName;

        commenterDetails.appendChild(commenterImage);
        commenterDetails.appendChild(commenterNameElement);

        const timestampElement = document.createElement("div");
        timestampElement.classList.add("comment-timestamp", "text-muted");
        timestampElement.textContent = timestamp;

        commenterInfo.appendChild(commenterDetails);
        commenterInfo.appendChild(timestampElement);

        const commentContent = document.createElement("div");
        commentContent.classList.add("comment-content");
        commentContent.textContent = commentText;

        comment.appendChild(commenterInfo);
        comment.appendChild(commentContent);

        commentsContainer.appendChild(comment);
    }
});


// Search Tool Google News
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");

    document.getElementById("button-search").addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();

        if (searchTerm !== "") {
            redirectToGoogleNews(searchTerm);
        }
    });

    function redirectToGoogleNews(searchTerm) {
        const googleNewsURL = `https://news.google.com/search?q=${encodeURIComponent(searchTerm)}`;

        window.location.href = googleNewsURL;
    }
});


// Quiz Settings
document.addEventListener("DOMContentLoaded", function () {
    // Quiz Questions and Correct Answers
    const quizQuestions = [
        { question: "What is the capital of France?", correctAnswer: "a" },
        { question: "Who is the current president of the United States?", correctAnswer: "a" },
        { question: "What virus caused the global pandemic in 2020?", correctAnswer: "c" },
        { question: "Which country did the national team of Kazakhstan lose in the final match for the exit of the euroleague 2024 championship?", correctAnswer: "b" },
        { question: "In what year was the currency of Kazakhstan last updated?", correctAnswer: "c" }
    ];

    // Quiz Form Submission
    $("#quizForm").submit(function (event) {
        event.preventDefault();

        let score = 0;

        // Check answers
        quizQuestions.forEach((question, index) => {
            const selectedOption = $(`input[name=question${index + 1}]:checked`).val();
            console.log(selectedOption);
            if (selectedOption == question.correctAnswer) {
                score++;
            }
        });

        // Display Results
        const resultsDiv = $("#quizResults");
        resultsDiv.empty();
        if(score == 0) {
            resultsDiv.append(`<h3>😭 Your Score: ${score} out of ${quizQuestions.length}!</h3><br>`);
        } else if(score < 4) {
            resultsDiv.append(`<h3>😐 Your Score: ${score} out of ${quizQuestions.length}!</h3><br>`);
        } else {
            resultsDiv.append(`<h3>🥳 Your Score: ${score} out of ${quizQuestions.length}!</h3><br>`);
        }
    });
});