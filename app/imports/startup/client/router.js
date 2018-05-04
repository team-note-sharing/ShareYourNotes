import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { $ } from 'meteor/jquery';


/*                        LANDING ROUTE                       */

export const landingPageRouteName = 'Landing_Page';
FlowRouter.route('/', {
  name: landingPageRouteName,
  action() {
    BlazeLayout.render('Landing_Layout', { main: landingPageRouteName });
  },
});

/*                        DIRECTORY ROUTE                       */

function addDirectoryBodyClass() {
  $('body').addClass('directory-page-body');
}

function removeDirectoryBodyClass() {
  $('body').removeClass('directory-page-body');
}

export const directoryPageRouteName = 'Directory_Page';
FlowRouter.route('/directory', {
  name: directoryPageRouteName,
  action() {
    BlazeLayout.render('Directory_Layout', { main: directoryPageRouteName });
  },
  triggersEnter: [addDirectoryBodyClass],
  triggersExit: [removeDirectoryBodyClass],
});


/*                        USER ROUTES                      */


function addUserBodyClass() {
  $('body').addClass('user-layout-body');
}

function removeUserBodyClass() {
  $('body').removeClass('user-layout-body');
}

const userRoutes = FlowRouter.group({
  prefix: '/:username',
  name: 'userRoutes',
  triggersEnter: [addUserBodyClass],
  triggersExit: [removeUserBodyClass],
});

export const profilePageRouteName = 'Profile_Page';
userRoutes.route('/profile', {
  name: profilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: profilePageRouteName });
  },
});
userRoutes.route('/', {
  name: profilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: profilePageRouteName });
  },
});

export const editProfilePageRouteName = 'Edit_Profile_Page';
userRoutes.route('/edit-profile', {
  name: editProfilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: editProfilePageRouteName });
  },
});

export const filterPageRouteName = 'Filter_Page';
userRoutes.route('/filter', {
  name: filterPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: filterPageRouteName });
  },
});

export const findNotePageRouteName = 'Find_Note_Page';
userRoutes.route('/find_note', {
  name: findNotePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: findNotePageRouteName });
  },
});
export const myClassRouteName = 'My_Class_Page';
userRoutes.route('/myclass/:_id', {
  name: myClassRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: myClassRouteName });
  },
});
export const myNoteRouteName = 'My_Note_Page';
userRoutes.route('/mynote/:_note_id', {
  name: myNoteRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: myNoteRouteName });
  },
});
export const publicClassRouteName = 'Public_Class_Page';
userRoutes.route('/pubclass', {
  name: publicClassRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: publicClassRouteName });
  },
});
export const myBoardPageRouteName = 'My_Board_Page';
userRoutes.route('/board', {
  name: myBoardPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: myBoardPageRouteName });
  },
});
export const addNotePageRouteName = 'Add_Note_Page';
userRoutes.route('/myclass/:_id/add-note', {
  name: addNotePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: addNotePageRouteName });
  },
});
export const addCoursePageRouteName = 'Add_Course_Page';
userRoutes.route('/board/add-course', {
  name: addCoursePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: addCoursePageRouteName });
  },
});
/*                        MISC ROUTES                       */
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Page_Not_Found');
  },
};
