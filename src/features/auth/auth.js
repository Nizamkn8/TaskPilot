// Save registered users
export function saveUser(user) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

// Validate login credentials
export function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) return null;

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUser", JSON.stringify(user));

  return user;
}

// Check if user is logged in
export function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

// Logout
export function logoutUser() {  
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
}
