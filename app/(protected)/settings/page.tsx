import { auth } from "@/lib/auth";

export const Settings = async () => {
  const session = await auth();
  return <div>{JSON.stringify(session)}</div>;
};

export default Settings;
