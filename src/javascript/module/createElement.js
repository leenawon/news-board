export const createPostElement = (content) => {
  const { title, summary, link, thumbnailImage } = content;

  const anchor = document.createElement("a");
  anchor.setAttribute("href", link);

  if (summary && thumbnailImage) {
    const inner = `
        <article class="single-post">
            <div class="post-info">
            <h3 class="title">${title}</h3>
            <p class="description">${summary}</p>
            </div>
            <div class="thumbnail-container">
                <img src="${thumbnailImage}" alt="게시물 이미지" class="thumbnail-image" />
            </div>
        </article>
    `;

    anchor.innerHTML = inner;
    return anchor;
  }

  anchor.textContent = title;

  const listItem = document.createElement("li");

  listItem.className = "latest-posts-item";

  listItem.appendChild(anchor);

  return listItem;
};
