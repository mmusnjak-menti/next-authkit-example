import { withAuth } from "@workos-inc/authkit-nextjs";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { DomainVerificationWidget } from "./domain-verification-widget";

export default async function ManageDomainPage() {
  const { organizationId } = await withAuth({ ensureSignedIn: true });

  return (
    <Flex direction="column" gap="5" width="800px">
      <Flex direction="column" gap="2">
        <Heading size="8" align="center">
          Domain verification
        </Heading>
        <Text size="5" align="center" color="gray">
          Verify domains your organization owns to unlock SSO and directory
          sync.
        </Text>
      </Flex>

      {organizationId ? (
        <DomainVerificationWidget />
      ) : (
        <Text align="center" color="gray">
          Sign in to an organization to verify its domains.
        </Text>
      )}
    </Flex>
  );
}
