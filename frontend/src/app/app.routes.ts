import { Routes } from '@angular/router';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { MyeventComponent } from './myevent/myevent.component';
import { EventsComponent } from './events/events.component';
import { GaleriesComponent } from './galeries/galeries.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { PastEventComponent } from './past-event/past-event.component';
import { CurrentEventComponent } from './current-event/current-event.component';
import { PastGalleryComponent } from './past-gallery/past-gallery.component';
import { CurrentGalleryComponent } from './current-gallery/current-gallery.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo :'login',
        pathMatch:'full'
    },
    
    {
        path:'login',
        component : LoginComponent
    },
    {
        path:'past-event',
        component : PastEventComponent
    },
    {
        path:'past-gallery',
        component : PastGalleryComponent
    },
    {
        path:'current-gallery',
        component : CurrentGalleryComponent
    },
    {
        path:'current-event',
        component : CurrentEventComponent
    },
    {
        path:'d',
        component : DasboardComponent
    },
    {
        path:'',
        component : LayoutComponent,
        children: [
            {
                path : 'profile',
                component:ProfileComponent,
                canActivate :[authGuard]
                
            
            },
            {
                path:'register',
                component: RegisterComponent,
                canActivate :[authGuard]
            }
        ]
            
    },
    {
        path:'Home',
        component : HomeComponent,
    },
    {
        path:'Events',
        component: EventsComponent,
    },
    {
        path:'Galeries',
        component: GaleriesComponent,
    },
    {
        path:'Our-Partners',
        component: OurPartnersComponent,
    },
    {
        path:'seller-auth-component',
        component: SellerAuthComponent,
    },
    {
        path:'Contact',
        component: ContactComponent,
    },
    
    {
        path:'myevents',
        component: MyeventComponent,
    },
    
];
