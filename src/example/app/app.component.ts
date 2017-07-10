import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./app/tpl/app.tpl.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
