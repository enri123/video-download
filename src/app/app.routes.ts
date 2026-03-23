import { Routes } from '@angular/router';
import { Home } from './home/home'
import { DownladedVideos } from './downladed-videos/downladed-videos'

export const routes: Routes = [
    {
        path: '',  component: Home, pathMatch: 'full'
    },
    {
        path: 'downloadedVideos', component: DownladedVideos
    }
];
