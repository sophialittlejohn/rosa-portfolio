export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Input type for dynamic zone contentSections of Page */
  PageContentSectionsDynamicZoneInput: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type Global = {
  __typename?: 'Global';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  metadata?: Maybe<ComponentMetaMetadata>;
  metaTitleSuffix: Scalars['String'];
  favicon?: Maybe<UploadFile>;
  navbar?: Maybe<ComponentLayoutNavbar>;
  footer?: Maybe<ComponentLayoutFooter>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Global>>>;
};


export type GlobalLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GlobalInput = {
  metadata?: Maybe<ComponentMetaMetadatumInput>;
  metaTitleSuffix: Scalars['String'];
  favicon?: Maybe<Scalars['ID']>;
  navbar?: Maybe<ComponentLayoutNavbarInput>;
  footer?: Maybe<ComponentLayoutFooterInput>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGlobalInput = {
  metadata?: Maybe<EditComponentMetaMetadatumInput>;
  metaTitleSuffix?: Maybe<Scalars['String']>;
  favicon?: Maybe<Scalars['ID']>;
  navbar?: Maybe<EditComponentLayoutNavbarInput>;
  footer?: Maybe<EditComponentLayoutFooterInput>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateGlobalInput = {
  data?: Maybe<EditGlobalInput>;
};

export type UpdateGlobalPayload = {
  __typename?: 'updateGlobalPayload';
  global?: Maybe<Global>;
};

export type DeleteGlobalPayload = {
  __typename?: 'deleteGlobalPayload';
  global?: Maybe<Global>;
};

export enum Enum_Leadformsubmissions_Status {
  Seen = 'seen',
  Contacted = 'contacted',
  Ignored = 'ignored'
}

export type LeadFormSubmissions = {
  __typename?: 'LeadFormSubmissions';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Leadformsubmissions_Status>;
  location?: Maybe<Scalars['String']>;
};

export type LeadFormSubmissionsConnection = {
  __typename?: 'LeadFormSubmissionsConnection';
  values?: Maybe<Array<Maybe<LeadFormSubmissions>>>;
  groupBy?: Maybe<LeadFormSubmissionsGroupBy>;
  aggregate?: Maybe<LeadFormSubmissionsAggregator>;
};

export type LeadFormSubmissionsAggregator = {
  __typename?: 'LeadFormSubmissionsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LeadFormSubmissionsGroupBy = {
  __typename?: 'LeadFormSubmissionsGroupBy';
  id?: Maybe<Array<Maybe<LeadFormSubmissionsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<LeadFormSubmissionsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<LeadFormSubmissionsConnectionUpdated_At>>>;
  email?: Maybe<Array<Maybe<LeadFormSubmissionsConnectionEmail>>>;
  status?: Maybe<Array<Maybe<LeadFormSubmissionsConnectionStatus>>>;
  location?: Maybe<Array<Maybe<LeadFormSubmissionsConnectionLocation>>>;
};

export type LeadFormSubmissionsConnectionId = {
  __typename?: 'LeadFormSubmissionsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LeadFormSubmissionsConnection>;
};

export type LeadFormSubmissionsConnectionCreated_At = {
  __typename?: 'LeadFormSubmissionsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LeadFormSubmissionsConnection>;
};

export type LeadFormSubmissionsConnectionUpdated_At = {
  __typename?: 'LeadFormSubmissionsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LeadFormSubmissionsConnection>;
};

export type LeadFormSubmissionsConnectionEmail = {
  __typename?: 'LeadFormSubmissionsConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LeadFormSubmissionsConnection>;
};

export type LeadFormSubmissionsConnectionStatus = {
  __typename?: 'LeadFormSubmissionsConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LeadFormSubmissionsConnection>;
};

export type LeadFormSubmissionsConnectionLocation = {
  __typename?: 'LeadFormSubmissionsConnectionLocation';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LeadFormSubmissionsConnection>;
};

export type LeadFormSubmissionInput = {
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Leadformsubmissions_Status>;
  location?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLeadFormSubmissionInput = {
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Leadformsubmissions_Status>;
  location?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateLeadFormSubmissionInput = {
  data?: Maybe<LeadFormSubmissionInput>;
};

export type CreateLeadFormSubmissionPayload = {
  __typename?: 'createLeadFormSubmissionPayload';
  leadFormSubmission?: Maybe<LeadFormSubmissions>;
};

export type UpdateLeadFormSubmissionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLeadFormSubmissionInput>;
};

export type UpdateLeadFormSubmissionPayload = {
  __typename?: 'updateLeadFormSubmissionPayload';
  leadFormSubmission?: Maybe<LeadFormSubmissions>;
};

export type DeleteLeadFormSubmissionInput = {
  where?: Maybe<InputId>;
};

export type DeleteLeadFormSubmissionPayload = {
  __typename?: 'deleteLeadFormSubmissionPayload';
  leadFormSubmission?: Maybe<LeadFormSubmissions>;
};

export enum Enum_Page_Status {
  Published = 'published',
  Draft = 'draft'
}

export enum Enum_Page_Pagecolor {
  Light = 'light',
  Dark = 'dark'
}

export enum Enum_Page_Layout {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}

export type PageContentSectionsDynamicZone = ComponentSectionsHero | ComponentSectionsBottomActions | ComponentSectionsFeatureColumnsGroup | ComponentSectionsFeatureRowsGroup | ComponentSectionsTestimonialsGroup | ComponentSectionsLargeVideo | ComponentSectionsRichText | ComponentSectionsPricing | ComponentSectionsLeadForm | ComponentSectionsImage;


export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  shortName?: Maybe<Scalars['String']>;
  metadata?: Maybe<ComponentMetaMetadata>;
  contentSections?: Maybe<Array<Maybe<PageContentSectionsDynamicZone>>>;
  status: Enum_Page_Status;
  slug?: Maybe<Scalars['String']>;
  pageColor?: Maybe<Enum_Page_Pagecolor>;
  layout?: Maybe<Enum_Page_Layout>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Page>>>;
};


export type PageLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PageConnection = {
  __typename?: 'PageConnection';
  values?: Maybe<Array<Maybe<Page>>>;
  groupBy?: Maybe<PageGroupBy>;
  aggregate?: Maybe<PageAggregator>;
};

export type PageAggregator = {
  __typename?: 'PageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageGroupBy = {
  __typename?: 'PageGroupBy';
  id?: Maybe<Array<Maybe<PageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PageConnectionUpdated_At>>>;
  shortName?: Maybe<Array<Maybe<PageConnectionShortName>>>;
  metadata?: Maybe<Array<Maybe<PageConnectionMetadata>>>;
  status?: Maybe<Array<Maybe<PageConnectionStatus>>>;
  slug?: Maybe<Array<Maybe<PageConnectionSlug>>>;
  pageColor?: Maybe<Array<Maybe<PageConnectionPageColor>>>;
  layout?: Maybe<Array<Maybe<PageConnectionLayout>>>;
  locale?: Maybe<Array<Maybe<PageConnectionLocale>>>;
};

export type PageConnectionId = {
  __typename?: 'PageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionCreated_At = {
  __typename?: 'PageConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionUpdated_At = {
  __typename?: 'PageConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionShortName = {
  __typename?: 'PageConnectionShortName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionMetadata = {
  __typename?: 'PageConnectionMetadata';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionStatus = {
  __typename?: 'PageConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionSlug = {
  __typename?: 'PageConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionPageColor = {
  __typename?: 'PageConnectionPageColor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionLayout = {
  __typename?: 'PageConnectionLayout';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionLocale = {
  __typename?: 'PageConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageInput = {
  shortName?: Maybe<Scalars['String']>;
  metadata: ComponentMetaMetadatumInput;
  contentSections?: Maybe<Array<Scalars['PageContentSectionsDynamicZoneInput']>>;
  status?: Maybe<Enum_Page_Status>;
  slug?: Maybe<Scalars['String']>;
  pageColor?: Maybe<Enum_Page_Pagecolor>;
  layout?: Maybe<Enum_Page_Layout>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPageInput = {
  shortName?: Maybe<Scalars['String']>;
  metadata?: Maybe<EditComponentMetaMetadatumInput>;
  contentSections?: Maybe<Array<Scalars['PageContentSectionsDynamicZoneInput']>>;
  status?: Maybe<Enum_Page_Status>;
  slug?: Maybe<Scalars['String']>;
  pageColor?: Maybe<Enum_Page_Pagecolor>;
  layout?: Maybe<Enum_Page_Layout>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePageInput = {
  data?: Maybe<PageInput>;
};

export type CreatePagePayload = {
  __typename?: 'createPagePayload';
  page?: Maybe<Page>;
};

export type UpdatePageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPageInput>;
};

export type UpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<Page>;
};

export type DeletePageInput = {
  where?: Maybe<InputId>;
};

export type DeletePagePayload = {
  __typename?: 'deletePagePayload';
  page?: Maybe<Page>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentElementsFeatureColumn = {
  __typename?: 'ComponentElementsFeatureColumn';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFile>;
};

export type ComponentElementsFeatureColumnInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['ID']>;
};

export type EditComponentElementsFeatureColumnInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['ID']>;
};

export type ComponentElementsFeatureRow = {
  __typename?: 'ComponentElementsFeatureRow';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  media?: Maybe<UploadFile>;
  link?: Maybe<ComponentLinksLink>;
};

export type ComponentElementsFeatureRowInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['ID']>;
  link?: Maybe<ComponentLinksLinkInput>;
};

export type EditComponentElementsFeatureRowInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['ID']>;
  link?: Maybe<EditComponentLinksLinkInput>;
};

export type ComponentElementsFeature = {
  __typename?: 'ComponentElementsFeature';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentElementsFeatureInput = {
  name?: Maybe<Scalars['String']>;
};

export type EditComponentElementsFeatureInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ComponentElementsFooterSection = {
  __typename?: 'ComponentElementsFooterSection';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<ComponentLinksLink>>>;
};

export type ComponentElementsFooterSectionInput = {
  title?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<ComponentLinksLinkInput>>>;
};

export type EditComponentElementsFooterSectionInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<EditComponentLinksLinkInput>>>;
};

export type ComponentElementsLogos = {
  __typename?: 'ComponentElementsLogos';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFile>;
};

export type ComponentElementsLogoInput = {
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
};

export type EditComponentElementsLogoInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
};

