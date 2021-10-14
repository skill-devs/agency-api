import { Request, Response, NextFunction } from "express"; // eslint-disable-line
import { HttpException } from "../libs/ErrorHandler";
import { logger } from "../libs/winstonLogger";

export class HomeController {
  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
    const campusDEV: any = {
  "data": {
    "campuses": [
      {
        "id": 88,
        "moocho_campus_id": 86,
        "name": "Alabama",
        "is_deleted": false
      },
      {
        "id": 61,
        "moocho_campus_id": 10000,
        "name": "All Campuses",
        "is_deleted": false
      },
      {
        "id": 73,
        "moocho_campus_id": 74,
        "name": "App State (Coming Soon)",
        "is_deleted": false
      },
      {
        "id": 62,
        "moocho_campus_id": 64,
        "name": "Arizona State",
        "is_deleted": false
      },
      {
        "id": 63,
        "moocho_campus_id": 65,
        "name": "Arkansas State (Coming Soon)",
        "is_deleted": false
      },
      {
        "id": 107,
        "moocho_campus_id": 96,
        "name": "Auburn",
        "is_deleted": false
      },
      {
        "id": 28,
        "moocho_campus_id": 52,
        "name": "Ball State",
        "is_deleted": false
      },
      {
        "id": 24,
        "moocho_campus_id": 48,
        "name": "Boise State",
        "is_deleted": false
      },
      {
        "id": 26,
        "moocho_campus_id": 50,
        "name": "Bowling Green",
        "is_deleted": false
      },
      {
        "id": 105,
        "moocho_campus_id": 94,
        "name": "Clemson (Coming Soon)",
        "is_deleted": true
      },
      {
        "id": 39,
        "moocho_campus_id": 63,
        "name": "CMU / Pitt",
        "is_deleted": false
      },
      {
        "id": 4,
        "moocho_campus_id": 25,
        "name": "Colorado",
        "is_deleted": true
      },
      {
        "id": 5,
        "moocho_campus_id": 26,
        "name": "Colorado State",
        "is_deleted": false
      },
      {
        "id": 83,
        "moocho_campus_id": 75,
        "name": "Duke",
        "is_deleted": false
      },
      {
        "id": 92,
        "moocho_campus_id": 98,
        "name": "ECU",
        "is_deleted": false
      },
      {
        "id": 104,
        "moocho_campus_id": 93,
        "name": "FIU",
        "is_deleted": false
      },
      {
        "id": 102,
        "moocho_campus_id": 91,
        "name": "FSU/FAMU",
        "is_deleted": false
      },
      {
        "id": 103,
        "moocho_campus_id": 92,
        "name": "Georgia Southern (Coming Soon)",
        "is_deleted": true
      },
      {
        "id": 14,
        "moocho_campus_id": 37,
        "name": "GWU",
        "is_deleted": true
      },
      {
        "id": 6,
        "moocho_campus_id": 27,
        "name": "Illinois",
        "is_deleted": true
      },
      {
        "id": 31,
        "moocho_campus_id": 55,
        "name": "Illinois",
        "is_deleted": false
      },
      {
        "id": 20,
        "moocho_campus_id": 43,
        "name": "Indiana",
        "is_deleted": true
      },
      {
        "id": 94,
        "moocho_campus_id": 100,
        "name": "Iowa State",
        "is_deleted": false
      },
      {
        "id": 82,
        "moocho_campus_id": 73,
        "name": "JMU",
        "is_deleted": false
      },
      {
        "id": 81,
        "moocho_campus_id": 126,
        "name": "JMU",
        "is_deleted": false
      },
      {
        "id": 108,
        "moocho_campus_id": 104,
        "name": "Kent State",
        "is_deleted": false
      },
      {
        "id": 70,
        "moocho_campus_id": 70,
        "name": "Kentucky",
        "is_deleted": false
      },
      {
        "id": 15,
        "moocho_campus_id": 38,
        "name": "Kentucky (Original)",
        "is_deleted": true
      },
      {
        "id": 38,
        "moocho_campus_id": 62,
        "name": "Long Beach State (Coming Soon)",
        "is_deleted": true
      },
      {
        "id": 64,
        "moocho_campus_id": 66,
        "name": "Memphis",
        "is_deleted": false
      },
      {
        "id": 32,
        "moocho_campus_id": 56,
        "name": "Miami",
        "is_deleted": false
      },
      {
        "id": 69,
        "moocho_campus_id": 69,
        "name": "Miami (OH)",
        "is_deleted": false
      },
      {
        "id": 19,
        "moocho_campus_id": 42,
        "name": "Michigan",
        "is_deleted": true
      },
      {
        "id": 7,
        "moocho_campus_id": 28,
        "name": "Minnesota",
        "is_deleted": true
      },
      {
        "id": 65,
        "moocho_campus_id": 67,
        "name": "Missouri State (Coming Soon)",
        "is_deleted": false
      },
      {
        "id": 27,
        "moocho_campus_id": 51,
        "name": "Moocho",
        "is_deleted": true
      },
      {
        "id": 74,
        "moocho_campus_id": 76,
        "name": "Moocho University",
        "is_deleted": true
      },
      {
        "id": 68,
        "moocho_campus_id": 68,
        "name": "Nevada",
        "is_deleted": false
      },
      {
        "id": 101,
        "moocho_campus_id": 90,
        "name": "North Florida",
        "is_deleted": false
      },
      {
        "id": 8,
        "moocho_campus_id": 30,
        "name": "Ohio State",
        "is_deleted": true
      },
      {
        "id": 76,
        "moocho_campus_id": 79,
        "name": "Oregon",
        "is_deleted": false
      },
      {
        "id": 34,
        "moocho_campus_id": 58,
        "name": "Penn State",
        "is_deleted": false
      },
      {
        "id": 9,
        "moocho_campus_id": 32,
        "name": "Pittsburgh",
        "is_deleted": true
      },
      {
        "id": 16,
        "moocho_campus_id": 39,
        "name": "Purdue",
        "is_deleted": false
      },
      {
        "id": 36,
        "moocho_campus_id": 60,
        "name": "Sacramento State",
        "is_deleted": false
      },
      {
        "id": 71,
        "moocho_campus_id": 71,
        "name": "SJSU (Coming Soon)",
        "is_deleted": false
      },
      {
        "id": 87,
        "moocho_campus_id": 82,
        "name": "SMU (Coming Soon)",
        "is_deleted": false
      },
      {
        "id": 100,
        "moocho_campus_id": 89,
        "name": "South Alabama",
        "is_deleted": false
      },
      {
        "id": 99,
        "moocho_campus_id": 88,
        "name": "Southern Miss",
        "is_deleted": false
      },
      {
        "id": 33,
        "moocho_campus_id": 57,
        "name": "Syracuse",
        "is_deleted": false
      },
      {
        "id": 111,
        "moocho_campus_id": 107,
        "name": "TCU",
        "is_deleted": false
      },
      {
        "id": 90,
        "moocho_campus_id": 300,
        "name": "Test U 3",
        "is_deleted": false
      },
      {
        "id": 1,
        "moocho_campus_id": 22,
        "name": "Test University 2",
        "is_deleted": true
      },
      {
        "id": 96,
        "moocho_campus_id": 102,
        "name": "Texas State",
        "is_deleted": false
      },
      {
        "id": 29,
        "moocho_campus_id": 53,
        "name": "Texas Tech",
        "is_deleted": false
      },
      {
        "id": 86,
        "moocho_campus_id": 81,
        "name": "Toledo (Coming Soon)",
        "is_deleted": false
      },
      {
        "id": 98,
        "moocho_campus_id": 87,
        "name": "Tulane",
        "is_deleted": false
      },
      {
        "id": 10,
        "moocho_campus_id": 33,
        "name": "UC Berkeley",
        "is_deleted": false
      },
      {
        "id": 37,
        "moocho_campus_id": 61,
        "name": "UC Davis",
        "is_deleted": false
      },
      {
        "id": 106,
        "moocho_campus_id": 95,
        "name": "UCF",
        "is_deleted": false
      },
      {
        "id": 93,
        "moocho_campus_id": 99,
        "name": "UConn",
        "is_deleted": false
      },
      {
        "id": 72,
        "moocho_campus_id": 72,
        "name": "UNC Chapel Hill",
        "is_deleted": false
      },
      {
        "id": 109,
        "moocho_campus_id": 105,
        "name": "University of Akron",
        "is_deleted": false
      },
      {
        "id": 18,
        "moocho_campus_id": 41,
        "name": "University of Florida",
        "is_deleted": false
      },
      {
        "id": 21,
        "moocho_campus_id": 44,
        "name": "University of Iowa",
        "is_deleted": true
      },
      {
        "id": 75,
        "moocho_campus_id": 77,
        "name": "University of Texas",
        "is_deleted": false
      },
      {
        "id": 3,
        "moocho_campus_id": 24,
        "name": "University of Virginia",
        "is_deleted": false
      },
      {
        "id": 84,
        "moocho_campus_id": 78,
        "name": "UNLV (Coming Soon)",
        "is_deleted": false
      },
      {
        "id": 22,
        "moocho_campus_id": 46,
        "name": "USciences",
        "is_deleted": true
      },
      {
        "id": 17,
        "moocho_campus_id": 40,
        "name": "USciences/Penn/Drexel",
        "is_deleted": false
      },
      {
        "id": 80,
        "moocho_campus_id": 125,
        "name": "Userlab Test University",
        "is_deleted": false
      },
      {
        "id": 91,
        "moocho_campus_id": 97,
        "name": "USF",
        "is_deleted": false
      },
      {
        "id": 110,
        "moocho_campus_id": 106,
        "name": "U.S. Naval Academy",
        "is_deleted": false
      },
      {
        "id": 23,
        "moocho_campus_id": 47,
        "name": "Utah",
        "is_deleted": false
      },
      {
        "id": 30,
        "moocho_campus_id": 54,
        "name": "UTEP",
        "is_deleted": false
      },
      {
        "id": 77,
        "moocho_campus_id": 124,
        "name": "UV Test",
        "is_deleted": false
      },
      {
        "id": 85,
        "moocho_campus_id": 80,
        "name": "UWM/Marquette (Coming Soon)",
        "is_deleted": false
      },
      {
        "id": 97,
        "moocho_campus_id": 103,
        "name": "Valdosta State",
        "is_deleted": false
      },
      {
        "id": 95,
        "moocho_campus_id": 101,
        "name": "Vanderbilt",
        "is_deleted": false
      },
      {
        "id": 11,
        "moocho_campus_id": 34,
        "name": "VCU",
        "is_deleted": true
      },
      {
        "id": 35,
        "moocho_campus_id": 59,
        "name": "Virginia Tech",
        "is_deleted": false
      },
      {
        "id": 13,
        "moocho_campus_id": 36,
        "name": "Washington",
        "is_deleted": true
      },
      {
        "id": 25,
        "moocho_campus_id": 49,
        "name": "Wichita State",
        "is_deleted": false
      },
      {
        "id": 2,
        "moocho_campus_id": 23,
        "name": "Wisconsin",
        "is_deleted": false
      },
      {
        "id": 12,
        "moocho_campus_id": 35,
        "name": "WVU",
        "is_deleted": true
      }
    ]
  }
  }

