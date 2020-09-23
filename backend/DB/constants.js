module.exports = {
  SQL_QUERYS: {
    USERS_TABLE_COLUMNS_TYPES: `
      uid INT AUTO_INCREMENT PRIMARY KEY, 
      name VARCHAR(30) NOT NULL, 
      login VARCHAR(36) NOT NULL, 
      pass VARCHAR(100) NOT NULL
    `,
    DIALOGS_TABLE_COLUMNS_TYPES: `
      id INT AUTO_INCREMENT PRIMARY KEY, 
      authorId INT NOT NULL, 
      partnerId INT NOT NULL,
      lastUpdate VARCHAR(14) NOT NULL, 
      FOREIGN KEY (authorId) REFERENCES users(uid)
    `,
    MESSAGES_TABLE_COLUMNS_TYPES: `
      id INT AUTO_INCREMENT PRIMARY KEY,
      text TEXT NOT NULL, 
      authorId INT NOT NULL,
      dialogId INT NOT NULL,
      time CHAR(5) NOT NULL,
      isReaded BOOL,
      FOREIGN KEY (authorId) REFERENCES users(uid),
      FOREIGN KEY (dialogId) REFERENCES dialogs(id)
    `,
  },
  ERRORS_MESSAGES: {
    LOGIN_ALREADY_EXISTS: "Такой логин уже существует",
    UID_ALREADY_EXISTS: "Такой идентификатор пользователя уже существует",
    USER_NOT_FOUND: "Пользователь с таким логином не найден",
  },
  STATE: {
    SUCCESS: "SUCCESS"
  }
};

/* todo  строки в байт посчитать
function lengthInUtf8Bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
} */