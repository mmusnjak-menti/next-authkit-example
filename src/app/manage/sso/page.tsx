import { withAuth } from "@workos-inc/authkit-nextjs";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { SsoConnectionWidget } from "./sso-connection-widget";

export default async function ManageSsoPage() {
  const { organizationId, role } = await withAuth({ ensureSignedIn: true });

  const hasAccess = role === "superadmin";

  return (
    <Flex direction="column" gap="5" width="800px">
      <Flex direction="column" gap="2">
        <Heading size="8" align="center">
          SSO connection
        </Heading>
        <Text size="5" align="center" color="gray">
          Configure single sign-on with your organization&apos;s identity
          provider.
        </Text>
      </Flex>

      {!organizationId ? (
        <Text align="center" color="gray">
          Sign in to an organization to configure its SSO connection.
        </Text>
      ) : !hasAccess ? (
        <Text align="center" color="red">
          You don&apos;t have permission to manage SSO connections. This page
          requires the superadmin role.
        </Text>
      ) : (
        <SsoConnectionWidget />
      )}
    </Flex>
  );
}
