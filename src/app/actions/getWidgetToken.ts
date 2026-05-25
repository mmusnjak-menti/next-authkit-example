"use server";

import { getWorkOS, withAuth } from "@workos-inc/authkit-nextjs";

export async function getUsersManagementWidgetToken(): Promise<string> {
  const { user, organizationId } = await withAuth({ ensureSignedIn: true });

  if (!organizationId) {
    throw new Error(
      "No organization selected — sign in to an organization to manage users.",
    );
  }

  return getWorkOS().widgets.getToken({
    organizationId,
    userId: user.id,
    scopes: ["widgets:users-table:manage"],
  });
}

export async function getDomainVerificationWidgetToken(): Promise<string> {
  const { user, organizationId } = await withAuth({ ensureSignedIn: true });

  if (!organizationId) {
    throw new Error(
      "No organization selected — sign in to an organization to verify domains.",
    );
  }

  return getWorkOS().widgets.getToken({
    organizationId,
    userId: user.id,
    scopes: ["widgets:domain-verification:manage"],
  });
}

export async function getSsoConnectionWidgetToken(): Promise<string> {
  const { user, organizationId } = await withAuth({ ensureSignedIn: true });

  if (!organizationId) {
    throw new Error(
      "No organization selected — sign in to an organization to manage SSO.",
    );
  }

  return getWorkOS().widgets.getToken({
    organizationId,
    userId: user.id,
    scopes: ["widgets:sso:manage"],
  });
}

export async function getDirectorySyncWidgetToken(): Promise<string> {
  const { user, organizationId } = await withAuth({ ensureSignedIn: true });

  if (!organizationId) {
    throw new Error(
      "No organization selected — sign in to an organization to manage directory sync.",
    );
  }

  return getWorkOS().widgets.getToken({
    organizationId,
    userId: user.id,
    scopes: [
      // @ts-expect-error - SDK 7.75.1's WidgetScope union is missing "widgets:dsync:manage"; the API accepts it per the docs.
      "widgets:dsync:manage",
    ],
  });
}
