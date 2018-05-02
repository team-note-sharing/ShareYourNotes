import SimpleSchema from 'simpl-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { check } from 'meteor/check';
import { Tracker } from 'meteor/tracker';

/** @module Profile */

/**
 * Profiles provide portfolio data for a user.
 * @extends module:Base~BaseCollection
 */
class NoteCollection extends BaseCollection {

  /**
   * Creates the Note collection.
   */
  constructor() {
    super('Note', new SimpleSchema({
      // Remainder are optional
      username: {type: String},
      title: { type: String },
      course: { type: String },
      description: { type: String },
      attachment: { type: String, optional: true },
    }, { tracker: Tracker }));
  }

  /**
   * Defines a new Note.
   * @example
   * Profiles.define({ title: 'UI Design',
   *                   course: 'ICS465',
   *                   description: 'note',
   *                   attachment: 'http://example.com/example.jpg',
   *                  });
   *
   * @returns The newly created docID.
   */
  define({ username, title = '', course = '', description = '', attachment = '' }) {
    // make sure required fields are OK.
    const checkPattern = { username: String, title: String, course: String, description: String, attachment: String };
    check({ username, title, course, description, attachment }, checkPattern);

    return this._collection.insert({ username, title, course, description, attachment });
  }

  /**
   * Returns an object representing the Profile docID in a format acceptable to define().
   * @param docID The docID of a Profile.
   * @returns { Object } An object representing the definition of docID.
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const username = doc.username;
    const title = doc.title;
    const course = doc.course;
    const description = doc.description;
    const attachment = doc.attachment;
    return { username, title, course, description, attachment };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Notes = new NoteCollection();