  const campusPROD: any = {
  "data": {
    "campuses": [
      {
        "id": 61,
        "moocho_campus_id": 10000,
        "name": "All Campuses",
        "time_zone": null,
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 72,
        "moocho_campus_id": 74,
        "name": "App State",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 62,
        "moocho_campus_id": 64,
        "name": "Arizona State",
        "time_zone": "PST",
        "is_active": false,
        "collect_athlete_receipts": true
      },
      {
        "id": 94,
        "moocho_campus_id": 96,
        "name": "Auburn",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 28,
        "moocho_campus_id": 52,
        "name": "Ball State",
        "time_zone": "EST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 24,
        "moocho_campus_id": 48,
        "name": "Boise State",
        "time_zone": "MST",
        "is_active": true,
        "collect_athlete_receipts": true
      },
      {
        "id": 5,
        "moocho_campus_id": 26,
        "name": "Colorado State",
        "time_zone": "MST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 73,
        "moocho_campus_id": 75,
        "name": "Duke",
        "time_zone": "EST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 96,
        "moocho_campus_id": 98,
        "name": "ECU",
        "time_zone": "EST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 91,
        "moocho_campus_id": 93,
        "name": "FIU",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 89,
        "moocho_campus_id": 91,
        "name": "FSU/FAMU",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 98,
        "moocho_campus_id": 100,
        "name": "Iowa State",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 69,
        "moocho_campus_id": 73,
        "name": "JMU",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 102,
        "moocho_campus_id": 104,
        "name": "Kent State",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 70,
        "moocho_campus_id": 70,
        "name": "Kentucky",
        "time_zone": "EST",
        "is_active": false,
        "collect_athlete_receipts": true
      },
      {
        "id": 64,
        "moocho_campus_id": 66,
        "name": "Memphis (Coming Soon)",
        "time_zone": "CST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 32,
        "moocho_campus_id": 56,
        "name": "Miami",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 66,
        "moocho_campus_id": 68,
        "name": "Nevada",
        "time_zone": "PST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 88,
        "moocho_campus_id": 90,
        "name": "North Florida",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 8,
        "moocho_campus_id": 30,
        "name": "Ohio State",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 77,
        "moocho_campus_id": 79,
        "name": "Oregon",
        "time_zone": "PST",
        "is_active": false,
        "collect_athlete_receipts": true
      },
      {
        "id": 34,
        "moocho_campus_id": 58,
        "name": "Penn State",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 39,
        "moocho_campus_id": 63,
        "name": "Pitt",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 16,
        "moocho_campus_id": 39,
        "name": "Purdue",
        "time_zone": "EST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 71,
        "moocho_campus_id": 71,
        "name": "SJSU (Coming Soon)",
        "time_zone": "PST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 80,
        "moocho_campus_id": 82,
        "name": "SMU",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 87,
        "moocho_campus_id": 89,
        "name": "South Alabama",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 86,
        "moocho_campus_id": 88,
        "name": "Southern Miss",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 33,
        "moocho_campus_id": 57,
        "name": "Syracuse",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 81,
        "moocho_campus_id": 83,
        "name": "TCU",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 100,
        "moocho_campus_id": 102,
        "name": "Texas State",
        "time_zone": "CST",
        "is_active": false,
        "collect_athlete_receipts": true
      },
      {
        "id": 29,
        "moocho_campus_id": 53,
        "name": "Texas Tech",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": true
      },
      {
        "id": 79,
        "moocho_campus_id": 81,
        "name": "Toledo",
        "time_zone": "EST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 85,
        "moocho_campus_id": 87,
        "name": "Tulane",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 37,
        "moocho_campus_id": 61,
        "name": "UC Davis",
        "time_zone": "PST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 93,
        "moocho_campus_id": 95,
        "name": "UCF",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 97,
        "moocho_campus_id": 99,
        "name": "UConn",
        "time_zone": "EST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 68,
        "moocho_campus_id": 72,
        "name": "UNC Chapel Hill",
        "time_zone": "EST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 103,
        "moocho_campus_id": 105,
        "name": "University of Akron",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 84,
        "moocho_campus_id": 86,
        "name": "University of Alabama",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 18,
        "moocho_campus_id": 41,
        "name": "University of Florida",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 75,
        "moocho_campus_id": 77,
        "name": "University of Texas",
        "time_zone": "CST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 3,
        "moocho_campus_id": 24,
        "name": "University of Virginia",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 76,
        "moocho_campus_id": 78,
        "name": "UNLV (Coming Soon)",
        "time_zone": "PST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 82,
        "moocho_campus_id": 84,
        "name": "UNT",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 17,
        "moocho_campus_id": 40,
        "name": "USciences/Penn/Drexel",
        "time_zone": "EST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 95,
        "moocho_campus_id": 97,
        "name": "USF",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 104,
        "moocho_campus_id": 106,
        "name": "U.S. Naval Academy",
        "time_zone": "EST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 83,
        "moocho_campus_id": 85,
        "name": "UT - Dallas",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 2,
        "moocho_campus_id": 23,
        "name": "UW-Madison",
        "time_zone": "CST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 78,
        "moocho_campus_id": 80,
        "name": "UW-Milwaukee / Marquette",
        "time_zone": "CST",
        "is_active": false,
        "collect_athlete_receipts": false
      },
      {
        "id": 101,
        "moocho_campus_id": 103,
        "name": "Valdosta State",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 99,
        "moocho_campus_id": 101,
        "name": "Vanderbilt",
        "time_zone": "CST",
        "is_active": true,
        "collect_athlete_receipts": false
      },
      {
        "id": 35,
        "moocho_campus_id": 59,
        "name": "Virginia Tech",
        "time_zone": "EST",
        "is_active": true,
        "collect_athlete_receipts": false
      }
    ],
    "teams": [
      {
        "id": 455,
        "name": "2020 SAAC",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 383,
        "name": "Admin For Testing",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 49,
        "name": "Arizona State",
        "campus_id": 64,
        "receipt_required": null,
        "campus_name": "Arizona State"
      },
      {
        "id": 222,
        "name": "Arizona State August 2019",
        "campus_id": 64,
        "receipt_required": null,
        "campus_name": "Arizona State"
      },
      {
        "id": 160,
        "name": "Arizona State Spring 2019",
        "campus_id": 64,
        "receipt_required": null,
        "campus_name": "Arizona State"
      },
      {
        "id": 194,
        "name": "Arizona State - Tyler Johnson",
        "campus_id": 64,
        "receipt_required": null,
        "campus_name": "Arizona State"
      },
      {
        "id": 126,
        "name": "Baseball",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 63,
        "name": "Baseball",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 360,
        "name": "Boise August 2020 - MBB",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 392,
        "name": "Boise August 2020 - MBB2",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 358,
        "name": "Boise August 2020 - Soccer",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 372,
        "name": "Boise August 2020 VB 15",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 359,
        "name": "Boise August 2020 - VB FB",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 297,
        "name": "Boise Dec2019-Jan2020 - Gymnastics",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 205,
        "name": "Boise FB - William",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 180,
        "name": "Boise Football Summer - 1June Start",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 178,
        "name": "Boise Football Summer - 26May Start",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 179,
        "name": "Boise Football Summer - 27May Start",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 198,
        "name": "Boise Football Summer - 6.11 All Credit",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 196,
        "name": "Boise Football Summer - 6.11 Casey",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 197,
        "name": "Boise Football Summer - 6.11 DK",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 199,
        "name": "Boise Football Summer - 6.11 Keegan",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 200,
        "name": "Boise Football Summer - 6.11 Markel",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 182,
        "name": "Boise Football Summer - 7June Start",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 298,
        "name": "Boise Jan2020 - Softball",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 349,
        "name": "Boise - July 2020",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 351,
        "name": "Boise - July 2020 MBB 23",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 309,
        "name": "Boise - March2020",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 310,
        "name": "Boise - March2020 - 120",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 312,
        "name": "Boise - March2020 - 40",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 311,
        "name": "Boise - March2020 - 80",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 290,
        "name": "Boise - Nov2019 - FB1",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 291,
        "name": "Boise - Nov2019 - FB2",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 195,
        "name": "Boise Summer 2019 - Football 1",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 207,
        "name": "Boise Summer 2019 - Football 2",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 181,
        "name": "Boise Summer 2019 - Gymnastics",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 203,
        "name": "Boise Summer 2019 - Men's Baseball",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 206,
        "name": "Boise Summer 2019 - Men's Basketball",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 204,
        "name": "Boise Summer 2019 - Women's Basketball",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 202,
        "name": "Boise Summer 2019 - Women's Soccer",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 201,
        "name": "Boise Summer 2019 - Women's Volleyball",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 403,
        "name": "CARY - Test",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 245,
        "name": "CSU Fall 2019-20",
        "campus_id": 26,
        "receipt_required": null,
        "campus_name": "Colorado State"
      },
      {
        "id": 353,
        "name": "Dolphins 2020",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 251,
        "name": "Don't use",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 263,
        "name": "Duke - All Olympic Sports",
        "campus_id": 75,
        "receipt_required": null,
        "campus_name": "Duke"
      },
      {
        "id": 252,
        "name": "Duke - All Olympic Sports ex WSOC",
        "campus_id": 75,
        "receipt_required": null,
        "campus_name": "Duke"
      },
      {
        "id": 279,
        "name": "Duke - Fueling Station - All Olympic Sports ex M-Lacrosse",
        "campus_id": 75,
        "receipt_required": null,
        "campus_name": "Duke"
      },
      {
        "id": 280,
        "name": "Duke - Fueling Station - M-Lacrosse",
        "campus_id": 75,
        "receipt_required": null,
        "campus_name": "Duke"
      },
      {
        "id": 274,
        "name": "Duke - Softball Coach",
        "campus_id": 75,
        "receipt_required": null,
        "campus_name": "Duke"
      },
      {
        "id": 264,
        "name": "Duke - Test",
        "campus_id": 75,
        "receipt_required": null,
        "campus_name": "Duke"
      },
      {
        "id": 289,
        "name": "Duke - Test2",
        "campus_id": 75,
        "receipt_required": null,
        "campus_name": "Duke"
      },
      {
        "id": 259,
        "name": "Duke - Women's Soccer",
        "campus_id": 75,
        "receipt_required": null,
        "campus_name": "Duke"
      },
      {
        "id": 414,
        "name": "Fall 2020 Fueling Station ",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 74,
        "name": "Field Hockey",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 125,
        "name": "Football",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 322,
        "name": "Football 2020-21 Team A",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 258,
        "name": "Football 2020-21 Team B",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 92,
        "name": "Football A",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 93,
        "name": "Football B",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 305,
        "name": "Football Defense Spring 2020",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 62,
        "name": "Football FULL TEAM",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 183,
        "name": "Football June Team",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 186,
        "name": "Football June Team Exception",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 173,
        "name": "Football May Team",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 59,
        "name": "Football STAFF",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 355,
        "name": "Football Summer 2020 - First Credit Only",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 208,
        "name": "Freshman 2019",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 413,
        "name": "Gavin Graham Single Day Load",
        "campus_id": 102,
        "receipt_required": null,
        "campus_name": "Texas State"
      },
      {
        "id": 350,
        "name": "Iowa State - Pilot - July 2020",
        "campus_id": 100,
        "receipt_required": null,
        "campus_name": "Iowa State"
      },
      {
        "id": 96,
        "name": "JEN - 30",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 97,
        "name": "JEN - 40",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 94,
        "name": "JEN-A",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 95,
        "name": "JEN-B",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 98,
        "name": "JEN - FB",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 111,
        "name": "JEN - FB",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 107,
        "name": "JEN - FB",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 106,
        "name": "JEN - MHKY",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 104,
        "name": "JEN - MTE",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 101,
        "name": "JEN - TR",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 100,
        "name": "JEN - UNR",
        "campus_id": 68,
        "receipt_required": null,
        "campus_name": "Nevada"
      },
      {
        "id": 105,
        "name": "JEN - WTE",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 220,
        "name": "KENTUCKY-FOOTBALL - August Team",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 190,
        "name": "Kentucky - Football Spring 2020 M Napier",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 269,
        "name": "Kentucky-Receipt Email List 2",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 257,
        "name": "Kentucky-Receipt Email List Fall 2020 Fridays",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 243,
        "name": "Kentucky-Receipt Email List MBB",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 458,
        "name": "K. Faye Breakfast Credit Fall 2020",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 399,
        "name": "KY Football 8.18-9.18 Team A",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 400,
        "name": "KY Football 8.18-9.18 Team B",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 421,
        "name": "MBB 9.28.20-10.11.20",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 420,
        "name": "MBB Zach Edey",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 99,
        "name": "Memphis Admins",
        "campus_id": 66,
        "receipt_required": null,
        "campus_name": "Memphis (Coming Soon)"
      },
      {
        "id": 113,
        "name": "Memphis - Jeff Kupper",
        "campus_id": 66,
        "receipt_required": null,
        "campus_name": "Memphis (Coming Soon)"
      },
      {
        "id": 40,
        "name": "Men's Basketball",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 64,
        "name": "Men's Basketball",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 57,
        "name": "Men's Basketball - OLD",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 191,
        "name": "Men's Basketball Summer - ManagerMT",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 192,
        "name": "Men's Basketball Summer - ManagerWTH",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 189,
        "name": "Men's Basketball Summer - Standard",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 69,
        "name": "Men's Fencing",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 76,
        "name": "Men's Golf",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 127,
        "name": "Men's Golf",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 75,
        "name": "Men's Lacrosse",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 81,
        "name": "Men's Soccer",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 128,
        "name": "Men's Swimming and Diving",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 84,
        "name": "Men's Swimming & Diving",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 86,
        "name": "Men's Tennis",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 129,
        "name": "Men's Tennis",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 66,
        "name": "Men's Track & Field",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 130,
        "name": "Men's Track & Field",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 131,
        "name": "Men's Wrestling",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 89,
        "name": "Men's Wrestling",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 46,
        "name": "Miami",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 112,
        "name": "Miami Football",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 341,
        "name": "Miami Football Fall 2020",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 321,
        "name": "Miami Football June 2020",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 313,
        "name": "Miami Football March 2020",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 187,
        "name": "Miami - Parrott",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 214,
        "name": "Miami - Staff Summer 2019 - 1",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 215,
        "name": "Miami - Staff Summer 2019 - 2",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 216,
        "name": "Miami - Staff Summer 2019 - 3",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 217,
        "name": "Miami - Staff Summer 2019 - 4",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 361,
        "name": "Miami - Staff Summer 2020",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 373,
        "name": "Miami - Staff Summer 2020 - 20",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 374,
        "name": "Miami - Staff Summer 2020 - 25",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 375,
        "name": "Miami - Staff Summer 2020 - 45",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 376,
        "name": "Miami - Staff Summer 2020 - 50",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 221,
        "name": "Miami - Summer Staff 2019 - Iva Earley",
        "campus_id": 56,
        "receipt_required": null,
        "campus_name": "Miami"
      },
      {
        "id": 90,
        "name": "Moocho",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 61,
        "name": "Moocho",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 60,
        "name": "Nutrition",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 369,
        "name": "Oregon - FB - Fall 2020",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 333,
        "name": "Oregon - FB - June 2020 - $15",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 337,
        "name": "Oregon - FB - June 2020 - $15 - Group2",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 218,
        "name": "Oregon - Football - $15",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 223,
        "name": "Oregon - Football - $25",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 248,
        "name": "Oregon - Football - $35",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 267,
        "name": "Oregon - Football - Archive",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 247,
        "name": "Oregon - Football - Archive2",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 249,
        "name": "Oregon - Football - Archive3",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 275,
        "name": "Oregon - Men's Basketball",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 265,
        "name": "Oregon - Non-Travelers",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 277,
        "name": "Oregon - Sept 21-23 - 20-12-12-20",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 278,
        "name": "Oregon - Sept 21-23 - 25-20-25-25",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 393,
        "name": "Oregon - Soccer 2020-21",
        "campus_id": 79,
        "receipt_required": null,
        "campus_name": "Oregon"
      },
      {
        "id": 102,
        "name": "Penn State - Admin",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 295,
        "name": "Penn State - Benard Cutrone",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 342,
        "name": "Penn State - FH - June 2020",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 250,
        "name": "Penn State - Field Hockey 2019-20",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 225,
        "name": "Penn State - Football 2019-20",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 108,
        "name": "Penn State - Football 2020-21",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 323,
        "name": "Penn State - Football - June 2020 - 1",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 336,
        "name": "Penn State - Football - June 2020 - 2",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 348,
        "name": "Penn State - Football - June 2020 - 3",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 338,
        "name": "Penn State - MBB - June 2020",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 282,
        "name": "Penn State - Men's Basketball 2019-20",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 51,
        "name": "Penn State - Men's Hockey 2020-21",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 395,
        "name": "Penn State - Men's Hockey 2020-21 144",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 268,
        "name": "Penn State - Men's Hockey 2020-21 238",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 456,
        "name": "Penn State - Men's Wrestling 2020-21",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 398,
        "name": "Penn State - MGYM - Aug17-23",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 343,
        "name": "Penn State - MSOC - 2020",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 380,
        "name": "Penn State - MSOC - Aug10-16 - 132",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 381,
        "name": "Penn State - MSOC - Aug10-16 - 170",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 210,
        "name": "Penn State - MSOC - Aug17-23 - 150",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 213,
        "name": "Penn State - Summer 2019 2",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 388,
        "name": "Penn State - Swim 20-21 - 118",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 50,
        "name": "Penn State - Swim 20-21 - 128",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 362,
        "name": "Penn State - Swim 20-21 - 144",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 385,
        "name": "Penn State - Swim 20-21 - 16 -17",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 283,
        "name": "Penn State - Swim 20-21 - 16 - 19",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 397,
        "name": "Penn State - Swim 20-21 - 16 - 21",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 389,
        "name": "Penn State - Swim 20-21 - 178",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 390,
        "name": "Penn State - Swim 20-21 - 220",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 391,
        "name": "Penn State - Swim 20-21 - 246",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 386,
        "name": "Penn State - Swim 20-21 - 42",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 396,
        "name": "Penn State - Swim 20-21 - 68",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 387,
        "name": "Penn State - Swim 20-21 - 84",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 334,
        "name": "Penn State - WBB - Sept13-19 Tova",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 394,
        "name": "Penn State - WGYM 20-21",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 55,
        "name": "Penn State - Women's Basketball 2020-21",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 384,
        "name": "Penn State - Women's Hockey 2020-21",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 52,
        "name": "Penn State - Women's Volleyball",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 262,
        "name": "Penn State - Women's Volleyball 2019-20",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 281,
        "name": "Penn State - Wrestling 2019-20",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 377,
        "name": "Penn State - WSOC - Aug8-14 - 126",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 378,
        "name": "Penn State - WSOC - Aug8-14 - 222",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 379,
        "name": "Penn State - WSOC - Aug8-14 - 238",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 344,
        "name": "Penn State - WSOC - June 2020",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 335,
        "name": "Penn State - WVB - June 2020",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 370,
        "name": "Penn State - XC - August 2020",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 457,
        "name": "Pilewicz 10.19-25",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 296,
        "name": "Pilot 12/16/19-2/9/20",
        "campus_id": 41,
        "receipt_required": null,
        "campus_name": "University of Florida"
      },
      {
        "id": 254,
        "name": "Pitt-2019-20 - $1500 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 256,
        "name": "Pitt-2019-20 - $642 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 226,
        "name": "Pitt-2019-20 - Men's Baseball",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 271,
        "name": "Pitt-2019-20 - Men's Basketball",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 229,
        "name": "Pitt-2019-20 - Men's Swimming & Diving",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 230,
        "name": "Pitt-2019-20 - Men's Track & Field",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 231,
        "name": "Pitt-2019-20 - Men's Wrestling",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 240,
        "name": "Pitt-2019-20 - Non-Swimmers - 40pts",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 261,
        "name": "Pitt-2019-20 - Nutrition",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 241,
        "name": "Pitt-2019-20 - Swimmers - 30pts",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 272,
        "name": "Pitt-2019-20 Women's Basketball",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 233,
        "name": "Pitt-2019-20 - Women's Gymnastics",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 235,
        "name": "Pitt-2019-20 - Women's Softball",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 236,
        "name": "Pitt-2019-20 - Women's Swimming & Diving",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 239,
        "name": "Pitt-2019-20 - Women's Track & Field",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 238,
        "name": "Pitt-2019-20 - Women's Volleyball",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 255,
        "name": "Pitt-2020-21 - $1000 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 407,
        "name": "Pitt-2020-21 $200 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 406,
        "name": "Pitt-2020-21 $250 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 410,
        "name": "Pitt-2020-21 $300 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 408,
        "name": "Pitt-2020-21 $500 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 409,
        "name": "Pitt-2020-21 $600 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 357,
        "name": "Pitt-2020-21 - MBB - 15Day",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 227,
        "name": "Pitt-2020-21 - Men's Cross Country",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 228,
        "name": "Pitt-2020-21 - Men's Soccer",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 340,
        "name": "Pitt-2020-21 - NON-Swimmers - 40pts",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 356,
        "name": "Pitt-2020-21 - PerDiem - Swimming",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 339,
        "name": "Pitt-2020-21 - Swimmers - 30pts",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 371,
        "name": "Pitt-2020-21 - WBB - 15Day",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 232,
        "name": "Pitt-2020-21 - Women's Cross Country",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 234,
        "name": "Pitt-2020-21 - Women's Soccer",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 159,
        "name": "Pitt - Admin",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 123,
        "name": "Pitt - Baseball",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 103,
        "name": "Pitt - BB ($500 spring 2019)",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 109,
        "name": "Pitt - FB",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 404,
        "name": "Pitt FB 2020-2021 $1500 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 306,
        "name": "Pitt-FB-Abanikanda",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 121,
        "name": "Pitt - FB - Baldonado",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 152,
        "name": "Pitt - FB - Bentley",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 142,
        "name": "Pitt - FB - Beville",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 164,
        "name": "PITT-FB-Beville-19-05-03",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 153,
        "name": "Pitt - FB - Carter",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 143,
        "name": "Pitt - FB - Danielson",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 158,
        "name": "Pitt - FB - Davis",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 172,
        "name": "PITT-FB-Davis-19-05-03",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 147,
        "name": "Pitt - FB - Dick",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 155,
        "name": "Pitt - FB - Green",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 165,
        "name": "PITT-FB-Green-19-05-03",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 156,
        "name": "Pitt - FB - Hallett",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 166,
        "name": "PITT-FB-Hallett-19-05-03",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 171,
        "name": "PITT-FB-Jacques-19-05-03",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 174,
        "name": "Pitt-FB-June2019-350",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 144,
        "name": "Pitt - FB - Kradel",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 167,
        "name": "PITT-FB-Kradel-19-05-03",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 157,
        "name": "Pitt - FB - Louis",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 146,
        "name": "Pitt - FB - Mimes",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 168,
        "name": "PITT-FB-Mimes-19-05-03",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 140,
        "name": "Pitt - FB - Morgan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 141,
        "name": "Pitt - FB - Oneil",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 150,
        "name": "Pitt - FB - Palmer",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 169,
        "name": "PITT-FB-Palmer-19-05-03",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 151,
        "name": "Pitt - FB - Patti",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 170,
        "name": "PITT-FB-Patti-19-05-03",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 149,
        "name": "Pitt - FB - Salahuddin",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 145,
        "name": "Pitt - FB - Tallandier",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 287,
        "name": "Pitt - FB - W Davis",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 148,
        "name": "Pitt - FB - Williams",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 154,
        "name": "Pitt - FB - Zubovic",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 163,
        "name": "PITT-FB-Zubovic-19-05-03",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 175,
        "name": "Pitt-MBB-19-05-15to17",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 48,
        "name": "Pitt - Non-swimmers",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 454,
        "name": "Pitt - Quarantine 2020",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 120,
        "name": "Pitt - Softball",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 299,
        "name": "Pitt-Spring20 - $1000 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 300,
        "name": "Pitt-Spring20 - $1500 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 302,
        "name": "Pitt-Spring20 - $500 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 301,
        "name": "Pitt-Spring20 - $642 Meal Plan",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 47,
        "name": "Pitt - Swimmers",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 117,
        "name": "Pitt - TR Monday",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 118,
        "name": "Pitt - TR Sunday",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 116,
        "name": "Pitt - TR Tues Wed",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 288,
        "name": "Pitt-WBB-BrownHarrisIgbokwe",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 184,
        "name": "Pitt-WBB-July2019",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 162,
        "name": "Pitt-WBB-Knight",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 110,
        "name": "Pitt - WBB - OLD",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 161,
        "name": "Pitt-WBB-Prapa",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 419,
        "name": "Pitt - Women's Volleyball 2020-21",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 453,
        "name": "PSU 10/2 No Acct Yet",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 415,
        "name": "PSU - Men's Track & Field",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 416,
        "name": "PSU - Women's Track & Field",
        "campus_id": 58,
        "receipt_required": null,
        "campus_name": "Penn State"
      },
      {
        "id": 124,
        "name": "Purdue - Cheerleading",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 382,
        "name": "Purdue - GA Women's Volleyball",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 319,
        "name": "Purdue - May 2020 - VB",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 136,
        "name": "Purdue - Men's Wrestling",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 345,
        "name": "Purdue - Summer 2020 - FB",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 346,
        "name": "Purdue - Summer 2020 - MBB",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 320,
        "name": "Purdue - Summer 2020 - Standard",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 347,
        "name": "Purdue - Summer 2020 - WBB",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 177,
        "name": "Purdue - Summer - 30wk",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 176,
        "name": "Purdue - Summer Football - 50wk",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 253,
        "name": "SMU - Football",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 325,
        "name": "SMU - Football Fall 2020",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 276,
        "name": "SMU - Football - Partial List - 21Sept",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 304,
        "name": "SMU - Football Spring 2020",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 326,
        "name": "SMU - MBB",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 365,
        "name": "SMU - MSOC",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 292,
        "name": "SMU - TGiving Staff",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 328,
        "name": "SMU - WBB",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 364,
        "name": "SMU - WSOC",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 366,
        "name": "SMU - WSOC - 46 8/3-8/5",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 363,
        "name": "SMU - WVB",
        "campus_id": 82,
        "receipt_required": null,
        "campus_name": "SMU"
      },
      {
        "id": 83,
        "name": "Softball",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 119,
        "name": "Spring 2019",
        "campus_id": 26,
        "receipt_required": null,
        "campus_name": "Colorado State"
      },
      {
        "id": 303,
        "name": "Spring 2020",
        "campus_id": 26,
        "receipt_required": null,
        "campus_name": "Colorado State"
      },
      {
        "id": 418,
        "name": "TEST ATHLETE RECEIPT",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 211,
        "name": "Test Team",
        "campus_id": 77,
        "receipt_required": null,
        "campus_name": "University of Texas"
      },
      {
        "id": 56,
        "name": "Test Team",
        "campus_id": 48,
        "receipt_required": null,
        "campus_name": "Boise State"
      },
      {
        "id": 405,
        "name": "Texas State - Fall 2020 Non Travel",
        "campus_id": 102,
        "receipt_required": null,
        "campus_name": "Texas State"
      },
      {
        "id": 316,
        "name": "Texas Tech-2019-20 - April2020 - April20-26",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 317,
        "name": "Texas Tech-2019-20 - April2020 - April20-26-2",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 315,
        "name": "Texas Tech-2019-20 - April2020 - April7-12",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 307,
        "name": "Texas Tech-2019-20 - March2020",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 270,
        "name": "Texas Tech-2019-20 - MTE",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 260,
        "name": "Texas Tech-2019-20 - WTE",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 417,
        "name": "Texas Tech - Fall 2020 WVB",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 330,
        "name": "Texas Tech - FB - June2020 - 13-23",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 331,
        "name": "Texas Tech - FB - June2020 - 13-27",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 185,
        "name": "Texas Tech - Football - Summer",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 193,
        "name": "Texas Tech - Football - Summer - Blue Sky Restricted",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 324,
        "name": "Texas Tech - MBB - Summer 2020",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 188,
        "name": "Texas Tech - Men's Basketball 2020-21",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 45,
        "name": "Texas Tech - Men's Tennis",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 329,
        "name": "Texas Tech - Quarantine 2020",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 332,
        "name": "Texas Tech - TR - June 2020 - 14-28",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 42,
        "name": "Texas Tech - Women's Basketball",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 43,
        "name": "Texas Tech - Women's Soccer",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 44,
        "name": "Texas Tech - Women's Tennis",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 367,
        "name": "Texas Tech - WSOC - Aug2020",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 368,
        "name": "Texas Tech - WVB - Aug2020",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 402,
        "name": "Texas Tech - XC Incomers - 2020",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 401,
        "name": "Texas Tech - XC Returners - 2020",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 284,
        "name": "Toledo 2019-20 Football",
        "campus_id": 81,
        "receipt_required": null,
        "campus_name": "Toledo"
      },
      {
        "id": 219,
        "name": "Toledo - Admin",
        "campus_id": 81,
        "receipt_required": null,
        "campus_name": "Toledo"
      },
      {
        "id": 294,
        "name": "Toledo - FB - 15F40S",
        "campus_id": 81,
        "receipt_required": null,
        "campus_name": "Toledo"
      },
      {
        "id": 293,
        "name": "Toledo - FB - 40FS",
        "campus_id": 81,
        "receipt_required": null,
        "campus_name": "Toledo"
      },
      {
        "id": 327,
        "name": "Toledo - Football - Summer 2020",
        "campus_id": 81,
        "receipt_required": null,
        "campus_name": "Toledo"
      },
      {
        "id": 354,
        "name": "Toledo - Football - Summer 2020 - 2",
        "campus_id": 81,
        "receipt_required": null,
        "campus_name": "Toledo"
      },
      {
        "id": 411,
        "name": "TTU - Men's Tennis FAll 2020",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 412,
        "name": "TTU - Women's Tennis Fall 2020",
        "campus_id": 53,
        "receipt_required": null,
        "campus_name": "Texas Tech"
      },
      {
        "id": 352,
        "name": "TXState - Football 2020",
        "campus_id": 102,
        "receipt_required": null,
        "campus_name": "Texas State"
      },
      {
        "id": 286,
        "name": "UC Davis - 2019-20 - $36 Women's Basketball",
        "campus_id": 61,
        "receipt_required": null,
        "campus_name": "UC Davis"
      },
      {
        "id": 285,
        "name": "UC Davis - 2019-20 - $56 Women's Basketball",
        "campus_id": 61,
        "receipt_required": null,
        "campus_name": "UC Davis"
      },
      {
        "id": 266,
        "name": "UC Davis - Equestrian",
        "campus_id": 61,
        "receipt_required": null,
        "campus_name": "UC Davis"
      },
      {
        "id": 246,
        "name": "UC Davis - Water Polo",
        "campus_id": 61,
        "receipt_required": null,
        "campus_name": "UC Davis"
      },
      {
        "id": 54,
        "name": "UC Davis - Women's Basketball",
        "campus_id": 61,
        "receipt_required": null,
        "campus_name": "UC Davis"
      },
      {
        "id": 242,
        "name": "UC Davis - Women's Volleyball",
        "campus_id": 61,
        "receipt_required": null,
        "campus_name": "UC Davis"
      },
      {
        "id": 244,
        "name": "UNC Fueling Station",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 212,
        "name": "UNLV - Test Team",
        "campus_id": 78,
        "receipt_required": null,
        "campus_name": "UNLV (Coming Soon)"
      },
      {
        "id": 53,
        "name": "UNR - Football",
        "campus_id": 68,
        "receipt_required": null,
        "campus_name": "Nevada"
      },
      {
        "id": 224,
        "name": "UNR - Football - Fall 2019",
        "campus_id": 68,
        "receipt_required": null,
        "campus_name": "Nevada"
      },
      {
        "id": 209,
        "name": "UNR - Football - June Adds",
        "campus_id": 68,
        "receipt_required": null,
        "campus_name": "Nevada"
      },
      {
        "id": 114,
        "name": "Unused 1",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 122,
        "name": "Unused 2",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 115,
        "name": "Unused 3",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 273,
        "name": "Unused 4",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 38,
        "name": "Unused 5",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 308,
        "name": "Unused 6",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 314,
        "name": "Unused 7",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 139,
        "name": "Unused 8",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 318,
        "name": "Unused 9",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 423,
        "name": "USNA Baseball",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 428,
        "name": "USNA Football",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 431,
        "name": "USNA Gymnastics",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 438,
        "name": "USNA Intercollegiate Sailing",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 424,
        "name": "USNA Men's Basketball",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 426,
        "name": "USNA Men's Cross Country",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 429,
        "name": "USNA Men's Golf",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 435,
        "name": "USNA Men's Heavyweight Rowing",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 432,
        "name": "USNA Men's Lacrosse",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 436,
        "name": "USNA Men's Lightweight Rowing",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 434,
        "name": "USNA Men's Rifle",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 440,
        "name": "USNA Men's Soccer",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 444,
        "name": "USNA Men's Swimming & Diving",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 447,
        "name": "USNA Men's Tennis",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 449,
        "name": "USNA Men's Track & Field",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 439,
        "name": "USNA Offshore Sailing",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 446,
        "name": "USNA Softball",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 442,
        "name": "USNA Sprint Football",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 443,
        "name": "USNA Squash",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 422,
        "name": "USNA Volleyball",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 451,
        "name": "USNA Water Polo",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 425,
        "name": "USNA Women's Basketball",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 427,
        "name": "USNA Women's Cross Country",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 430,
        "name": "USNA Women's Golf",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 433,
        "name": "USNA Women's Lacrosse",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 437,
        "name": "USNA Women's Rowing",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 441,
        "name": "USNA Women's Soccer",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 445,
        "name": "USNA Women's Swimming & Diving",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 448,
        "name": "USNA Women's Tennis",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 450,
        "name": "USNA Women's Track & Field",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 452,
        "name": "USNA Wrestling",
        "campus_id": 106,
        "receipt_required": null,
        "campus_name": "U.S. Naval Academy"
      },
      {
        "id": 41,
        "name": "Women's Basketball",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 65,
        "name": "Women's Basketball",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 58,
        "name": "Women's Basketball",
        "campus_id": 70,
        "receipt_required": null,
        "campus_name": "Kentucky"
      },
      {
        "id": 73,
        "name": "Women's Fencing",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 77,
        "name": "Women's Golf",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 132,
        "name": "Women's Golf",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 78,
        "name": "Women's Gymnastics",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 79,
        "name": "Women's Lacrosse",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 80,
        "name": "Women's Rowing",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 133,
        "name": "Women's Soccer",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 82,
        "name": "Women's Soccer",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 134,
        "name": "Women's Softball",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 135,
        "name": "Women's Swimming and Diving",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 85,
        "name": "Women's Swimming & Diving",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 137,
        "name": "Women's Tennis",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 87,
        "name": "Women's Tennis",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 138,
        "name": "Women's Track & Field",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 70,
        "name": "Women's Track & Field",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 237,
        "name": "Women's Track & Field",
        "campus_id": 63,
        "receipt_required": null,
        "campus_name": "Pitt"
      },
      {
        "id": 39,
        "name": "Women's Volleyball",
        "campus_id": 39,
        "receipt_required": null,
        "campus_name": "Purdue"
      },
      {
        "id": 88,
        "name": "Women's Volleyball",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 67,
        "name": "XX",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 68,
        "name": "XX2",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 71,
        "name": "XX3",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      },
      {
        "id": 72,
        "name": "XX4",
        "campus_id": 72,
        "receipt_required": null,
        "campus_name": "UNC Chapel Hill"
      }
    ]
  }
  }

  const en_PROD_pero_NO_en_DEV = campusPROD.data.campuses.filter((cp: any) => {
    return campusDEV.data.campuses.every((cd: any) => cd.moocho_campus_id !== cp.moocho_campus_id || cd.name !== cp.name)
  })

      res.send(en_PROD_pero_NO_en_DEV);
      //throw new HttpException(500, "Internal server error");
    } catch (error) {
      next(error);
    }
  };

  public test = async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.debug('test logger');
      res.send('llego a test');
    } catch (error) {
      next(error);
    }
  };
}
