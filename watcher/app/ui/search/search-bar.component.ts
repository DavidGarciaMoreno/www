import { Component } from '@angular/core';
import { NavService } from '../../shared/nav.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'tv-search-bar',
  templateUrl: 'search-bar.template.html'
})
export class SearchBarComponent {
  searchForm: FormGroup;

  constructor(private _fb: FormBuilder, 
              private _router: Router,
              private _navService: NavService) {}

  ngOnInit() {
    this.searchForm = this._fb.group({
      query: ['', [Validators.required, Validators.minLength(2)]]
    });    
  }

  search({value}: {value: any}) {
    console.log(value.query);
    this._navService.changeNav(value.query);
    this.searchForm.reset();
    this._router.navigate(['/search']);
  }
}