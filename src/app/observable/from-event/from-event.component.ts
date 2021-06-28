import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/desgin-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {


  constructor(private designUtility: DesignUtilityService) { }
  @ViewChild('addBtn') addBtn!: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let counter = 1;

    fromEvent(this.addBtn.nativeElement, 'click').subscribe(event => {
      let countVal = 'Video ' + counter++;
      console.log("fromEvent ~ countVal", countVal)
      this.designUtility.print(countVal, 'elContainer');
      this.designUtility.print(countVal, 'elContainer2');
    });
  }

}
