import { Component, OnInit } from '@angular/core';
import { FootballDataService } from './../../services/football-data.service';
import { Standings } from '../../models/standings';
import { Competition } from './../../models/competition';
import { Matches } from './../../models/matches';
import { Season } from './../../models/season';
import { GeneralUtil } from 'src/app/util/general-util';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {
  public competitions: Competition[] = [];
  public standings: Standings[] = [];
  public matches: Matches[] = [];
  public competitionId: number;
  public competition = new Competition();
  public season = new Season();
  public details = '';
  public preloader = false;

  constructor(public footballDataService: FootballDataService) { }

  ngOnInit() {
    /* this.getMatches(); */
    this.getAllCompetitions();
   /*  this.getSelectedMatches() */
  }

  getMatches() {
    this.footballDataService.getTodaysMatch()
      .subscribe(data => {
        console.log(data)

      })
  }

  getAllCompetitions() {
    this.footballDataService.getAllCompetition()
      .subscribe(data => {
        console.log(data)
        this.competitions = [];

        if (data.count > 0) {
          const competitionArray = data.competitions;
          competitionArray.forEach(c => {
            const competition = new Competition();
            competition.mapToCompetition(c);
            this.competitions.push(competition);
          });
          console.log(this.competitions)
        }
      }, error1 => {
        this.errorHandler(error1);
      })
  }

/*   getSelectedCompetition() {

    this.footballDataService.getStandingsPerCompetition(this.competitionId)
      .subscribe(data => {
        console.log(data)
        this.standings = [];
        if (data.standings.length > 0) {
          const standingsArray = data.standings;
          standingsArray.forEach(s => {
            const standing = new Standings();
            standing.mapToStandings(s);
            this.standings.push(standing)
          });
          console.log(this.standings)
        }
      }, error1 => {
        this.errorHandler(error1);
      })
  } */

  getCompetitionDetails() {
    this.preloader = true;
      if (this.details === 'Standings') {
        // Get standings based on competition selected
        this.footballDataService.getStandingsPerCompetition(this.competitionId)
          .subscribe(data => {
            this.preloader = false;
            // get competition details
            if (data.competition) {
              this.competition.mapToCompetition(data.competition);
            }

            // Get standings
            this.standings = [];
            if (data.standings.length > 0) {
              const standingsArray = data.standings;
              standingsArray.forEach(s => {
                const standing = new Standings();
                standing.mapToStandings(s);
                this.standings.push(standing)
              });
              console.log(this.standings)
            }
          }, error1 => {
            this.preloader = false;
            this.errorHandler(error1);
          })
      }

      if (this.details === 'Matches') {
        // Get matches based on competition selected
        this.footballDataService.getMatchesPerCompetition(this.competitionId)
        .subscribe(data => {
          this.preloader = false;
          // get competition details
          if (data.competition) {
            this.competition.mapToCompetition(data.competition);
          }

          // get match details
          this.matches = [];
          if (data.matches.length > 0) {
            const matchesArray = data.matches;
            matchesArray.forEach(m => {
              const match = new Matches();
              match.mapToMatches(m);
              this.matches.push(match)
            });
            console.log(this.matches)
          }
        }, error1 => {
          this.preloader = false;
          this.errorHandler(error1);
        })
      }



  }
/*   getSelectedMatches() {
    this.footballDataService.getMatchesPerCompetition(2021)
      .subscribe(data => {

        this.matches = [];
        if (data.matches.length > 0) {
          const matchesArray = data.matches;
          matchesArray.forEach(m => {
            const match = new Matches();
            match.mapToMatches(m);
            this.matches.push(match)
          });
          console.log(this.matches)
        }
      })
  } */

  // Error Handling
  errorHandler(error) {
    return GeneralUtil.errorHandler(error)
  }

}
