const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.reduce((abbr, memberName) => (
    (typeof memberName === 'string') ?
      abbr + memberName.trim().slice(0, 1) :
      abbr
  ), "")
    .toUpperCase()
    .split('')
    .sort()
    .join('')
};
