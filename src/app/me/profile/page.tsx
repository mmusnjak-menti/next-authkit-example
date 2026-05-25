import { withAuth } from "@workos-inc/authkit-nextjs";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { UserProfileWidget } from "./user-profile-widget";

export default async function ProfilePage() {
  await withAuth({ ensureSignedIn: true });

  return (
    <Flex direction="column" gap="5" width="800px">
      <Flex direction="column" gap="2">
        <Heading size="8" align="center">
          Your profile
        </Heading>
        <Text size="5" align="center" color="gray">
          Update your personal information, email, and connected accounts.
        </Text>
      </Flex>

      <UserProfileWidget />
    </Flex>
  );
}