export enum Enum_Componentelementsnotificationbanner_Type {
  Alert = 'alert',
  Info = 'info',
  Warning = 'warning'
}

export type ComponentElementsNotificationBanner = {
  __typename?: 'ComponentElementsNotificationBanner';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  type: Enum_Componentelementsnotificationbanner_Type;
};

export type ComponentElementsNotificationBannerInput = {
  text?: Maybe<Scalars['String']>;
  type: Enum_Componentelementsnotificationbanner_Type;
};

export type EditComponentElementsNotificationBannerInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentelementsnotificationbanner_Type>;
};

export type ComponentElementsPlan = {
  __typename?: 'ComponentElementsPlan';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<ComponentElementsFeature>>>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  pricePeriod?: Maybe<Scalars['String']>;
};

export type ComponentElementsPlanInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<ComponentElementsFeatureInput>>>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  pricePeriod?: Maybe<Scalars['String']>;
};

export type EditComponentElementsPlanInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<EditComponentElementsFeatureInput>>>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  pricePeriod?: Maybe<Scalars['String']>;
};

export type ComponentElementsTestimonial = {
  __typename?: 'ComponentElementsTestimonial';
  id: Scalars['ID'];
  logo?: Maybe<UploadFile>;
  picture?: Maybe<UploadFile>;
  text?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorTitle?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type ComponentElementsTestimonialInput = {
  logo?: Maybe<Scalars['ID']>;
  picture?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorTitle?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type EditComponentElementsTestimonialInput = {
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['ID']>;
  picture?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorTitle?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type ComponentLayoutFooter = {
  __typename?: 'ComponentLayoutFooter';
  id: Scalars['ID'];
  logo?: Maybe<UploadFile>;
  columns?: Maybe<Array<Maybe<ComponentElementsFooterSection>>>;
  smallText?: Maybe<Scalars['String']>;
};

export type ComponentLayoutFooterInput = {
  logo?: Maybe<Scalars['ID']>;
  columns?: Maybe<Array<Maybe<ComponentElementsFooterSectionInput>>>;
  smallText?: Maybe<Scalars['String']>;
};

export type EditComponentLayoutFooterInput = {
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['ID']>;
  columns?: Maybe<Array<Maybe<EditComponentElementsFooterSectionInput>>>;
  smallText?: Maybe<Scalars['String']>;
};

export type ComponentLayoutNavbar = {
  __typename?: 'ComponentLayoutNavbar';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentLinksLink>>>;
};

export type ComponentLayoutNavbarInput = {
  links?: Maybe<Array<Maybe<ComponentLinksLinkInput>>>;
};

export type EditComponentLayoutNavbarInput = {
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<EditComponentLinksLinkInput>>>;
};

export enum Enum_Componentlinksbuttonlink_Type {
  Primary = 'primary',
  Secondary = 'secondary'
}

export type ComponentLinksButtonLink = {
  __typename?: 'ComponentLinksButtonLink';
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbuttonlink_Type>;
};

export type ComponentLinksButtonLinkInput = {
  url?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbuttonlink_Type>;
};

export type EditComponentLinksButtonLinkInput = {
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbuttonlink_Type>;
};

export enum Enum_Componentlinksbutton_Type {
  Primary = 'primary',
  Secondary = 'secondary'
}

export type ComponentLinksButton = {
  __typename?: 'ComponentLinksButton';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbutton_Type>;
};

export type ComponentLinksButtonInput = {
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbutton_Type>;
};

export type EditComponentLinksButtonInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbutton_Type>;
};

export type ComponentLinksLink = {
  __typename?: 'ComponentLinksLink';
  id: Scalars['ID'];
  url: Scalars['String'];
  newTab?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
};

export type ComponentLinksLinkInput = {
  url: Scalars['String'];
  newTab?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
};

export type EditComponentLinksLinkInput = {
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
};

export enum Enum_Componentmetametadata_Twittercardtype {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image',
  App = 'app',
  Player = 'player'
}

export type ComponentMetaMetadata = {
  __typename?: 'ComponentMetaMetadata';
  id: Scalars['ID'];
  metaTitle: Scalars['String'];
  metaDescription: Scalars['String'];
  shareImage?: Maybe<UploadFile>;
  twitterCardType?: Maybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: Maybe<Scalars['String']>;
};

export type ComponentMetaMetadatumInput = {
  metaTitle: Scalars['String'];
  metaDescription: Scalars['String'];
  shareImage?: Maybe<Scalars['ID']>;
  twitterCardType?: Maybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: Maybe<Scalars['String']>;
};

export type EditComponentMetaMetadatumInput = {
  id?: Maybe<Scalars['ID']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  shareImage?: Maybe<Scalars['ID']>;
  twitterCardType?: Maybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: Maybe<Scalars['String']>;
};

export type ComponentSectionsBottomActions = {
  __typename?: 'ComponentSectionsBottomActions';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonLink>>>;
};

export type ComponentSectionsBottomActionInput = {
  title?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonLinkInput>>>;
};

export type EditComponentSectionsBottomActionInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<EditComponentLinksButtonLinkInput>>>;
};

export type ComponentSectionsFeatureColumnsGroup = {
  __typename?: 'ComponentSectionsFeatureColumnsGroup';
  id: Scalars['ID'];
  features?: Maybe<Array<Maybe<ComponentElementsFeatureColumn>>>;
};

export type ComponentSectionsFeatureColumnsGroupInput = {
  features?: Maybe<Array<Maybe<ComponentElementsFeatureColumnInput>>>;
};

export type EditComponentSectionsFeatureColumnsGroupInput = {
  id?: Maybe<Scalars['ID']>;
  features?: Maybe<Array<Maybe<EditComponentElementsFeatureColumnInput>>>;
};

export type ComponentSectionsFeatureRowsGroup = {
  __typename?: 'ComponentSectionsFeatureRowsGroup';
  id: Scalars['ID'];
  features?: Maybe<Array<Maybe<ComponentElementsFeatureRow>>>;
};

export type ComponentSectionsFeatureRowsGroupInput = {
  features?: Maybe<Array<Maybe<ComponentElementsFeatureRowInput>>>;
};

export type EditComponentSectionsFeatureRowsGroupInput = {
  id?: Maybe<Scalars['ID']>;
  features?: Maybe<Array<Maybe<EditComponentElementsFeatureRowInput>>>;
};

export type ComponentSectionsHero = {
  __typename?: 'ComponentSectionsHero';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFile>;
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonLink>>>;
};

export type ComponentSectionsHeroInput = {
  title?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['ID']>;
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonLinkInput>>>;
};

export type EditComponentSectionsHeroInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['ID']>;
  buttons?: Maybe<Array<Maybe<EditComponentLinksButtonLinkInput>>>;
};

