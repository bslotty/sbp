import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  /**
   *  This service is intended to simulate the functionality of the Sharepoint Web Service.
   *    For this demo I have repurposed this to work with a database hosted on a web server.
   * 
   *  There will be a set path to follow while you view the site.
   *    We want to highlight each action area of the site after the views the site
   *      Registration
   *      Getting to your Curriculumn
   *      Taking the Evaluation
   *        --  Prompt for access level change to manager
   *      Evaluate as a Manager
   *      View Stats of Subordinates
   *        --  Prompt to change to Coordinator
   *      View Stats of All Users
   *  
   *  
   *    To accomplish we need:
   *      List of evaluation questions and responses 
   *        Interface
   *        Flow Chart Update
   * 
   *      List of Users with Employees; 2 managers, 10 enrolled employees
   *  
   *      5 days of Agenda      
   * 
   *      Dialogs for each step
   *        InitialDemoDisclaimer
   *        ReportCompletion 
   *        ManagerChange
   *        CoordinatorChange
   *        ThanksEnd
   * 
   * 
   *    Will also need to fake data going to the database with rxJS; maybe 180ms time delay?
   */




  /**
   *   Sharepoint has access to the Company Active Directory, so we need to create some fake employees for site functionality.
   */
  SharepointUserList: SharepointUser[];

  constructor() { 
  }

}


/**
 *  Each of these interfaces is populated based on the database design
 */


export interface SharepointUser {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  extendedSubordinates: SharepointUser[];
  extendedManagers: SharepointUser[];

  constructor(id: number);
}


export interface SalesBuilderSession {
  id: number;
  title: string;
  startDate: string;
  enrollOpenDate: string;
  enrollCloseDate: string;
  allowedRoles: SalesBuilderRole[];

  constructor();
}


export interface SalesBuilderRole {

  id: number;
  title: string;
  preReqWeeks: number;
  foundationalWeeks: number;
  consultativeWeeks: number;
  specialistWeeks: number;
  capstoneWeeks: number;

  constructor();
}


export interface SalesBuilderEnrollment {

  id: number;
  profile: SharepointUser;
  session: SalesBuilderSession;
  role: SalesBuilderRole;
  progress: string;

  constructor();
}


export interface SalesBuilderCurriculumn {

  id: number;
  role: SalesBuilderRole;
  day: number;
  week: number;

  //  Content on sharepoint is a Rich Text Editor Field; 
  //  We are instead pointing to an html file;
  content: string;

  constructor();
}

export interface SalesBuilderQuestion {
  id: number;
  role: SalesBuilderRole;
  level: SalesBuilderLevel;
  questionTest: string;

  constructor ();
}

export interface SalesBuilderLevel {
  id: number;
  level: string;

  constructor();

}

export interface SalesBuilderEvaluation {

  id: number;
  learner: SharepointUser;
  manager: SharepointUser;
  enroll: SalesBuilderEnrollment;
  question: SalesBuilderQuestion;
  learnerRating: number;
  learnerResponse: string;
  managerRating: number;
  managerResponse: string;

  constructor();
}