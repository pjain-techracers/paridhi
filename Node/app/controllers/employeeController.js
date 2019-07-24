import Responder from '../../lib/expressResponder';
import Express from '../../lib/express';
import { Employee } from '../models';
import {Request, headers, username} from '../../lib/authenticated';
import _ from 'lodash';
let query ={}

export default class EmployeeController {
  static createEmployee(req, res) {
    let { id, name, gitId } = req.body;
    Employee.create({ id: id, name: name, GitId: gitId })
     .then(resnew => {
        Responder.created(res, resnew)
      })
     .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
  }

  static getEmployeeDetails(req,res)  {
    let { id } = req.params;
    console.log(req, '===================request')
    Employee
     .findAll({ where: { id } })
      .then(() => Responder.success(res,req.body))
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
    }

  static employeeList(req,res) {
    Employee.findAll()
      .then((employees) => {
        Responder.success(res, employees);
      })
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
    }

  static deleteEmployee(req, res) {
    let { empId } = req.params;
    Employee.destroy( {where: { "id": empId }})
      .then(back => Responder.deleted(res))
      .catch(errorOnDBOp => Responder.operationFailed(res, errorOnDBOp));
  }

  static customizeCard(req, res) {
    const token = req.query;
    console.log(token, '=============token===========')

    const tokens = {
      'abc': {
        supportedCards: ['pageVisit', 'recentlySigned', 'totalSigned'],
        appearFrom: 'topRight',
        user_id: 45,
        initialCard: 'pageVisit',
        modalHTML: {
          pageVisit: {
            image: 'http://chittagongit.com//images/timeline-icon/timeline-icon-22.jpg',
            msg: `<b class='count'>0 </b>has visited this site. <br>`,
          },
          recentlySigned: {
            image: 'https://static1.squarespace.com/static/525dcddce4b03a9509e033ab/t/526800ffe4b0ee2599668050/1382547712599/fire.png',
            msg: `<b> Lisa from California </b>signed up recently.</br>`,
          },
          totalSigned: {
            image: 'http://chittagongit.com//images/students-icon/students-icon-4.jpg',
            msg: `<b>100 totalSigned </b> have signed up this page.</br>`,
          }
        }
      },
      'def': {
        supportedCards: ['pageVisit','recentlyVisited', 'totalSigned', 'liveNowModal'],
        appearFrom: 'topRight',
        initialCard: 'pageVisit',
        theme: 'rounded',
        showDirection: 'up',
        hideDirection: 'up',
        captureLinks: ['home', 'about', 'signUp'],
        targetLinks: ['signUp'],
        notification: {
          firstDelay: 1000,
          duration: 3000,
          timeGapBetweenEach: 1000,
          transitionTime: 400
        },
        liveNowNotLoop: false,
        pageVisitNotLoop: true, // will show only once
        recentActivityNotLoop: false,
        effectOptions: { direction : 'up' },
        modalHTML: {
          liveNowModal: {
            image: './images/image1.jpg',
            setMessage: () => `<b>0</b> people  are visiting this page right now.`,
          },
          pageVisit: {
            image: './images/image6.png',
            setMessage: () => `<b>0</b> has visited this site.<br><small>in the last 7 days</small>`,
          },
          totalSigned: {
            image: './images/image5.jpg',
            setMessage: `<b>0</b> have signed up this page.<br><small> 1 hour ago</small>`,
          },
          recentlyVisited: [
            {
              image: './images/image6.png',
              setMessage: () => `<b>${name ='Lisa'} from ${city= 'California'}</b> have signed up.<br><small> 1 hour ago</small>`,
            },
            {
              image: './images/image6.png',
              setMessage: () => `<b>${name = 'Parina'} from ${city = 'Texas'}</b> have signed up.<br><small> 1 hour ago</small>`,
            },
            {
              image: './images/image6.png',
              setMessage: () => `<b>${name = 'Sirana'} from ${city = 'India'}</b> have signed up.<br><small> 1 hour ago</small>`,
            },
            {
              image: './images/image6.png',
              setMessage: () => `<b>${name = 'Linda'} from ${city = 'Coimbatore'}</b> have signed up.<br><small> 1 hour ago</small>`,
            }
          ]
        }
      },
    }
    Responder.success(res, tokens.def);
  }
}
