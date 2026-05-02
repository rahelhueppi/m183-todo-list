const db = require("./fw/db");

async function handleDeleteUser(req, res) {
  if (!req.cookies || !req.cookies.userid) {
    return "<span class='info info-error'>Not logged in</span>";
  }

  const userId = req.cookies.userid;

  try {
    const dbConnection = await db.connectDB();

    // delete user
    await dbConnection.execute("DELETE FROM users WHERE id = ?", [userId]);

    // delete cookie (logout)
    res.cookie("username", "");
    res.cookie("userid", "");

    return "<span class='info info-success'>User deleted</span><br><a href='/login'>Login</a>";
  } catch (err) {
    console.log(err);
    return "<span class='info info-error'>Error deleting user</span>";
  }
}

function getHtml() {
  return `
    <h2>Delete Account</h2>
    <form method="post" action="/deleteUser">
      <p>Are you sure you want to delete your account?</p>
      <button type="submit">Delete my account</button>
    </form>
    <a href="/">Cancel</a>
  `;
}

module.exports = {
  handleDeleteUser,
  getHtml,
};
