import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];

  swService: StarWarsService;


  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.value);
    // if (submittedForm.value.name === '' || submittedForm.value.side === '') {
    //   console.log('err');
    // } else {
    //   this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
    // }
    if (submittedForm.invalid) {
      return;
    }
    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}
