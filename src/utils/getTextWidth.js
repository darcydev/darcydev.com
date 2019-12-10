export const getWidthOfText = (txt, fontname, fontsize) => {
  if (getWidthOfText.c === undefined) {
    getWidthOfText.c = document.createElement("canvas");
    getWidthOfText.ctx = getWidthOfText.c.getContext("2d");
  }
  getWidthOfText.ctx.font = fontsize + " " + fontname;
  return getWidthOfText.ctx.measureText(txt).width;
};
