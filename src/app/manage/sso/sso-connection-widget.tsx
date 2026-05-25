"use client";

import "@workos-inc/widgets/styles.css";

import { WorkOsWidgets } from "@workos-inc/widgets/workos-widgets";
import { AdminPortalSsoConnection } from "@workos-inc/widgets/admin-portal-sso-connection";
import { getSsoConnectionWidgetToken } from "../../actions/getWidgetToken";

export function SsoConnectionWidget() {
  return (
    <WorkOsWidgets>
      <AdminPortalSsoConnection authToken={getSsoConnectionWidgetToken} />
    </WorkOsWidgets>
  );
}
