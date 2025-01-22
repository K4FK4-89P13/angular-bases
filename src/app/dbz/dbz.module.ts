import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddCharacterComponent } from "./components/add-character/add-character.component";
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from "./pages/main-page.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AddCharacterComponent,
        ListComponent,
        MainPageComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
})

export class DbzModule {}