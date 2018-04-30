import SimpleSchema from 'simpl-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';

/** @module Profile */

/**
 * Profiles provide portfolio data for a user.
 * @extends module:Base~BaseCollection
 */
class CourseCollection extends BaseCollection {

  /**
   * Creates the Profile collection.
   */
  constructor() {
    super('Course', new SimpleSchema({
      // Remainder are optional
      username: { type: String},
      course: { type: String},
      semester: { type: String},
      professor: { type: String, optional: true },
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
  define({ username, course = '', semester = '', professor = '' }) {
    // make sure required fields are OK.
    const checkPattern = { username: String, course: String, semester: String, professor: String };
    check({ username, course, semester, professor }, checkPattern);
    if (this.find({ course }).count() > 0) {
      throw new Meteor.Error(`${course} is previously defined in another Course`);
    }
    return this._collection.insert({ username, course, semester, professor });
  }

  /**
   * Returns an object representing the Profile docID in a format acceptable to define().
   * @param docID The docID of a Profile.
   * @returns { Object } An object representing the definition of docID.
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const username = doc.username;
    const course = doc.course;
    const semester = doc.semester;
    const professor = doc.professor;
    return { username, course, semester, professor };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Courses = new CourseCollection();
