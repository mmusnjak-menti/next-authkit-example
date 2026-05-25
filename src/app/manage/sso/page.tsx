import { withAuth } from "@workos-inc/authkit-nextjs";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { SsoConnectionWidget } from "./sso-connection-widget";

export default async function ManageSsoPage() {
  const { organizationId } = await withAuth({ ensureSignedIn: true });

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

      {organizationId ? (
        <SsoConnectionWidget />
      ) : (
        <Text align="center" color="gray">
          Sign in to an organization to configure its SSO connection.
        </Text>
      )}
    </Flex>
  );
}
