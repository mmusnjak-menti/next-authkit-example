import { withAuth } from "@workos-inc/authkit-nextjs";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { UsersManagementWidget } from "./users-management-widget";

export default async function ManageUsersPage() {
  const { organizationId } = await withAuth({ ensureSignedIn: true });

  return (
    <Flex direction="column" gap="5" width="800px">
      <Flex direction="column" gap="2">
        <Heading size="8" align="center">
          Manage users
        </Heading>
        <Text size="5" align="center" color="gray">
          Invite, update, and remove members of your organization.
        </Text>
      </Flex>

      {organizationId ? (
        <UsersManagementWidget />
      ) : (
        <Text align="center" color="gray">
          Sign in to an organization to manage its users.
        </Text>
      )}
    </Flex>
  );
}
