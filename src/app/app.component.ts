import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  public displayTime: string;
  //private timeIntervalId: number;
  private subscription: Subscription;

  public ngOnInit(): void {
    // this.timeIntervalId = window.setInterval(() => {
    //   this.setTime();
    // }, 1000);
    const source = interval(1000);
    this.subscription = source.subscribe(() => {
      this.setTime();
    });
  }

  public ngOnDestroy(): void {
    //window.clearInterval(this.timeIntervalId);
    this.subscription.unsubscribe();
  }

  private setTime(): void {
    const now = new Date();
    this.displayTime =
      this.addLeadingZero(now.getHours()) +
      ":" +
      this.addLeadingZero(now.getMinutes()) +
      ":" +
      this.addLeadingZero(now.getSeconds());
  }

  private addLeadingZero(nr: number): string {
    let ret = "";
    if (nr < 10) {
      ret = "0";
    }

    ret += nr.toString();
    return ret;
  }
}
