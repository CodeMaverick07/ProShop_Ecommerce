import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "hemant",
    email: "hemant@example.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
  {
    name: "krishna",
    email: "krishna@example.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
];

export default users;
