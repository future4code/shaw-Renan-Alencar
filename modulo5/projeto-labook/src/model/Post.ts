import { USER_ROLES } from "../types/createPostInputDTO";

export default class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private created_at: string,
    private author_id: string,
    private type: USER_ROLES,
  ) {}
}
