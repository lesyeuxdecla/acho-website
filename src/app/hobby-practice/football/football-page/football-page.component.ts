import { Component } from '@angular/core';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ActionBarComponent } from '../../action-bar/action-bar.component';
import { FilterComponent } from '../../filter/filter.component';
import { MapsComponent } from "../../maps/maps.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-football-page',
  standalone: true,
  imports: [NavblueComponent, ActionBarComponent, FilterComponent, MapsComponent, FooterComponent],
  templateUrl: './football-page.component.html',
  styleUrl: './football-page.component.css'
})
export class FootballPageComponent {

}
