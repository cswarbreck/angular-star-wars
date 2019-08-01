import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { StarWarsService } from '../../src/star-wars.service';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    TabsComponent,
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
