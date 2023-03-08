// module
import { fetchData } from './module/fetchData';
import { createLoadingSpinner, removeLodingSpinner } from './module/spinner';
import { createPostElement } from './module/createElement';

const renderTopPosts = () => {
  const topPostsElement = document.getElementById('topPostsList');

  createLoadingSpinner(topPostsElement);

  /** setTimeout을 설정한 이유는 실제 api에서 데이터를 가져올 때 처럼 시간이 어느정도 소요되게 하기 위함임 */
  setTimeout(() => {
    fetchData('./data/topPosts.json')
      .then((res) => {
        const { articles } = res;

        const articleList = articles.map((article) => createPostElement(article));

        topPostsElement.append(...articleList);
      })
      .catch((e) => alert(e))
      .finally(() => removeLodingSpinner(topPostsElement));
  }, 1000);
};

const renderLatestPosts = () => {
  const latestPostsElement = document.querySelector('.latest-posts-list');

  createLoadingSpinner(latestPostsElement);

  setTimeout(() => {
    fetchData('./data/latestPosts.json')
      .then((res) => {
        const { articles } = res;

        const articleList = articles.map((article) => createPostElement(article));

        latestPostsElement.append(...articleList);
      })
      .catch((e) => alert(e))
      .finally(() => removeLodingSpinner(latestPostsElement));
  }, 1000);
};

/** 브라우저가 HTML 파싱 후 DOM 트리를 완성하는 즉시 이벤트 발생 (모든 리소스의 로딩 완료 후 발생하는 이벤트는 load) */
document.addEventListener('DOMContentLoaded', () => {
  renderTopPosts();
  renderLatestPosts();
});
