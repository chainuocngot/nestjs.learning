import { Injectable } from '@nestjs/common'

@Injectable()
export class PostsService {
  getPosts() {
    return 'All posts'
  }

  createPost(body: any) {
    return body
  }

  getPost(id: string) {
    return `Post with id ${id}`
  }

  updatePost(id: string, body: any) {
    return `Updated post with id ${id} and body ${JSON.stringify(body)}`
  }

  deletePost(id: string) {
    return `Deleted post with id ${id}`
  }
}
