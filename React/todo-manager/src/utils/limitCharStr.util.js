export const limitCharStr = (str, limitSize, postFix) =>
  str.length > limitSize ? str.substring(0, limitSize) + postFix : str;
