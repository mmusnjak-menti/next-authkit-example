"use client";

import "@workos-inc/widgets/styles.css";

import { useCallback } from "react";
import { useAccessToken } from "@workos-inc/authkit-nextjs/components";
import { WorkOsWidgets } from "@workos-inc/widgets/workos-widgets";
import { UserProfile } from "@workos-inc/widgets/user-profile";

export function UserProfileWidget() {
  const { getAccessToken } = useAccessToken();

  const authToken = useCallback(async () => {
    const token = await getAccessToken();
    if (!token) {
      throw new Error("No access token available — please sign in again.");
    }
    return token;
  }, [getAccessToken]);

  return (
    <WorkOsWidgets>
      <UserProfile authToken={authToken} />
    </WorkOsWidgets>
  );
}
