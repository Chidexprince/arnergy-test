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
  public error = '';
  public state = '';

  constructor(public footballDataService: FootballDataService) { }

  ngOnInit() {
    this.getAllCompetitions();
  }


  getAllCompetitions() {
    this.footballDataService.getAllCompetition()
      .subscribe(data => {
        this.competitions = [];

        if (data.count > 0) {
          const competitionArray = data.competitions;
          competitionArray.forEach(c => {
            const competition = new Competition();
            competition.mapToCompetition(c);
            this.competitions.push(competition);
          });
        }
      }, error1 => {
        this.errorHandler(error1);
      })
  }

  getSelectedCompetition(competition) {
    this.competitionId = competition.value;
    this.details = '';
  }


  getCompetitionDetails() {
    this.preloader = true;
    if (this.details === 'Standings') {
      this.standings = [];
      // Get standings based on competition selected
      this.footballDataService.getStandingsPerCompetition(this.competitionId)
        .subscribe(data => {
          this.preloader = false;
          // get competition details
          if (data.competition) {
            this.competition.mapToCompetition(data.competition);
          }

          // Get standings

          if (data.standings.length > 0) {
            const standingsArray = data.standings;
            standingsArray.forEach(s => {
              const standing = new Standings();
              standing.mapToStandings(s);
              this.standings.push(standing)
            });
            this.error = '';
            this.state = 'Data available';
          }
        }, error1 => {
          this.preloader = false;
          this.state = 'No Data available';
          this.error = error1.error.message;
          this.errorHandler(error1);
        })
    }

    if (this.details === 'Matches') {
      // Get matches based on competition selected
      this.matches = [];
      this.footballDataService.getMatchesPerCompetition(this.competitionId)
        .subscribe(data => {
          this.preloader = false;
          // get competition details
          if (data.competition) {
            this.competition.mapToCompetition(data.competition);
          }

          // get match details
          if (data.matches.length > 0) {
            const matchesArray = data.matches;
            matchesArray.forEach(m => {
              const match = new Matches();
              match.mapToMatches(m);
              this.matches.push(match)
            });
            this.error = '';
            this.state = 'Data available';
          }
        }, error1 => {
          this.preloader = false;
          this.state = 'No Data available';
          this.error = error1.error.message;
          this.errorHandler(error1);
        })
    }



  }

  // Error Handling
  errorHandler(error) {
    return GeneralUtil.errorHandler(error)
  }

}
