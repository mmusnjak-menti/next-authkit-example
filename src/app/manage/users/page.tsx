import { withAuth } from "@workos-inc/authkit-nextjs";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { UsersManagementWidget } from "./users-management-widget";

const ALLOWED_ROLES = ["admin", "superadmin"];

export default async function ManageUsersPage() {
  const { organizationId, role } = await withAuth({ ensureSignedIn: true });

  const hasAccess = role && ALLOWED_ROLES.includes(role);

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

      {!organizationId ? (
        <Text align="center" color="gray">
          Sign in to an organization to manage its users.
        </Text>
      ) : !hasAccess ? (
        <Text align="center" color="red">
          You don&apos;t have permission to manage users. This page requires the
          admin or superadmin role.
        </Text>
      ) : (
        <UsersManagementWidget />
      )}
    </Flex>
  );
}
