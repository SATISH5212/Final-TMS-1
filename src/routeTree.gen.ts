/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersImport } from './routes/users'
import { Route as UserManagementImport } from './routes/user-management'
import { Route as UpdatepasswordImport } from './routes/updatepassword'
import { Route as UpdateProfileImport } from './routes/updateProfile'
import { Route as SignUpImport } from './routes/signUp'
import { Route as SignInImport } from './routes/signIn'
import { Route as ResetPasswordImport } from './routes/resetPassword'
import { Route as ProfileImport } from './routes/profile'
import { Route as GetspecifiuserImport } from './routes/getspecifiuser'
import { Route as GetStatsImport } from './routes/getStats'
import { Route as ForgotPasswordImport } from './routes/forgotPassword'
import { Route as DeleteProfileImport } from './routes/deleteProfile'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as CreateTicketImport } from './routes/createTicket'
import { Route as CommentImport } from './routes/comment'
import { Route as AddAttachmentImport } from './routes/addAttachment'
import { Route as AddAgentImport } from './routes/addAgent'
import { Route as UpdateticketTicketIdImport } from './routes/updateticket/$ticket-id'
import { Route as GetsingleticketTicketIdImport } from './routes/getsingleticket/$ticket-id'
import { Route as GetfilesTicketIdImport } from './routes/getfiles/$ticket-id'
import { Route as GetallcommentsTicketIdImport } from './routes/getallcomments/$ticket-id'
import { Route as FileuploadTicketIdImport } from './routes/fileupload/$ticket-id'
import { Route as AssignticketsTicketIdImport } from './routes/assigntickets/$ticket-id'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const UsersRoute = UsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const UserManagementRoute = UserManagementImport.update({
  id: '/user-management',
  path: '/user-management',
  getParentRoute: () => rootRoute,
} as any)

const UpdatepasswordRoute = UpdatepasswordImport.update({
  id: '/updatepassword',
  path: '/updatepassword',
  getParentRoute: () => rootRoute,
} as any)

const UpdateProfileRoute = UpdateProfileImport.update({
  id: '/updateProfile',
  path: '/updateProfile',
  getParentRoute: () => rootRoute,
} as any)

const SignUpRoute = SignUpImport.update({
  id: '/signUp',
  path: '/signUp',
  getParentRoute: () => rootRoute,
} as any)

const SignInRoute = SignInImport.update({
  id: '/signIn',
  path: '/signIn',
  getParentRoute: () => rootRoute,
} as any)

