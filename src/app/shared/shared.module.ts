import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductsService } from './services/products.service';

const internalModules = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule
];

const externalModules = [
  MatToolbarModule,
  MatSidenavModule,
  FlexLayoutModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [ProductCardComponent],
  imports: internalModules,
  exports: [
    ...internalModules,
    ...externalModules,
    ProductCardComponent
  ],

})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return  {
      ngModule: SharedModule,
      providers: [
        ProductsService
      ]
    }
  }
}
