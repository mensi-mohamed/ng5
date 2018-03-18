import {Component, ViewChild} from "@angular/core";
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";
import { FormControl } from '@angular/forms';
import { AppService } from '../app-service.service'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss'],
  providers: [AppService]
})
export class AirportsComponent {

    @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;


   public group = [
        CreateNewAutocompleteGroup(
            'Search / choose in / from list',
            'completer',
            [
                {title: 'Option 1', id: '1'},
                {title: 'Option 2', id: '2'},
                {title: 'Option 3', id: '3'},
                {title: 'Option 4', id: '4'},
                {title: 'Option 5', id: '5'},
            ],
            {titleKey: 'title', childrenKey: null}
        ),
    ];
   searchTerm : FormControl = new FormControl();
   searchResult = [];

    constructor(private service: AppService) {
    this.searchTerm.valueChanges
        .subscribe(data => {
            this.service.search_word(data).subscribe(response =>{
                this.searchResult = response
            })
        })
 
    }
 
    /**
     *
     * @param item
     * @constructor
     */
    Selected(item: SelectedAutocompleteItem) {
        console.log(item.item.title);
    }


}
