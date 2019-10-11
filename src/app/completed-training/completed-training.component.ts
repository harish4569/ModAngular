import { Component, OnInit } from '@angular/core';
import { Training } from '../Model/training';
import { CmTrainingService } from '../cmtraining.service';

@Component({
  selector: 'app-completed-training',
  templateUrl: './completed-training.component.html',
  styleUrls: ['./completed-training.component.css']
})
export class CompletedTrainingComponent implements OnInit {
  cmtrainings: Training[];
 
  constructor(private trainingService: CmTrainingService) {
  }
 
  ngOnInit() {
    this.trainingService.findAll().subscribe(data => {
      this.cmtrainings = data;
    });
  }
}