const ResetPasswordRoute = ResetPasswordImport.update({
  id: '/resetPassword',
  path: '/resetPassword',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const GetspecifiuserRoute = GetspecifiuserImport.update({
  id: '/getspecifiuser',
  path: '/getspecifiuser',
  getParentRoute: () => rootRoute,
} as any)

const GetStatsRoute = GetStatsImport.update({
  id: '/getStats',
  path: '/getStats',
  getParentRoute: () => rootRoute,
} as any)

const ForgotPasswordRoute = ForgotPasswordImport.update({
  id: '/forgotPassword',
  path: '/forgotPassword',
  getParentRoute: () => rootRoute,
} as any)

const DeleteProfileRoute = DeleteProfileImport.update({
  id: '/deleteProfile',
  path: '/deleteProfile',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const CreateTicketRoute = CreateTicketImport.update({
  id: '/createTicket',
  path: '/createTicket',
  getParentRoute: () => rootRoute,
} as any)

const CommentRoute = CommentImport.update({
  id: '/comment',
  path: '/comment',
  getParentRoute: () => rootRoute,
} as any)

const AddAttachmentRoute = AddAttachmentImport.update({
  id: '/addAttachment',
  path: '/addAttachment',
  getParentRoute: () => rootRoute,
} as any)

const AddAgentRoute = AddAgentImport.update({
  id: '/addAgent',
  path: '/addAgent',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const UpdateticketTicketIdRoute = UpdateticketTicketIdImport.update({
  id: '/updateticket/$ticket-id',
  path: '/updateticket/$ticket-id',
  getParentRoute: () => rootRoute,
} as any)

const GetsingleticketTicketIdRoute = GetsingleticketTicketIdImport.update({
  id: '/getsingleticket/$ticket-id',
  path: '/getsingleticket/$ticket-id',
  getParentRoute: () => rootRoute,
} as any)

const GetfilesTicketIdRoute = GetfilesTicketIdImport.update({
  id: '/getfiles/$ticket-id',
  path: '/getfiles/$ticket-id',
  getParentRoute: () => rootRoute,
} as any)

const GetallcommentsTicketIdRoute = GetallcommentsTicketIdImport.update({
  id: '/getallcomments/$ticket-id',
  path: '/getallcomments/$ticket-id',
  getParentRoute: () => rootRoute,
} as any)

const FileuploadTicketIdRoute = FileuploadTicketIdImport.update({
  id: '/fileupload/$ticket-id',
  path: '/fileupload/$ticket-id',
  getParentRoute: () => rootRoute,
} as any)

const AssignticketsTicketIdRoute = AssignticketsTicketIdImport.update({
  id: '/assigntickets/$ticket-id',
  path: '/assigntickets/$ticket-id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/addAgent': {
      id: '/addAgent'
      path: '/addAgent'
      fullPath: '/addAgent'
      preLoaderRoute: typeof AddAgentImport
      parentRoute: typeof rootRoute
    }
    '/addAttachment': {
      id: '/addAttachment'
      path: '/addAttachment'
      fullPath: '/addAttachment'
      preLoaderRoute: typeof AddAttachmentImport
      parentRoute: typeof rootRoute
    }
    '/comment': {
      id: '/comment'
      path: '/comment'
      fullPath: '/comment'
      preLoaderRoute: typeof CommentImport
      parentRoute: typeof rootRoute
    }
    '/createTicket': {
      id: '/createTicket'
      path: '/createTicket'
      fullPath: '/createTicket'
      preLoaderRoute: typeof CreateTicketImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/deleteProfile': {
      id: '/deleteProfile'
      path: '/deleteProfile'
      fullPath: '/deleteProfile'
      preLoaderRoute: typeof DeleteProfileImport
      parentRoute: typeof rootRoute
    }
    '/forgotPassword': {
      id: '/forgotPassword'
      path: '/forgotPassword'
      fullPath: '/forgotPassword'
      preLoaderRoute: typeof ForgotPasswordImport
      parentRoute: typeof rootRoute
    }
    '/getStats': {
      id: '/getStats'
      path: '/getStats'
      fullPath: '/getStats'
      preLoaderRoute: typeof GetStatsImport
      parentRoute: typeof rootRoute
    }
    '/getspecifiuser': {
      id: '/getspecifiuser'
      path: '/getspecifiuser'
      fullPath: '/getspecifiuser'
      preLoaderRoute: typeof GetspecifiuserImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/resetPassword': {
      id: '/resetPassword'
      path: '/resetPassword'
      fullPath: '/resetPassword'
      preLoaderRoute: typeof ResetPasswordImport
      parentRoute: typeof rootRoute
    }
    '/signIn': {
      id: '/signIn'
      path: '/signIn'
      fullPath: '/signIn'
      preLoaderRoute: typeof SignInImport
      parentRoute: typeof rootRoute
    }
    '/signUp': {
      id: '/signUp'
      path: '/signUp'
      fullPath: '/signUp'
      preLoaderRoute: typeof SignUpImport
      parentRoute: typeof rootRoute
    }
    '/updateProfile': {
      id: '/updateProfile'
      path: '/updateProfile'
      fullPath: '/updateProfile'
      preLoaderRoute: typeof UpdateProfileImport
      parentRoute: typeof rootRoute
    }
    '/updatepassword': {
      id: '/updatepassword'
      path: '/updatepassword'
      fullPath: '/updatepassword'
      preLoaderRoute: typeof UpdatepasswordImport
      parentRoute: typeof rootRoute
    }
    '/user-management': {
      id: '/user-management'
      path: '/user-management'
      fullPath: '/user-management'
      preLoaderRoute: typeof UserManagementImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
    }
    '/assigntickets/$ticket-id': {
      id: '/assigntickets/$ticket-id'
      path: '/assigntickets/$ticket-id'
      fullPath: '/assigntickets/$ticket-id'
      preLoaderRoute: typeof AssignticketsTicketIdImport
      parentRoute: typeof rootRoute
    }
    '/fileupload/$ticket-id': {
      id: '/fileupload/$ticket-id'
      path: '/fileupload/$ticket-id'
      fullPath: '/fileupload/$ticket-id'
      preLoaderRoute: typeof FileuploadTicketIdImport
      parentRoute: typeof rootRoute
    }
    '/getallcomments/$ticket-id': {
      id: '/getallcomments/$ticket-id'
      path: '/getallcomments/$ticket-id'
      fullPath: '/getallcomments/$ticket-id'
      preLoaderRoute: typeof GetallcommentsTicketIdImport
      parentRoute: typeof rootRoute
    }
    '/getfiles/$ticket-id': {
      id: '/getfiles/$ticket-id'
      path: '/getfiles/$ticket-id'
      fullPath: '/getfiles/$ticket-id'
      preLoaderRoute: typeof GetfilesTicketIdImport
      parentRoute: typeof rootRoute
    }
    '/getsingleticket/$ticket-id': {
      id: '/getsingleticket/$ticket-id'
      path: '/getsingleticket/$ticket-id'
      fullPath: '/getsingleticket/$ticket-id'
      preLoaderRoute: typeof GetsingleticketTicketIdImport
      parentRoute: typeof rootRoute
    }
    '/updateticket/$ticket-id': {
      id: '/updateticket/$ticket-id'
      path: '/updateticket/$ticket-id'
      fullPath: '/updateticket/$ticket-id'
      preLoaderRoute: typeof UpdateticketTicketIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/addAgent': typeof AddAgentRoute
  '/addAttachment': typeof AddAttachmentRoute
  '/comment': typeof CommentRoute
  '/createTicket': typeof CreateTicketRoute
  '/dashboard': typeof DashboardRoute
  '/deleteProfile': typeof DeleteProfileRoute
  '/forgotPassword': typeof ForgotPasswordRoute
  '/getStats': typeof GetStatsRoute
  '/getspecifiuser': typeof GetspecifiuserRoute
  '/profile': typeof ProfileRoute
  '/resetPassword': typeof ResetPasswordRoute
  '/signIn': typeof SignInRoute
  '/signUp': typeof SignUpRoute
  '/updateProfile': typeof UpdateProfileRoute
  '/updatepassword': typeof UpdatepasswordRoute
  '/user-management': typeof UserManagementRoute
  '/users': typeof UsersRoute
  '/assigntickets/$ticket-id': typeof AssignticketsTicketIdRoute
  '/fileupload/$ticket-id': typeof FileuploadTicketIdRoute
  '/getallcomments/$ticket-id': typeof GetallcommentsTicketIdRoute
  '/getfiles/$ticket-id': typeof GetfilesTicketIdRoute
  '/getsingleticket/$ticket-id': typeof GetsingleticketTicketIdRoute
  '/updateticket/$ticket-id': typeof UpdateticketTicketIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/addAgent': typeof AddAgentRoute
  '/addAttachment': typeof AddAttachmentRoute
  '/comment': typeof CommentRoute
  '/createTicket': typeof CreateTicketRoute
  '/dashboard': typeof DashboardRoute
  '/deleteProfile': typeof DeleteProfileRoute
  '/forgotPassword': typeof ForgotPasswordRoute
  '/getStats': typeof GetStatsRoute
  '/getspecifiuser': typeof GetspecifiuserRoute
  '/profile': typeof ProfileRoute
  '/resetPassword': typeof ResetPasswordRoute
  '/signIn': typeof SignInRoute
  '/signUp': typeof SignUpRoute
  '/updateProfile': typeof UpdateProfileRoute
  '/updatepassword': typeof UpdatepasswordRoute
  '/user-management': typeof UserManagementRoute
  '/users': typeof UsersRoute
  '/assigntickets/$ticket-id': typeof AssignticketsTicketIdRoute
  '/fileupload/$ticket-id': typeof FileuploadTicketIdRoute
  '/getallcomments/$ticket-id': typeof GetallcommentsTicketIdRoute
  '/getfiles/$ticket-id': typeof GetfilesTicketIdRoute
  '/getsingleticket/$ticket-id': typeof GetsingleticketTicketIdRoute
  '/updateticket/$ticket-id': typeof UpdateticketTicketIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/addAgent': typeof AddAgentRoute
  '/addAttachment': typeof AddAttachmentRoute
  '/comment': typeof CommentRoute
  '/createTicket': typeof CreateTicketRoute
  '/dashboard': typeof DashboardRoute
  '/deleteProfile': typeof DeleteProfileRoute
  '/forgotPassword': typeof ForgotPasswordRoute
  '/getStats': typeof GetStatsRoute
  '/getspecifiuser': typeof GetspecifiuserRoute
  '/profile': typeof ProfileRoute
  '/resetPassword': typeof ResetPasswordRoute
  '/signIn': typeof SignInRoute
  '/signUp': typeof SignUpRoute
  '/updateProfile': typeof UpdateProfileRoute
  '/updatepassword': typeof UpdatepasswordRoute
  '/user-management': typeof UserManagementRoute
  '/users': typeof UsersRoute
  '/assigntickets/$ticket-id': typeof AssignticketsTicketIdRoute
  '/fileupload/$ticket-id': typeof FileuploadTicketIdRoute
  '/getallcomments/$ticket-id': typeof GetallcommentsTicketIdRoute
  '/getfiles/$ticket-id': typeof GetfilesTicketIdRoute
  '/getsingleticket/$ticket-id': typeof GetsingleticketTicketIdRoute
  '/updateticket/$ticket-id': typeof UpdateticketTicketIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/addAgent'
    | '/addAttachment'
    | '/comment'
    | '/createTicket'
    | '/dashboard'
    | '/deleteProfile'
    | '/forgotPassword'
    | '/getStats'
    | '/getspecifiuser'
    | '/profile'
    | '/resetPassword'
    | '/signIn'
    | '/signUp'
    | '/updateProfile'
    | '/updatepassword'
    | '/user-management'
    | '/users'
    | '/assigntickets/$ticket-id'
    | '/fileupload/$ticket-id'
    | '/getallcomments/$ticket-id'
    | '/getfiles/$ticket-id'
    | '/getsingleticket/$ticket-id'
    | '/updateticket/$ticket-id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/addAgent'
    | '/addAttachment'
    | '/comment'
    | '/createTicket'
    | '/dashboard'
    | '/deleteProfile'
    | '/forgotPassword'
    | '/getStats'
    | '/getspecifiuser'
    | '/profile'
    | '/resetPassword'
    | '/signIn'
    | '/signUp'
    | '/updateProfile'
    | '/updatepassword'
    | '/user-management'
    | '/users'
    | '/assigntickets/$ticket-id'
    | '/fileupload/$ticket-id'
    | '/getallcomments/$ticket-id'
    | '/getfiles/$ticket-id'
    | '/getsingleticket/$ticket-id'
    | '/updateticket/$ticket-id'
  id:
    | '__root__'
    | '/'
    | '/addAgent'
    | '/addAttachment'
    | '/comment'
    | '/createTicket'
    | '/dashboard'
    | '/deleteProfile'
    | '/forgotPassword'
    | '/getStats'
    | '/getspecifiuser'
    | '/profile'
    | '/resetPassword'
    | '/signIn'
    | '/signUp'
    | '/updateProfile'
    | '/updatepassword'
    | '/user-management'
    | '/users'
    | '/assigntickets/$ticket-id'
    | '/fileupload/$ticket-id'
    | '/getallcomments/$ticket-id'
    | '/getfiles/$ticket-id'
    | '/getsingleticket/$ticket-id'
    | '/updateticket/$ticket-id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AddAgentRoute: typeof AddAgentRoute
  AddAttachmentRoute: typeof AddAttachmentRoute
  CommentRoute: typeof CommentRoute
  CreateTicketRoute: typeof CreateTicketRoute
  DashboardRoute: typeof DashboardRoute
  DeleteProfileRoute: typeof DeleteProfileRoute
  ForgotPasswordRoute: typeof ForgotPasswordRoute
  GetStatsRoute: typeof GetStatsRoute
  GetspecifiuserRoute: typeof GetspecifiuserRoute
  ProfileRoute: typeof ProfileRoute
  ResetPasswordRoute: typeof ResetPasswordRoute
  SignInRoute: typeof SignInRoute
  SignUpRoute: typeof SignUpRoute
  UpdateProfileRoute: typeof UpdateProfileRoute
  UpdatepasswordRoute: typeof UpdatepasswordRoute
  UserManagementRoute: typeof UserManagementRoute
  UsersRoute: typeof UsersRoute
  AssignticketsTicketIdRoute: typeof AssignticketsTicketIdRoute
  FileuploadTicketIdRoute: typeof FileuploadTicketIdRoute
  GetallcommentsTicketIdRoute: typeof GetallcommentsTicketIdRoute
  GetfilesTicketIdRoute: typeof GetfilesTicketIdRoute
  GetsingleticketTicketIdRoute: typeof GetsingleticketTicketIdRoute
  UpdateticketTicketIdRoute: typeof UpdateticketTicketIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AddAgentRoute: AddAgentRoute,
  AddAttachmentRoute: AddAttachmentRoute,
  CommentRoute: CommentRoute,
  CreateTicketRoute: CreateTicketRoute,
  DashboardRoute: DashboardRoute,
  DeleteProfileRoute: DeleteProfileRoute,
  ForgotPasswordRoute: ForgotPasswordRoute,
  GetStatsRoute: GetStatsRoute,
  GetspecifiuserRoute: GetspecifiuserRoute,
  ProfileRoute: ProfileRoute,
  ResetPasswordRoute: ResetPasswordRoute,
  SignInRoute: SignInRoute,
  SignUpRoute: SignUpRoute,
  UpdateProfileRoute: UpdateProfileRoute,
  UpdatepasswordRoute: UpdatepasswordRoute,
  UserManagementRoute: UserManagementRoute,
  UsersRoute: UsersRoute,
  AssignticketsTicketIdRoute: AssignticketsTicketIdRoute,
  FileuploadTicketIdRoute: FileuploadTicketIdRoute,
  GetallcommentsTicketIdRoute: GetallcommentsTicketIdRoute,
  GetfilesTicketIdRoute: GetfilesTicketIdRoute,
  GetsingleticketTicketIdRoute: GetsingleticketTicketIdRoute,
  UpdateticketTicketIdRoute: UpdateticketTicketIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/addAgent",
        "/addAttachment",
        "/comment",
        "/createTicket",
        "/dashboard",
        "/deleteProfile",
        "/forgotPassword",
        "/getStats",
        "/getspecifiuser",
        "/profile",
        "/resetPassword",
        "/signIn",
        "/signUp",
        "/updateProfile",
        "/updatepassword",
        "/user-management",
        "/users",
        "/assigntickets/$ticket-id",
        "/fileupload/$ticket-id",
        "/getallcomments/$ticket-id",
        "/getfiles/$ticket-id",
        "/getsingleticket/$ticket-id",
        "/updateticket/$ticket-id"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/addAgent": {
      "filePath": "addAgent.tsx"
    },
    "/addAttachment": {
      "filePath": "addAttachment.tsx"
    },
    "/comment": {
      "filePath": "comment.tsx"
    },
    "/createTicket": {
      "filePath": "createTicket.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/deleteProfile": {
      "filePath": "deleteProfile.tsx"
    },
    "/forgotPassword": {
      "filePath": "forgotPassword.tsx"
    },
    "/getStats": {
      "filePath": "getStats.tsx"
    },
    "/getspecifiuser": {
      "filePath": "getspecifiuser.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/resetPassword": {
      "filePath": "resetPassword.tsx"
    },
    "/signIn": {
      "filePath": "signIn.tsx"
    },
    "/signUp": {
      "filePath": "signUp.tsx"
    },
    "/updateProfile": {
      "filePath": "updateProfile.tsx"
    },
    "/updatepassword": {
      "filePath": "updatepassword.tsx"
    },
    "/user-management": {
      "filePath": "user-management.tsx"
    },
    "/users": {
      "filePath": "users.tsx"
    },
    "/assigntickets/$ticket-id": {
      "filePath": "assigntickets/$ticket-id.tsx"
    },
    "/fileupload/$ticket-id": {
      "filePath": "fileupload/$ticket-id.tsx"
    },
    "/getallcomments/$ticket-id": {
      "filePath": "getallcomments/$ticket-id.tsx"
    },
    "/getfiles/$ticket-id": {
      "filePath": "getfiles/$ticket-id.tsx"
    },
    "/getsingleticket/$ticket-id": {
      "filePath": "getsingleticket/$ticket-id.tsx"
    },
    "/updateticket/$ticket-id": {
      "filePath": "updateticket/$ticket-id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */