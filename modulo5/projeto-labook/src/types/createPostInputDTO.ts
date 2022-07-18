export enum USER_ROLES {
  normal = 'normal',
  evento = 'evento'
}

export type CreatePostInputDTO = {
  photo: string
  description: string
  created_at: string
  type: USER_ROLES
}