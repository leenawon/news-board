export const createLoadingSpinner = (parent) => {
  const spinnerElement = parent.querySelector(".spinner");
  const imageElement = document.createElement("img");

  imageElement.alt = "로딩 스피너";
  imageElement.src = "../assets/images/spinner.gif";

  spinnerElement.appendChild(imageElement);
};

export const removeLodingSpinner = (parent) => {
  const spinnerElement = parent.querySelector(".spinner");
  spinnerElement.style.display = "none";
};
