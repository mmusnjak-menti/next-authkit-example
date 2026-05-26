"use server";

import { getWorkOS, withAuth } from "@workos-inc/authkit-nextjs";

export async function getUsersManagementWidgetToken(): Promise<string> {
  const { user, organizationId } = await withAuth({ ensureSignedIn: true });

  if (!organizationId) {
    throw new Error(
      "No organization selected — sign in to an organization to manage users.",
    );
  }

  return getWorkOS().widgets.createToken({
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

  return getWorkOS().widgets.createToken({
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

  return getWorkOS().widgets.createToken({
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

  return getWorkOS().widgets.createToken({
    organizationId,
    userId: user.id,
    scopes: ["widgets:dsync:manage"],
  });
}
