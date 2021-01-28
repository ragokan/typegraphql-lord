interface Link {
  key: string;
  name: string;
}

export const UserLinks: Link[] = [
  { key: "/post/create", name: "Create Post" },
  { key: "/auth/profile", name: "Profile" },
];

export const GuestLinks: Link[] = [
  { key: "/auth/login", name: "Login" },
  { key: "/auth/register", name: "Register" },
];
