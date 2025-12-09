// Demo accounts
var DEMO_ACCOUNTS = {
  DemoFree: { username: "DemoFree", password: "123", plan: "free" },
  DemoPlus: { username: "DemoPlus", password: "123", plan: "plus" },
  DemoPrem: { username: "DemoPrem", password: "123", plan: "premium" }
};

// Create new account
function signup(username, password, plan) {
  var users = JSON.parse(localStorage.getItem("users") || "{}");
  
  if (users[username]) {
    return { success: false, message: "Username already exists" };
  }
  
  users[username] = { username: username, password: password, plan: plan };
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(users[username]));
  
  return { success: true };
}

// Login to account
function signin(username, password) {
  // Check demo accounts first
  if (DEMO_ACCOUNTS[username] && DEMO_ACCOUNTS[username].password === password) {
    localStorage.setItem("currentUser", JSON.stringify(DEMO_ACCOUNTS[username]));
    return { success: true };
  }
  
  // Check regular accounts
  var users = JSON.parse(localStorage.getItem("users") || "{}");
  var user = users[username];
  
  if (!user) {
    return { success: false, message: "Username not found" };
  }
  
  if (user.password !== password) {
    return { success: false, message: "Incorrect password" };
  }
  
  localStorage.setItem("currentUser", JSON.stringify(user));
  return { success: true };
}

// Get current logged in user
function getCurrentUser() {
  var userString = localStorage.getItem("currentUser");
  if (userString) {
    return JSON.parse(userString);
  }
  return null;
}

// Logout
function logout() {
  localStorage.removeItem("currentUser");
}

// Check if user is logged in
function isLoggedIn() {
  return getCurrentUser() !== null;
}
