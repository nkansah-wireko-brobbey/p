import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private progress = signal(0)

  constructor() { }

  updateProgress(increaseBy: number){
    this.progress.update((prev)=>prev+increaseBy)
  }

  getProgress(){
    return this.progress;
  }
}
