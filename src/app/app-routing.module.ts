import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchUserProfileComponent } from './search-user-profile/search-user-profile.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
    { path: '', redirectTo: 'SearchUserProfile', pathMatch: 'full' },
    {
        path: 'SearchUserProfile',
        component: SearchUserProfileComponent
    }, {
        path: 'Page',
        component: PageComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }