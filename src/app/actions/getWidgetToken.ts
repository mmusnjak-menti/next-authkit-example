"use server";

import { getWorkOS, withAuth } from "@workos-inc/authkit-nextjs";

export async function getUsersManagementWidgetToken(): Promise<string> {
  const { user, organizationId } = await withAuth({ ensureSignedIn: true });

  if (!organizationId) {
    throw new Error(
      "No organization selected — sign in to an organization to manage users.",
    );
  }

  const { token } = await getWorkOS().widgets.createToken({
    organizationId,
    userId: user.id,
    scopes: ["widgets:users-table:manage"],
  });
  return token;
}

export async function getDomainVerificationWidgetToken(): Promise<string> {
  const { user, organizationId } = await withAuth({ ensureSignedIn: true });

  if (!organizationId) {
    throw new Error(
      "No organization selected — sign in to an organization to verify domains.",
    );
  }

  const { token } = await getWorkOS().widgets.createToken({
    organizationId,
    userId: user.id,
    scopes: ["widgets:domain-verification:manage"],
  });
  return token;
}

export async function getSsoConnectionWidgetToken(): Promise<string> {
  const { user, organizationId } = await withAuth({ ensureSignedIn: true });

  if (!organizationId) {
    throw new Error(
      "No organization selected — sign in to an organization to manage SSO.",
    );
  }

  const { token } = await getWorkOS().widgets.createToken({
    organizationId,
    userId: user.id,
    scopes: ["widgets:sso:manage"],
  });
  return token;
}

export async function getDirectorySyncWidgetToken(): Promise<string> {
  const { user, organizationId } = await withAuth({ ensureSignedIn: true });

  if (!organizationId) {
    throw new Error(
      "No organization selected — sign in to an organization to manage directory sync.",
    );
  }

  const { token } = await getWorkOS().widgets.createToken({
    organizationId,
    userId: user.id,
    scopes: ["widgets:dsync:manage"],
  });
  return token;
}
