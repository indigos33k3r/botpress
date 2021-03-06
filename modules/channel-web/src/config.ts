export interface Config {
  /**
   * @default false
   */
  uploadsUseS3?: boolean
  /**
   * @default bucket-name
   */
  uploadsS3Bucket?: string
  /**
   * @default eu-west-1
   */
  uploadsS3Region?: string
  /**
   * @default your-aws-key-name
   */
  uploadsS3AWSAccessKey?: string
  /**
   * @default secret-key
   */
  uploadsS3AWSAccessSecret?: string
  /**
   * @default false
   */
  startNewConvoOnTimeout?: boolean
  /**
   * @default 6 hours
   */
  recentConversationLifetime?: string
}
