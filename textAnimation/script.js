const AnimationTargetElement = document.querySelectorAll(".textAnimation");
for (let i = 0; i < AnimationTargetElement.length; i++) {
  const targteElement = AnimationTargetElement[i];
  texts = targteElement.textContent;
  tesxsArray = [];
  console.log(texts);
  targteElement.textContent = "";
  for (let j = 0; j < texts.split("").length; j++) {
    tesxsArray.push("<span>" + texts.split("")[j] + "</span>");
  }
  console.log(tesxsArray);
}