export type ComponentSectionsImage = {
  __typename?: 'ComponentSectionsImage';
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  alt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentSectionsImageInput = {
  image?: Maybe<Scalars['ID']>;
  alt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentSectionsImageInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  alt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentSectionsLargeVideo = {
  __typename?: 'ComponentSectionsLargeVideo';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<UploadFile>;
  poster?: Maybe<UploadFile>;
};

export type ComponentSectionsLargeVideoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['ID']>;
  poster?: Maybe<Scalars['ID']>;
};

export type EditComponentSectionsLargeVideoInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['ID']>;
  poster?: Maybe<Scalars['ID']>;
};

export type ComponentSectionsLeadForm = {
  __typename?: 'ComponentSectionsLeadForm';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  emailPlaceholder?: Maybe<Scalars['String']>;
  submitButton?: Maybe<ComponentLinksButton>;
  location?: Maybe<Scalars['String']>;
};

export type ComponentSectionsLeadFormInput = {
  title?: Maybe<Scalars['String']>;
  emailPlaceholder?: Maybe<Scalars['String']>;
  submitButton?: Maybe<ComponentLinksButtonInput>;
  location?: Maybe<Scalars['String']>;
};

export type EditComponentSectionsLeadFormInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  emailPlaceholder?: Maybe<Scalars['String']>;
  submitButton?: Maybe<EditComponentLinksButtonInput>;
  location?: Maybe<Scalars['String']>;
};

