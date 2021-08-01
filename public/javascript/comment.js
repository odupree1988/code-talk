async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector("#comment-text").value.trim();
  var post_id = window.location.pathname.split("/")[3];

  console.log(post_id);

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "post",
      body: JSON.stringify({
        comment_text,
        post_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else alert(response.statusText);
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
