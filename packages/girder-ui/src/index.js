import { default as LoginButton } from './auth/containers/login-button';
import { default as LoginOptions } from './auth/containers/login-options';
import { default as GirderLogin } from './auth/containers/girder-login';
import { default as OauthRedirect } from './auth/containers/oauth-redirect';
import { default as UserMenu } from './auth/containers/user-menu';
import { default as NerscLogin } from './auth/containers/nersc-login';
import { default as Users } from './admin/containers/users';
import { default as Groups } from './admin/containers/groups';
import { default as Members } from './admin/containers/members';
import { default as AddUser } from './admin/containers/add-user';
import { default as Profile } from './admin/components/profile';

export const auth = {
  LoginButton,
  LoginOptions,
  GirderLogin,
  OauthRedirect,
  UserMenu,
  NerscLogin
}

export const admin = {
    Users,
    Groups,
    Members,
    AddUser,
    Profile
}
