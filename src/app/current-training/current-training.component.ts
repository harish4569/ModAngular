import { Component, OnInit } from '@angular/core';
import { Training } from '../Model/training';
import { CmTrainingService } from '../cmtraining.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  otrainings: Training[];
 
  constructor(private trainingService: CmTrainingService) {
  }
 
  ngOnInit() {
    this.trainingService.findAll().subscribe(data => {
      this.otrainings = data;
    });
  }
}
