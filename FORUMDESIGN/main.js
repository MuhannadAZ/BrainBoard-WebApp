//navbar
function hideIconBar() {
    var iconBar=document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style","display:none;");   
    navigation.classList.remove("hide");
}

function showIconBar() {
    var iconBar=document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style","display:block;");   
    navigation.classList.add("hide");
}


function showReply(postId) {
    var replyArea = document.getElementById('reply-area');
    var replyButton = document.querySelector(`button[onclick="showReply('${postId}')"]`);

    // Set the post ID to the hidden input
    document.getElementById('post-id').value = postId;

    if (replyButton) {
        replyButton.parentElement.appendChild(replyArea);
    }
    replyArea.classList.remove('hide');
}


document.getElementById('submit-reply').addEventListener('click', function() {
    var commentText = document.getElementById('comment-text').value;
    var postId = document.getElementById('post-id').value;

    if (!commentText.trim()) {
        alert("Please enter a reply.");
        return;
    }

    // Find the post container to which the reply should be appended
    var postContainer = document.querySelector(`button[onclick="showReply('${postId}')"]`).closest('.body');

    var newComment = document.createElement('div');

    newComment.className = 'newcomm';
    newComment.innerHTML = `<div>You:<br>${commentText}</div>`;

    // Append the new comment to the post container
    postContainer.append(newComment);

    // Clear the text area and hide the reply area after submission
    document.getElementById('comment-text').value = '';
    document.getElementById('reply-area').classList.add('hide');

});

