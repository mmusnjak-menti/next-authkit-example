import { withAuth } from "@workos-inc/authkit-nextjs";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { UserSessionsWidget } from "./user-sessions-widget";

export default async function ManageSessionsPage() {
  await withAuth({ ensureSignedIn: true });

  return (
    <Flex direction="column" gap="5" width="800px">
      <Flex direction="column" gap="2">
        <Heading size="8" align="center">
          Active sessions
        </Heading>
        <Text size="5" align="center" color="gray">
          Review and revoke devices and browsers signed in to your account.
        </Text>
      </Flex>

      <UserSessionsWidget />
    </Flex>
  );
}
