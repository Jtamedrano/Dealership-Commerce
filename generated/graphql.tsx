import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Admin = {
  __typename?: 'Admin';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type AdminResponse = {
  __typename?: 'AdminResponse';
  errors?: Maybe<Array<FieldError>>;
  admin?: Maybe<Admin>;
};

export type Auto = {
  __typename?: 'Auto';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  year: Scalars['Int'];
  make: Scalars['String'];
  model: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuto: Auto;
  updateAuto: Auto;
  deleteAuto: Scalars['Boolean'];
  register: AdminResponse;
  login: AdminResponse;
};


export type MutationCreateAutoArgs = {
  autoDetail: NewAuto;
};


export type MutationUpdateAutoArgs = {
  autoDetail: EditAuto;
  id: Scalars['Int'];
};


export type MutationDeleteAutoArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};

export type NewAuto = {
  year: Scalars['Int'];
  make: Scalars['String'];
  model: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllAutos: Array<Auto>;
  getAutoById: Auto;
  me?: Maybe<Admin>;
};


export type QueryGetAutoByIdArgs = {
  id: Scalars['Int'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type EditAuto = {
  year?: Maybe<Scalars['Int']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
};

export type AdminMeQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminMeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'Admin', id: number, username: string }> };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AdminResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, admin?: Maybe<{ __typename?: 'Admin', id: number, createdAt: string, updatedAt: string, username: string }> } };

export type GetAllAutosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAutosQuery = { __typename?: 'Query', getAllAutos: Array<{ __typename?: 'Auto', id: number, createdAt: string, updatedAt: string, year: number, make: string, model: string }> };


export const AdminMeDocument = gql`
    query AdminMe {
  me {
    id
    username
  }
}
    `;

export function useAdminMeQuery(options: Omit<Urql.UseQueryArgs<AdminMeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AdminMeQuery>({ query: AdminMeDocument, ...options });
};
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(options: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    admin {
      id
      createdAt
      updatedAt
      username
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const GetAllAutosDocument = gql`
    query GetAllAutos {
  getAllAutos {
    id
    createdAt
    updatedAt
    year
    make
    model
  }
}
    `;

export function useGetAllAutosQuery(options: Omit<Urql.UseQueryArgs<GetAllAutosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllAutosQuery>({ query: GetAllAutosDocument, ...options });
};