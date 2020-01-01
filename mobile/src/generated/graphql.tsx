import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
}

export interface AuthPayload {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
}


export interface File {
   __typename?: 'File',
  id: Scalars['ID'],
  path: Scalars['String'],
  size: Scalars['Int'],
  mimetype: Scalars['String'],
  description: Maybe<Scalars['String']>,
}

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Lesbian = 'LESBIAN',
  Guy = 'GUY',
  Bisexual = 'BISEXUAL',
  Transgender = 'TRANSGENDER'
}

export interface Mutation {
   __typename?: 'Mutation',
  signup: AuthPayload,
  login: AuthPayload,
  update: User,
}


export interface MutationSignupArgs {
  name: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  password: Scalars['String']
}


export interface MutationLoginArgs {
  phone: Scalars['String'],
  password: Scalars['String']
}


export interface MutationUpdateArgs {
  birthdate: Maybe<Scalars['DateTime']>,
  name: Maybe<Scalars['String']>,
  status: Maybe<Status>,
  looking: Maybe<Gender>,
  gender: Maybe<Gender>,
  visible: Maybe<Scalars['Boolean']>,
  country: Maybe<Scalars['String']>,
  city: Maybe<Scalars['String']>,
  images: Maybe<Array<Scalars['Upload']>>
}

export interface Query {
   __typename?: 'Query',
  me: User,
  feed: Array<User>,
}

export enum Status {
  FriendsWithBenefits = 'FRIENDS_WITH_BENEFITS',
  Dtf = 'DTF',
  OpenRelationship = 'OPEN_RELATIONSHIP',
  Complicated = 'COMPLICATED',
  Chat = 'CHAT'
}


export interface User {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  phone: Scalars['String'],
  country: Maybe<Scalars['String']>,
  city: Maybe<Scalars['String']>,
  gender: Maybe<Gender>,
  images: Array<File>,
  looking: Maybe<Gender>,
  status: Maybe<Status>,
  birthdate: Maybe<Scalars['DateTime']>,
  visible: Scalars['Boolean'],
}

export type LoginMutationVariables = {
  phone: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);

export type SignupMutationVariables = {
  name: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  password: Scalars['String']
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);

export type FeedQueryVariables = {};


export type FeedQuery = (
  { __typename?: 'Query' }
  & { feed: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'status' | 'birthdate'>
    & { images: Array<(
      { __typename?: 'File' }
      & Pick<File, 'path'>
    )> }
  )> }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'phone' | 'birthdate' | 'status' | 'gender' | 'city' | 'country' | 'looking' | 'visible'>
    & { images: Array<(
      { __typename?: 'File' }
      & Pick<File, 'path'>
    )> }
  ) }
);


export const LoginDocument = gql`
    mutation login($phone: String!, $password: String!) {
  login(phone: $phone, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LoginMutation, LoginMutationVariables> & TChildProps;
export function withLogin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($name: String, $phone: String!, $password: String!) {
  signup(name: $name, phone: $phone, password: $password) {
    token
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;
export type SignupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignupMutation, SignupMutationVariables>, 'mutation'>;

    export const SignupComponent = (props: SignupComponentProps) => (
      <ApolloReactComponents.Mutation<SignupMutation, SignupMutationVariables> mutation={SignupDocument} {...props} />
    );
    
export type SignupProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SignupMutation, SignupMutationVariables> & TChildProps;
export function withSignup<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignupMutation,
  SignupMutationVariables,
  SignupProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SignupMutation, SignupMutationVariables, SignupProps<TChildProps>>(SignupDocument, {
      alias: 'signup',
      ...operationOptions
    });
};

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const FeedDocument = gql`
    query feed {
  feed {
    id
    name
    status
    birthdate
    images {
      path
    }
  }
}
    `;
export type FeedComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeedQuery, FeedQueryVariables>, 'query'>;

    export const FeedComponent = (props: FeedComponentProps) => (
      <ApolloReactComponents.Query<FeedQuery, FeedQueryVariables> query={FeedDocument} {...props} />
    );
    
export type FeedProps<TChildProps = {}> = ApolloReactHoc.DataProps<FeedQuery, FeedQueryVariables> & TChildProps;
export function withFeed<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FeedQuery,
  FeedQueryVariables,
  FeedProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, FeedQuery, FeedQueryVariables, FeedProps<TChildProps>>(FeedDocument, {
      alias: 'feed',
      ...operationOptions
    });
};

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FeedQuery, FeedQueryVariables>) {
        return ApolloReactHooks.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, baseOptions);
      }
export function useFeedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, baseOptions);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = ApolloReactCommon.QueryResult<FeedQuery, FeedQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    name
    phone
    birthdate
    status
    gender
    city
    country
    looking
    visible
    images {
      path
    }
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    
export type MeProps<TChildProps = {}> = ApolloReactHoc.DataProps<MeQuery, MeQueryVariables> & TChildProps;
export function withMe<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    