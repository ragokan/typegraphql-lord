interface Link {
  key: string;
  name: string;
}

export const UserLinks: Link[] = [{ key: "/post/create", name: "Create Post" }];

export const GuestLinks: Link[] = [
  { key: "/auth/login", name: "Login" },
  { key: "/auth/register", name: "Register" },
];
