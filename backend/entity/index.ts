import { Contact } from './contact.entity';
import { Blog } from './blog.entity';
import { User } from './user.entity';
import { BlogView } from './blog_view.entity';
import { Tag } from './tag.entity';
import { Comment } from './comment.entity';

const entities = [Contact, Blog, User, BlogView, Comment, Tag];

export { Contact, Blog, User, BlogView, Comment, Tag };

export default entities;
