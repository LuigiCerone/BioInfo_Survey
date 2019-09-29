import {Exporter, Options} from 'mat-table-exporter';
import { Questionnaire } from '../../model/Questionnaire';
import * as JsPDF from 'jspdf';
import 'jspdf-autotable';

export class CustomExporter implements Exporter<Options> {
  data: Questionnaire[];

  constructor(msg: Questionnaire[]) {
    this.data = msg;
  }

  export(rows: Array<any>, options?: Options) {
    rows.shift();
    // console.log(rows);
    console.log(this.data);

    const doc = new JsPDF();
    const col = ['Field', 'Value'];
    const result = [];

    for (let i = 0; i < this.data.length; i++) {
      const questionnaire: Questionnaire = this.data[i];
      const flatQuestionnaire = this.flattern(questionnaire);
      for (const key in flatQuestionnaire) {
        const temp = [key, flatQuestionnaire[key]];
        result.push(temp);
      }
      if (i !== this.data.length){
        result.push([]);
        result.push([]);
        result.push(['QUESTIONNAIRE', 'QUESTIONNAIRE']);
      }
    }

    doc.autoTable(col, result);
    doc.save(`query.pdf`);

  }

  flattern(obj) {
    const flattened = {};

    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(flattened, this.flattern(obj[key]));
      } else {
        flattened[key] = obj[key];
      }
    });

    return flattened;
  }
}


// var item = {
//   "Name" : "XYZ",
//   "Age" : "22",
//   "Gender" : "Male"
// };
// var doc = new jsPDF();
// var col = ["Details", "Values"];
// var rows = [];
//
// for(var key in item){
//   var temp = [key, item[key]];
//   rows.push(temp);
// }
//
// doc.autoTable(col, rows);
//
// doc.save('Test.pdf');
