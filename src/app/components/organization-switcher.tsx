"use client";

import "@workos-inc/widgets/styles.css";

import { useCallback } from "react";
import { useAccessToken, useAuth } from "@workos-inc/authkit-nextjs/components";
import { WorkOsWidgets } from "@workos-inc/widgets/workos-widgets";
import { OrganizationSwitcher } from "@workos-inc/widgets/organization-switcher";

export function OrganizationSwitcherWidget() {
  const { user, switchToOrganization } = useAuth();
  const { getAccessToken } = useAccessToken();

  const authToken = useCallback(async () => {
    const token = await getAccessToken();
    if (!token) {
      throw new Error("No access token available — please sign in again.");
    }
    return token;
  }, [getAccessToken]);

  const onSwitch = useCallback(
    async ({ organizationId }: { organizationId: string }) => {
      await switchToOrganization(organizationId);
    },
    [switchToOrganization],
  );

  if (!user) {
    return null;
  }

  return (
    <WorkOsWidgets>
      <OrganizationSwitcher
        authToken={authToken}
        switchToOrganization={onSwitch}
      />
    </WorkOsWidgets>
  );
}
