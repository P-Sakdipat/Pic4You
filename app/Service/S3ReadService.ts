import Post from 'App/Models/Post'
import Drive from '@ioc:Adonis/Core/Drive'

class S3ReadService {
  public static readMultipleImages = async (posts: Post[]) => {
    for (const post of posts) {
      const imageBuffer = await Drive.get(post.storage_prefix)
      post.$extras.base64String = imageBuffer.toString('base64')
    }
    return Promise.resolve(posts)
  }

  public static readSingleImage = async (post: Post) => {
      const imageBuffer = await Drive.get(post.storage_prefix)
      post.$extras.base64String = imageBuffer.toString('base64')
    return Promise.resolve(post)
  }
}

export default S3ReadService
