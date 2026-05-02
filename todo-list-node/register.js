const db = require("./fw/db");
const bcrypt = require("bcrypt");

async function getHtml(req) {
  let html = "";

  if (req.body.username && req.body.password) {
    const username = req.body.username;
    const password = req.body.password;

    const hash = await bcrypt.hash(password, 10);

    const dbConnection = await db.connectDB();

    await dbConnection.execute(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hash],
    );

    html += "<span class='info info-success'>User created</span>";
  }

  html += `
    <h2>Register</h2>
    <form method="post" action="/register">
      Username: <input name="username"><br>
      Password: <input type="password" name="password"><br>
      <button type="submit">Register</button>
    </form>
    <a href="/login">Back to login</a>
  `;

  return html;
}

module.exports = { html: getHtml };
