import { withAuth } from "@workos-inc/authkit-nextjs";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { DirectorySyncWidget } from "./directory-sync-widget";

export default async function ManageSyncPage() {
  const { organizationId, role } = await withAuth({ ensureSignedIn: true });

  const hasAccess = role === "superadmin";

  return (
    <Flex direction="column" gap="5" width="800px">
      <Flex direction="column" gap="2">
        <Heading size="8" align="center">
          Directory sync
        </Heading>
        <Text size="5" align="center" color="gray">
          Connect a directory provider to keep users and groups in sync.
        </Text>
      </Flex>

      {!organizationId ? (
        <Text align="center" color="gray">
          Sign in to an organization to configure directory sync.
        </Text>
      ) : !hasAccess ? (
        <Text align="center" color="red">
          You don&apos;t have permission to manage directory sync. This page
          requires the superadmin role.
        </Text>
      ) : (
        <DirectorySyncWidget />
      )}
    </Flex>
  );
}
