import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Projects } from './Components/projects/projects';
import { Blog } from './Components/blog/blog';
import { Resume } from './Components/resume/resume';
import { Contact } from './Components/contact/contact';
import { About } from './Components/about/about';
import { TechStack } from './Components/tech-stack/tech-stack';

export const routes: Routes = [
  { path: '', component: Home }, // Landing page
  { path: 'home', component: Home },
  { path: 'projects', component: Projects },
  { path: 'blog', component: Blog },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  { path: 'tech-stack', component: TechStack },
  { path: '**', redirectTo: '' }
]; // 404 fallback
