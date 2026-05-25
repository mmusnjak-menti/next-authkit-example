"use client";

import "@workos-inc/widgets/styles.css";

import { WorkOsWidgets } from "@workos-inc/widgets/workos-widgets";
import { UsersManagement } from "@workos-inc/widgets/users-management";
import { getUsersManagementWidgetToken } from "../../actions/getWidgetToken";

export function UsersManagementWidget() {
  return (
    <WorkOsWidgets>
      <UsersManagement authToken={getUsersManagementWidgetToken} />
    </WorkOsWidgets>
  );
}
