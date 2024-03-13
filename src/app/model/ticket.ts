import { Category } from './category';
import { Kind } from './kind';
import { Priority } from './priority';
import { Project } from './project';
import { Status } from './status';
import { User } from './user';

export class Ticket {
  ticketId?: number;
  title?: string;
  description?: string;
  updated_at?: string;
  created_at?: string;
  kind?: Kind;
  user?: User;
  project?: Project;
  category?: Category;
  priority?: Priority;
  status?: Status;
}
