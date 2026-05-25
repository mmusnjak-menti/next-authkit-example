"use client";

import "@workos-inc/widgets/styles.css";

import { WorkOsWidgets } from "@workos-inc/widgets/workos-widgets";
import { AdminPortalDomainVerification } from "@workos-inc/widgets/admin-portal-domain-verification";
import { getDomainVerificationWidgetToken } from "../../actions/getWidgetToken";

export function DomainVerificationWidget() {
  return (
    <WorkOsWidgets>
      <AdminPortalDomainVerification
        authToken={getDomainVerificationWidgetToken}
      />
    </WorkOsWidgets>
  );
}
