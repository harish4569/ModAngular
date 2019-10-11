import { Component, OnInit } from '@angular/core';
import { Training } from '../Model/training';
import { CmTrainingService } from '../cmtraining.service';

@Component({
  selector: 'app-tcompleted-training',
  templateUrl: './tcompleted-training.component.html',
  styleUrls: ['./tcompleted-training.component.css']
})
export class TcompletedTrainingComponent implements OnInit {

  cmtrainings: Training[];
 
  constructor(private trainingService: CmTrainingService) {
  }
 
  ngOnInit() {
    this.trainingService.findAll().subscribe(data => {
      this.cmtrainings = data;
    });
  }
}
