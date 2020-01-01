/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null,
  title: string,
  description?: string | null,
};

export type UpdateEventInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteEventInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  content?: string | null,
  commentEventId?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  commentEventId?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    description: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
};

export type UpdateEventMutation = {
  updateEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    description: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
};

export type DeleteEventMutation = {
  deleteEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    description: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      description: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      description: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      description: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    description: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      title: string,
      description: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      description: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string | null,
      event:  {
        __typename: "Event",
        id: string,
        title: string,
        description: string | null,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  owner: string,
};

export type OnCreateEventSubscription = {
  onCreateEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    description: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  owner: string,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    description: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  owner: string,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent:  {
    __typename: "Event",
    id: string,
    title: string,
    description: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner: string,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      description: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner: string,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      description: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner: string,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      description: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};
