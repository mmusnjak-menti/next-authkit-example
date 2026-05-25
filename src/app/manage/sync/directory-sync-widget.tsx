"use client";

import "@workos-inc/widgets/styles.css";

import { WorkOsWidgets } from "@workos-inc/widgets/workos-widgets";
import { DirectorySync } from "@workos-inc/widgets/directory-sync";
import { getDirectorySyncWidgetToken } from "../../actions/getWidgetToken";

export function DirectorySyncWidget() {
  return (
    <WorkOsWidgets>
      <DirectorySync authToken={getDirectorySyncWidgetToken} />
    </WorkOsWidgets>
  );
}
