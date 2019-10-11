import { Component, OnInit } from '@angular/core';
import { Training } from '../Model/training';
import { CmTrainingService } from '../cmtraining.service';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrls: ['./ongoing.component.css']
})
export class OngoingComponent implements OnInit {
  trainings: Training[];
 
  constructor(private trainingService: CmTrainingService) {
  }
 
  ngOnInit() {
    this.trainingService.findAll().subscribe(data => {
      this.trainings = data;
    });
  }

}
