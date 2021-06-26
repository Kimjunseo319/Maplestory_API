let utils = (module.exports = {});

/**
 * 오브젝트의 value에서 앞 뒤 공백을 삭제합니다
 * @param {object} object
 */
utils.removeObjectSpace = function (object) {
  let copy_object = object;
  for (const [key, value] of Object.entries(object)) {
    copy_object[key] = value.replace(/(\s*)/g, "");
  }
  return copy_object;
};
