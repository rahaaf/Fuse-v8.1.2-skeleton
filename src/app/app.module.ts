import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { MaterialModule } from 'app/material/material.module';
import { ToolbarComponent } from 'app/toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { FakeDbService } from './fake-db/fake-db.service';

// Firebase services + enviorment module
import { AngularFireModule ,FirebaseOptionsToken} from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment.prod';
import { AuthService } from './services/auth.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { EcommerceProductService } from './admin/e-commerce/product/product.service';
import {MatBadgeModule} from '@angular/material/badge';
import { CartModule } from './cart/cart.module';
import { MatDialogModule } from '@angular/material/dialog';





const appRoutes: Routes = [
    {
        path: 'home', loadChildren: () =>
            import('./home/home/home.module').then((m) => m.HomeModule)
    },
   
    {
        path: 'products', loadChildren: () =>
            import('./prudects/products/products.module').then((p) => p.ProductsModule)
    },
    {
        path: 'blogs', loadChildren: () =>
            import('./blogs/academy.module').then((b) => b.AcademyModule)
    },
    {
        path: 'faq', loadChildren: () =>
            import('./faq/faq copy/faq.module').then((f) => f.FaqModule)
    },

    {
        path: 'contentus', loadChildren: () =>
            import('./contentus/contentus.module').then((c) => c.ContentusModule)
    },
    {
        path: 'auth', loadChildren: () =>
            import('./auth/auth/auth.module').then((a) => a.AuthModule)
    },
    {
        path: 'dashboard', loadChildren: () =>
            import('./admin/dashborad/dashborad.module').then((u) => u.DashboradModule)
    },
    {
        path: 'dashboardd', loadChildren: () =>
            import('./store-manag/dashborad/dashborad.module').then((d) => d.DashboradModule)
    },
    {
        path: 'dashboard-delevary', loadChildren: () =>
            import('./delevary-manag/dashborad/dashborad.module').then((de) => de.DashboradModule)
    },
    {
        path: 'user-order', loadChildren: () =>
            import('./user-orders/dashborad/dashborad.module').then((de) => de.DashboradModule)
    },
    {
        path: 'cart', loadChildren: () =>
            import('./cart/cart.module').then((c) => c.CartModule)
    },
    {
        path: '**',
        redirectTo: 'home',
    },

];

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent,
      
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        MatTabsModule,
        RouterModule.forRoot(appRoutes),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,
        MatDialogModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        CartModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        FormsModule,
    ],
    providers:[AuthService,EcommerceProductService],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
