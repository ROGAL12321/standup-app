type User = any;

type Project = {
  avatarUrls: {
    [K in "16x16" | "32x32" | "48x48"]: string;
  };
  name: string;
};
