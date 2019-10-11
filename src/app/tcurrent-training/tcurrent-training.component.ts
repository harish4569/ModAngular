import { Component, OnInit } from '@angular/core';
import { Training } from '../Model/training';
import { CmTrainingService } from '../cmtraining.service';

@Component({
  selector: 'app-tcurrent-training',
  templateUrl: './tcurrent-training.component.html',
  styleUrls: ['./tcurrent-training.component.css']
})
export class TcurrentTrainingComponent implements OnInit {
  otrainings: Training[];
 
  constructor(private trainingService: CmTrainingService) {
  }
 
  ngOnInit() {
    this.trainingService.findAll().subscribe(data => {
      this.otrainings = data;
    });
  }
}
