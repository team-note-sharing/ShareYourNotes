import { Interests } from '/imports/api/interest/InterestCollection';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Notes } from '/imports/api/note/NoteCollection';

Interests.publish();
Profiles.publish();
Notes.publish();
