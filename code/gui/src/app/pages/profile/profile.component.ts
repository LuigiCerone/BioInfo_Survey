import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatPaginator } from '@angular/material';
import { AuthenticationService } from '../../services/authentication.service';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { SectionA1 } from '../../model/SectionA1';
import { Questionnaire } from '../../model/Questionnaire';


@Component({
  selector: 'app-profile',
  styleUrls: ['profile.component.css'],
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit{
  displayedColumns: string[] = ['subject', 'dbCodeNumber', 'username', 'completed', 'actions'];

  private data: Questionnaire[];
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild('viewerDialog', {static: false}) viewerDialog: TemplateRef<any>;
  private selectedQuestionnaire: Questionnaire;

  constructor(private authenticationService: AuthenticationService,
              private questionnaireService: QuestionnaireService,
              private dialog: MatDialog) {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    // Get all questionnaires.
    // TODO Pagination.
    this.questionnaireService.getAllQuestionnaire().subscribe( (result: Array<Questionnaire>) => {
      console.log(result);
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = this.filterPredicate;
    });
    // this.table.renderRows();
  }

  filterPredicate(data: Questionnaire, filter): boolean {
    // tslint:disable-next-line:max-line-length
      return data.ownerUsername.toLowerCase().includes(filter) ||
        data.a1.subject.toLowerCase().includes(filter) ||
        data.a1.dbCodeNumber.toLowerCase().includes(filter);
  }

  showQuestionnare(element: Questionnaire) {
    this.selectedQuestionnaire = element;

    this.dialog.open(this.viewerDialog);
  }
}
