import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorageService } from './services/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'progress-bar-with-signals';
  
  private storageService = inject(StorageService)

  private interval = 2000;

  private IntervalId : any

  private incrementBy = 5

  progressValue = this.storageService.getProgress();
  
  
  ngOnInit(): void {
    this.IntervalId = setInterval(() => {
      this.storageService.addProgress(this.incrementBy)

      if(this.progressValue() >= 100){
        clearInterval(this.IntervalId)
      }

    }, this.interval);
  }

  ngOnDestroy(): void {
      clearInterval(this.IntervalId)
  }
}