export type ComponentSectionsPricing = {
  __typename?: 'ComponentSectionsPricing';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  plans?: Maybe<Array<Maybe<ComponentElementsPlan>>>;
};

export type ComponentSectionsPricingInput = {
  title?: Maybe<Scalars['String']>;
  plans?: Maybe<Array<Maybe<ComponentElementsPlanInput>>>;
};

export type EditComponentSectionsPricingInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  plans?: Maybe<Array<Maybe<EditComponentElementsPlanInput>>>;
};

export enum Enum_Componentsectionsrichtext_Alignment {
  Left = 'left',
  Center = 'center'
}

export type ComponentSectionsRichText = {
  __typename?: 'ComponentSectionsRichText';
  id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  alignment?: Maybe<Enum_Componentsectionsrichtext_Alignment>;
};

export type ComponentSectionsRichTextInput = {
  content?: Maybe<Scalars['String']>;
  alignment?: Maybe<Enum_Componentsectionsrichtext_Alignment>;
};

export type EditComponentSectionsRichTextInput = {
  id?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  alignment?: Maybe<Enum_Componentsectionsrichtext_Alignment>;
};

export type ComponentSectionsTestimonialsGroup = {
  __typename?: 'ComponentSectionsTestimonialsGroup';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<ComponentLinksLink>;
  logos?: Maybe<Array<Maybe<ComponentElementsLogos>>>;
  testimonials?: Maybe<Array<Maybe<ComponentElementsTestimonial>>>;
};

export type ComponentSectionsTestimonialsGroupInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<ComponentLinksLinkInput>;
  logos?: Maybe<Array<Maybe<ComponentElementsLogoInput>>>;
  testimonials?: Maybe<Array<Maybe<ComponentElementsTestimonialInput>>>;
};

export type EditComponentSectionsTestimonialsGroupInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<EditComponentLinksLinkInput>;
  logos?: Maybe<Array<Maybe<EditComponentElementsLogoInput>>>;
  testimonials?: Maybe<Array<Maybe<EditComponentElementsTestimonialInput>>>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Global | UpdateGlobalPayload | DeleteGlobalPayload | LeadFormSubmissions | LeadFormSubmissionsConnection | LeadFormSubmissionsAggregator | LeadFormSubmissionsGroupBy | LeadFormSubmissionsConnectionId | LeadFormSubmissionsConnectionCreated_At | LeadFormSubmissionsConnectionUpdated_At | LeadFormSubmissionsConnectionEmail | LeadFormSubmissionsConnectionStatus | LeadFormSubmissionsConnectionLocation | CreateLeadFormSubmissionPayload | UpdateLeadFormSubmissionPayload | DeleteLeadFormSubmissionPayload | Page | PageConnection | PageAggregator | PageGroupBy | PageConnectionId | PageConnectionCreated_At | PageConnectionUpdated_At | PageConnectionShortName | PageConnectionMetadata | PageConnectionStatus | PageConnectionSlug | PageConnectionPageColor | PageConnectionLayout | PageConnectionLocale | CreatePagePayload | UpdatePagePayload | DeletePagePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | I18NLocale | ComponentElementsFeatureColumn | ComponentElementsFeatureRow | ComponentElementsFeature | ComponentElementsFooterSection | ComponentElementsLogos | ComponentElementsNotificationBanner | ComponentElementsPlan | ComponentElementsTestimonial | ComponentLayoutFooter | ComponentLayoutNavbar | ComponentLinksButtonLink | ComponentLinksButton | ComponentLinksLink | ComponentMetaMetadata | ComponentSectionsBottomActions | ComponentSectionsFeatureColumnsGroup | ComponentSectionsFeatureRowsGroup | ComponentSectionsHero | ComponentSectionsImage | ComponentSectionsLargeVideo | ComponentSectionsLeadForm | ComponentSectionsPricing | ComponentSectionsRichText | ComponentSectionsTestimonialsGroup;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  global?: Maybe<Global>;
  leadFormSubmission?: Maybe<LeadFormSubmissions>;
  leadFormSubmissions?: Maybe<Array<Maybe<LeadFormSubmissions>>>;
  leadFormSubmissionsConnection?: Maybe<LeadFormSubmissionsConnection>;
  page?: Maybe<Page>;
  pages?: Maybe<Array<Maybe<Page>>>;
  pagesConnection?: Maybe<PageConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryGlobalArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryLeadFormSubmissionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryLeadFormSubmissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryLeadFormSubmissionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateGlobal?: Maybe<UpdateGlobalPayload>;
  deleteGlobal?: Maybe<DeleteGlobalPayload>;
  createLeadFormSubmission?: Maybe<CreateLeadFormSubmissionPayload>;
  updateLeadFormSubmission?: Maybe<UpdateLeadFormSubmissionPayload>;
  deleteLeadFormSubmission?: Maybe<DeleteLeadFormSubmissionPayload>;
  createPage?: Maybe<CreatePagePayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  deletePage?: Maybe<DeletePagePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  createGlobalLocalization: Global;
  createPageLocalization: Page;
};


export type MutationUpdateGlobalArgs = {
  input?: Maybe<UpdateGlobalInput>;
  locale?: Maybe<Scalars['String']>;
};


export type MutationDeleteGlobalArgs = {
  locale?: Maybe<Scalars['String']>;
};


export type MutationCreateLeadFormSubmissionArgs = {
  input?: Maybe<CreateLeadFormSubmissionInput>;
};


export type MutationUpdateLeadFormSubmissionArgs = {
  input?: Maybe<UpdateLeadFormSubmissionInput>;
};


export type MutationDeleteLeadFormSubmissionArgs = {
  input?: Maybe<DeleteLeadFormSubmissionInput>;
};


export type MutationCreatePageArgs = {
  input?: Maybe<CreatePageInput>;
};


export type MutationUpdatePageArgs = {
  input?: Maybe<UpdatePageInput>;
};


export type MutationDeletePageArgs = {
  input?: Maybe<DeletePageInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationCreateGlobalLocalizationArgs = {
  input: UpdateGlobalInput;
};


export type MutationCreatePageLocalizationArgs = {
  input: UpdatePageInput;
};






