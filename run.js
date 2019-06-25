var numUniqueEmails = function(emails) {
  let set = new Set();

  emails.forEach(email => {
    let [local, domain] = email.split("@");
    local = local.replace(/[.]/g, ""); // replace '.' with empty char
    const plusIndex = local.indexOf("+");
    if (plusIndex !== -1) {
      local = local.substring(0, plusIndex);
    }

    set.add(`${local}@${domain}`);
  });

  return set.size;
};
