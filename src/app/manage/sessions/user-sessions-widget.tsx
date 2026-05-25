"use client";

import "@workos-inc/widgets/styles.css";

import { useCallback } from "react";
import { useAccessToken } from "@workos-inc/authkit-nextjs/components";
import { WorkOsWidgets } from "@workos-inc/widgets/workos-widgets";
import { UserSessions } from "@workos-inc/widgets/user-sessions";

export function UserSessionsWidget() {
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
      <UserSessions authToken={authToken} />
    </WorkOsWidgets>
  );
}
